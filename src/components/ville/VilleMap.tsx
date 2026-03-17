import { MapPin } from "lucide-react";
import { VilleData } from "@/data/types";

const VilleMap = ({ data }: { data: VilleData }) => (
  <section className="py-16 md:py-24 bg-white" aria-labelledby="map-heading">
    <div className="container max-w-5xl mx-auto px-5 sm:px-6">
      <h2 id="map-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
        <MapPin className="w-7 h-7 inline-block text-[#f97316] mr-2 -mt-1" aria-hidden="true" />
        Zone d'intervention — <span className="text-[#f97316]">{data.nom}</span>
      </h2>
      <p className="text-center text-[#64748b] max-w-xl mx-auto mb-10 text-base">
        Nous intervenons dans tous les quartiers de {data.nom} et les communes environnantes du {data.departement}.
      </p>

      <div className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(26,44,78,0.1)] border border-[#e2e8f0]">
        <iframe
          src={data.mapEmbedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Carte Google Maps — Serrurier ${data.nom}`}
          className="w-full"
        />
      </div>

      {/* Quartiers list */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {data.quartiers.map((q) => (
          <span key={q} className="text-xs bg-[#1a2c4e]/5 text-[#1a2c4e] rounded-full px-3 py-1.5 font-medium">
            {q}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default VilleMap;
