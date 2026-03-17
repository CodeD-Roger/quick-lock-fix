import { Phone, BadgeCheck, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VilleData } from "@/data/types";

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

const VilleCta = ({ data }: { data: VilleData }) => (
  <section className="py-20 md:py-28 relative overflow-hidden bg-[#1a2c4e]" aria-labelledby="cta-heading">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f97316]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

    <div className="container max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
      <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
        Besoin d'un serrurier à {data.nom} ?
        <br />
        <span className="text-[#f97316]">Appelez maintenant.</span>
      </h2>
      <p className="text-[#94a3b8] max-w-lg mx-auto mb-10 text-base sm:text-lg">
        Intervention rapide en moins de 30 minutes. Devis gratuit. Tarifs transparents. Ne restez pas bloqué.
      </p>

      <a href={PHONE_LINK} className="inline-block mb-10 group">
        <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-2xl px-8 py-6 sm:px-12 sm:py-7 inline-flex flex-col items-center gap-1.5 shadow-[0_8px_40px_rgba(249,115,22,0.35)] transition-all group-hover:scale-105 group-hover:shadow-[0_16px_60px_rgba(249,115,22,0.45)]">
          <span className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
            {PHONE}
          </span>
          <span className="text-white/80 text-sm font-medium mt-1">
            Appel gratuit • Disponible maintenant
          </span>
        </div>
      </a>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {[
          { icon: BadgeCheck, label: "Devis gratuit" },
          { icon: Zap, label: "30 min chrono" },
          { icon: Clock, label: "24h/24 • 7j/7" },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-[#cbd5e1]">
            <b.icon className="w-4 h-4 text-[#f97316]" />
            {b.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VilleCta;
