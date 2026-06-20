import { Link } from "react-router-dom";
import { FaLock, FaRegThumbsUp, FaSearch } from "react-icons/fa";
import FurtherServices from "../FurtherServices";
import { toRepairSlug } from "../../data/repairDetails";

const macModels = [
  { title: "MacBook Air", image: "/imgi_2_macbook-air.webp" },
  { title: "MacBook Pro", image: "/imgi_4_macbook-pro.webp" },
  { title: "iMac", image: "/imgi_4_imac.jpg" },
  { title: "Mac mini", image: "/imgi_5_mac-mini.jpg" },
];

const benefits = [
  {
    title: "No-cost diagnosis",
    text: "We'll inspect your Mac and provide a clear repair quote before any work begins.",
    icon: FaSearch,
  },
  {
    title: "Warranty of 90 Days",
    text: "Our guarantee covers parts and workmanship throughout the first ninety-day period.",
    icon: FaRegThumbsUp,
  },
  {
    title: "Protected Service",
    text: "Your data is treated carefully, and most repairs do not require your password.",
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
        <div className="relative mx-auto max-w-[1280px]">
          <h1 className="text-[40px] font-extrabold leading-tight sm:text-[48px] lg:text-[54px]">
            Mac Repairs
          </h1>
          <p className="mx-auto mt-5 max-w-[1180px] text-[17px] font-medium leading-relaxed text-[#20242c] sm:text-[18px]">
            For almost all models, we provide a wide range of Mac repairs, such
            as screens, batteries, charging ports, storage faults and more.
          </p>
        </div>
      </section>

      <section className="rmg-model-section mx-auto max-w-[1720px] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px]">
            <span className="text-[#fb6433]">Select your</span> Mac model
          </h2>
          <Link
            to="/contact"
            className="text-[16px] font-semibold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
          >
            Need help?
          </Link>
        </div>

        <div className="rmg-model-grid mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {macModels.map((model) => {
            const modelSlug = toRepairSlug(model.title).replace(/-repairs$/, "");
            const hasModelFamily =
              model.title === "MacBook Air" ||
              model.title === "MacBook Pro" ||
              model.title === "iMac" ||
              model.title === "Mac mini";
            const cardLink =
              hasModelFamily
                ? `/model?slug=${modelSlug}`
                : `/detail?slug=${toRepairSlug(model.title)}`;

            return (
              <Link key={model.title} to={cardLink} className="rmg-model-card group text-center">
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
            );
          })}
        </div>
      </section>

      <section className="bg-[#f4f4f4]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-20">
          <img
            src="/imgi_6_fpdl.webp"
            alt="Mac repair service"
            className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[540px]"
          />
          <div>
            <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px] lg:text-[46px]">
              The cornerstone of our company is excellent customer service
            </h2>
            <p className="mt-6 max-w-[760px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Macs are built with compact, premium components, so every repair
              needs careful diagnostics and precise handling. We focus on finding
              the real fault before recommending parts.
            </p>
            <p className="mt-5 max-w-[760px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              From cracked displays and tired batteries to charging, storage and
              performance issues, our repairs are designed to get your Mac back
              to reliable everyday use.
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
          common Mac faults and the methods that protect performance,
          reliability and data.
        </p>

        <div className="mt-16 grid items-center gap-10 text-left lg:grid-cols-2">
          <div>
            <h3 className="text-[30px] font-extrabold leading-tight">
              Screen Changes
            </h3>
            <p className="mt-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Mac display repairs require accurate fitting and careful testing.
              We check brightness, color, camera function, hinges and display
              stability before your device is returned.
            </p>
          </div>
          <img
            src="/imgi_7_screen-replacements.webp"
            alt="Mac screen replacement"
            className="h-[250px] w-full object-cover sm:h-[300px]"
          />

          <img
            src="/imgi_8_battery-replacements.webp"
            alt="Mac battery replacement"
            className="h-[250px] w-full object-cover sm:h-[300px]"
          />
          <div>
            <h3 className="text-[30px] font-extrabold leading-tight">
              Replace Batteries
            </h3>
            <p className="mt-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              If your Mac drains quickly, shuts down early or reports service
              warnings, we test battery health first and fit a reliable
              replacement only when it is needed.
            </p>
          </div>
        </div>
      </section>

      <FurtherServices
        alt="Additional Mac repair services"
        text="We also help with charging ports, keyboards, trackpads, storage upgrades, data recovery, liquid damage checks and logic board faults. Every repair starts with a practical diagnosis."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-20">
          <img
            src="/imgi_8_Apple-Self-Service-Mac-Repair-August-2022-hero.jpg.news_app_ed.webp"
            alt="Mac repair parts"
            className="h-[420px] w-full object-cover"
          />
          <div>
            <h2 className="text-[38px] font-extrabold leading-tight sm:text-[46px]">
              <span className="text-[#fb6433]">How</span> we're different
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              <p>
                We take a measured approach instead of rushing straight to part
                replacement. That means clearer advice, fewer surprises, and a
                repair that suits the actual condition of your Mac.
              </p>
              <p>
                We use quality parts, careful assembly, and final testing so
                your Mac feels dependable again when it leaves our bench.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-16 text-center sm:px-10 lg:px-20 lg:py-20">
        <h2 className="text-[38px] font-extrabold leading-tight sm:text-[48px]">
          <span className="text-[#fb6433]">The</span> Minor Details
        </h2>
        <p className="mx-auto mt-5 max-w-[1460px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
          When repairing a Mac, small details matter. We check screws, brackets,
          connectors, seals, thermals and final performance so the finished
          repair feels professional.
        </p>

        <div className="mt-14 grid items-start gap-12 text-left lg:grid-cols-2">
          <div>
            <img
              src="/imgi_20_Apple-Self-Service-Mac-Repair-August-2022-hero.jpg.news_app_ed-500x500.webp"
              alt="Mac internal repair"
              className="mx-auto h-[360px] w-full object-cover"
            />
            <p className="mt-10 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Internal repairs are handled carefully so connectors, flex cables,
              speakers, cooling parts and fasteners are returned to the correct
              position.
            </p>
          </div>
          <div>
            <img
              src="/imgi_9_gsm2-cta-laptop.webp"
              alt="Mac service support"
              className="mx-auto h-[360px] w-full object-cover"
            />
            <p className="mt-10 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              After repair, we test charging, keyboard or input response,
              display output, performance, ports and battery behavior wherever
              applicable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
