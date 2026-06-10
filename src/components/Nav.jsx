import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaChevronDown,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Refurbished",
    path: "/Product",
    children: [
      { label: "Refurbished iPhones", path: "/refurbished-iphones" },
      { label: "Refurbished Samsung", path: "/refurbished-samsung" },
    ],
  },
  { label: "iPhone Repairs", path: "/iphone repair" },
  { label: "iPad Repairs", path: "/ipad repair" },
  { label: "Mac Repairs", path: "/mac repair" },
  { label: "Watch Repairs", path: "/watch repair" },
  { label: "Samsung Repairs", path: "/samsung repairs" },
  { label: "Contact", path: "/contact" },
];

const Nav = ({ cartCount = 0, onCartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState("");

  const linkClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-[14px] font-semibold tracking-wide transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-orange-500 after:transition-all after:duration-200 hover:text-orange-500 hover:after:w-7 ${
      isActive ? "text-orange-500 after:w-7" : "text-neutral-900"
    }`;

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenMobileDropdown("");
  };

  const cartLabel = `${cartCount} ${cartCount === 1 ? "item" : "items"}`;

  const openCart = () => {
    closeMobileMenu();
    onCartOpen?.();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/95 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur">
      <nav className="relative mx-auto flex min-h-[76px] w-full max-w-[1760px] items-center px-4 sm:min-h-[88px] sm:px-8 lg:px-10">
        <Link
          to="/"
          className="flex shrink-0 items-center rounded-full p-1 transition-transform duration-200 hover:scale-[1.03]"
          aria-label="Go to home page"
          onClick={closeMobileMenu}
        >
          <img
            src="/logo.webp"
            alt="Repair My Gadget"
            className="h-[58px] w-[68px] object-contain sm:h-[72px] sm:w-[84px]"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 px-8 xl:flex 2xl:gap-8">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${linkClass({ isActive })} flex items-center gap-1.5`
                  }
                >
                  <span>{item.label}</span>
                  <FaChevronDown
                    className="mt-0.5 text-[10px] transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </NavLink>

                <div className="invisible absolute left-1/2 top-full z-50 mt-5 w-[300px] -translate-x-1/2 overflow-hidden rounded-sm border border-neutral-100 bg-white opacity-0 shadow-[0_18px_45px_rgba(15,23,42,0.14)] transition-all duration-200 group-hover:visible group-hover:mt-3 group-hover:opacity-100 group-focus-within:visible group-focus-within:mt-3 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block border-b border-neutral-100 bg-[#f7f7f7] px-7 py-5 text-[17px] font-medium text-neutral-600 transition-colors duration-200 last:border-b-0 hover:bg-white hover:text-orange-500"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.label} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            )
          )}
        </div>

        <button
          type="button"
          className="ml-auto hidden shrink-0 items-center gap-3 rounded-full border border-neutral-200 px-4 py-2 text-neutral-900 transition-all duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 xl:flex"
          aria-label="Open shopping cart"
          onClick={openCart}
        >
          <span className="relative">
            <FaShoppingCart className="text-[15px]" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-2.5 -top-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#fb6433] px-1 text-[10px] font-extrabold leading-none text-white">
                {cartCount}
              </span>
            )}
          </span>
          <span className="whitespace-nowrap text-[14px] font-semibold">
            {cartLabel}
          </span>
        </button>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-xl text-neutral-900 xl:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-neutral-100 bg-white px-4 pb-5 shadow-lg sm:px-5 xl:hidden">
          <div className="grid gap-1 py-3">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[14px] font-semibold text-black transition-colors duration-200 hover:bg-orange-50 hover:text-orange-500"
                      aria-expanded={openMobileDropdown === item.label}
                      onClick={() =>
                        setOpenMobileDropdown((open) =>
                          open === item.label ? "" : item.label
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <FaChevronDown
                        className={`text-[11px] transition-transform duration-200 ${
                          openMobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {openMobileDropdown === item.label && (
                      <div className="mb-2 ml-3 border-l border-neutral-200 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block rounded-md px-3 py-3 text-[14px] font-medium text-neutral-600 transition-colors duration-200 hover:bg-orange-50 hover:text-orange-500"
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-3 text-[14px] font-semibold ${
                        isActive ? "bg-orange-50 text-orange-500" : "text-black"
                      }`
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="flex items-center gap-3 border-t border-neutral-100 px-3 pt-4 text-black"
            onClick={openCart}
          >
            <span className="relative">
              <FaShoppingCart className="text-base" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#fb6433] px-1 text-[10px] font-extrabold leading-none text-white">
                  {cartCount}
                </span>
              )}
            </span>
            <span className="text-[14px] font-semibold">{cartLabel}</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;
