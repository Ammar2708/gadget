import { useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaMinus,
  FaPaypal,
  FaPlus,
  FaRegCreditCard,
  FaReceipt,
  FaShoppingBag,
  FaTruck,
  FaTrash,
  FaUniversity,
} from "react-icons/fa";

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

const inputClass =
  "h-14 w-full border border-neutral-200 bg-white px-5 text-[15px] text-[#171a23] outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#fb5c1c]";

const paymentMethods = [
  {
    id: "trustly",
    name: "Trustly",
    icon: FaUniversity,
    cta: "Pay with Trustly",
    description: "Pay directly from your bank account.",
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: FaPaypal,
    cta: "Pay with PayPal",
    description: "Use your PayPal wallet or saved card.",
  },
  {
    id: "kustom",
    name: "Kustom Checkout",
    icon: FaReceipt,
    cta: "Continue with Kustom Checkout",
    description: "Complete payment through Kustom Checkout.",
    badge: "Kustom",
  },
  {
    id: "klarna",
    name: "Klarna",
    icon: FaRegCreditCard,
    cta: "Pay with Klarna",
    description: "Pay now or use available Klarna payment plans.",
    badge: "Klarna",
    badgeClass: "bg-[#ffb3d1] text-[#171a23]",
  },
];

const getStoredBooking = () => {
  try {
    const savedBooking = sessionStorage.getItem("repairBooking");
    return savedBooking ? JSON.parse(savedBooking) : null;
  } catch {
    return null;
  }
};

const Checkout = () => {
  const location = useLocation();
  const {
    cartItems = [],
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    openCart,
  } = useOutletContext();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.priceValue * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const hasItems = cartItems.length > 0;
  const booking = location.state?.booking || getStoredBooking();
  const [selectedPayment, setSelectedPayment] = useState("klarna");
  const [showOrderNote, setShowOrderNote] = useState(false);
  const [orderNote, setOrderNote] = useState("");
  const [checkoutStatus, setCheckoutStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activePayment =
    paymentMethods.find((method) => method.id === selectedPayment) ||
    paymentMethods[0];

  const handleCheckoutSubmit = async (event) => {
    event.preventDefault();

    if (!hasItems || isSubmitting) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const customer = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setCheckoutStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/checkout/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer,
          paymentMethod: selectedPayment,
          shippingMethod: "free-shipping",
          orderNote: showOrderNote ? orderNote : "",
          items: cartItems,
          totals: {
            subtotal,
            shipping: 0,
            total: subtotal,
            currency: "GBP",
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to create checkout order.");
      }

      setCheckoutStatus({
        type: "success",
        message:
          result.message ||
          `Order ${result.orderId} is ready for ${activePayment.name}.`,
      });
    } catch (error) {
      setCheckoutStatus({
        type: "error",
        message:
          error.message ||
          "Checkout could not be started. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (booking?.productName && Array.isArray(booking.issues)) {
    return (
      <div className="bg-white text-[#171a23]">
        <section
          className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-6 text-center"
          style={{ backgroundImage: "url('/imgi_8_about-further.webp')" }}
        >
          <div className="absolute inset-0 bg-[#eef1fb]/82" />
          <div className="relative mx-auto max-w-[1120px]">
            <h1 className="text-[38px] font-extrabold leading-tight sm:text-[48px] lg:text-[54px]">
              Booking Confirmation
            </h1>
            <p className="mx-auto mt-5 max-w-[900px] text-[16px] font-medium leading-relaxed text-[#252936] sm:text-[18px]">
              Home &gt; Booking Confirmation
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1125px] px-6 py-14 sm:px-10 lg:py-16">
          <div className="rounded-md border border-neutral-300 bg-[#fbfbfb] p-6 sm:p-8">
            <div className="grid gap-6 border-b border-neutral-200 pb-8 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <p className="text-[20px] font-medium text-[#171a23]">
                  Product Name:
                </p>
                <h2 className="mt-2 text-[28px] font-extrabold leading-tight">
                  {booking.productName}
                </h2>
              </div>
              {booking.productImage && (
                <div className="flex h-28 w-28 items-center justify-center rounded-md bg-white p-3 shadow-sm">
                  <img
                    src={booking.productImage}
                    alt={booking.productName}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
            </div>

            <div className="grid gap-8 py-8">
              {booking.issues.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-md border border-neutral-200 bg-white p-5"
                >
                  <p className="text-[20px] font-medium text-[#171a23]">
                    Issue:
                  </p>
                  <h3 className="mt-2 text-[28px] font-extrabold leading-tight">
                    {issue.title}
                  </h3>
                  <p className="mt-4 text-[18px] leading-relaxed text-[#171a23]">
                    Description: {issue.description}
                  </p>
                  <p className="mt-3 text-[18px] leading-relaxed text-[#171a23]">
                    Price: {issue.price.replace("GBP", "£")}
                  </p>
                </div>
              ))}
            </div>

            <form className="grid gap-8 pt-4">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="grid gap-3 text-[20px] font-medium">
                  First Name
                  <input className={inputClass} type="text" />
                </label>
                <label className="grid gap-3 text-[20px] font-medium">
                  Last name
                  <input className={inputClass} type="text" />
                </label>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <label className="grid gap-3 text-[20px] font-medium">
                  Email address
                  <input className={inputClass} type="email" />
                </label>
                <label className="grid gap-3 text-[20px] font-medium">
                  Contact Number
                  <input className={inputClass} type="tel" />
                </label>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <label className="grid gap-3 text-[20px] font-medium">
                  Appointment date
                  <input className={inputClass} type="date" />
                </label>
                <label className="grid gap-3 text-[20px] font-medium">
                  Appointment time
                  <input className={inputClass} type="time" />
                </label>
              </div>

              <button
                type="button"
                className="flex h-14 w-full items-center justify-center rounded-md bg-[#fb6433] px-8 text-[20px] font-extrabold text-white transition-colors duration-200 hover:bg-[#df4a10]"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_48_bgg.webp')" }}
      >
        <div className="absolute inset-0 bg-white/35" />
        <div className="relative mx-auto max-w-[1120px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#fb6433]">
            Secure checkout
          </p>
          <h1 className="mt-4 text-[38px] font-extrabold leading-tight sm:text-[48px] lg:text-[54px]">
            Checkout
          </h1>
          <p className="mx-auto mt-5 max-w-[900px] text-[16px] font-medium leading-relaxed text-[#252936] sm:text-[18px]">
            Confirm your refurbished device order and share your contact
            details so our team can prepare everything for you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1720px] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_470px] lg:px-20 lg:py-16">
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb6433]">
                Customer details
              </p>
              <h2 className="mt-3 text-[30px] font-extrabold leading-tight sm:text-[38px]">
                Complete your order
              </h2>
            </div>
            <Link
              to="/contact"
              className="text-[14px] font-bold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
            >
              Need help?
            </Link>
          </div>

          <form className="mt-10 grid gap-8" onSubmit={handleCheckoutSubmit}>
            <div className="grid gap-8 md:grid-cols-2">
              <input
                className={inputClass}
                name="firstName"
                type="text"
                placeholder="First name"
                required
              />
              <input
                className={inputClass}
                name="lastName"
                type="text"
                placeholder="Last name"
                required
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <input
                className={inputClass}
                name="email"
                type="email"
                placeholder="Email address"
                required
              />
              <input
                className={inputClass}
                name="phone"
                type="tel"
                placeholder="Phone number"
                required
              />
            </div>

            <input
              className={inputClass}
              name="address"
              type="text"
              placeholder="Address"
              required
            />

            <div className="grid gap-8 md:grid-cols-3">
              <input
                className={inputClass}
                name="city"
                type="text"
                placeholder="Town / City"
                required
              />
              <input
                className={inputClass}
                name="postcode"
                type="text"
                placeholder="Postcode"
                required
              />
              <input
                className={inputClass}
                name="country"
                type="text"
                placeholder="Country"
                defaultValue="United Kingdom"
                required
              />
            </div>

            <div>
              <h3 className="text-[26px] font-extrabold leading-tight">
                Shipping options
              </h3>
              <label className="mt-6 flex min-h-[76px] cursor-pointer items-center justify-between gap-4 border-2 border-[#343943] bg-white px-5 py-4 text-[17px] font-extrabold">
                <span className="flex items-center gap-4">
                  <input
                    className="h-5 w-5 accent-black"
                    type="radio"
                    name="shippingMethod"
                    value="free-shipping"
                    defaultChecked
                  />
                  <FaTruck className="text-[#fb6433]" aria-hidden="true" />
                  Free shipping
                </span>
                <span>FREE</span>
              </label>
            </div>

            <div>
              <h3 className="text-[26px] font-extrabold leading-tight">
                Payment options
              </h3>
              <div className="mt-6 overflow-hidden border border-neutral-200 bg-white">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = selectedPayment === method.id;

                  return (
                    <label
                      key={method.id}
                      className={`flex min-h-[74px] cursor-pointer items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4 transition-colors duration-200 last:border-b-0 ${
                        isSelected
                          ? "border-2 border-[#343943] bg-white"
                          : "hover:bg-[#fafafa]"
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-4">
                        <input
                          className="h-5 w-5 shrink-0 accent-black"
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={isSelected}
                          onChange={() => setSelectedPayment(method.id)}
                        />
                        <span className="flex min-w-0 flex-wrap items-center gap-3">
                          {method.badge ? (
                            <span
                              className={`inline-flex min-h-9 items-center rounded-md px-3 text-[18px] font-black ${
                                method.badgeClass ||
                                "bg-[#edff2c] text-[#171a23]"
                              }`}
                            >
                              {method.badge}
                            </span>
                          ) : (
                            <Icon
                              className="text-[22px] text-[#fb6433]"
                              aria-hidden="true"
                            />
                          )}
                          <span className="text-[17px] font-extrabold">
                            {method.name}
                          </span>
                        </span>
                      </span>
                      <span className="hidden text-right text-[13px] font-semibold text-[#6c7280] sm:block">
                        {method.description}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-4 text-[17px] font-extrabold">
              <input
                className="h-6 w-6 rounded border-neutral-300 accent-black"
                type="checkbox"
                checked={showOrderNote}
                onChange={(event) => setShowOrderNote(event.target.checked)}
              />
              Add a note to your order
            </label>

            {showOrderNote && (
              <textarea
                className="min-h-[150px] w-full resize-none border border-neutral-200 bg-white px-5 py-5 text-[15px] text-[#171a23] outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#fb5c1c]"
                placeholder="Order notes"
                value={orderNote}
                onChange={(event) => setOrderNote(event.target.value)}
              />
            )}

            <div className="border-t border-neutral-200 pt-7 text-[15px] leading-relaxed text-[#171a23]">
              By proceeding with your purchase you agree to our{" "}
              <Link
                to="/terms-and-conditions"
                className="font-bold text-[#fb6433] hover:text-[#df4a10]"
              >
                Terms and Conditions
              </Link>{" "}
              and Privacy Policy.
            </div>

            {checkoutStatus.message && (
              <div
                className={`flex items-start gap-3 border px-4 py-3 text-[14px] font-semibold ${
                  checkoutStatus.type === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {checkoutStatus.type === "success" ? (
                  <FaCheckCircle className="mt-0.5 shrink-0" aria-hidden="true" />
                ) : (
                  <FaExclamationTriangle
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span>{checkoutStatus.message}</span>
              </div>
            )}

            <button
              type="submit"
              className="inline-flex h-14 w-full items-center justify-center gap-3 bg-[#fb6433] px-8 text-[14px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#df4a10] disabled:cursor-not-allowed disabled:bg-[#ffd8ca] disabled:text-[#b78373] sm:w-fit"
              disabled={!hasItems || isSubmitting}
            >
              <FaRegCreditCard aria-hidden="true" />
              {isSubmitting ? "Creating order..." : activePayment.cta}
            </button>
          </form>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="border border-neutral-200 bg-[#f8fafc] p-5 shadow-[0_16px_42px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-5">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#fb6433]">
                  Your basket
                </p>
                <h2 className="mt-1 text-[24px] font-extrabold leading-tight">
                  Order summary
                </h2>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0ea] text-[#fb6433]">
                <FaShoppingBag aria-hidden="true" />
              </span>
            </div>

            {hasItems ? (
              <div className="mt-5 grid gap-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[82px_1fr] gap-4 border border-neutral-200 bg-white p-3"
                  >
                    <div className="flex h-[90px] items-center justify-center bg-[#f6f7f8] p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[14px] font-extrabold leading-tight">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-[12px] font-semibold text-[#6c7280]">
                            {item.priceLabel}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#a0a6b2] transition-colors duration-200 hover:bg-red-50 hover:text-red-500"
                          aria-label={`Remove ${item.name}`}
                          onClick={() => removeItem(item.id)}
                        >
                          <FaTrash className="text-[11px]" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex h-9 items-center rounded-full border border-neutral-200 bg-[#fafafa]">
                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center rounded-full text-[#171a23] transition-colors duration-200 hover:bg-[#fb6433] hover:text-white"
                            aria-label={`Decrease ${item.name} quantity`}
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <FaMinus className="text-[10px]" aria-hidden="true" />
                          </button>
                          <span className="w-8 text-center text-[12px] font-extrabold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center rounded-full text-[#171a23] transition-colors duration-200 hover:bg-[#fb6433] hover:text-white"
                            aria-label={`Increase ${item.name} quantity`}
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <FaPlus className="text-[10px]" aria-hidden="true" />
                          </button>
                        </div>

                        <p className="text-[15px] font-extrabold">
                          {currencyFormatter.format(
                            item.priceValue * item.quantity
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6 border border-dashed border-[#f0b8a5] bg-white px-5 py-9 text-center">
                <h3 className="text-[17px] font-extrabold leading-tight">
                  Your cart is empty
                </h3>
                <p className="mx-auto mt-3 max-w-[300px] text-[14px] leading-relaxed text-[#626977]">
                  Add a refurbished device before completing checkout.
                </p>
                <Link
                  to="/refurbished-iphones"
                  className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#fb6433] px-5 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-[#df4a10]"
                >
                  Shop refurbished
                </Link>
              </div>
            )}

            <div className="mt-5 border-t border-neutral-200 pt-5">
              <div className="flex items-center justify-between gap-4 text-[14px] font-bold text-[#5c6370]">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 text-[14px] font-bold text-[#5c6370]">
                <span>Subtotal</span>
                <span>{currencyFormatter.format(subtotal)}</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 text-[14px] font-bold text-[#5c6370]">
                <span>Free shipping</span>
                <span className="text-[#171a23]">FREE</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 text-[14px] font-bold text-[#5c6370]">
                <span>Payment</span>
                <span className="text-right text-[#171a23]">
                  {activePayment.name}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-neutral-200 pt-4">
                <span className="text-[16px] font-extrabold uppercase tracking-[0.12em]">
                  Total
                </span>
                <span className="text-[24px] font-extrabold text-[#fb6433]">
                  {currencyFormatter.format(subtotal)}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full border border-neutral-300 bg-white px-4 py-3 text-[13px] font-bold text-[#171a23] transition-colors duration-200 hover:border-[#fb6433] hover:text-[#fb6433]"
              onClick={openCart}
            >
              Review in cart
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Checkout;
