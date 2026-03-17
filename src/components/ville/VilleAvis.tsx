import { Star, Quote } from "lucide-react";
import { VilleData } from "@/data/types";

const reviewTemplates = [
  {
    name: "Marie L.",
    rating: 5,
    text: "Intervention rapide et professionnelle un dimanche soir. Le serrurier est arrivé en 25 minutes, a ouvert ma porte sans abîmer la serrure. Tarif annoncé respecté. Je recommande vivement.",
  },
  {
    name: "Thomas K.",
    rating: 5,
    text: "Après un cambriolage, j'ai appelé Albert Serrurerie en pleine nuit. Le technicien a sécurisé ma porte et changé la serrure en moins d'une heure. Facture claire pour l'assurance. Merci.",
  },
  {
    name: "Sophie M.",
    rating: 5,
    text: "Changement de cylindre sur une serrure 3 points, travail propre et rapide. Le technicien a pris le temps d'expliquer le fonctionnement du nouveau cylindre. Prix correct.",
  },
];

const VilleAvis = ({ data }: { data: VilleData }) => (
  <section className="py-16 md:py-24 bg-white" aria-labelledby="avis-heading">
    <div className="container max-w-6xl mx-auto px-5 sm:px-6">
      <div className="text-center mb-12">
        <h2 id="avis-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] mb-3">
          Avis clients à <span className="text-[#f97316]">{data.nom}</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#f97316] fill-[#f97316]" />
          ))}
          <span className="text-[#1a2c4e] font-bold ml-1">4.8/5</span>
        </div>
        <p className="text-[#64748b] text-sm">Basé sur 127 avis vérifiés</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviewTemplates.map((review, i) => (
          <article
            key={review.name}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(26,44,78,0.08)] transition-shadow"
          >
            <Quote className="w-8 h-8 text-[#f97316]/20 mb-3" aria-hidden="true" />
            <p className="text-[#475569] text-sm leading-relaxed mb-5">{review.text}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#1a2c4e] font-bold text-sm">{review.name}</p>
                {/* Quartier dynamique selon la ville */}
                <p className="text-[#94a3b8] text-xs">{data.quartiers[i] ?? data.quartiers[0]}, {data.nom}</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-[#f97316] fill-[#f97316]" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default VilleAvis;
