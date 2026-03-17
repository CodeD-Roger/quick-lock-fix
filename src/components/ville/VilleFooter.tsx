import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

const VilleFooter = () => (
  <footer className="bg-[#1a2c4e] py-10 pb-24 md:pb-10" role="contentinfo">
    <div className="container max-w-6xl mx-auto px-5 sm:px-6">
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="text-white font-display font-bold text-lg">
            Albert Serrurerie
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#94a3b8]">
            <span>24h/24 • 7j/7</span>
            <span className="hidden md:inline" aria-hidden="true">•</span>
            <a href={PHONE_LINK} className="text-[#f97316] font-semibold hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              {PHONE}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#64748b]">
            <Link to="/mentions-legales" className="hover:text-[#cbd5e1] transition-colors">Mentions légales</Link>
            <span aria-hidden="true">•</span>
            <Link to="/mentions-legales#rgpd" className="hover:text-[#cbd5e1] transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
        <p className="text-xs text-[#475569] text-center mt-6">
          © {new Date().getFullYear()} Albert Serrurerie — Tous droits réservés — Haut-Rhin (68)
        </p>
      </div>
    </div>
  </footer>
);

export default VilleFooter;
