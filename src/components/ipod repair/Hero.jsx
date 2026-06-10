import { Link } from "react-router-dom";
import { FaLock, FaRegThumbsUp, FaSearch } from "react-icons/fa";

const ipodModels = [
  { title: "iPod Touch", image: "/imgi_5_ipod-touch.webp" },
  { title: "iPod Classic", image: "/imgi_3_ipod-classic.webp" },
  { title: "iPod Nano", image: "/imgi_4_ipod-nano.webp" },
];

const benefits = [
  {
    title: "No-cost diagnosis",
    text: "We'll inspect your iPod and explain the repair options before work begins.",
    icon: FaSearch,
  },
  {
    title: "Warranty of 90 Days",
    text: "Our guarantee covers parts and workmanship throughout the first ninety-day period.",
    icon: FaRegThumbsUp,
  },
  {
    title: "Protected Service",
    text: "Your music, photos and personal data are handled carefully during repair.",
    icon: FaLock,
  },
];

const Hero = () => {
  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[260px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_78_bgg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative mx-auto max-w-[1080px]">
          <h1 className="text-[30px] font-extrabold leading-tight sm:text-[38px] lg:text-[42px]">
            iPod Servicing
          </h1>
          <p className="mx-auto mt-4 max-w-[850px] text-[14px] font-medium leading-relaxed text-[#242833] sm:text-[15px]">
            We provide careful iPod repairs for screens, batteries, charging
            ports, headphone faults and common software issues.
          </p>
        </div>
      </section>

      <section className="rmg-model-section mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-16 lg:py-14">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="text-[25px] font-extrabold leading-tight sm:text-[32px] lg:text-[36px]">
            <span className="text-[#fb6433]">Select your</span> iPod model
          </h2>
          <Link
            to="/contact"
            className="text-[14px] font-semibold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
          >
            Need help?
          </Link>
        </div>

        <div className="rmg-model-grid mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {ipodModels.map((model) => (
            <Link key={model.title} to="/contact" className="rmg-model-card group text-center">
              <div className="rmg-model-media flex h-[210px] items-center justify-center rounded-lg bg-[#f4f5f6] p-8">
                <img
                  src={model.image}
                  alt={model.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[17px] font-extrabold leading-tight">
                {model.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f4f4]">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-14">
          <img
            src="/imgi_61_2-292x300.webp"
            alt="iPod repair service"
            className="mx-auto max-h-[320px] w-full object-contain"
          />
          <div>
            <h2 className="text-[27px] font-extrabold leading-tight sm:text-[34px] lg:text-[38px]">
              Reliable iPod repairs with careful testing
            </h2>
            <p className="mt-5 max-w-[720px] text-[15px] leading-relaxed text-[#3a3a3a] sm:text-[16px]">
              iPods are compact devices with sensitive batteries, ports and
              display assemblies. We inspect the fault first and explain the
              most practical repair route.
            </p>
            <p className="mt-4 max-w-[720px] text-[15px] leading-relaxed text-[#3a3a3a] sm:text-[16px]">
              From weak batteries and charging faults to display issues, we
              focus on repairs that restore dependable everyday use.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-6 py-9 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1450px] gap-9 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="flex gap-5">
                <Icon className="mt-2 shrink-0 text-[36px] text-[#fb5c1c]" />
                <div>
                  <h3 className="text-[18px] font-extrabold leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#666]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-14">
        <h2 className="text-[30px] font-extrabold leading-tight sm:text-[38px]">
          <span className="text-[#fb6433]">Our</span> method of repair
        </h2>
        <p className="mx-auto mt-4 max-w-[1050px] text-[15px] leading-relaxed text-[#3a3a3a] sm:text-[16px]">
          We check the fault, inspect key components and test charging, audio,
          display response and battery behavior before the iPod is returned.
        </p>

        <div className="mt-12 grid items-center gap-10 text-left lg:grid-cols-2">
          <div>
            <h3 className="text-[23px] font-extrabold leading-tight">
              Battery and charging faults
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3a3a3a] sm:text-[16px]">
              If your iPod drains quickly, fails to charge or only works while
              plugged in, we test the battery and charging path before repair.
            </p>
          </div>
          <img
            src="/imgi_10_fpdl.in_smartphone-repairman-removing-screws_274689-4838_large.webp"
            alt="iPod battery and charging repair"
            className="h-[220px] w-full object-cover sm:h-[270px]"
          />

          <img
            src="/imgi_7_screen-replacements.webp"
            alt="iPod screen repair"
            className="h-[220px] w-full object-cover sm:h-[270px]"
          />
          <div>
            <h3 className="text-[23px] font-extrabold leading-tight">
              Screen and button repairs
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3a3a3a] sm:text-[16px]">
              We inspect display, touch, home button and audio behavior so the
              device feels practical and reliable again.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
