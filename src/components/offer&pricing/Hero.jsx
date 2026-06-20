import { Link } from "react-router-dom";
import { FaClock, FaShieldAlt, FaTools, FaWrench } from "react-icons/fa";

const highlights = [
  {
    title: "Electronic repairs",
    icon: FaWrench,
  },
  {
    title: "Satisfaction guarantee",
    icon: FaShieldAlt,
  },
  {
    title: "Fast 24h services",
    icon: FaClock,
  },
];

const services = [
  {
    title: "Smartphone repair",
    text: "Careful mobile repairs using tested parts and clear pricing before work begins.",
    image: "/imgi_2_iphone.webp",
    imageAlt: "Smartphone repair",
    reverse: false,
    prices: [
      ["Replacing glass", "£99.99"],
      ["Replacing screen", "£32.99"],
      ["Changing battery", "£75.90"],
      ["Repair device", "£28.00"],
      ["Cleaning", "£21.00"],
    ],
  },
  {
    title: "Tablet repair",
    text: "Tablet screen, battery and charging repairs handled quickly by experienced technicians.",
    image: "/imgi_3_ipad-pro.webp",
    imageAlt: "Tablet repair",
    reverse: true,
    prices: [
      ["Replacing glass", "£99.99"],
      ["Replacing screen", "£32.99"],
      ["Changing battery", "£75.90"],
      ["Repair device", "£28.00"],
      ["Cleaning", "£21.00"],
    ],
  },
  {
    title: "Laptop repair",
    text: "Reliable laptop support for performance issues, displays, batteries and general servicing.",
    image: "/imgi_4_macbook-pro.webp",
    imageAlt: "Laptop repair",
    reverse: false,
    prices: [
      ["Replacing display", "£129.99"],
      ["Battery service", "£89.00"],
      ["Keyboard repair", "£69.00"],
      ["Software repair", "£35.00"],
      ["Deep cleaning", "£24.00"],
    ],
  },
];

const PriceList = ({ prices }) => (
  <div className="mt-7 divide-y divide-neutral-200">
    {prices.map(([label, price]) => (
      <div key={label} className="flex items-center justify-between gap-5 py-3">
        <span className="text-[16px] font-extrabold leading-tight text-[#111827] sm:text-[17px]">
          {label}
        </span>
        <span className="shrink-0 text-[16px] font-extrabold text-[#fb6433] sm:text-[18px]">
          {price}
        </span>
      </div>
    ))}
  </div>
);

const Hero = () => {
  return (
    <div className="bg-white text-[#111827]">
      <section className="mx-auto max-w-[1440px] px-6 pb-12 pt-22 sm:px-10 lg:px-16 lg:pb-16 lg:pt-28">
        <div className="mx-auto max-w-[760px] text-center">
          <h1 className="text-[34px] font-extrabold leading-tight sm:text-[42px] lg:text-[48px]">
            <span className="text-[#fb6433]">We repair</span> any device
            <span className="block">smartphone, tablet, laptop, etc...</span>
          </h1>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-14">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="mx-auto max-w-[190px]">
                  <Icon className="mx-auto text-[42px] text-[#111827]" />
                  <h2 className="mt-5 text-[18px] font-extrabold leading-snug text-[#111827]">
                    {item.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-6 sm:px-10 lg:px-16">
        <div className="grid gap-18 lg:gap-22">
          {services.map((service) => (
            <article
              key={service.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-18 ${
                service.reverse ? "lg:[&_.service-copy]:order-1" : ""
              }`}
            >
              <div className="overflow-hidden rounded-lg border border-neutral-200 bg-[#fafafa] p-8 sm:p-10">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="mx-auto h-[330px] w-full object-contain sm:h-[420px] lg:h-[480px]"
                />
              </div>

              <div className="service-copy max-w-[580px]">
                <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px] lg:text-[48px]">
                  <span className="text-[#fb6433]">
                    {service.title.split(" ")[0]}
                  </span>{" "}
                  {service.title.split(" ").slice(1).join(" ")}
                </h2>
                <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#222938] sm:text-[16px]">
                  {service.text}
                </p>
                <PriceList prices={service.prices} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-[#252525]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.8fr_1fr_0.8fr] lg:px-16">
          <img
            src="/imgi_9_gsm2-cta-laptop.webp"
            alt="Laptop repair booking"
            className="mx-auto max-h-[210px] object-contain"
          />

          <div className="text-center">
            <h2 className="text-[28px] font-extrabold leading-tight sm:text-[34px]">
              <span className="text-[#fb6433]">Locate</span> your fix
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-white/86">
              Find the right repair, confirm stock, and choose the booking
              method that works best for your device.
            </p>
          </div>

          <div className="text-center">
            <a
              href="tel:01932844494"
              className="text-[26px] font-extrabold leading-tight text-white/80 sm:text-[30px]"
            >
              01932 844494
            </a>
            <div className="my-5 flex items-center justify-center gap-5 text-[14px] font-bold text-white">
              <span className="h-px w-20 bg-white/70" />
              <span>or</span>
              <span className="h-px w-20 bg-white/70" />
            </div>
            <Link
              to="/contact"
              className="inline-flex min-w-[190px] justify-center rounded-full bg-[#fb6433] px-7 py-3 text-[14px] font-bold text-white transition-colors duration-200 hover:bg-[#df4a10]"
            >
              Write to us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero
