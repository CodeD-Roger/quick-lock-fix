import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { VilleData } from "@/data/types";

const VilleMaillage = ({ data }: { data: VilleData }) => (
  <section className="py-16 md:py-20" style={{ background: "#f8fafc" }} aria-labelledby="maillage-heading">
    <div className="container max-w-5xl mx-auto px-5 sm:px-6">
      <h2 id="maillage-heading" className="font-display text-2xl sm:text-3xl font-bold text-[#1a2c4e] text-center mb-3">
        Serrurier dans les villes voisines de {data.nom}
      </h2>
      <p className="text-center text-[#64748b] max-w-xl mx-auto mb-10 text-base">
        Nous intervenons également dans les communes limitrophes du {data.departement}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.villesVoisines.map((v) => (
          <Link
            key={v.slug}
            to={`/${v.slug}`}
            className="group flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-xl px-5 py-4 hover:border-[#f97316]/40 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)] transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1a2c4e] flex items-center justify-center shrink-0 group-hover:bg-[#f97316] transition-colors">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-[#1a2c4e] text-sm">Serrurier {v.nom}</p>
              <p className="text-xs text-[#94a3b8]">{v.cp}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#f97316] transition-colors shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default VilleMaillage;
