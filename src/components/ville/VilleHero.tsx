import { Phone, Clock, Shield, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VilleData } from "@/data/types";

const PHONE = "[NUMÉRO]";
const PHONE_LINK = "tel:[NUMÉRO]";

const VilleHero = ({ data }: { data: VilleData }) => (
  <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2c4e 0%, #0f1d35 60%, #162847 100%)" }}>
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f97316]/3 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

    <div className="relative z-10 container max-w-6xl mx-auto px-5 sm:px-6 pt-8 pb-16 md:pt-20 md:pb-24">
      {/* Badge */}
      <div className="ville-hero-anim flex items-center gap-2 mb-8">
        <span className="inline-flex items-center gap-2 bg-[#f97316]/15 border border-[#f97316]/30 text-[#f97316] rounded-full px-4 py-1.5 text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          Intervention en 30 min à {data.nom}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — Text */}
        <div>
          <h1 className="ville-hero-anim font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6">
            {data.h1.split("—")[0]}
            <br />
            <span className="text-[#f97316]">— {data.h1.split("—")[1]?.trim()}</span>
          </h1>

          <p className="ville-hero-anim text-[#94a3b8] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Porte claquée, serrure cassée, cambriolage ? <strong className="text-white">Albert Serrurerie</strong> intervient
            en urgence dans tous les quartiers de {data.nom} — {data.quartiers.slice(0, 4).join(", ")} et plus encore.
          </p>

          <div className="ville-hero-anim flex flex-wrap gap-3 mb-8">
            {[
              { icon: Clock, label: "24h/24 • 7j/7" },
              { icon: Shield, label: "Agréé assurance" },
              { icon: Zap, label: "Devis gratuit" },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-1.5 text-sm text-[#cbd5e1] bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5">
                <b.icon className="w-3.5 h-3.5 text-[#f97316]" />
                {b.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="ville-hero-anim flex flex-col sm:flex-row items-start gap-4">
            <a href={PHONE_LINK}>
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-lg rounded-xl px-8 py-6 shadow-[0_8px_30px_rgba(249,115,22,0.35)] transition-all hover:shadow-[0_12px_40px_rgba(249,115,22,0.45)] hover:-translate-y-0.5">
                <Phone className="w-5 h-5 mr-2" />
                Appel d'urgence
              </Button>
            </a>
            <a href={PHONE_LINK} className="text-white font-display text-2xl sm:text-3xl font-bold tracking-wide hover:text-[#f97316] transition-colors">
              {PHONE}
            </a>
          </div>
        </div>

        {/* Right — Feature card */}
        <div className="ville-hero-anim hidden lg:block">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-5">
            <h2 className="text-white font-display text-xl font-bold mb-2">Pourquoi nous choisir à {data.nom} ?</h2>
            {[
              { icon: CheckCircle2, text: "Intervention garantie en moins de 30 minutes" },
              { icon: CheckCircle2, text: "Devis gratuit et transparent avant travaux" },
              { icon: CheckCircle2, text: "Artisan local inscrit Chambre des Métiers" },
              { icon: CheckCircle2, text: "Tarifs fixes, aucun supplément caché" },
              { icon: CheckCircle2, text: "Facture conforme pour remboursement assurance" },
              { icon: CheckCircle2, text: `Tous quartiers couverts : ${data.quartiers.slice(0, 3).join(", ")}…` },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" />
                <span className="text-[#cbd5e1] text-sm leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VilleHero;
