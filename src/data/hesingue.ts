import { VilleData } from "./types";

export const hesingueData: VilleData = {
  nom: "Hésingue",
  slug: "serrurier-hesingue",
  codePostal: "68220",
  population: "3 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Hésingue (68220) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Hésingue disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Hésingue (68220) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Zone pavillonnaire", "Quartier résidentiel calme",
    "Les Vergers", "Lotissements", "Zone frontalière"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Hésingue ? Intervention sans dégât en moins de 30 minutes dans ce village résidentiel frontalier.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les maisons individuelles et pavillons d'Hésingue.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les maisons d'Hésingue, idéal pour les frontaliers souvent absents.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Hésingue.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Hésingue ?",
      answer: "Notre délai moyen d'intervention à Hésingue est de 20 à 30 minutes. Le village est facilement accessible depuis Saint-Louis, Bartenheim et Blotzheim. Nos techniciens interviennent dans tout le village 24h/24, 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Hésingue ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous pour les frontaliers à Hésingue ?",
      answer: "Oui. Hésingue compte de nombreux frontaliers travaillant en Suisse ou à Bâle. Ces résidents, souvent absents en journée voire en soirée tardive, ont des besoins particuliers en sécurisation. Nous proposons des solutions adaptées : cylindres haute sécurité, serrures multipoints, portes blindées A2P.",
    },
    {
      question: "Couvrez-vous les communes autour d'Hésingue ?",
      answer: "Oui, depuis Hésingue nous intervenons à Saint-Louis (68300), Bartenheim (68870), Blotzheim (68730), Huningue (68330), Village-Neuf (68128) et Mulhouse (68100). Toute la zone frontalière est couverte.",
    },
    {
      question: "Travaillez-vous la nuit à Hésingue ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Porte claquée en rentrant de Suisse, effraction la nuit — nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Hésingue ?",
      answer: "Oui. Dans une commune résidentielle frontalière comme Hésingue, une porte blindée A2P est un investissement sécuritaire particulièrement recommandé. Les maisons individuelles souvent inoccupées en journée sont des cibles potentielles. Tarifs à partir de 890€ TTC pose comprise.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Hésingue ?",
      answer: "Méfiez-vous des sites affichant des tarifs d'appel irréels (39€, 49€) : une fois le technicien sur place, la facture monte à 400€, 800€ ou plus avec des arguments impossibles à contester une fois la porte ouverte. Chez Albert Serrurerie, les tarifs indiqués sur ce site et annoncés au téléphone sont les tarifs définitifs. Pas de surprise, pas de surprime.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, et en cas de cambriolage, pensez à déposer plainte dans les 24 heures : le récépissé de dépôt de plainte est systématiquement exigé par les assureurs pour les remboursements liés à une effraction. Notre facture de mise en sécurité, avec descriptif complet et numéro SIRET, constitue la pièce justificative de serrurerie pour votre dossier sinistre.",
    },
  ],

  villesVoisines: [
    { nom: "Saint-Louis", cp: "68300", slug: "serrurier-saint-louis" },
    { nom: "Bartenheim", cp: "68870", slug: "serrurier-bartenheim" },
    { nom: "Blotzheim", cp: "68730", slug: "serrurier-blotzheim" },
    { nom: "Huningue", cp: "68330", slug: "serrurier-huningue" },
    { nom: "Village-Neuf", cp: "68128", slug: "serrurier-village-neuf" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Hésingue, village résidentiel de 3 500 habitants du Haut-Rhin, est un exemple caractéristique des communes de la zone frontalière trinationale qui ont connu un développement résidentiel important grâce à l'attractivité économique du bassin bâlois. Nichée entre Saint-Louis, Bartenheim et Blotzheim, Hésingue offre un cadre de vie calme et verdoyant, prisé des frontaliers qui travaillent en Suisse ou en Allemagne tout en privilégiant un habitat alsacien plus spacieux et moins coûteux.

Albert Serrurerie intervient dans l'ensemble d'Hésingue : centre-village, Zone pavillonnaire, Quartier résidentiel calme, Les Vergers, Lotissements et Zone frontalière. Nos techniciens connaissent les caractéristiques des maisons individuelles de ce village — principalement des pavillons récents en PVC ou aluminium dotés de serrures multipoints modernes — et disposent du matériel adapté pour chaque situation.

La vie frontalière à Hésingue crée une réalité particulière pour les questions de sécurité résidentielle. Les logements sont régulièrement inoccupés de longues heures, parfois de toute une journée ou davantage, ce qui en fait des cibles potentiellement attractives pour les cambrioleurs. Nous proposons des solutions de sécurisation adaptées à ce profil de vie : cylindres haute sécurité certifiés A2P, serrures multipoints résistantes, portes blindées, et audits de sécurité gratuits.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée en rentrant de votre journée à Bâle, serrure défaillante dans votre pavillon, effraction constatée — nous intervenons en moins de 30 minutes. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Choisir Albert Serrurerie à Hésingue, c'est opter pour un artisan local déclaré, inscrit à la Chambre des Métiers d'Alsace. Notre connaissance de la zone frontalière du Haut-Rhin et des besoins spécifiques des résidents de cette région nous permet de proposer des solutions parfaitement adaptées au mode de vie des habitants d'Hésingue.

Comme dans toutes les communes résidentielles de la zone frontalière, Hésingue peut être ciblée par des sociétés de serrurerie peu scrupuleuses qui profitent de l'urgence et de la vulnérabilité des résidents. Ces plateformes affichent des prix irréels pour facturer des sommes excessives. Chez Albert Serrurerie, nous garantissons des tarifs publics et transparents, un devis gratuit avant intervention, et aucun commencement de travaux sans votre accord.

Pour les frontaliers d'Hésingue, nous recommandons particulièrement nos audits de sécurité gratuits. Ces audits permettent d'évaluer le niveau de protection de votre domicile pendant vos absences et de recommander les investissements les plus pertinents : cylindres haute sécurité anti-effraction, serrures multipoints A2P, portes blindées. Un investissement ponctuel qui offre une tranquillité d'esprit durable.

Contactez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.52!3d47.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b00000000007%3A0x7!2sH%C3%A9singue!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
