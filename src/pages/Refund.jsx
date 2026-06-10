import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const eligibilityItems = [
  {
    label: "Timeframe",
    text: "The device must be returned within 14 days of receiving the service. After this period, returns and refunds will not be accepted.",
  },
  {
    label: "Condition of Device",
    text: "The device must be in the same condition as it was when the repair was completed. We cannot accept devices with new accidental or intentional damage after repair.",
  },
  {
    label: "Receipt of Service",
    text: "Proof of the original repair service must be provided when requesting a return or refund. This can be your repair receipt or an email confirmation.",
  },
  {
    label: "Warranty Coverage",
    text: "If a service-related fault arises within 90 days of repair, we will assess the issue and fix it at no additional cost under our warranty policy.",
  },
];

const exclusionItems = [
  {
    label: "Water Damage",
    text: "Devices that have suffered water damage after repair are not eligible for returns or refunds.",
  },
  {
    label: "Additional Faults",
    text: "If new issues unrelated to the repair service arise after the repair, we cannot accept the device under the return policy.",
  },
  {
    label: "Third-party Tampering",
    text: "If the device has been repaired or tampered with by any third party after the initial repair, it will not be covered by this policy.",
  },
];

const processItems = [
  {
    label: "Contact Us",
    text: (
      <>
        Reach out to our customer service team within 14 days of receiving the
        repair. Email{" "}
        <a
          href="mailto:contact@repairmygadget.co.uk"
          className="font-semibold text-[#fb6433] hover:text-[#df4a10]"
        >
          contact@repairmygadget.co.uk
        </a>{" "}
        or call{" "}
        <a
          href="tel:01932844494"
          className="font-semibold text-[#fb6433] hover:text-[#df4a10]"
        >
          01932844494
        </a>
        . Please include your name, receipt number, and issue details.
      </>
    ),
  },
  {
    label: "Evaluation",
    text: "Once we receive your request, our technical team will review the claim. If eligible, you may be asked to return the device for further assessment.",
  },
  {
    label: "Refund Approval",
    text: "After evaluating the returned device, we will inform you if a refund is approved. Refunds are only provided if we cannot resolve the issue or offer a suitable alternative.",
  },
];

const NumberedList = ({ items }) => (
  <ol className="mt-5 space-y-4">
    {items.map((item, index) => (
      <li
        key={item.label}
        className="grid grid-cols-[28px_1fr] gap-4 text-[15px] leading-relaxed text-[#66727d] sm:text-[16px]"
      >
        <span className="font-medium text-[#6d737b]">{index + 1}.</span>
        <span>
          <em className="font-medium text-[#67727b]">{item.label}:</em>{" "}
          {item.text}
        </span>
      </li>
    ))}
  </ol>
);

const Refund = () => {
  return (
    <div className="bg-white text-[#071224]">
      <section className="bg-[#f5f5f5] px-6 py-14 text-center sm:px-10 lg:py-16">
        <h1 className="text-[32px] font-normal italic leading-tight text-[#3d444b] sm:text-[40px] lg:text-[44px]">
          Refund and Returns Policy
        </h1>
        <div className="mt-5 flex items-center justify-center gap-4 text-[16px] text-[#7b7f84] sm:text-[17px]">
          <Link to="/" className="transition-colors duration-200 hover:text-[#fb6433]">
            Home
          </Link>
          <FaChevronRight className="text-[11px] text-[#c4c7ca]" aria-hidden="true" />
          <span>Refund and Returns Policy</span>
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-12 sm:px-10 lg:px-20 lg:py-14">
        <div className="max-w-none">
          <p className="text-[16px] leading-relaxed text-[#111827] sm:text-[17px] lg:text-[18px]">
            At Repair My Gadget, we strive to ensure that our customers are
            completely satisfied with the services we provide. Our goal is to
            offer reliable repairs that bring your devices back to optimal
            functionality. However, we understand that in certain instances, a
            repair may not meet your expectations or the issue may persist. In
            such cases, we have outlined our return and refund policy to ensure
            transparency and offer peace of mind.
          </p>

          <div className="mt-8">
            <h2 className="text-[32px] font-extrabold leading-tight text-[#071224] sm:text-[38px] lg:text-[42px]">
              Eligibility for Returns and Refunds
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#111827] sm:text-[17px]">
              If you are not fully satisfied with the repair service provided,
              you may be eligible for a return or refund. To be eligible, the
              following conditions must be met:
            </p>
            <NumberedList items={eligibilityItems} />
          </div>

          <div className="mt-8">
            <h2 className="text-[32px] font-extrabold leading-tight text-[#071224] sm:text-[38px] lg:text-[42px]">
              Exclusions from the Return Policy
            </h2>
            <NumberedList items={exclusionItems} />
          </div>

          <div className="mt-8">
            <h2 className="text-[32px] font-extrabold leading-tight text-[#071224] sm:text-[38px] lg:text-[42px]">
              Return Process
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#111827] sm:text-[17px]">
              To initiate a return, please follow these steps:
            </p>
            <NumberedList items={processItems} />
          </div>

          <div className="mt-8">
            <h2 className="text-[32px] font-extrabold leading-tight text-[#071224] sm:text-[38px] lg:text-[42px]">
              Refund Timeline
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#111827] sm:text-[17px]">
              Refunds will be processed within 7-10 business days of approval.
              The refund will be credited back to the original payment method
              used at the time of the repair. Please note that refund times may
              vary depending on your bank or payment provider.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-[32px] font-extrabold leading-tight text-[#071224] sm:text-[38px] lg:text-[42px]">
              Contact Us
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#111827] sm:text-[17px]">
              If you have any questions or need further clarification regarding
              our return policy, please contact our customer support team. We
              are here to assist you and ensure you are fully satisfied with our
              service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
