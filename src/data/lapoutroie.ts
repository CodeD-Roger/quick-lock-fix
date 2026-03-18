import { VilleData } from "./types";

export const lapoutroieData: VilleData = {
  nom: "Lapoutroie",
  slug: "serrurier-lapoutroie",
  codePostal: "68650",
  population: "2 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Lapoutroie (68650) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Lapoutroie disponible 24h/24. Ouverture de porte, serrures montagne, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Lapoutroie (68650) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Les Aulnes", "Hachimette",
    "Fréland", "Zone montagnarde", "Chalets d'altitude"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Lapoutroie ? Intervention rapide dans ce village montagnard de la vallée de la Béhine.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure habitat montagnard",
      description: "Spécialistes des serrures sur chalets, maisons de montagne et portes exposées aux hivers vosgiens.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les chalets et maisons de Lapoutroie.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Lapoutroie.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité anti-gel",
      description: "Installation de cylindres haute sécurité résistants au gel et à l'humidité des Vosges : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Lapoutroie ?",
      answer: "Notre délai d'intervention à Lapoutroie est de 30 à 45 minutes selon les conditions. La commune est accessible depuis Colmar via Kaysersberg. Nos techniciens interviennent dans tout le village et les hameaux environnants, 24h/24 et 7j/7, même en hiver vosgien.",
    },
    {
      question: "Intervenez-vous sur les serrures de chalets à Lapoutroie ?",
      answer: "Oui, c'est notre quotidien dans ce secteur. Les chalets et maisons de montagne de Lapoutroie sont soumis à des conditions climatiques exigeantes — gel, humidité élevée, alternance thermique — qui usent rapidement les cylindres et serrures. Nous utilisons des équipements certifiés usage extérieur avec protection anti-gel intégrée.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Lapoutroie ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention. Le déplacement de 49,50€ est inclus dans le devis.",
    },
    {
      question: "Intervenez-vous pour les résidences secondaires à Lapoutroie ?",
      answer: "Oui. La vallée de la Béhine accueille de nombreux chalets et résidences secondaires utilisés en hiver et en été. Nous intervenons pour les propriétaires bloqués et proposons des solutions adaptées aux logements inoccupés : cylindres anti-gel, serrures robustes, audits de sécurité préventifs.",
    },
    {
      question: "Couvrez-vous les hameaux autour de Lapoutroie ?",
      answer: "Oui, depuis Lapoutroie nous intervenons à Hachimette, Fréland, Les Aulnes et dans les chalets d'altitude environnants. Nous couvrons également Kaysersberg (68240), Orbey (68370), Colmar (68000) et Munster (68140). Les délais peuvent être légèrement plus longs pour les zones les plus isolées.",
    },
    {
      question: "Intervenez-vous en cas de serrure gelée à Lapoutroie ?",
      answer: "Oui, le gel est l'une des causes les plus fréquentes de serrure bloquée dans les villages de montagne comme Lapoutroie. Nos techniciens disposent des produits dégivrants professionnels adaptés et de cylindres de remplacement certifiés anti-gel. Appelez-nous au 03 74 47 47 93.",
    },
    {
      question: "Travaillez-vous la nuit et en hiver à Lapoutroie ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Les urgences de serrurerie dans une vallée montagnarde peuvent survenir à tout moment, y compris par mauvais temps. Nous répondons à chaque appel sans exception.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Lapoutroie ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
  ],

  villesVoisines: [
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Kaysersberg", cp: "68240", slug: "serrurier-kaysersberg" },
    { nom: "Orbey", cp: "68370", slug: "serrurier-orbey" },
    { nom: "Munster", cp: "68140", slug: "serrurier-munster" },
    { nom: "Ribeauvillé", cp: "68150", slug: "serrurier-ribeauville" },
    { nom: "Turckheim", cp: "68230", slug: "serrurier-turckheim" },
  ],

  seoBlock1: `Lapoutroie, village montagnard de 2 000 habitants du Haut-Rhin, est niché dans la vallée de la Béhine, aux confins du massif vosgien. Ce village authentique, situé à mi-chemin entre Colmar et le col du Bonhomme, est un point de départ apprécié des randonneurs et des amateurs de nature qui fréquentent les Vosges alsaciennes. Son cadre montagnard préservé, ses chalets traditionnels et ses maisons de caractère en font une destination prisée des propriétaires de résidences secondaires qui cherchent dépaysement et authenticité.

Albert Serrurerie intervient dans l'ensemble de Lapoutroie et de ses hameaux : centre-village, Les Aulnes, Hachimette, Fréland, zones montagnardes et chalets d'altitude. L'habitat montagnard de Lapoutroie présente des caractéristiques spécifiques que nos techniciens maîtrisent : chalets en bois massif, portes soumises aux variations thermiques extrêmes des hivers vosgiens, cylindres exposés au gel et à l'humidité persistante. Nous utilisons des équipements certifiés pour l'usage extérieur intensif, avec protection anti-gel intégrée.

Les résidences secondaires représentent une proportion importante du parc immobilier de Lapoutroie. Ces logements, utilisés principalement pour les vacances d'hiver (ski au Lac Blanc voisin) et les randonnées estivales, sont exposés à des risques spécifiques : serrures qui se grippent après de longues périodes d'inoccupation, cylindres gelés à l'arrivée pour les vacances de Noël, portes qui gonflent avec l'humidité printanière. Nos techniciens sont formés pour ces situations.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Serrure gelée à votre arrivée au chalet, porte bloquée par l'humidité, effraction — nous intervenons depuis Kaysersberg ou Colmar. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Lapoutroie, c'est notre expertise des contraintes techniques de l'habitat montagnard vosgien. Intervenir en hiver dans un village de montagne, sur une serrure gelée ou un cylindre grippé par des mois d'humidité, nécessite des équipements et des techniques spécifiques que nos techniciens maîtrisent. Nous recommandons systématiquement des cylindres certifiés pour usage extérieur intensif sur les portes d'entrée des chalets montagnards.

La position isolée de Lapoutroie dans la vallée de la Béhine peut rendre les résidents dépendants des prestataires locaux. Certaines sociétés peu scrupuleuses profitent de cet isolement pour pratiquer des tarifs abusifs. Chez Albert Serrurerie, nous garantissons des tarifs publics et transparents, un devis gratuit avant intervention, et aucun commencement de travaux sans votre accord.

Pour les propriétaires de résidences secondaires à Lapoutroie, nous proposons des entretiens préventifs annuels : vérification des cylindres et serrures avant l'hiver, lubrification, remplacement préventif des pièces usées. Ces interventions programmées évitent les mauvaises surprises lors des séjours en vacances et prolongent la durée de vie des équipements.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.19!3d48.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000003%3A0x3!2sLapoutroie!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
