import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
  FaApple,
  FaBoxOpen,
  FaShieldAlt,
  FaShoppingCart,
  FaSyncAlt,
  FaTimes,
} from "react-icons/fa";

const products = [
  {
    name: "iPhone 15 Pro",
    price: "GBP 679.00",
    image: "/imgi_40_iphone_17_pro_max_silver_pdp_image_position_1__en-in.webp",
    detail: "Premium display, pro camera system and excellent battery health.",
  },
  {
    name: "iPhone 15",
    price: "GBP 539.00",
    image: "/imgi_39_IMG-18071437_m_jpeg_1.webp",
    detail: "A clean everyday iPhone with modern performance and warranty.",
  },
  {
    name: "iPhone 14 Pro Max",
    price: "GBP 499.00 - GBP 759.00",
    image: "/imgi_107_iPhone12ProMaxGraphile_1800x.webp",
    detail: "Large display, strong battery life and a carefully checked finish.",
  },
  {
    name: "iPhone 14",
    price: "GBP 499.00",
    image: "/imgi_260_249852_0_snn6go-2048x2048.webp",
    detail: "Certified, tested and ready for daily use with reliable support.",
  },
  {
    name: "iPhone 13 Pro",
    price: "GBP 439.00",
    image: "/imgi_101_iPhone12ProMaxGraphile_1800x-1536x1536.webp",
    detail: "A refined pro model with smooth performance and checked parts.",
  },
  {
    name: "iPhone 13 Mini",
    price: "GBP 319.00",
    image: "/imgi_7_41816-81121-Purple-iPhone-12-and-Box-xl.webp",
    detail: "Compact size, sharp display and dependable refurbished quality.",
  },
  {
    name: "iPhone 12 Pro",
    price: "GBP 349.00",
    image: "/imgi_31_bc25a7c3b023890cc5f278cd1517cfb3eb26ea26-1280x1280.webp",
    detail: "Pro feel, polished design and careful functional testing.",
  },
  {
    name: "iPhone 11 Pro Max",
    price: "GBP 339.00 - GBP 389.00",
    image: "/imgi_29_09cd33feecc90320d844d80f5dee9b59613d1971-1280x1280.webp",
    detail: "A larger classic iPhone with reliable battery and camera checks.",
  },
  {
    name: "iPhone X",
    price: "GBP 229.00",
    image: "/imgi_182_b81d20882df7c9b9e603fa228-2048x2048.webp",
    detail: "Affordable OLED iPhone option, tested for everyday essentials.",
  },
];

const benefits = [
  {
    title: "Why Refurbished",
    text: "Every iPhone is inspected, cleaned and tested before it is listed.",
    icon: FaSyncAlt,
  },
  {
    title: "AppleCare",
    text: "Support options are available for added peace of mind after purchase.",
    icon: FaApple,
  },
  {
    title: "Protected purchase",
    text: "Clear condition notes, warranty cover and careful packaging included.",
    icon: FaShieldAlt,
  },
  {
    title: "Fast delivery",
    text: "In-stock refurbished iPhones are prepared quickly for dispatch.",
    icon: FaBoxOpen,
  },
];

const getPriceValue = (price) =>
  Number(price.replace(/,/g, "").match(/\d+(?:\.\d+)?/)?.[0] ?? 0);

const getCartItem = (product) => ({
  id: `iphone-${product.name.toLowerCase().replace(/\s+/g, "-")}`,
  name: product.name,
  image: product.image,
  priceLabel: product.price,
  priceValue: getPriceValue(product.price),
});

const Hero = () => {
  const { addToCart } = useOutletContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeProductImage, setActiveProductImage] = useState("");
  const [flippedProduct, setFlippedProduct] = useState("");

  const openProductPopup = (product) => {
    setSelectedProduct(product);
    setActiveProductImage(product.image);
  };

  const closeProductPopup = () => {
    setSelectedProduct(null);
    setActiveProductImage("");
  };

  const productGallery = selectedProduct
    ? [
        selectedProduct.image,
        ...products
          .filter((product) => product.name !== selectedProduct.name)
          .slice(0, 5)
          .map((product) => product.image),
      ]
    : [];

  const addSelectedToCart = () => {
    if (!selectedProduct) return;
    addToCart(getCartItem(selectedProduct));
    closeProductPopup();
  };

  const toggleProductFlip = (productName) => {
    setFlippedProduct((current) => (current === productName ? "" : productName));
  };

  return (
    <div className="bg-white text-[#121722]">
      <style>
        {`
          @keyframes rmgFadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .rmg-fade-up {
            animation: rmgFadeUp 0.65s ease both;
          }
        `}
      </style>

      <section className="mx-auto grid min-h-[520px] max-w-[1720px] items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-20 lg:py-16">
        <div className="rmg-fade-up">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#fb6433]">
            Certified refurbished
          </p>
          <h1 className="mt-4 max-w-[780px] text-[38px] font-extrabold leading-tight sm:text-[46px] lg:text-[54px]">
            Refurbished iPhone
          </h1>
          <p className="mt-5 max-w-[800px] text-[16px] leading-relaxed text-[#333844] sm:text-[18px]">
            Shop carefully tested refurbished iPhones with clear pricing,
            warranty support and dependable condition checks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-[#fb6433] px-6 py-3 text-[14px] font-bold text-white transition-colors duration-200 hover:bg-[#df4a10]"
            >
              Ask about stock
            </Link>
            <a
              href="#refurbished-iphones"
              className="rounded-full border border-neutral-300 px-6 py-3 text-[14px] font-bold text-[#171a23] transition-colors duration-200 hover:border-[#fb6433] hover:text-[#fb6433]"
            >
              View iPhones
            </a>
          </div>
        </div>

        <div className="rmg-fade-up flex justify-center lg:justify-end [animation-delay:0.12s]">
          <img
            src="/imgi_26_product-jpeg.webp"
            alt="Refurbished iPhone models"
            className="max-h-[390px] w-full max-w-[650px] object-contain drop-shadow-[0_28px_45px_rgba(15,23,42,0.12)]"
          />
        </div>
      </section>

      <section
        id="refurbished-iphones"
        className="mx-auto max-w-[1720px] px-6 py-14 sm:px-10 lg:px-20 lg:py-16"
      >
        <div className="rmg-fade-up flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb6433]">
              Available models
            </p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight sm:text-[38px]">
              Pick your refurbished iPhone
            </h2>
          </div>
          <p className="max-w-[540px] text-[15px] leading-relaxed text-[#565b66]">
            Hover or tap a card to view quick details and buying options.
          </p>
        </div>

        <div className="rmg-refurb-grid mt-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="rmg-refurb-card group rmg-fade-up block h-[430px] [perspective:1200px]"
              style={{ animationDelay: `${index * 0.05}s` }}
              tabIndex={0}
              role="button"
              aria-label={`Flip ${product.name} card`}
              aria-pressed={flippedProduct === product.name}
              onClick={() => toggleProductFlip(product.name)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleProductFlip(product.name);
                }
              }}
            >
              <div
                className={`relative h-full rounded-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] ${
                  flippedProduct === product.name ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                <div className="rmg-refurb-front absolute inset-0 overflow-hidden rounded-lg border border-neutral-200 bg-white [backface-visibility:hidden]">
                  <div className="rmg-refurb-media flex h-[295px] items-center justify-center bg-[#f6f7f8] p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="rmg-refurb-front-copy px-6 py-6 text-center">
                    <h3 className="text-[22px] font-extrabold leading-tight">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-[17px] font-semibold text-black">
                      {product.price}
                    </p>
                    <p className="rmg-refurb-hint mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#fb6433]">
                      Tap for options
                    </p>
                  </div>
                </div>

                <div className="rmg-refurb-back absolute inset-0 flex rounded-lg border border-[#fb6433]/30 bg-[#171a23] p-7 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="m-auto text-center">
                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#ff8a5c]">
                      Refurbished
                    </p>
                    <h3 className="mt-3 text-[24px] font-extrabold leading-tight">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-white/78">
                      {product.detail}
                    </p>
                    <p className="mt-6 text-[18px] font-extrabold">
                      {product.price}
                    </p>
                    <div className="rmg-refurb-actions mt-7 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        className="rounded-full bg-[#fb6433] px-5 py-3 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-[#df4a10]"
                        onClick={(event) => {
                          event.stopPropagation();
                          addToCart(getCartItem(product));
                        }}
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="rounded-full bg-white px-5 py-3 text-[13px] font-bold text-[#171a23] transition-colors duration-200 hover:bg-[#f1f1f1]"
                        onClick={(event) => {
                          event.stopPropagation();
                          openProductPopup(product);
                        }}
                      >
                        Enquire now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-6 py-12 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rmg-fade-up text-center"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Icon className="mx-auto text-[42px] text-[#fb6433]" />
                <h3 className="mt-5 text-[22px] font-extrabold leading-tight">
                  {benefit.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[360px] text-[15px] leading-relaxed text-[#444]">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-[#111827]/55 px-4 py-6 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="iphone-refurbished-popup-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close product details"
            onClick={closeProductPopup}
          />

          <div className="relative max-h-[92vh] w-full max-w-[980px] overflow-y-auto rounded-lg bg-white shadow-[0_24px_70px_rgba(15,23,42,0.24)]">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4 sm:px-7">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#fb6433]">
                  Refurbished iPhone
                </p>
                <h2
                  id="iphone-refurbished-popup-title"
                  className="mt-1 text-[24px] font-extrabold leading-tight sm:text-[30px]"
                >
                  {selectedProduct.name}
                </h2>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-[#171a23] transition-colors duration-200 hover:border-[#fb6433] hover:text-[#fb6433]"
                aria-label="Close product details"
                onClick={closeProductPopup}
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>

            <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="flex h-[230px] items-center justify-center rounded-lg border border-neutral-200 bg-[#f8fafc] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)] sm:h-[280px]">
                  <img
                    src={activeProductImage || selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-[190px] max-w-[82%] object-contain drop-shadow-[0_18px_28px_rgba(15,23,42,0.14)] sm:max-h-[235px]"
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {productGallery.map((image, index) => (
                    <button
                      type="button"
                      key={`${image}-${index}`}
                      className={`flex h-[64px] items-center justify-center rounded-md border bg-white p-2 transition-all duration-200 sm:h-[70px] ${
                        image === activeProductImage
                          ? "border-[#fb6433] shadow-[0_8px_18px_rgba(251,100,51,0.18)]"
                          : "border-neutral-200 hover:border-[#fb6433]/60 hover:shadow-[0_8px_18px_rgba(15,23,42,0.08)]"
                      }`}
                      aria-label={`Show ${selectedProduct.name} view ${
                        index + 1
                      }`}
                      onClick={() => setActiveProductImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${selectedProduct.name} view ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[16px] leading-relaxed text-[#3e4650] sm:text-[17px]">
                  {selectedProduct.detail} This device is inspected, cleaned
                  and checked before dispatch, with support available after
                  purchase.
                </p>
                <div className="mt-6 grid gap-3 text-[15px] font-semibold text-[#252936]">
                  <div className="rounded-md bg-[#f6f7f8] px-4 py-3">
                    Battery, display, buttons and camera checked
                  </div>
                  <div className="rounded-md bg-[#f6f7f8] px-4 py-3">
                    Clear condition notes before purchase
                  </div>
                  <div className="rounded-md bg-[#f6f7f8] px-4 py-3">
                    Warranty support included
                  </div>
                </div>
                <p className="mt-6 text-[22px] font-extrabold text-[#171a23]">
                  {selectedProduct.price}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#fb6433] px-6 text-[14px] font-bold text-white transition-colors duration-200 hover:bg-[#df4a10]"
                    onClick={addSelectedToCart}
                  >
                    <FaShoppingCart aria-hidden="true" />
                    Add to cart
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-6 text-[14px] font-bold text-[#171a23] transition-colors duration-200 hover:border-[#fb6433] hover:text-[#fb6433]"
                    onClick={closeProductPopup}
                  >
                    Ask a question
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
