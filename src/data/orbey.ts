import { VilleData } from "./types";

export const orbeyData: VilleData = {
  nom: "Orbey",
  slug: "serrurier-orbey",
  codePostal: "68370",
  population: "3 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Orbey (68370) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Orbey disponible 24h/24. Ouverture de porte, serrures montagne, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Orbey (68370) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Pairis", "Tannach",
    "Lac Blanc", "Zone montagnarde", "Chalets"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Orbey ou au Lac Blanc ? Intervention rapide dans ce massif vosgien.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure habitat montagnard",
      description: "Spécialistes des serrures sur chalets, résidences de ski et maisons de montagne d'Orbey.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les chalets et logements d'Orbey.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre chalet ou logement après une effraction à Orbey.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité anti-gel",
      description: "Installation de cylindres haute sécurité résistants aux hivers vosgiens : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Orbey ?",
      answer: "Notre délai d'intervention à Orbey est de 35 à 50 minutes selon la localisation exacte et les conditions routières. La commune est accessible depuis Colmar via Turckheim ou depuis Kaysersberg. Pour les chalets d'altitude autour du Lac Blanc, le délai peut être plus long. Nous intervenons 24h/24, 7j/7.",
    },
    {
      question: "Intervenez-vous au Lac Blanc et dans les chalets d'altitude ?",
      answer: "Oui, nous couvrons l'ensemble du territoire d'Orbey, y compris le secteur du Lac Blanc et les chalets d'altitude. Dans les zones de montagne, nos techniciens emportent le matériel adapté aux conditions hivernales — cylindres anti-gel, produits de dégivrage professionnels — pour intervenir efficacement même par grand froid.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Orbey ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention. Note : pour les zones de montagne à accès difficile, un supplément de déplacement peut s'appliquer.",
    },
    {
      question: "Intervenez-vous pour les résidences secondaires ski à Orbey ?",
      answer: "Oui. Orbey et le Lac Blanc attirent de nombreux propriétaires de résidences secondaires qui fréquentent la station de ski. Serrures gelées à l'arrivée en hiver, portes bloquées par l'humidité au printemps, besoin de sécurisation en l'absence des propriétaires — nous gérons toutes ces situations.",
    },
    {
      question: "Couvrez-vous les communes autour d'Orbey ?",
      answer: "Oui, depuis Orbey nous intervenons à Colmar (68000), Kaysersberg (68240), Lapoutroie (68650), Munster (68140), Ribeauvillé (68150) et Turckheim (68230).",
    },
    {
      question: "Proposez-vous des entretiens préventifs pour les chalets à Orbey ?",
      answer: "Oui. Nous proposons des entretiens préventifs annuels avant la saison d'hiver : vérification des cylindres et serrures, lubrification spéciale grand froid, remplacement préventif des pièces usées. Ces interventions évitent les situations d'urgence lors des séjours de ski.",
    },
    {
      question: "Travaillez-vous en hiver à Orbey ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7, y compris en plein hiver vosgien. Les urgences de serrurerie dans une station de ski ne s'arrêtent pas pour la météo. Nous répondons à chaque appel au 03 74 47 47 93.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Orbey ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
  ],

  villesVoisines: [
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Kaysersberg", cp: "68240", slug: "serrurier-kaysersberg" },
    { nom: "Lapoutroie", cp: "68650", slug: "serrurier-lapoutroie" },
    { nom: "Munster", cp: "68140", slug: "serrurier-munster" },
    { nom: "Ribeauvillé", cp: "68150", slug: "serrurier-ribeauville" },
    { nom: "Turckheim", cp: "68230", slug: "serrurier-turckheim" },
  ],

  seoBlock1: `Orbey, commune montagnarde de 3 500 habitants du Haut-Rhin, est la porte d'entrée du massif vosgien côté alsacien, avec pour fleuron le Lac Blanc et sa station de ski. Cette commune étendue, composée de plusieurs villages et hameaux dispersés sur les flancs des Vosges, est une destination de tourisme 4 saisons appréciée des randonneurs en été et des skieurs en hiver. La forte présence de chalets et de résidences secondaires crée une demande spécifique en serrurerie d'urgence, notamment pour les problèmes liés aux conditions climatiques montagnardes.

Albert Serrurerie intervient dans l'ensemble d'Orbey : centre-village, Pairis, Tannach, secteur Lac Blanc, zones montagnardes et chalets. L'habitat d'Orbey est principalement composé de chalets en bois et de maisons de montagne soumises aux rudes conditions climatiques vosgiens — alternance gel/dégel, humidité élevée, enneigement important. Nos techniciens utilisent des équipements certifiés pour ces conditions extrêmes : cylindres anti-gel intégré, lubrifiants grand froid, joints d'étanchéité renforcés.

Les résidences secondaires constituent une part majeure du parc immobilier d'Orbey. Des propriétaires venant de toute la France ont acquis des chalets autour du Lac Blanc ou dans les villages de la commune pour profiter des sports d'hiver et des randonnées estivales. Ces logements, inoccupés une grande partie de l'année, sont particulièrement exposés aux problèmes de serrures — gel en hiver, corrosion due à l'humidité, portes qui se déforment avec les variations de température.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Serrure gelée à votre arrivée pour les vacances de ski, porte bloquée dans votre chalet de Pairis, effraction constatée — nous intervenons depuis Colmar ou Kaysersberg. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Orbey, c'est notre expertise des contraintes techniques de l'habitat montagnard de haute altitude. Intervenir sur un chalet au Lac Blanc en plein hiver vosgien, sur une serrure gelée ou un cylindre grippé par des mois d'humidité extrême, nécessite des compétences et des équipements spécifiques. Nous recommandons systématiquement des cylindres certifiés IP65 ou IP67 (étanchéité élevée) pour les portes extérieures des chalets de montagne.

La station du Lac Blanc et son attrait touristique peuvent malheureusement attirer des prestataires peu scrupuleux pendant les saisons de ski. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord. Nous sommes une entreprise locale inscrite à la Chambre des Métiers d'Alsace.

Pour les propriétaires de résidences secondaires à Orbey, nous proposons des forfaits d'entretien préventif annuel : inspection complète des serrures et cylindres avant l'hiver, remplacement préventif, lubrification spéciale grand froid. Ces interventions programmées garantissent une arrivée sans mauvaise surprise lors des séjours de ski.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.15!3d48.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000005%3A0x5!2sOrbey!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
