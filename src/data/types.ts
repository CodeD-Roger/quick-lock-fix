export interface FaqItem {
  question: string;
  answer: string;
}

export interface TarifItem {
  prestation: string;
  prix: string;
  detail?: string;
}

export interface VilleVoisine {
  nom: string;
  cp: string;
  slug: string;
}

export interface Intervention {
  titre: string;
  description: string;
  slug: string;
  icon: string; // lucide icon name
}

export interface VilleData {
  nom: string;
  slug: string;
  codePostal: string;
  population: string;
  departement: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  quartiers: string[];
  interventions: Intervention[];
  tarifs: TarifItem[];
  faq: FaqItem[];
  villesVoisines: VilleVoisine[];
  seoBlock1: string;
  seoBlock2: string;
  mapEmbedUrl: string;
}
