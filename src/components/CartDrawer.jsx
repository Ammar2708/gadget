import {
  FaMinus,
  FaPlus,
  FaRegCreditCard,
  FaShoppingBag,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

const CartDrawer = ({
  isOpen,
  items,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const navigate = useNavigate();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.priceValue * item.quantity,
    0
  );
  const hasItems = items.length > 0;

  return (
    <div
      className={`fixed inset-0 z-[90] transition ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-[#10151f]/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close cart"
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-[#f8fafc] shadow-[-18px_0_45px_rgba(15,23,42,0.14)] transition-transform duration-300 sm:max-w-[480px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <div className="border-b border-neutral-200 bg-white px-5 py-5 text-[#171a23] sm:px-7">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0ea] text-[17px] text-[#fb6433]">
                <FaShoppingBag aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#fb6433]">
                  Repair My Gadget
                </p>
                <h2 className="mt-1 text-[22px] font-extrabold leading-none">
                  Your Cart
                </h2>
              </div>
            </div>

            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-[13px] text-[#171a23] transition-colors duration-200 hover:border-[#fb6433] hover:text-[#fb6433]"
              aria-label="Close cart"
              onClick={onClose}
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
          <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#969ca8]">
                  Items
                </p>
                <p className="mt-1.5 text-[16px] font-extrabold text-[#171a23]">
                  {totalItems} {totalItems === 1 ? "product" : "products"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#969ca8]">
                  Subtotal
                </p>
                <p className="mt-1.5 text-[20px] font-extrabold text-[#fb6433]">
                  {currencyFormatter.format(subtotal)}
                </p>
              </div>
            </div>
          </div>

          {hasItems ? (
            <div className="mt-5 grid gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[64px_1fr] gap-3 rounded-lg border border-neutral-200 bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:grid-cols-[76px_1fr]"
                >
                  <div className="flex h-[72px] items-center justify-center rounded-md bg-[#f6f7f8] p-2 sm:h-[82px] sm:p-2.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[13px] font-extrabold leading-tight text-[#171a23]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-[11px] font-semibold text-[#6c7280]">
                          {item.priceLabel}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#a0a6b2] transition-colors duration-200 hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => onRemove(item.id)}
                      >
                        <FaTrash className="text-[11px]" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex h-8 items-center rounded-full border border-neutral-200 bg-[#fafafa]">
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-full text-[#171a23] transition-colors duration-200 hover:bg-[#fb6433] hover:text-white"
                          aria-label={`Decrease ${item.name} quantity`}
                          onClick={() => onDecrease(item.id)}
                        >
                          <FaMinus className="text-[10px]" aria-hidden="true" />
                        </button>
                        <span className="w-7 text-center text-[12px] font-extrabold text-[#171a23]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-full text-[#171a23] transition-colors duration-200 hover:bg-[#fb6433] hover:text-white"
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() => onIncrease(item.id)}
                        >
                          <FaPlus className="text-[10px]" aria-hidden="true" />
                        </button>
                      </div>

                      <p className="text-[14px] font-extrabold text-[#171a23]">
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
            <div className="mt-7 rounded-lg border border-dashed border-[#f0b8a5] bg-white px-5 py-10 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0ea] text-[22px] text-[#fb6433]">
                <FaShoppingBag aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[16px] font-extrabold uppercase tracking-[0.08em] text-[#171a23]">
                Your cart is empty
              </h3>
              <p className="mx-auto mt-3 max-w-[280px] text-[12px] leading-relaxed text-[#626977]">
                Add a refurbished device and we will keep your selection ready
                while you browse.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-neutral-200 bg-white px-4 py-4 sm:px-6">
          <div className="rounded-lg border border-neutral-200 bg-[#fffaf7] p-4 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#171a23]">
                Total
              </p>
              <p className="text-[20px] font-extrabold text-[#fb6433]">
                {currencyFormatter.format(subtotal)}
              </p>
            </div>

            <button
              type="button"
              className="mt-4 flex h-11 w-full items-center justify-center gap-2.5 rounded-md bg-[#fb6433] px-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#df4a10] disabled:cursor-not-allowed disabled:bg-[#ffd8ca] disabled:text-[#b78373]"
              disabled={!hasItems}
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
            >
              <FaRegCreditCard aria-hidden="true" />
              Proceed to checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
