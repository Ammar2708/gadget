import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "441932844494";
const WHATSAPP_MESSAGE =
  "Hi Repair My Gadget, I would like help with a repair.";

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <style>
        {`
          @keyframes rmg-whatsapp-float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
      <div className="fixed bottom-5 right-5 z-[80] sm:bottom-7 sm:right-7">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 blur-md" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Repair My Gadget on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[30px] text-white shadow-[0_18px_40px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-110 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:h-16 sm:w-16 sm:text-[34px]"
          style={{ animation: "rmg-whatsapp-float 2.8s ease-in-out infinite" }}
        >
          <FaWhatsapp aria-hidden="true" />
        </a>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
