const stats = [
  { value: "100,000+", label: "Devices repaired" },
  { value: "Countless", label: "Lost photos recovered" },
  { value: "£100's", label: "Saved by our customers" },
];

const Hero = () => {
  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[330px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_48_bgg.webp')" }}
      >
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative mx-auto max-w-[1380px]">
          <h1 className="text-[40px] font-extrabold leading-tight sm:text-[48px] lg:text-[54px]">
            About Us
          </h1>
          <p className="mx-auto mt-6 max-w-[1350px] text-[17px] font-medium leading-relaxed text-[#20242c] sm:text-[19px]">
            Find out more about <strong>Repair My Gadget</strong> background,
            current state of affairs, and four team members that have a combined
            10 years of expertise in the repair business.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1720px] items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-20 lg:py-22">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/imgi_8_Apple-Self-Service-Mac-Repair-August-2022-hero.jpg.news_app_ed.webp"
            alt="Technician repairing an Apple device"
            className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[690px]"
          />
        </div>

        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-extrabold leading-tight sm:text-[48px] lg:text-[56px]">
            Apple Repair Services
          </h2>
          <div className="mt-6 h-px w-full bg-neutral-200" />
          <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
            At Repair My Gadget, we understand how essential your phone is to
            your daily life. That's why we offer top-notch Apple repair services
            that are fast, reliable, and affordable.
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
            Whether you're dealing with a cracked screen, a faulty battery, water
            damage, or any other issue, our skilled technicians are here to help.
            We use high-quality replacement parts and the latest repair
            techniques to get your phone back to perfect working condition.
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
            With a commitment to customer satisfaction and a track record of
            excellence, Repair My Gadget is your go-to destination for all your
            phone repair needs.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1720px] gap-10 px-6 pb-18 sm:px-10 lg:grid-cols-[0.92fr_1fr] lg:px-20 lg:pb-24">
        <div>
          <h2 className="text-[38px] font-extrabold leading-tight sm:text-[48px] lg:text-[54px]">
            Our mission
          </h2>
          <div className="mt-6 h-px w-full max-w-[700px] bg-neutral-200" />

          <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
            <p>
              Repair My Gadget was founded in 2015 through a recognition of the
              problems people were having with their Apple products and the
              trouble they experienced with cowboy repairs.
            </p>
            <p>
              Today, RMG has grown into a multi-store business in Weybridge,
              repairing all Apple devices like iPhones, iPads, Macs and Watches,
              along with the trusty old iPod.
            </p>
            <p>
              We pride ourselves on delivering fast, reliable, and affordable
              solutions, ensuring your phone is repaired with high-quality parts
              and careful attention to detail.
            </p>
            <p>
              The shop also gives customers the chance to pop down and have an
              informal chat about any related problems and receive general,
              independent advice.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="border-t-4 border-[#4bd37d] pt-4">
                <p className="text-[24px] font-extrabold leading-tight text-[#171a23]">
                  {item.value}
                </p>
                <p className="mt-2 text-[15px] font-medium text-[#444]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl lg:mt-28">
          <img
            src="/imgi_8_about-further.webp"
            alt="Blue iPhone being charged"
            className="h-[430px] w-full object-cover sm:h-[560px] lg:h-[690px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
