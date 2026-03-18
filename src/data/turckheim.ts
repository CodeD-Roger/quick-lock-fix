import { VilleData } from "./types";

export const turckheimData: VilleData = {
  nom: "Turckheim",
  slug: "serrurier-turckheim",
  codePostal: "68230",
  population: "3 800",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Turckheim (68230) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Turckheim disponible 24h/24. Ouverture de porte, serrures anciennes fortifiées, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Turckheim (68230) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre historique fortifié", "Porte de France", "Porte de Munster",
    "Zone pavillonnaire", "Vignobles Brand", "Quartier résidentiel"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Turckheim ? Intervention sans dégât en moins de 30 minutes, cité fortifiée et vignobles inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure médiévale et ancienne",
      description: "Spécialistes des serrures sur portes anciennes du patrimoine fortifié de Turckheim, maisons XVe siècle.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P adaptées aux cadres anciens de la cité médiévale de Turckheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Turckheim.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité adaptés aux portes historiques : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Turckheim ?",
      answer: "Notre délai moyen d'intervention à Turckheim est de 20 à 30 minutes. La commune est directement accessible depuis Colmar, à seulement quelques kilomètres. Que vous soyez dans le centre historique fortifié, près de la Porte de France, au secteur des vignobles du Brand ou dans la zone pavillonnaire, nos techniciens interviennent rapidement, 24h/24 et 7j/7.",
    },
    {
      question: "Intervenez-vous sur les serrures des maisons de la cité médiévale de Turckheim ?",
      answer: "Oui, c'est l'une de nos spécialités. Turckheim possède l'une des enceintes médiévales les mieux conservées d'Alsace, avec ses trois portes fortifiées et ses maisons du XVe siècle. Les portes de ces bâtiments anciens sont souvent équipées de serrures à gorge et de cylindres non normalisés que nos techniciens maîtrisent parfaitement.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Turckheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Couvrez-vous Colmar et Wintzenheim depuis Turckheim ?",
      answer: "Oui, nous couvrons Colmar (68000), Wintzenheim (68920), Munster (68140), Kaysersberg (68240) et Ingersheim (68040) depuis Turckheim dans les mêmes délais. La position de Turckheim au carrefour de plusieurs axes routiers nous permet d'intervenir efficacement dans tout ce secteur.",
    },
    {
      question: "Travaillez-vous pendant le marché de Noël et la saison viticole à Turckheim ?",
      answer: "Oui, Albert Serrurerie intervient 365 jours par an, 24h/24. Les événements touristiques de Turckheim — les vendanges du Grand Cru Brand, les animations du veilleur de nuit, les marchés saisonniers — ne changent pas notre disponibilité. Appelez-nous au 03 74 47 47 93 à toute heure.",
    },
    {
      question: "Peut-on installer une porte blindée dans le centre historique de Turckheim ?",
      answer: "Oui. Pour les bâtiments soumis à des contraintes patrimoniales, nous réalisons des audits de faisabilité gratuits et accompagnons les démarches architecturales si nécessaire. Nous proposons des blocs-portes blindés dans des finitions respectant le caractère des bâtiments anciens.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Turckheim ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs trop bas. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation à Turckheim ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs. Ce document inclut le descriptif des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec les principaux assureurs : Crédit Mutuel, Groupama, AXA, Allianz, MAIF, MMA.",
    },
  ],

  villesVoisines: [
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Wintzenheim", cp: "68920", slug: "serrurier-wintzenheim" },
    { nom: "Munster", cp: "68140", slug: "serrurier-munster" },
    { nom: "Kaysersberg", cp: "68240", slug: "serrurier-kaysersberg" },
    { nom: "Rouffach", cp: "68250", slug: "serrurier-rouffach" },
    { nom: "Ribeauvillé", cp: "68150", slug: "serrurier-ribeauville" },
  ],

  seoBlock1: `Turckheim, cité médiévale fortifiée de 3 800 habitants du Haut-Rhin, est l'une des perles de la Route des Vins d'Alsace et l'une des rares villes d'Alsace à avoir conservé intacte son enceinte médiévale avec ses trois portes fortifiées — la Porte de France, la Porte de Munster et la Porte du Brand. Cette cité viticole célèbre pour son Grand Cru Brand, l'un des plus prestigieux d'Alsace, et pour sa tradition du veilleur de nuit qui parcourt encore les ruelles au flambeau chaque soir d'été, offre un cadre architectural exceptionnel qui génère des besoins très spécifiques en serrurerie.

Albert Serrurerie intervient dans l'ensemble de Turckheim : centre historique fortifié, secteur Porte de France, Porte de Munster, Zone pavillonnaire, Vignobles Brand et Quartier résidentiel. Nos techniciens maîtrisent les spécificités des maisons du XVe siècle qui constituent le cœur de la cité — portes en bois massif, serrures à gorge, cylindres anciens, huisseries en pierre de taille. Ces bâtiments nécessitent une approche respectueuse et un outillage spécialisé que nos équipes emportent systématiquement.

La proximité immédiate avec Colmar — à moins de 8 kilomètres — permet à nos équipes d'intervenir à Turckheim dans des délais très courts depuis notre point de départ colmarien. Cette accessibilité nous confère un avantage décisif pour les urgences de serrurerie dans la cité médiévale et ses alentours. Les résidents du centre historique, comme les habitants de la zone pavillonnaire récente, bénéficient du même niveau de service.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre appartement du centre fortifié, serrure défaillante dans votre maison des vignobles du Brand, effraction constatée — nous intervenons en moins de 30 minutes. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Turckheim, c'est notre expertise du patrimoine fortifié médiéval alsacien et notre respect des bâtiments historiques. Turckheim, avec ses portes médiévales encore debout et ses maisons du XVe siècle habitées par des résidents permanents, représente un défi technique particulier : il faut concilier la sécurité moderne avec la préservation de l'authenticité architecturale.

La fréquentation touristique de Turckheim — ville du veilleur de nuit, des vendanges du Grand Cru Brand et de la Route des Vins — peut attirer des prestataires peu scrupuleux. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit.

Pour les propriétaires et résidents de Turckheim, nous proposons des audits de sécurité gratuits adaptés au bâti médiéval. Nos recommandations tiennent compte des contraintes architecturales de chaque bâtiment et proposent les solutions les plus efficaces dans le respect du patrimoine : cylindres adaptables aux entrées anciennes, serrures multipoints discrètes, condamnations renforcées compatibles avec les menuiseries d'époque.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.27!3d48.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000002%3A0x2!2sTurckheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
