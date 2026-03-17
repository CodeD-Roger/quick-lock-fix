import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const PHONE_LINK = "tel:+33374474793";

const VilleStickyCta = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when near top (header phone visible)
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={PHONE_LINK}
        className="flex items-center justify-center gap-2 bg-[#f97316] text-white font-bold text-base py-4 px-6 shadow-[0_-4px_20px_rgba(249,115,22,0.3)]"
      >
        <Phone className="w-5 h-5" />
        Appel d'urgence 24h/7j
      </a>
    </div>
  );
};

export default VilleStickyCta;
