import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PHONE = "[NUMÉRO]";
const PHONE_LINK = "tel:[NUMÉRO]";

const VilleHeader = () => (
  <nav className="bg-white border-b border-[#e2e8f0] sticky top-0 z-40" aria-label="Navigation principale">
    <div className="container max-w-6xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
      <Link to="/" className="font-display font-bold text-[#1a2c4e] text-lg sm:text-xl">
        Albert <span className="text-[#f97316]">Serrurerie</span>
      </Link>

      <div className="flex items-center gap-3 sm:gap-4">
        <a href={PHONE_LINK} className="hidden sm:flex items-center gap-2 text-[#1a2c4e] font-bold text-base hover:text-[#f97316] transition-colors">
          <Phone className="w-4 h-4 text-[#f97316]" />
          {PHONE}
        </a>
        <a href={PHONE_LINK}>
          <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-lg text-sm px-4 py-2 sm:px-5">
            <Phone className="w-4 h-4 mr-1.5 sm:hidden" />
            <span className="hidden sm:inline">Appel d'urgence</span>
            <span className="sm:hidden">Appeler</span>
          </Button>
        </a>
      </div>
    </div>
  </nav>
);

export default VilleHeader;
