import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const contactItems = [
  {
    title: "Call Now",
    value: "019 3284 4494",
    href: "tel:01932844494",
    icon: FaPhoneAlt,
  },
  {
    title: "Email",
    value: "Repair.my.gadget.ltd@gmail.com",
    href: "mailto:Repair.my.gadget.ltd@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "Location",
    value: "44 Baker Street, Weybridge KT13 8AR",
    icon: FaMapMarkerAlt,
  },
];

const inputClass =
  "h-14 w-full border border-neutral-200 bg-white px-5 text-[15px] text-[#171a23] outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#fb5c1c]";

const Hero = () => {
  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[320px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_48_bgg.webp')" }}
      >
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative mx-auto max-w-[1200px]">
          <h1 className="text-[40px] font-bold leading-tight sm:text-[48px] lg:text-[54px]">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-[980px] text-[17px] font-medium leading-relaxed text-[#20242c] sm:text-[18px]">
            Contact us for general enquiries, repair options or to discuss a
            business account.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1720px] gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1.25fr_0.75fr] lg:px-20 lg:py-20">
        <div>
          <h2 className="text-[36px] font-bold leading-tight sm:text-[44px]">
            <span className="text-[#fb6433]">Send</span> us a message
          </h2>

          <form className="mt-14 max-w-[1000px]">
            <div className="grid gap-8">
              <input className={inputClass} type="text" placeholder="Name" />

              <div className="grid gap-8 md:grid-cols-2">
                <input className={inputClass} type="email" placeholder="Email" />
                <input className={inputClass} type="text" placeholder="Subject" />
              </div>

              <input className={inputClass} type="text" placeholder="Details" />

              <textarea
                className="min-h-[190px] w-full resize-none border border-neutral-200 bg-white px-5 py-5 text-[15px] text-[#171a23] outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#fb5c1c]"
                placeholder="Your message"
              />

              <button
                type="button"
                className="mt-4 w-fit bg-[#fb5c1c] px-12 py-4 text-[16px] font-bold text-white transition-colors duration-200 hover:bg-[#df4a10]"
              >
                Send a message
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-[36px] font-bold leading-tight sm:text-[44px]">
            <span className="text-[#fb6433]">Contact</span> information
          </h2>

          <div className="mt-14 space-y-8">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-8 bg-[#f3f8f8] px-9 py-7 transition-transform duration-200 hover:-translate-y-1">
                  <Icon className="shrink-0 text-[38px] text-[#fb5c1c]" />
                  <div>
                    <h3 className="text-[24px] font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[17px] font-medium leading-relaxed text-[#171a23]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-6 sm:px-6">
        <iframe
          title="Repair My Gadget location map"
          src="https://www.google.com/maps?q=Repair%20My%20Gadget%2044%20Baker%20Street%20Weybridge%20KT13%208AR&output=embed"
          className="h-[360px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Hero;
