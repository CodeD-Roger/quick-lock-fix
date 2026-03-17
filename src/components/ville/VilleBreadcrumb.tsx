import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { VilleData } from "@/data/types";

const VilleBreadcrumb = ({ data }: { data: VilleData }) => (
  <nav aria-label="Fil d'Ariane" className="py-4 px-5 sm:px-6">
    <ol className="flex flex-wrap items-center gap-1.5 text-sm max-w-6xl mx-auto">
      <li>
        <Link to="/" className="inline-flex items-center gap-1 text-[#94a3b8] hover:text-[#1a2c4e] transition-colors">
          <Home className="w-3.5 h-3.5" />
          Accueil
        </Link>
      </li>
      <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 text-[#cbd5e1]" /></li>
      <li>
        <Link to="/" className="text-[#94a3b8] hover:text-[#1a2c4e] transition-colors">
          Serrurier {data.departement}
        </Link>
      </li>
      <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 text-[#cbd5e1]" /></li>
      <li>
        <span className="text-[#1a2c4e] font-semibold" aria-current="page">
          Serrurier {data.nom}
        </span>
      </li>
    </ol>
  </nav>
);

export default VilleBreadcrumb;
