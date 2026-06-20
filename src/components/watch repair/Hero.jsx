import { Link } from "react-router-dom";
import { FaLock, FaRegThumbsUp, FaSearch } from "react-icons/fa";
import FurtherServices from "../FurtherServices";
import { toRepairSlug } from "../../data/repairDetails";

const watchModels = [
  { title: "Series 8", image: "/imgi_2_0d37ac7f9c687c2804f49b1b0859a5a306a8e73f-1280x1280.webp" },
  { title: "SE (2nd Generation)", image: "/imgi_3_38a484c26587a189289a1459ac32550c54db1d10-1280x1280-1.webp" },
  { title: "Series 7", image: "/imgi_4_8432f86326e7ef4baeb7dd7be30d0a63f3be752d-1280x1280-1.webp" },
  { title: "Series 6", image: "/imgi_5_e6e54ad90ffe889d2b2aca4d717bb78d2ac6d6ad-1280x1280-1.webp" },
  { title: "SE (1st Generation)", image: "/imgi_6_842d1f4195b835cc8c648c8841772fcc2fbf1a90-1280x1280-1.webp" },
  { title: "Series 5", image: "/imgi_7_38004389e4a2b31143f3e118367b26136b306439-1280x1280-1.webp" },
  { title: "Series 4", image: "/imgi_8_ca299d63eb794fd0d9e2e864580ac7c1e452e2fa-1280x1280-1.webp" },
  { title: "Series 3", image: "/imgi_9_5eb6e65e2f3ca56ef2ddeadafe4aa9c0ecad9000-1280x1280-1.webp" },
];

const benefits = [
  {
    title: "No-cost diagnosis",
    text: "We'll provide a free diagnostic for your watch and a clear repair quote before any work starts.",
    icon: FaSearch,
  },
  {
    title: "Warranty of 90 Days",
    text: "Our guarantee covers parts and workmanship throughout the first ninety-day period.",
    icon: FaRegThumbsUp,
  },
  {
    title: "Protected Service",
    text: "Your data stays private because most Apple Watch repairs do not require account access.",
    icon: FaLock,
  },
];

const Hero = () => {
  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[330px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_78_bgg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative mx-auto max-w-[1320px]">
          <h1 className="text-[40px] font-extrabold leading-tight sm:text-[48px] lg:text-[54px]">
            Fixing Apple Watches
          </h1>
          <p className="mx-auto mt-5 max-w-[1240px] text-[17px] font-medium leading-relaxed text-[#20242c] sm:text-[18px]">
            For almost all models, we provide a wide range of Apple Watch
            repairs, including screens, batteries, charging faults, buttons and
            more.
          </p>
        </div>
      </section>

      <section className="rmg-model-section mx-auto max-w-[1720px] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px]">
            <span className="text-[#fb6433]">Select your</span> Apple Watch model
          </h2>
          <Link
            to="/contact"
            className="text-[16px] font-semibold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
          >
            Need help?
          </Link>
        </div>

        <div className="rmg-model-grid mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {watchModels.map((model) => (
            <Link
              key={model.title}
              to={`/detail?slug=${toRepairSlug(model.title)}`}
              className="rmg-model-card group text-center"
            >
              <div className="rmg-model-media flex h-[260px] items-center justify-center rounded-xl bg-[#f4f5f6] p-8">
                <img
                  src={model.image}
                  alt={model.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[19px] font-extrabold leading-tight">
                {model.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f4f4]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-20">
          <img
            src="/imgi_10_fpdl.in_smartphone-repairman-removing-screws_274689-4838_large.webp"
            alt="Technician repairing a device"
            className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[540px]"
          />
          <div>
            <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px] lg:text-[46px]">
              Our company's core competency is offering top-notch customer service
            </h2>
            <p className="mt-6 max-w-[760px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Apple Watches are compact, delicate devices, so every repair needs
              careful handling. We focus on reliable diagnostics, precise fitting,
              and quality replacement parts.
            </p>
            <p className="mt-5 max-w-[760px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Whether your watch has a cracked screen, poor battery life, charging
              issues or button problems, our team will help bring it back to
              dependable working condition.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-6 py-9 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="flex gap-6">
                <Icon className="mt-2 shrink-0 text-[46px] text-[#fb5c1c]" />
                <div>
                  <h3 className="text-[22px] font-extrabold leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#666]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-16 text-center sm:px-10 lg:px-20 lg:py-20">
        <h2 className="text-[38px] font-extrabold leading-tight sm:text-[48px]">
          <span className="text-[#fb6433]">Our</span> method of repair
        </h2>
        <p className="mx-auto mt-5 max-w-[1420px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
          With years of experience repairing Apple devices, we understand the
          common Watch faults and the repair methods that protect long-term
          performance.
        </p>

        <div className="mt-16 grid items-center gap-10 text-left lg:grid-cols-2">
          <div>
            <h3 className="text-[30px] font-extrabold leading-tight">
              Screen Changes
            </h3>
            <p className="mt-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              A cracked Apple Watch display needs accurate fitting and careful
              sealing. We use quality screen assemblies and test touch response,
              brightness, and display performance before completion.
            </p>
          </div>
          <img
            src="/imgi_11_screen-replacements.webp"
            alt="Screen replacement"
            className="h-[250px] w-full object-cover sm:h-[300px]"
          />

          <img
            src="/imgi_12_battery-replacements.webp"
            alt="Battery replacement"
            className="h-[250px] w-full object-cover sm:h-[300px]"
          />
          <div>
            <h3 className="text-[30px] font-extrabold leading-tight">
              Replace Batteries
            </h3>
            <p className="mt-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              If your Apple Watch drains quickly or struggles to hold charge, we
              diagnose battery health first, then fit a reliable replacement when
              it is the right repair.
            </p>
          </div>
        </div>
      </section>

      <FurtherServices
        alt="Additional Apple Watch repair services"
        text="We can help with charging faults, button issues, software-related problems and water exposure checks. Our aim is to diagnose the actual issue before recommending parts."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-20">
          <img
            src="/imgi_8_about-further.webp"
            alt="Phone charging"
            className="h-[420px] w-full object-cover"
          />
          <div>
            <h2 className="text-[38px] font-extrabold leading-tight sm:text-[46px]">
              <span className="text-[#fb6433]">How</span> we're different
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              <p>
                We do not rush delicate repairs or hide poor-quality parts behind
                low prices. Each Apple Watch is inspected carefully before and
                after the repair.
              </p>
              <p>
                We focus on fit, function, seals, and final testing so your watch
                feels dependable again when it leaves our bench.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
