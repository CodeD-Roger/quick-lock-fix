import { BadgeCheck, FileText } from "lucide-react";
import { VilleData } from "@/data/types";

const VilleTarifs = ({ data }: { data: VilleData }) => (
  <section className="py-16 md:py-24" style={{ background: "#f8fafc" }} aria-labelledby="tarifs-heading">
    <div className="container max-w-4xl mx-auto px-5 sm:px-6">
      <h2 id="tarifs-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
        Tarifs serrurier à <span className="text-[#f97316]">{data.nom}</span>
      </h2>
      <p className="text-center text-[#64748b] max-w-xl mx-auto mb-10 text-base">
        Des prix clairs, sans mauvaise surprise. Devis gratuit avant chaque intervention.
      </p>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-[0_4px_30px_rgba(26,44,78,0.08)] overflow-hidden border border-[#e2e8f0]">
        <div className="bg-[#1a2c4e] px-6 py-4 flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#f97316]" />
          <span className="text-white font-display font-bold text-base">Grille tarifaire – {data.nom} ({data.codePostal})</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#e2e8f0]">
                <th className="px-6 py-4 text-[#1a2c4e] font-display font-bold text-sm">Prestation</th>
                <th className="px-6 py-4 text-[#1a2c4e] font-display font-bold text-sm text-right">Tarif</th>
              </tr>
            </thead>
            <tbody>
              {data.tarifs.map((t, i) => (
                <tr key={i} className={`border-b border-[#f1f5f9] ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#fff7ed] transition-colors`}>
                  <td className="px-6 py-4 text-[#334155] text-sm sm:text-base">{t.prestation}</td>
                  <td className="px-6 py-4 text-right font-bold text-[#f97316] text-sm sm:text-base whitespace-nowrap">{t.prix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-5 bg-[#fff7ed] border-t border-[#fed7aa] flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <BadgeCheck className="w-5 h-5 text-[#f97316] shrink-0" />
          <p className="text-sm text-[#92400e] font-medium leading-relaxed">
            <strong>Devis gratuit avant intervention</strong> – Prix fixés avant travaux. Aucun supplément caché. TVA incluse.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default VilleTarifs;
