import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";

const repairs = [
  { label: "iPhone Repairs", path: "/iphone repair" },
  { label: "iPad Repairs", path: "/ipad repair" },
  { label: "Mac Repairs", path: "/mac repair" },
  { label: "Watch Repairs", path: "/watch repair" },
  { label: "iPod Repairs", path: "/ipod repair" },
  { label: "Samsung Repairs", path: "/samsung repairs" },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Offer & pricing", path: "/offer-pricing" },
  { label: "Refund & Returns Policy", path: "/refund_returns_policy" },
  { label: "Terms and Conditions", path: "/terms-and-conditions" },
  { label: "Why Refurbished?", path: "/why-refurbished" },
];

const Footer = () => {
  return (
    <footer className="bg-[#111013] text-white">
      <div className="mx-auto grid max-w-[1580px] gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1.05fr_1.25fr] lg:px-20 lg:py-16">
        <div className="flex items-start lg:pt-2">
          <Link to="/" aria-label="Go to home page">
            <img
              src="/logo1.webp"
              alt="Repair My Gadget"
              className="h-[150px] w-[190px] object-contain opacity-95 sm:h-[175px] sm:w-[220px]"
            />
          </Link>
        </div>

        <div>
          <h2 className="mb-6 text-[22px] font-bold leading-none">Repairs</h2>
          <ul className="space-y-5">
            {repairs.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-[17px] font-medium leading-tight text-white transition-colors duration-200 hover:text-[#087cff]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-[22px] font-bold leading-none">Quick links</h2>
          <ul className="space-y-5">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-[17px] font-medium leading-tight text-white transition-colors duration-200 hover:text-[#087cff]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-[22px] font-bold leading-none">Contact</h2>

          <div className="space-y-6 text-[17px] font-medium leading-relaxed">
            <div>
              <p className="mb-2 font-bold text-[#087cff]">Company Number:</p>
              <p>12337790</p>
            </div>

            <div>
              <p className="mb-2 font-bold text-[#087cff]">Customer Support:</p>
              <a
                href="tel:01932844494"
                className="transition-colors duration-200 hover:text-[#087cff]"
              >
                019 3284 4494
              </a>
            </div>

            <div>
              <p className="mb-2 font-bold text-[#087cff]">Email:</p>
              <a
                href="mailto:Repair.my.gadget.ltd@gmail.com"
                className="break-words transition-colors duration-200 hover:text-[#087cff]"
              >
                Repair.my.gadget.ltd@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-2 font-bold text-[#087cff]">Our Address:</p>
              <address className="not-italic">
                44 Baker Street, Weybridge KT13
                <br />
                8AR
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1580px] flex-col items-center justify-between gap-4 px-6 py-6 text-center text-[16px] font-medium text-neutral-500 sm:flex-row sm:px-10 sm:text-left lg:px-20">
          <p>© 2021 All Rights Reserved</p>
          <a
            href="https://www.tiktok.com"
            aria-label="TikTok"
            className="text-[20px] text-white transition-colors duration-200 hover:text-[#087cff]"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
