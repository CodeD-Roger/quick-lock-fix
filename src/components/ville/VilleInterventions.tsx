import { DoorOpen, KeyRound, Shield, ShieldAlert, Lock, ArrowRight, Phone } from "lucide-react";
import { VilleData } from "@/data/types";

const PHONE_LINK = "tel:+33374474793";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  DoorOpen, KeyRound, Shield, ShieldAlert, Lock,
};

const VilleInterventions = ({ data }: { data: VilleData }) => (
  <section className="py-16 md:py-24 bg-white" aria-labelledby="interventions-heading">
    <div className="container max-w-6xl mx-auto px-5 sm:px-6">
      <h2 id="interventions-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
        Nos interventions à <span className="text-[#f97316]">{data.nom}</span>
      </h2>
      <p className="text-center text-[#64748b] max-w-xl mx-auto mb-12 text-base">
        Découvrez nos prestations de serrurerie disponibles 24h/24 à {data.nom} et dans le {data.departement}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.interventions.map((intervention) => {
          const Icon = iconMap[intervention.icon] || Lock;
          return (
            <article
              key={intervention.slug}
              className="group bg-[#1a2c4e] rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(26,44,78,0.25)]"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center mb-5 shadow-[0_8px_24px_rgba(249,115,22,0.3)] group-hover:shadow-[0_12px_32px_rgba(249,115,22,0.4)] transition-shadow">
                <Icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{intervention.titre}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{intervention.description}</p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-1.5 text-[#f97316] text-sm font-semibold hover:gap-2.5 transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                Appeler
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default VilleInterventions;
