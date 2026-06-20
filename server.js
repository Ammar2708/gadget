/* global Buffer, process */
import { createServer } from "node:http";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const ORDERS_FILE = join(__dirname, "data", "orders.json");
const paymentMethods = new Set(["trustly", "paypal", "kustom", "klarna"]);
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "2013";

const moneyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

const send = (response, statusCode, body, contentType = "application/json") => {
  response.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
  });
  response.end(contentType === "application/json" ? JSON.stringify(body) : body);
};

const readJsonBody = async (request) => {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  return chunks.length
    ? JSON.parse(Buffer.concat(chunks).toString("utf8"))
    : {};
};

const readOrders = async () => {
  try {
    return JSON.parse(await readFile(ORDERS_FILE, "utf8"));
  } catch {
    return [];
  }
};

const writeOrders = async (orders) => {
  await mkdir(dirname(ORDERS_FILE), { recursive: true });
  await writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2));
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const parseCookies = (cookieHeader = "") =>
  Object.fromEntries(
    cookieHeader
      .split(";")
      .map((cookie) => cookie.trim().split("="))
      .filter(([key, value]) => key && value)
  );

const isAdminAuthenticated = (request) => {
  const cookies = parseCookies(request.headers.cookie);
  return cookies.rmg_admin === "authenticated";
};

const sendRedirect = (response, location) => {
  response.writeHead(302, {
    Location: location,
    "Cache-Control": "no-store",
  });
  response.end();
};

const sendAdminLogin = (response, message = "") => {
  const error = message
    ? `<div class="error">${escapeHtml(message)}</div>`
    : "";

  return send(
    response,
    200,
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Admin Login</title>
        <style>
          body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f5f6f8; color: #171a23; font-family: Arial, sans-serif; }
          main { width: min(420px, calc(100% - 32px)); background: #fff; border: 1px solid #e5e7eb; padding: 28px; box-shadow: 0 18px 45px rgba(15, 23, 42, .08); }
          h1 { margin: 0; font-size: 28px; }
          p { margin: 8px 0 24px; color: #626977; }
          label { display: grid; gap: 8px; margin-top: 16px; font-weight: 700; }
          input { height: 48px; border: 1px solid #d9dde3; padding: 0 14px; font-size: 15px; outline: none; }
          input:focus { border-color: #fb6433; }
          button { width: 100%; height: 50px; margin-top: 22px; border: 0; background: #fb6433; color: white; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; cursor: pointer; }
          .error { margin-top: 18px; border: 1px solid #fecaca; background: #fef2f2; color: #991b1b; padding: 12px; font-weight: 700; }
        </style>
      </head>
      <body>
        <main>
          <h1>Admin Login</h1>
          <p>Sign in to view Repair My Gadget orders.</p>
          <form method="post" action="/admin/login">
            <label>
              Username
              <input name="username" autocomplete="username" required />
            </label>
            <label>
              Password
              <input name="password" type="password" autocomplete="current-password" required />
            </label>
            <button type="submit">Login</button>
          </form>
          ${error}
        </main>
      </body>
    </html>`,
    "text/html"
  );
};

const readFormBody = async (request) => {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const form = new URLSearchParams(Buffer.concat(chunks).toString("utf8"));

  return {
    username: form.get("username") || "",
    password: form.get("password") || "",
  };
};

const normalizeItems = (items = []) =>
  items
    .filter((item) => item?.name && Number(item?.quantity) > 0)
    .map((item) => {
      const price = Number(item.priceValue || 0);

      return {
        id: String(item.id || ""),
        name: String(item.name),
        image: item.image || "",
        price,
        quantity: Number(item.quantity),
      };
    })
    .filter((item) => item.price > 0);

const getStats = (orders) => {
  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.totals?.total || 0),
    0
  );

  return {
    totalOrders: orders.length,
    totalRevenue,
    paymentPending: orders.filter(
      (order) => order.paymentStatus === "payment_pending"
    ).length,
    latestOrderAt: orders[0]?.createdAt || null,
  };
};

const createCheckoutOrder = async (payload) => {
  const customer = payload.customer || {};
  const items = normalizeItems(payload.items);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = Number(payload.totals?.total || subtotal);

  if (!customer.firstName || !customer.lastName || !customer.email) {
    return { error: "Please complete your name and email address." };
  }

  if (!customer.phone || !customer.address || !customer.city || !customer.postcode) {
    return { error: "Please complete your delivery details." };
  }

  if (!paymentMethods.has(payload.paymentMethod)) {
    return { error: "Please choose a valid payment method." };
  }

  if (!items.length || !Number.isFinite(total) || total <= 0) {
    return { error: "Your cart is empty." };
  }

  const orders = await readOrders();
  const order = {
    orderId: `RMG-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    customer: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      city: customer.city,
      postcode: customer.postcode,
      country: customer.country || "United Kingdom",
    },
    paymentMethod: payload.paymentMethod,
    paymentStatus: "payment_pending",
    shippingMethod: payload.shippingMethod || "free-shipping",
    orderNote: payload.orderNote || "",
    items,
    totals: {
      subtotal,
      shipping: 0,
      total,
      currency: "GBP",
    },
  };

  orders.unshift(order);
  await writeOrders(orders);

  return {
    order,
    stats: getStats(orders),
  };
};

const renderOrdersPage = (orders) => {
  const stats = getStats(orders);
  const rows = orders
    .map((order) => {
      const customerName = `${order.customer?.firstName || ""} ${
        order.customer?.lastName || ""
      }`.trim();
      const items = order.items
        .map((item) => `${item.quantity} x ${item.name}`)
        .join(", ");

      return `
        <tr>
          <td>${escapeHtml(order.orderId)}</td>
          <td>${escapeHtml(new Date(order.createdAt).toLocaleString("en-GB"))}</td>
          <td>${escapeHtml(customerName)}</td>
          <td>${escapeHtml(order.customer?.email)}</td>
          <td>${escapeHtml(items)}</td>
          <td>${escapeHtml(order.paymentMethod)}</td>
          <td>${moneyFormatter.format(Number(order.totals?.total || 0))}</td>
          <td><span>${escapeHtml(order.paymentStatus)}</span></td>
        </tr>
      `;
    })
    .join("");

  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Repair My Gadget Orders</title>
      <style>
        body { margin: 0; background: #f5f6f8; color: #171a23; font-family: Arial, sans-serif; }
        main { max-width: 1200px; margin: 0 auto; padding: 34px 22px; }
        header { display: flex; justify-content: space-between; gap: 20px; align-items: end; margin-bottom: 24px; }
        h1 { margin: 0; font-size: 34px; }
        p { margin: 8px 0 0; color: #626977; }
        .stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-bottom: 22px; }
        .stat { background: white; border: 1px solid #e5e7eb; padding: 20px; }
        .stat strong { display: block; font-size: 32px; margin-top: 8px; }
        .table-wrap { overflow-x: auto; background: white; border: 1px solid #e5e7eb; }
        table { width: 100%; border-collapse: collapse; min-width: 920px; }
        th, td { padding: 14px 16px; border-bottom: 1px solid #eef0f3; text-align: left; vertical-align: top; font-size: 14px; }
        th { background: #171a23; color: white; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; }
        td span { display: inline-block; background: #fff0ea; color: #df4a10; padding: 5px 8px; font-weight: 700; }
        .empty { background: white; border: 1px dashed #f0b8a5; padding: 36px; text-align: center; }
        a { color: #fb6433; font-weight: 700; text-decoration: none; }
        @media (max-width: 760px) { header { display: block; } .stats { grid-template-columns: 1fr; } h1 { font-size: 28px; } }
      </style>
    </head>
    <body>
      <main>
        <header>
          <div>
            <h1>Orders</h1>
            <p>Repair My Gadget backend order dashboard</p>
          </div>
          <div>
            <a href="/admin/orders">Refresh</a>
            <a href="/admin/logout" style="margin-left: 16px;">Logout</a>
          </div>
        </header>

        <section class="stats">
          <div class="stat">Total orders placed<strong>${stats.totalOrders}</strong></div>
          <div class="stat">Payment pending<strong>${stats.paymentPending}</strong></div>
          <div class="stat">Total value<strong>${moneyFormatter.format(stats.totalRevenue)}</strong></div>
        </section>

        ${
          orders.length
            ? `<div class="table-wrap"><table>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Items</th>
                    <th>Payment</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table></div>`
            : `<div class="empty"><strong>No orders placed yet.</strong><p>Orders submitted from checkout will appear here.</p></div>`
        }
      </main>
    </body>
  </html>`;
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  try {
    if (request.method === "GET" && url.pathname === "/") {
      return send(response, 200, {
        success: true,
        message: "Repair My Gadget backend is running",
        ordersPage: "/admin/orders",
      });
    }

    if (request.method === "GET" && url.pathname === "/api/health") {
      return send(response, 200, { success: true, message: "Backend is live" });
    }

    if (request.method === "POST" && url.pathname === "/api/checkout/orders") {
      const result = await createCheckoutOrder(await readJsonBody(request));

      if (result.error) {
        return send(response, 400, { success: false, message: result.error });
      }

      return send(response, 201, {
        success: true,
        message: `Order ${result.order.orderId} placed successfully.`,
        orderId: result.order.orderId,
        totalOrders: result.stats.totalOrders,
        data: result.order,
      });
    }

    if (request.method === "GET" && url.pathname === "/api/admin/orders") {
      if (!isAdminAuthenticated(request)) {
        return send(response, 401, {
          success: false,
          message: "Admin login required",
        });
      }

      const orders = await readOrders();
      return send(response, 200, {
        success: true,
        stats: getStats(orders),
        data: orders,
      });
    }

    if (request.method === "GET" && url.pathname === "/admin/login") {
      if (isAdminAuthenticated(request)) {
        return sendRedirect(response, "/admin/orders");
      }

      return sendAdminLogin(response);
    }

    if (request.method === "POST" && url.pathname === "/admin/login") {
      const credentials = await readFormBody(request);

      if (
        credentials.username === ADMIN_USERNAME &&
        credentials.password === ADMIN_PASSWORD
      ) {
        response.writeHead(302, {
          Location: "/admin/orders",
          "Set-Cookie":
            "rmg_admin=authenticated; HttpOnly; SameSite=Lax; Path=/; Max-Age=86400",
          "Cache-Control": "no-store",
        });
        return response.end();
      }

      return sendAdminLogin(response, "Invalid username or password.");
    }

    if (request.method === "GET" && url.pathname === "/admin/logout") {
      response.writeHead(302, {
        Location: "/admin/login",
        "Set-Cookie":
          "rmg_admin=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0",
        "Cache-Control": "no-store",
      });
      return response.end();
    }

    if (request.method === "GET" && url.pathname === "/admin/orders") {
      if (!isAdminAuthenticated(request)) {
        return sendRedirect(response, "/admin/login");
      }

      return send(response, 200, renderOrdersPage(await readOrders()), "text/html");
    }

    return send(response, 404, { success: false, message: "Route not found" });
  } catch (error) {
    return send(response, 500, {
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});

server.listen(PORT, () => {
  console.log(`Repair My Gadget backend running on http://localhost:${PORT}`);
  console.log(`Orders page: http://localhost:${PORT}/admin/orders`);
});
