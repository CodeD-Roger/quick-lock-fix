import { VilleData } from "./types";

export const staffelfeldenData: VilleData = {
  nom: "Staffelfelden",
  slug: "serrurier-staffelfelden",
  codePostal: "68850",
  population: "3 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Staffelfelden (68850) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Staffelfelden disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Staffelfelden (68850) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Cité minière", "Zone pavillonnaire",
    "Quartier résidentiel", "Les Vergers", "Lotissements récents"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Staffelfelden ? Intervention sans dégât en moins de 30 minutes dans toute la commune.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les logements anciens et modernes de Staffelfelden.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements de Staffelfelden.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Staffelfelden.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité : Mul-T-Lock, Fichet, Vachette.",
      slug: "cylindre-haute-securite",
      icon: "Lock",
    },
  ],

  tarifs: [
    { prestation: "Ouverture de porte simple (serrure 1 point)", prix: "À partir de 89€ TTC" },
    { prestation: "Ouverture de porte 3 points", prix: "À partir de 130€ TTC" },
    { prestation: "Ouverture porte blindée", prix: "À partir de 180€ TTC" },
    { prestation: "Changement cylindre standard", prix: "À partir de 79€ TTC" },
    { prestation: "Changement serrure multipoints", prix: "À partir de 180€ TTC" },
    { prestation: "Porte blindée posée", prix: "À partir de 890€ TTC" },
    { prestation: "Mise en sécurité après effraction", prix: "À partir de 150€ TTC" },
    { prestation: "Déplacement (inclus dans devis)", prix: "49,50€ TTC" },
  ],

  faq: [
    {
      question: "Quel est le délai d'intervention d'un serrurier à Staffelfelden ?",
      answer: "Notre délai moyen d'intervention à Staffelfelden est de 20 à 30 minutes. Le village est accessible depuis Cernay, Wittelsheim et Mulhouse. Nos techniciens interviennent dans toute la commune 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Staffelfelden ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous dans les logements de la cité minière de Staffelfelden ?",
      answer: "Oui, la cité minière de Staffelfelden est un ensemble de logements issus de l'époque de l'extraction potassique. Ces bâtiments peuvent présenter des portes et serrures anciens. Nos techniciens s'adaptent à ces configurations et peuvent remplacer des équipements vieillissants par des cylindres et serrures modernes haute sécurité.",
    },
    {
      question: "Couvrez-vous les communes autour de Staffelfelden ?",
      answer: "Oui, depuis Staffelfelden nous intervenons à Cernay (68700), Wittelsheim (68310), Wittenheim (68270), Pulversheim (68840), Thann (68800) et Mulhouse (68100). Tout le secteur est couvert.",
    },
    {
      question: "Travaillez-vous la nuit à Staffelfelden ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Staffelfelden ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Staffelfelden ?",
      answer: "Les serruriers malhonnêtes ciblent particulièrement les situations d'urgence où la victime est stressée. Pour vous protéger : raccrochez si on vous annonce un prix sans vous avoir demandé la nature exacte du problème. Chez Albert Serrurerie, nous posons d'abord les bonnes questions, puis nous vous donnons une estimation honnête basée sur votre situation réelle.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui. Vérifiez cependant les conditions de votre contrat : la plupart prévoient une franchise (généralement 75€ à 200€) et un plafond de remboursement selon les garanties souscrites. Notre facture détaillée — descriptif, références des pièces et numéro SIRET — est reconnue sans exception par toutes les compagnies d'assurance habitation en France.",
    },
  ],

  villesVoisines: [
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
    { nom: "Wittelsheim", cp: "68310", slug: "serrurier-wittelsheim" },
    { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
    { nom: "Pulversheim", cp: "68840", slug: "serrurier-pulversheim" },
    { nom: "Thann", cp: "68800", slug: "serrurier-thann" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Staffelfelden, village de 3 500 habitants du Haut-Rhin, est une commune du bassin potassique alsacien qui a opéré une reconversion résidentielle après la fermeture des mines de potasse. Située entre Cernay et Wittelsheim, à proximité de l'axe Mulhouse-Thann, Staffelfelden offre un cadre de vie calme et accessible, composé d'un mélange de logements issus de l'époque minière — la cité minière — et de constructions résidentielles plus récentes.

Albert Serrurerie intervient dans l'ensemble de Staffelfelden : centre-village, Cité minière, Zone pavillonnaire, Quartier résidentiel, Les Vergers et Lotissements récents. Nos techniciens s'adaptent à la diversité architecturale de la commune, des maisons ouvrières réhabilitées de la cité minière aux pavillons modernes des lotissements récents.

La cité minière de Staffelfelden, patrimoine de l'ère industrielle potassique, abrite des logements qui peuvent présenter des configurations de portes et serrures spécifiques à leur époque de construction. Nos techniciens sont formés pour travailler sur ces bâtiments et peuvent remplacer les équipements vieillissants par des solutions modernes haute sécurité, en respectant le caractère architectural des bâtiments.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre logement de la cité ou votre pavillon des Vergers, serrure défaillante, effraction constatée — nous intervenons en moins de 30 minutes depuis Cernay ou Mulhouse. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Staffelfelden, c'est notre connaissance du patrimoine bâti de l'ancien bassin potassique alsacien. Les cités minières du secteur Cernay-Wittelsheim-Staffelfelden présentent des caractéristiques architecturales communes — logements en rangée, portes d'entrée standardisées, menuiseries d'époque — que nos techniciens maîtrisent.

Staffelfelden, village calme mais situé sur un axe de passage entre Mulhouse et Thann, peut être ciblé par des sociétés de serrurerie peu scrupuleuses. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord.

Pour les résidents de Staffelfelden — qu'ils habitent la cité minière ou un pavillon récent — nous proposons des audits de sécurité gratuits. Ces audits permettent d'évaluer la résistance des accès et de recommander les améliorations pertinentes. Les logements anciens de la cité minière méritent souvent une mise à niveau de leurs cylindres et serrures, qui peuvent dater de plusieurs décennies.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.17!3d47.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b0000000000e%3A0xe!2sStaffelfelden!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
