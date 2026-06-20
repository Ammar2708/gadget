import { Link } from "react-router-dom";
import { FaLock, FaRegThumbsUp, FaSearch } from "react-icons/fa";
import FurtherServices from "../FurtherServices";
import { toRepairSlug } from "../../data/repairDetails";

const iphoneModels = [
  {
    title: "iPhone 17 Pro Max",
    image: "/imgi_40_iphone_17_pro_max_silver_pdp_image_position_1__en-in.webp",
  },
  { title: "iPhone 17 Pro", image: "/imgi_40_iphone_17_pro_max_silver_pdp_image_position_1__en-in.webp" },
  { title: "iPhone 17", image: "/imgi_39_IMG-18071437_m_jpeg_1.webp" },
  { title: "iPhone Air", image: "/imgi_41_iPhone_17_Air_SpaceBlack_Grid_394ec352-dd77-4290-9e0f-3d7974b6f5f3.webp" },
  { title: "iPhone 16 Pro Max", image: "/imgi_107_iPhone12ProMaxGraphile_1800x.webp" },
  { title: "iPhone 16 Pro", image: "/imgi_40_iphone_17_pro_max_silver_pdp_image_position_1__en-in.webp" },
  { title: "iPhone 16", image: "/imgi_41_iPhone_17_Air_SpaceBlack_Grid_394ec352-dd77-4290-9e0f-3d7974b6f5f3.webp" },
  { title: "iPhone 15 Pro Max", image: "/imgi_107_iPhone12ProMaxGraphile_1800x.webp" },
  { title: "iPhone 15 Pro", image: "/imgi_101_iPhone12ProMaxGraphile_1800x-1536x1536.webp" },
  { title: "iPhone 15", image: "/imgi_39_IMG-18071437_m_jpeg_1.webp" },
  { title: "iPhone 14 Pro Max", image: "/img1.png" },
  { title: "iPhone 14 Pro", image: "/img2.png" },
  { title: "iPhone 14 Plus", image: "/img3.png" },
  { title: "iPhone 14", image: "/img4.png" },
  { title: "iPhone 13 mini", image: "/img5.png" },
  { title: "iPhone 12 Pro Max", image: "/img6.png" },
  { title: "iPhone 12 Pro", image: "/img7.png" },
  { title: "iPhone 12", image: "/img8.png" },
  { title: "iPhone 12 mini", image: "/img8.png" },
  { title: "iPhone 11 Pro Max", image: "/img9.png" },
  { title: "iPhone 11 Pro", image: "/img10.png" },
  { title: "iPhone 11", image: "/imgi_260_249852_0_snn6go-2048x2048.webp" },
  { title: "iPhone XS Max", image: "/img11.png" },
  { title: "iPhone XS", image: "/img11.png" },
  { title: "iPhone XR", image: "/imgi_260_249852_0_snn6go-2048x2048.webp" },
  { title: "iPhone X", image: "/img11.png" },
  { title: "iPhone SE", image: "/img12.png" },
  { title: "iPhone SE (2nd Generation)", image: "/imgi_270_iPhone_SE3_Starlight_PDP_Image_Position-1A__en-US_5eeddc15-3457-4154-ad71-fea2ea8bbd74-2048x2048.webp" },
  { title: "iPhone SE (1st Generation)", image: "/imgi_225_iphone6-gray-1_ec79ea99-6789-4c09-9afc-a929933583ef.webp" },
  { title: "iPhone 8 Plus", image: "/imgi_240_apple-iphone-7-black.webp" },
  { title: "iPhone 8", image: "/imgi_240_apple-iphone-7-black.webp" },
  { title: "iPhone 7 Plus", image: "/imgi_240_apple-iphone-7-black.webp" },
  { title: "iPhone 7", image: "/imgi_240_apple-iphone-7-black.webp" },
  { title: "iPhone 6S Plus", image: "/imgi_225_iphone6-gray-1_ec79ea99-6789-4c09-9afc-a929933583ef.webp" },
  { title: "iPhone 6S", image: "/imgi_225_iphone6-gray-1_ec79ea99-6789-4c09-9afc-a929933583ef.webp" },
  { title: "iPhone 6 Plus", image: "/imgi_225_iphone6-gray-1_ec79ea99-6789-4c09-9afc-a929933583ef.webp" },
  { title: "iPhone 6", image: "/img14.png" },
];

const benefits = [
  {
    title: "No-cost diagnosis",
    text: "We'll inspect your iPhone and provide a clear quote before any repair work begins.",
    icon: FaSearch,
  },
  {
    title: "Warranty of 90 Days",
    text: "Our guarantee covers parts and workmanship throughout the first ninety-day period.",
    icon: FaRegThumbsUp,
  },
  {
    title: "Protected Service",
    text: "Your data is handled carefully, and most repairs do not require your passcode.",
    icon: FaLock,
  },
];

const Hero = () => {
  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_48_bgg.webp')" }}
      >
        <div className="absolute inset-0 bg-white/45" />
        <div className="relative mx-auto max-w-[1120px]">
          <h1 className="text-[34px] font-extrabold leading-tight sm:text-[40px] lg:text-[46px]">
            iPhone Repairs
          </h1>
          <p className="mx-auto mt-4 max-w-[900px] text-[15px] font-medium leading-relaxed text-[#252936] sm:text-[16px]">
            We offer reliable iPhone repairs for screens, batteries, charging
            ports, cameras and common faults across most models.
          </p>
        </div>
      </section>

      <section className="rmg-model-section mx-auto max-w-[1720px] px-6 py-14 sm:px-10 lg:px-20 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[28px] font-extrabold leading-tight sm:text-[36px] lg:text-[40px]">
            <span className="text-[#fb6433]">Select your</span> iPhone model
          </h2>
          <Link
            to="/contact"
            className="text-[15px] font-semibold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
          >
            Need help?
          </Link>
        </div>

        <div className="rmg-model-grid mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {iphoneModels.map((model) => (
            <Link
              key={model.title}
              to={`/detail?slug=${toRepairSlug(model.title)}`}
              className="rmg-model-card group text-center"
            >
              <div className="rmg-model-media flex h-[250px] items-center justify-center rounded-lg bg-[#f4f5f6] p-8">
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
          ))}
        </div>
      </section>

      <section className="bg-[#f4f4f4]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-16">
          <img
            src="/imgi_6_fpdl.webp"
            alt="iPhone repair service"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
          />
          <div>
            <h2 className="text-[30px] font-extrabold leading-tight sm:text-[38px] lg:text-[42px]">
              Excellent client service is the foundation of our company
            </h2>
            <p className="mt-5 max-w-[760px] text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              iPhones are used all day, so a repair needs to feel dependable
              once the device is back in your hand. We focus on careful
              diagnosis, clean fitting and quality components.
            </p>
            <p className="mt-4 max-w-[760px] text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              From cracked glass and weak batteries to charging faults and
              speaker issues, every job is tested before collection.
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
          We inspect the fault first, explain the practical repair options and
          complete final checks for fit, charging, display response and everyday
          usability.
        </p>

        <div className="mt-14 grid items-center gap-10 text-left lg:grid-cols-2">
          <div>
            <h3 className="text-[26px] font-extrabold leading-tight">
              Screen Changes
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              Screen repairs are checked for touch response, brightness,
              alignment and secure fitting so the phone feels natural to use
              again.
            </p>
          </div>
          <img
            src="/imgi_11_screen-replacements.webp"
            alt="iPhone screen replacement"
            className="h-[240px] w-full object-cover sm:h-[290px]"
          />

          <img
            src="/imgi_12_battery-replacements.webp"
            alt="iPhone battery replacement"
            className="h-[240px] w-full object-cover sm:h-[290px]"
          />
          <div>
            <h3 className="text-[26px] font-extrabold leading-tight">
              Replace Batteries
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              If your iPhone drains quickly or shuts down early, we test battery
              health and charging behavior before recommending replacement.
            </p>
          </div>
        </div>
      </section>

      <FurtherServices
        alt="Additional iPhone repair services"
        text="We also help with charging ports, speakers, cameras, back glass, data recovery, liquid damage inspections and board-level faults where practical."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-16">
          <img
            src="/imgi_10_fpdl.in_smartphone-repairman-removing-screws_274689-4838_large.webp"
            alt="iPhone internal repair"
            className="h-[360px] w-full object-cover sm:h-[420px]"
          />
          <div>
            <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px]">
              <span className="text-[#fb6433]">How</span> we're different
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              <p>
                We use a measured repair process instead of rushing straight to
                part replacement. That gives you clearer advice and fewer
                surprises.
              </p>
              <p>
                Each device is reassembled carefully and tested after repair so
                the result feels reliable, clean and ready for daily use.
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
          Small details matter on iPhone repairs. We check connectors, brackets,
          seals, cameras, buttons, charging and final performance before the
          device is returned.
        </p>

        <div className="mt-12 grid items-start gap-12 text-left lg:grid-cols-2">
          <div>
            <img
              src="/imgi_47_about-further-1200x1200-1-800x800.jpg"
              alt="iPhone parts and repair detail"
              className="mx-auto h-[340px] w-full object-cover"
            />
            <p className="mt-8 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              Internal parts are handled carefully so cables, screws and
              fittings return to their correct position.
            </p>
          </div>
          <div>
            <img
              src="/iphone-minor-details-tools-alt.jpg"
              alt="Detailed iPhone repair"
              className="mx-auto h-[340px] w-full object-cover"
            />
            <p className="mt-8 text-[16px] leading-relaxed text-[#3a3a3a] sm:text-[17px]">
              After repair, we test the features affected by the fault so you
              can leave with confidence.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
