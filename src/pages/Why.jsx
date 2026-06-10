import { Link } from "react-router-dom";

const shopPoints = [
  "New phones from trusted brands including Apple, Samsung and Google.",
  "Used phones carefully inspected, tested and prepared for everyday use.",
  "Competitive pricing without compromising on product quality.",
];

const buyUsedPoints = [
  "Eco-friendly choice that helps reduce electronic waste.",
  "Budget-friendly savings compared with buying a brand-new phone.",
  "Warranty-backed purchases for added peace of mind.",
  "Friendly support to help you choose the right device.",
];

const assuranceItems = [
  {
    title: "Rigorous Testing and Inspection",
    text: "Every used phone goes through a detailed inspection covering display, touch response, buttons, ports, cameras, battery health, software stability and network compatibility.",
  },
  {
    title: "Battery Life",
    text: "Battery performance is checked carefully. Where needed, we advise replacement options before a device is sold.",
  },
  {
    title: "Cosmetic Grading",
    text: "Devices are graded clearly, from near-new condition to visible everyday wear, so you know exactly what to expect.",
  },
  {
    title: "Certified Unlocking",
    text: "Used phones are factory unlocked or professionally unlocked where applicable, helping ensure they are ready for compatible carriers.",
  },
  {
    title: "30-Day Warranty",
    text: "Every used phone includes warranty support for hardware or software issues within the stated period.",
  },
];

const disputeItems = [
  {
    title: "Contact Us",
    text: "Tell our customer service team what happened. We will ask for the device details and attempt to resolve the issue through clear troubleshooting.",
  },
  {
    title: "Device Evaluation",
    text: "If further inspection is required, we may ask you to send or bring the device back so our technicians can identify the cause.",
  },
  {
    title: "Resolution Options",
    text: "Depending on the evaluation, we may repair the device, offer a suitable replacement, or issue a refund where appropriate.",
  },
  {
    title: "No Hassle Returns",
    text: "If you are not satisfied, eligible returns are handled clearly and quickly, provided the phone is returned in the same condition.",
  },
];

const AccentTitle = ({ children, accent }) => (
  <h2 className="text-center text-[24px] font-extrabold leading-tight text-[#171a23] sm:text-[28px]">
    {children} <span className="text-[#fb6433]">{accent}</span>
  </h2>
);

const Why = () => {
  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[310px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_8_about-further.webp')" }}
      >
        <div className="absolute inset-0 bg-[#eef1fb]/82" />
        <div className="relative z-10 mx-auto max-w-[900px]">
          <h1 className="text-[38px] font-extrabold leading-tight text-black sm:text-[48px] lg:text-[56px]">
            Why Refurbished?
          </h1>
          <p className="mt-5 text-[15px] font-medium leading-relaxed text-[#252b33] sm:text-[17px]">
            Shop confidently with certified refurbished products, clear support
            and warranty-backed peace of mind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-16 text-center sm:px-10 lg:px-20 lg:py-20">
        <h2 className="text-[23px] font-extrabold leading-tight text-[#171a23] sm:text-[27px]">
          Welcome to <span className="text-[#fb6433]">Repair My Gadget</span> -
          Your Trusted Source for New and Used Phones
        </h2>
        <p className="mx-auto mt-5 max-w-[1580px] text-[15px] leading-relaxed text-[#3d3d3d] sm:text-[17px]">
          We provide a wide range of mobile phones, whether you are looking for
          the latest models or high-quality pre-owned devices. Our goal is to
          make premium technology accessible with new, used and refurbished
          phones at competitive prices.
        </p>
      </section>

      <section className="bg-[#f3f3f3] px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-2">
          <div>
            <AccentTitle accent="Us?">Why Shop with</AccentTitle>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#707b84] sm:text-[16px]">
              {shopPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#707b84]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/imgi_14_2147950533.webp"
            alt="Customer holding a phone"
            className="h-[360px] w-full object-cover sm:h-[420px]"
          />
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-6 py-8 sm:px-10 lg:px-20 lg:py-12">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-2">
          <img
            src="/imgi_19_2148115658.webp"
            alt="People comparing used phones"
            className="h-[360px] w-full object-cover sm:h-[420px]"
          />

          <div>
            <AccentTitle accent="From Us?">Why Buy Used Phones</AccentTitle>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#707b84] sm:text-[16px]">
              {buyUsedPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#707b84]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-6 py-14 sm:px-10 lg:px-20 lg:py-18">
        <div className="mx-auto max-w-[1600px]">
          <AccentTitle accent="Used Phones">
            Our Quality Assurance For
          </AccentTitle>
          <p className="mt-5 text-[15px] leading-relaxed text-[#3d3d3d] sm:text-[17px]">
            Buying a used phone should feel straightforward. We check every
            device carefully so each phone meets clear standards for performance,
            reliability and presentation.
          </p>

          <ol className="mt-8 space-y-6 text-[#707b84]">
            {assuranceItems.map((item, index) => (
              <li key={item.title} className="text-[15px] leading-relaxed sm:text-[16px]">
                <strong className="font-extrabold">
                  {index + 1}. {item.title}
                </strong>
                <p className="mt-2 pl-6">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-6 py-14 sm:px-10 lg:px-20 lg:py-18">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="text-center text-[24px] font-extrabold leading-tight text-[#171a23] sm:text-[28px]">
            What Does the Dispute Process Look Like?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#3d3d3d] sm:text-[17px]">
            Customer satisfaction is our priority. If you encounter an issue
            with your purchase, we use a transparent and straightforward
            resolution process.
          </p>

          <ol className="mt-8 space-y-6 text-[#707b84]">
            {disputeItems.map((item, index) => (
              <li key={item.title} className="text-[15px] leading-relaxed sm:text-[16px]">
                <strong className="font-extrabold">
                  {index + 1}. {item.title}
                </strong>
                <p className="mt-2 pl-6">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-6 py-14 text-center sm:px-10 lg:px-20 lg:py-18">
        <h2 className="text-[32px] font-extrabold leading-tight text-[#171a23] sm:text-[40px]">
          <span className="text-[#fb6433]">Shop Now</span> and Find Your{" "}
          <span className="text-[#fb6433]">Next Phone</span> Today!
        </h2>
        <p className="mx-auto mt-7 max-w-[1600px] text-[15px] leading-relaxed text-[#3d3d3d] sm:text-[17px]">
          Whether you need a brand-new device or a quality pre-owned phone,
          Repair My Gadget is here to help. Browse our collection or contact our
          team with any questions.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/refurbished-iphones"
            className="rounded-full bg-[#fb6433] px-6 py-3 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-[#df4a10]"
          >
            Browse phones
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Why;
