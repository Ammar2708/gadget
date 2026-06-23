import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const sections = [
  {
    title: "Introduction",
    body: [
      "Welcome to Repair My Gadget. These Terms and Conditions govern your use of our repair services. By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.",
    ],
  },
  {
    title: "Services Offered",
    body: [
      "Repair My Gadget specializes in repair services for Apple devices, including but not limited to iPhones, iPads, and MacBooks. All repairs are subject to parts availability and the extent of damage to the device.",
    ],
  },
  {
    title: "Customer Responsibilities",
    items: [
      ["Data Backup", "Customers are responsible for backing up all data before submitting a device for repair. We are not liable for data loss during the repair process."],
      ["Device Ownership", "By submitting your device for repair, you confirm that you are the legal owner of the device."],
      ["Accurate Information", "Customers must provide accurate details about the device and issue to assist the repair process."],
    ],
  },
  {
    title: "Warranty on Repairs",
    items: [
      ["Coverage", "We provide a 90-day warranty on repairs, covering defective parts and workmanship."],
      ["Exclusions", "The warranty does not cover physical damage, liquid damage, misuse, or unrelated faults after the repair."],
      ["Claim Process", "To claim warranty service, customers must provide proof of the original repair receipt."],
    ],
  },
  {
    title: "Liability Disclaimer",
    body: [
      "Repair My Gadget will not be held liable for loss of data, software, settings, or additional damage caused by pre-existing device conditions during repair.",
      "We make no guarantees regarding the performance or compatibility of third-party parts used in repairs.",
    ],
  },
  {
    title: "Payment Terms",
    items: [
      ["Payment", "Payment for repairs must be made in full upon collection of the device."],
      ["Methods", "We accept cash, credit/debit cards, and other accepted payment methods displayed in-store or online."],
      ["Additional Charges", "Any diagnostic fees or extra service charges will be communicated upfront."],
    ],
  },
  {
    title: "Non-Collection of Devices",
    body: [
      "Customers must collect their devices within 30 days of repair completion.",
      "Devices left uncollected beyond 30 days may incur a storage fee. If a device remains uncollected for 90 days, it may be considered abandoned and disposed of as permitted by law.",
    ],
  },
  {
    title: "Use of Parts",
    body: [
      "Repairs may involve original equipment manufacturer parts or high-quality third-party parts, depending on availability.",
      "Customers will be informed of the type of parts used before the repair process where applicable.",
    ],
  },
  {
    title: "Privacy Policy",
    body: [
      <>
        Repair My Gadget respects your privacy. Any personal information
        provided will be used solely for servicing your device. For more
        details, please review our{" "}
        <Link to="/privacy-policy" className="font-semibold text-[#fb6433] hover:text-[#df4a10]">
          Privacy Policy
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms and Conditions are governed by the laws of the United Kingdom. Any disputes arising from the use of our services will be subject to the relevant courts in that jurisdiction.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "Repair My Gadget reserves the right to update these Terms and Conditions at any time. Customers will be notified of significant changes via our website or by email.",
    ],
  },
  {
    title: "Contact Information",
    body: [
      "For questions or concerns regarding these Terms and Conditions, please contact us at:",
    ],
    contact: true,
  },
];

const Term = () => {
  return (
    <div className="bg-white text-[#071224]">
      <section className="bg-[#f5f5f5] px-6 py-14 text-center sm:px-10 lg:py-16">
        <h1 className="text-[32px] font-normal italic leading-tight text-[#3d444b] sm:text-[40px] lg:text-[44px]">
          Terms and Conditions
        </h1>
        <div className="mt-5 flex items-center justify-center gap-4 text-[16px] text-[#7b7f84] sm:text-[17px]">
          <Link to="/" className="transition-colors duration-200 hover:text-[#fb6433]">
            Home
          </Link>
          <FaChevronRight className="text-[11px] text-[#c4c7ca]" aria-hidden="true" />
          <span>Terms and Conditions</span>
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-6 py-12 sm:px-10 lg:px-20 lg:py-14">
        <h2 className="text-[40px] font-bold leading-tight text-[#071224] sm:text-[48px] lg:text-[54px]">
          Terms and Conditions
        </h2>

        <div className="mt-7 divide-y divide-neutral-200">
          {sections.map((section, index) => (
            <article key={section.title} className="py-7 first:pt-0">
              <h3 className="text-[27px] font-bold leading-tight text-[#071224] sm:text-[34px] lg:text-[38px]">
                {index + 1}. {section.title}
              </h3>

              {section.body?.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mt-4 text-[15px] leading-relaxed text-[#111827] sm:text-[16px] lg:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <ol className="mt-5 space-y-3">
                  {section.items.map(([label, text], itemIndex) => (
                    <li
                      key={label}
                      className="grid grid-cols-[28px_1fr] gap-3 text-[15px] leading-relaxed text-[#66727d] sm:text-[16px]"
                    >
                      <span>{itemIndex + 1}.</span>
                      <span>
                        <strong className="font-bold text-[#66727d]">
                          {label}:
                        </strong>{" "}
                        {text}
                      </span>
                    </li>
                  ))}
                </ol>
              )}

              {section.contact && (
                <address className="mt-4 text-[15px] not-italic leading-relaxed text-[#111827] sm:text-[16px] lg:text-[17px]">
                  <strong className="font-bold">Repair My Gadget</strong>
                  <br />
                  44 Baker Street, Weybridge KT13 8AR
                  <br />
                  <a
                    href="tel:01932844494"
                    className="transition-colors duration-200 hover:text-[#fb6433]"
                  >
                    019 3284 4494
                  </a>
                  <br />
                  <a
                    href="mailto:Repair.my.gadget.ltd@gmail.com"
                    className="transition-colors duration-200 hover:text-[#fb6433]"
                  >
                    Repair.my.gadget.ltd@gmail.com
                  </a>
                </address>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Term;
