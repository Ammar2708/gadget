import { Link } from "react-router-dom";
import { FaLock, FaRegThumbsUp, FaSearch } from "react-icons/fa";
import { toRepairSlug } from "../../data/repairDetails";

const models = [
  {
    title: "Galaxy Flip & Fold series",
    image: "/imgi_2_Galaxy Flip & Fold series-1280x1280.webp",
  },
  {
    title: "Galaxy S series",
    image: "/imgi_3_Galaxy S series-1280x1280.webp",
  },
  {
    title: "Galaxy Note series",
    image: "/imgi_4_Galaxy Note series.webp",
  },
  {
    title: "Galaxy A series",
    image: "/imgi_5_Galaxy A series.webp",
  },
];

const benefits = [
  {
    title: "No-cost diagnosis",
    text: "We'll provide a free diagnostic for your equipment and a free repair quote without any strings attached.",
    icon: FaSearch,
  },
  {
    title: "Warranty of 90 Days",
    text: "Our guarantee covers any part flaws or workmanship throughout the first ninety-day period.",
    icon: FaRegThumbsUp,
  },
  {
    title: "Protected Service",
    text: "Your data is kept private and safe because we don't need your passcode for the majority of our fixes.",
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
            Samsung Repairs
          </h1>
          <p className="mx-auto mt-5 max-w-[1180px] text-[17px] font-medium leading-relaxed text-[#20242c] sm:text-[18px]">
            We offer a large selection of Samsung repairs including screens,
            batteries, charging ports and more for nearly all models.
          </p>
        </div>
      </section>

      <section className="rmg-model-section mx-auto max-w-[1720px] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px]">
            <span className="text-[#fb6433]">Select your</span> Samsung model
          </h2>
          <Link
            to="/contact"
            className="text-[16px] font-semibold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
          >
            Need help?
          </Link>
        </div>

        <div className="rmg-model-grid mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => {
            const modelSlug = toRepairSlug(model.title).replace(/-repairs$/, "");
            const hasModelFamily =
              model.title === "Galaxy Flip & Fold series" ||
              model.title === "Galaxy S series" ||
              model.title === "Galaxy Note series" ||
              model.title === "Galaxy A series";
            const cardLink = hasModelFamily
              ? `/model?slug=${modelSlug}`
              : `/detail?slug=${toRepairSlug(model.title)}`;

            return (
              <Link
                key={model.title}
                to={cardLink}
                className="rmg-model-card group block text-center"
              >
                <div className="rmg-model-media flex h-[260px] items-end justify-center">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-8 text-[19px] font-extrabold leading-tight">
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
            src="/imgi_6_Samsung-repairs.jpg"
            alt="Samsung phone repair"
            className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[540px]"
          />
          <div>
            <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px] lg:text-[46px]">
              Excellent client service is the foundation of our company
            </h2>
            <p className="mt-6 max-w-[760px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Get expert Samsung phone repair services right here. We specialize
              in fixing cracked screens, faulty batteries, software glitches and
              more. Our certified technicians use high-quality parts to restore
              your device to top condition.
            </p>
            <p className="mt-5 max-w-[760px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Enjoy fast repairs, competitive pricing, and reliable service.
              Trust us to get your Samsung phone working like new again.
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
          With over a decade of experience repairing Samsung devices, we've
          gained extensive knowledge about functionality, common issues across
          different models, and the most effective repair techniques.
        </p>

        <div className="mt-16 grid items-center gap-10 text-left lg:grid-cols-2">
          <div>
            <h3 className="text-[30px] font-extrabold leading-tight">
              Screen Changes
            </h3>
            <p className="mt-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              The most common Samsung repair we handle is screen replacement. We
              keep displays for popular models in stock and use original-quality
              components to preserve brightness, color, and full functionality.
            </p>
          </div>
          <img
            src="/imgi_7_screen-replacements.jpg"
            alt="Cracked Samsung screen"
            className="h-[250px] w-full object-cover sm:h-[300px]"
          />

          <img
            src="/imgi_8_screen-replacements.webp"
            alt="Samsung battery replacement"
            className="h-[250px] w-full object-cover sm:h-[300px]"
          />
          <div>
            <h3 className="text-[30px] font-extrabold leading-tight">
              Replace Batteries
            </h3>
            <p className="mt-5 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              We test Samsung batteries carefully before recommending
              replacement. When a new battery is needed, we use quality cells and
              precise fitting methods so your replacement performs reliably.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-20">
          <div>
            <h2 className="text-[34px] font-extrabold leading-tight">
              Further Services
            </h2>
            <p className="mt-6 max-w-[760px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Our experience has allowed us to broaden the range of Samsung
              repair services we offer, including data recovery, motherboard
              repairs, and liquid damage restoration.
            </p>
          </div>
          <img
            src="/imgi_10_about-further-1200x1200-1.jpg"
            alt="Samsung phone components"
            className="mx-auto max-h-[420px] w-full object-contain"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-16 text-center sm:px-10 lg:px-20 lg:py-20">
        <h2 className="text-[38px] font-extrabold leading-tight sm:text-[48px]">
          <span className="text-[#fb6433]">The</span> Minor Details
        </h2>
        <p className="mx-auto mt-5 max-w-[1460px] text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
          When fixing a device that costs a lot to buy, you should never have to
          rely on cheap parts or shortcuts. We focus on original-quality
          components, correct fitting, and careful finishing details.
        </p>

        <div className="mt-14 grid items-start gap-12 text-left lg:grid-cols-2">
          <div>
            <img
              src="/imgi_11_7d3ea32f601b45ab833bdde8e082d746_samsungs.png"
              alt="Damaged Samsung phones"
              className="mx-auto max-h-[520px] w-full object-contain"
            />
            <p className="mt-10 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              We repair back glass and structural issues with attention to
              alignment, seals, wireless charging components, and future water
              resistance.
            </p>
          </div>
          <div>
            <img
              src="/imgi_7_samsung-repairs.webp"
              alt="Samsung repair service"
              className="mx-auto max-h-[520px] w-full object-contain"
            />
            <p className="mt-10 text-[17px] leading-relaxed text-[#3a3a3a] sm:text-[18px]">
              Our replacement displays support key features such as adaptive
              brightness and accurate color. Every device is handled with
              precision from disassembly to final checks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
