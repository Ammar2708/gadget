import { Link } from "react-router-dom";
import { FaLock, FaRegThumbsUp, FaSearch } from "react-icons/fa";
import FurtherServices from "../FurtherServices";
import { toRepairSlug } from "../../data/repairDetails";

const ipadModels = [
  { title: "iPad Pro", image: "/imgi_2_ipad-pro.webp" },
  { title: "iPad Air", image: "/imgi_3_ipad-air.webp" },
  { title: "iPad", image: "/imgi_4_ipad.webp" },
  { title: "iPad Mini", image: "/imgi_5_ipad-mini.webp" },
];

const benefits = [
  {
    title: "No-cost diagnosis",
    text: "We'll inspect your iPad and provide a clear quote before repair work begins.",
    icon: FaSearch,
  },
  {
    title: "Warranty of 90 Days",
    text: "Our guarantee covers parts and workmanship throughout the first ninety-day period.",
    icon: FaRegThumbsUp,
  },
  {
    title: "Protected Service",
    text: "Your data is treated carefully, and most repairs do not require your passcode.",
    icon: FaLock,
  },
];

const Hero = () => {
  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_78_bgg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/35" />
        <div className="relative mx-auto max-w-[1180px]">
          <h1 className="text-[34px] font-extrabold leading-tight sm:text-[42px] lg:text-[48px]">
            iPad Repairs
          </h1>
          <p className="mx-auto mt-4 max-w-[980px] text-[15px] font-medium leading-relaxed text-[#242833] sm:text-[16px]">
            We provide professional iPad repairs for most models, including
            screens, batteries, charging ports, buttons and software issues.
          </p>
        </div>
      </section>

      <section className="rmg-model-section mx-auto max-w-[1720px] px-6 py-14 sm:px-10 lg:px-20 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[28px] font-extrabold leading-tight sm:text-[36px] lg:text-[40px]">
            <span className="text-[#fb6433]">Select your</span> iPad model
          </h2>
          <Link
            to="/contact"
            className="text-[15px] font-semibold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
          >
            Need help?
          </Link>
        </div>

        <div className="rmg-model-grid mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ipadModels.map((model) => {
            const modelSlug = toRepairSlug(model.title).replace(/-repairs$/, "");

            return (
            <Link
              key={model.title}
              to={
                model.title === "iPad Pro" ||
                model.title === "iPad Air" ||
                model.title === "iPad" ||
                model.title === "iPad Mini"
                  ? `/model?slug=${modelSlug}`
                  : `/detail?slug=${toRepairSlug(model.title)}`
              }
              className="rmg-model-card group text-center"
            >
              <div className="rmg-model-media flex h-[240px] items-center justify-center rounded-xl bg-[#f4f5f6] p-8">
                <img
                  src={model.image}
                  alt={model.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[18px] font-extrabold leading-tight">
                {model.title}
              </h3>
            </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f4f4f4]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-16">
          <img
            src="/imgi_6_fpdl.webp"
            alt="iPad repair service"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
          />
          <div>
            <h2 className="text-[30px] font-extrabold leading-tight sm:text-[38px] lg:text-[42px]">
              Reliable iPad repairs with careful diagnostics
            </h2>
            <p className="mt-5 max-w-[760px] text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              iPads combine large displays, slim frames and sensitive internal
              components, so every repair starts with a careful inspection and a
              clear explanation of the work required.
            </p>
            <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              From cracked glass and weak batteries to charging faults and
              touch issues, we focus on practical repairs that restore reliable
              everyday use.
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
                <Icon className="mt-2 shrink-0 text-[42px] text-[#fb5c1c]" />
                <div>
                  <h3 className="text-[20px] font-extrabold leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#666]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-14 text-center sm:px-10 lg:px-20 lg:py-16">
        <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px]">
          <span className="text-[#fb6433]">Our</span> method of repair
        </h2>
        <p className="mx-auto mt-4 max-w-[1260px] text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
          With experience repairing Apple devices, we understand common iPad
          faults and the repair methods that protect performance, fit and
          reliability.
        </p>

        <div className="mt-14 grid items-center gap-10 text-left lg:grid-cols-2">
          <div>
            <h3 className="text-[26px] font-extrabold leading-tight">
              Screen Changes
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              We check touch response, display brightness, alignment and fit
              after every iPad screen repair so the device feels dependable
              again.
            </p>
          </div>
          <img
            src="/imgi_7_screen-replacements.webp"
            alt="iPad screen replacement"
            className="h-[240px] w-full object-cover sm:h-[290px]"
          />

          <img
            src="/imgi_8_battery-replacements.webp"
            alt="iPad battery replacement"
            className="h-[240px] w-full object-cover sm:h-[290px]"
          />
          <div>
            <h3 className="text-[26px] font-extrabold leading-tight">
              Replace Batteries
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              If your iPad drains quickly, shuts down early or charges
              inconsistently, we test battery health first and recommend the
              right repair.
            </p>
          </div>
        </div>
      </section>

      <FurtherServices
        alt="Additional iPad repair services"
        text="We also help with charging ports, speakers, cameras, buttons, software checks, liquid damage inspections and board-level faults where practical."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-16">
          <img
            src="/imgi_8_Apple-Self-Service-Mac-Repair-August-2022-hero.jpg.news_app_ed.webp"
            alt="iPad repair parts"
            className="h-[380px] w-full object-cover"
          />
          <div>
            <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px]">
              <span className="text-[#fb6433]">How</span> we're different
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              <p>
                We take a measured approach instead of rushing straight to part
                replacement. That means clearer advice and fewer surprises.
              </p>
              <p>
                We use quality parts, careful assembly and final testing so
                your iPad is ready for work, study or entertainment again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-14 text-center sm:px-10 lg:px-20 lg:py-16">
        <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px]">
          <span className="text-[#fb6433]">The</span> Minor Details
        </h2>
        <p className="mx-auto mt-4 max-w-[1320px] text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
          Small details matter on iPad repairs. We check connectors, brackets,
          adhesives, seals and final performance before the device is returned.
        </p>

        <div className="mt-12 grid items-start gap-12 text-left lg:grid-cols-2">
          <div>
            <img
              src="/imgi_20_Apple-Self-Service-Mac-Repair-August-2022-hero.jpg.news_app_ed-500x500.webp"
              alt="iPad internal repair"
              className="mx-auto h-[340px] w-full object-cover"
            />
            <p className="mt-8 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              Internal repairs are handled carefully so cables, screws and
              fittings return to their correct position.
            </p>
          </div>
          <div>
            <img
              src="/imgi_9_gsm2-cta-laptop.webp"
              alt="iPad service support"
              className="mx-auto h-[340px] w-full object-cover"
            />
            <p className="mt-8 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              After repair, we test charging, touch response, display output,
              speakers, cameras and battery behavior wherever applicable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
