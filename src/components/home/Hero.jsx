import { Link } from "react-router-dom";
import { FaLock, FaRegThumbsUp, FaSearch } from "react-icons/fa";

const devices = [
  { title: "iPhone Repairs", image: "/imgi_2_iphone.webp", path: "/iphone repair" },
  { title: "iPad Repairs", image: "/imgi_3_ipad-pro.webp", path: "/ipad repair" },
  { title: "Mac Repairs", image: "/imgi_4_macbook-pro.webp", path: "/mac repair" },
  { title: "iPod Repairs", image: "/imgi_5_ipod-touch.webp", path: "/ipod repair" },
  { title: "Apple Watch", image: "/imgi_6_0d37ac7f9c687c2804f49b1b0859a5a306a8e73f-1280x1280.webp", path: "/watch repair" },
  { title: "Samsung Repairs", image: "/imgi_7_samsung-repairs.webp", path: "/samsung repairs" },
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
    text: "Your data is kept private and safe because we don't need your passcode for most fixes.",
    icon: FaLock,
  },
];

const Hero = () => {
  return (
    <div className="bg-white text-[#171a23]">
      <section className="home-hero-stage relative min-h-[600px] w-full overflow-hidden bg-[#FCFCFC] px-0 py-0 sm:min-h-[650px] lg:min-h-[690px]">
        <style>
          {`
            @keyframes rmgHeroRise {
              from { opacity: 0; transform: translate3d(0, 20px, 0) scale(0.96); }
              to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
            }

            @keyframes rmgHeroDrift {
              0%, 100% { transform: translate3d(0, 0, 0) rotate(var(--hero-rotate, 0deg)); }
              50% { transform: translate3d(0, -8px, 0) rotate(var(--hero-rotate, 0deg)); }
            }

            .home-hero-device {
              animation: rmgHeroRise 0.7s ease both, rmgHeroDrift 5.5s ease-in-out 0.75s infinite;
            }

            .home-hero-copy {
              animation: rmgHeroRise 0.7s ease 0.12s both;
            }

            @media (max-width: 639px) {
              .home-hero-stage {
                min-height: 590px !important;
                padding: 1rem 1rem 2rem !important;
              }

              .home-hero-ipad,
              .home-hero-laptop,
              .home-hero-phone,
              .home-hero-console {
                display: block !important;
                position: absolute !important;
              }

              .home-hero-ipad {
                left: 12%;
                top: 4.9rem;
                width: 31%;
              }

              .home-hero-laptop {
                right: 11%;
                top: 4.6rem;
                width: 28%;
              }

              .home-hero-phone {
                left: 13%;
                bottom: 8.6rem;
                width: 30%;
              }

              .home-hero-console {
                right: 12%;
                bottom: 8.8rem;
                width: 27%;
              }

              .home-hero-copy {
                min-height: 430px !important;
                justify-content: center !important;
                padding-top: 3.35rem !important;
              }

              .home-hero-title {
                font-size: clamp(2.15rem, 12.5vw, 3.35rem) !important;
                line-height: 0.86 !important;
              }

              .home-hero-pills {
                grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
                gap: 0.35rem !important;
                width: min(100%, 20.5rem) !important;
                max-width: 20.5rem !important;
                margin-top: 1.05rem !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
              }

              .home-hero-pill {
                height: 1.65rem !important;
                min-width: 0 !important;
                padding: 0 0.35rem !important;
                font-size: 0.72rem !important;
                font-weight: 700 !important;
                line-height: 1 !important;
                white-space: nowrap !important;
                box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2) !important;
              }
            }
          `}
        </style>

        <div className="home-hero-device home-hero-ipad absolute left-[9%] top-[8%] hidden w-[clamp(230px,18vw,340px)] sm:block [--hero-rotate:-2deg]">
          <img
            src="/WhatsApp%20Image%202026-06-08%20at%203.10.58%20PM.jpeg"
            alt="iPad repair"
            className="w-full object-contain"
          />
        </div>

        <div className="home-hero-device home-hero-laptop absolute right-[11%] top-[9%] hidden w-[clamp(200px,14vw,270px)] md:block [--hero-rotate:3deg] [animation-delay:0.1s]">
          <img
            src="/WhatsApp%20Image%202026-06-08%20at%203.13.35%20PM.jpeg"
            alt="MacBook repair"
            className="w-full object-contain"
          />
        </div>

        <div className="home-hero-device home-hero-phone absolute bottom-[4%] left-[8%] w-[clamp(190px,19vw,330px)] [--hero-rotate:-3deg] [animation-delay:0.2s]">
          <img
            src="/WhatsApp%20Image%202026-06-08%20at%203.05.12%20PM%20(1).jpeg"
            alt="iPhone repair"
            className="w-full object-contain"
          />
        </div>

        <div className="home-hero-device home-hero-console absolute bottom-[4%] right-[11%] hidden w-[clamp(210px,17vw,330px)] sm:block [--hero-rotate:4deg] [animation-delay:0.3s]">
          <img
            src="/WhatsApp%20Image%202026-06-08%20at%203.05.12%20PM.jpeg"
            alt="Console repair"
            className="w-full object-contain"
          />
        </div>

        <div className="home-hero-copy relative z-10 mx-auto flex min-h-[600px] max-w-[700px] flex-col items-center justify-center pt-5 text-center sm:min-h-[650px] lg:min-h-[690px]">
          <h1 className="home-hero-title text-[44px] font-medium leading-[0.86] tracking-normal text-black sm:text-[76px] lg:text-[96px] xl:text-[112px]">
            <span className="block text-[0.62em] font-normal">
              Trouble-Free
            </span>
            <span className="block font-semibold">Repairs</span>
          </h1>
          <div className="home-hero-pills mt-8 grid w-full max-w-[560px] grid-cols-2 gap-3 px-10 sm:grid-cols-4 sm:gap-3 sm:px-0">
            {["Laptops", "Phones", "Consoles", "iPads"].map((label) => (
              <span
                key={label}
                className="home-hero-pill flex h-7 items-center justify-center rounded-full bg-black px-5 text-[13px] font-medium text-white shadow-[0_2px_4px_rgba(0,0,0,0.18)] sm:h-7 sm:text-[15px]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <h2 className="text-center text-[34px] font-extrabold leading-tight sm:text-[42px]">
          Devices We Repair
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {devices.map((device) => (
            <Link
              key={device.title}
              to={device.path}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-[#f3f6f6] shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-[250px] items-center justify-center p-8">
                <img
                  src={device.image}
                  alt={device.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#171719] px-4 py-5 text-center">
                <span className="text-[18px] font-semibold text-white">
                  {device.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1720px] items-center gap-10 px-6 py-18 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:px-20 lg:py-24">
        <div className="overflow-hidden">
          <img
            src="/imgi_8_Apple-Self-Service-Mac-Repair-August-2022-hero.jpg.news_app_ed.webp"
            alt="Technician repairing an Apple device"
            className="h-full min-h-[260px] w-full object-cover sm:min-h-[420px]"
          />
        </div>

        <div className="max-w-[700px]">
          <p className="mb-6 text-[18px] font-medium uppercase tracking-wide text-black">
            Overview
          </p>
          <h1 className="text-[42px] font-extrabold leading-[1.08] text-[#171a23] sm:text-[52px] lg:text-[58px]">
            <span className="text-[#ff6534]">Our firm</span> is built on
            providing excellent customer service.
          </h1>
          <p className="mt-6 text-[18px] font-normal leading-relaxed text-[#353535] sm:text-[19px]">
            Let's be sincere. There are several choices available when it comes
            to apple repair services. People rely more than ever on their mobile
            gadgets in the modern environment. <strong>Repair My Gadget</strong>{" "}
            offers quick, high-quality repairs to those in need. We can fix
            almost everything thanks to our extensive experience repairing Apple
            devices.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-12 sm:px-10 lg:px-20 lg:py-16">
        <p className="mb-6 text-[18px] font-medium uppercase tracking-wide text-black">
          Overview
        </p>
        <h2 className="text-[34px] font-extrabold leading-tight sm:text-[42px] lg:text-[48px]">
          <span className="text-[#ff6534]">Things</span> We Provide
        </h2>
        <p className="mt-6 max-w-[1500px] text-[18px] leading-relaxed text-[#353535] sm:text-[19px]">
          <strong>Repair My Gadget</strong> provides a wide range of Apple repair
          services for any Apple product. This indicates that we can handle
          almost any problem you might encounter. Learn more about the repairs we
          perform most frequently.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <img
            src="/imgi_10_11.webp"
            alt="Apple computer repair parts"
            className="h-[360px] w-full rounded-md bg-[#e6e8e8] object-contain sm:h-[480px]"
          />
          <img
            src="/imgi_11_2.webp"
            alt="Cracked iPhone repair"
            className="h-[360px] w-full rounded-md bg-[#e6e8e8] object-cover sm:h-[480px]"
          />
        </div>

        <div className="mt-16 grid gap-10 text-[18px] leading-relaxed text-[#353535] lg:grid-cols-2 lg:text-[19px]">
          <p>
            Accidents sometimes happen, and we can assist if you have managed to
            fracture the screen of your gadget. We replace screens on almost all
            Apple products, including MacBooks, iPads, iPhones, and more. Most
            common device displays are kept in stock so that we can provide quick
            repairs.
          </p>
          <p>
            The functioning of batteries and associated devices is dependent on
            several factors, as batteries are a sophisticated technological
            system. If you think the performance of your battery is decreasing,
            we may do tests to determine its capacity and state of health.
          </p>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-6 py-9 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="flex gap-6">
                <Icon className="mt-2 shrink-0 text-[48px] text-[#fb5c1c]" />
                <div>
                  <h3 className="text-[22px] font-extrabold leading-tight text-[#171a23]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#444]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#eef1fb]">
        <div className="mx-auto grid max-w-[1800px] items-center gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[0.9fr_1fr_0.8fr] lg:px-20">
          <img
            src="/imgi_9_gsm2-cta-laptop.webp"
            alt="Laptop repair"
            className="mx-auto max-h-[250px] object-contain"
          />

          <div>
            <h2 className="text-[38px] font-extrabold leading-tight sm:text-[46px]">
              <span className="text-[#ff6534]">Locate</span> your fix
            </h2>
            <p className="mt-5 max-w-[620px] text-[17px] leading-relaxed text-[#333] sm:text-[18px]">
              To make sure we have the components in stock to fix your device,
              find the appropriate repair for it and select your preferred
              booking method, time, and date.
            </p>
          </div>

          <div className="text-center">
            <a
              href="tel:01932844494"
              className="text-[34px] font-extrabold text-[#333] sm:text-[40px]"
            >
              01932 844494
            </a>
            <div className="my-7 flex items-center justify-center gap-7 text-[20px] font-bold text-[#333]">
              <span className="h-px w-28 bg-[#333]" />
              <span>or</span>
              <span className="h-px w-28 bg-[#333]" />
            </div>
            <Link
              to="/All"
            className="inline-flex w-full justify-center bg-[#fb5c1c] px-9 py-4 text-[17px] font-bold text-white transition-colors duration-200 hover:bg-[#df4a10] min-[420px]:w-auto min-[420px]:min-w-[240px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
