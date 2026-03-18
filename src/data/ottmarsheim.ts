import { VilleData } from "./types";

export const ottmarsheimData: VilleData = {
  nom: "Ottmarsheim",
  slug: "serrurier-ottmarsheim",
  codePostal: "68490",
  population: "3 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Ottmarsheim (68490) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Ottmarsheim disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Ottmarsheim (68490) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Zone industrielle canal", "Quartier pavillonnaire",
    "Les Berges", "Zone portuaire", "Lotissements récents"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Ottmarsheim ? Intervention sans dégât en moins de 30 minutes dans toute la commune.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les logements et locaux professionnels d'Ottmarsheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements et locaux d'Ottmarsheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement ou local après une effraction à Ottmarsheim.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Ottmarsheim ?",
      answer: "Notre délai moyen d'intervention à Ottmarsheim est de 20 à 30 minutes. La commune est accessible depuis Mulhouse, Ensisheim et Rixheim. Nos techniciens interviennent dans toute la commune — centre-village, zone industrielle, lotissements — 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Ottmarsheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous pour les entreprises de la zone industrielle d'Ottmarsheim ?",
      answer: "Oui, la zone industrielle d'Ottmarsheim, liée au canal du Rhône au Rhin et à son port fluvial, accueille de nombreuses entreprises. Nous intervenons pour les professionnels : portes d'entrepôts bloquées, serrures de bureaux, mises en sécurité après effraction. Nos techniciens sont disponibles 24h/24.",
    },
    {
      question: "Couvrez-vous les communes autour d'Ottmarsheim ?",
      answer: "Oui, depuis Ottmarsheim nous intervenons à Mulhouse (68100), Ensisheim (68190), Rixheim (68170), Baldersheim (68390), Battenheim (68390) et Habsheim (68440).",
    },
    {
      question: "Travaillez-vous la nuit à Ottmarsheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Porte claquée la nuit, effraction le week-end, clé cassée — nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Ottmarsheim ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P pour les logements d'Ottmarsheim. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Ottmarsheim ?",
      answer: "Méfiez-vous des serruriers qui refusent de donner leur tarif par téléphone avant de se déplacer. Tout artisan sérieux est capable de vous communiquer une fourchette de prix selon la nature de votre problème. Chez Albert Serrurerie, nous indiquons nos tarifs dès le premier appel et les confirmons par un devis écrit avant intervention.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation à Ottmarsheim ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs. Ce document inclut le descriptif des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec les principaux assureurs du Haut-Rhin.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Ensisheim", cp: "68190", slug: "serrurier-ensisheim" },
    { nom: "Rixheim", cp: "68170", slug: "serrurier-rixheim" },
    { nom: "Baldersheim", cp: "68390", slug: "serrurier-baldersheim" },
    { nom: "Habsheim", cp: "68440", slug: "serrurier-habsheim" },
    { nom: "Battenheim", cp: "68390", slug: "serrurier-battenheim" },
  ],

  seoBlock1: `Ottmarsheim, commune de 3 500 habitants du Haut-Rhin, est un bourg au profil unique dans le département : elle abrite à la fois une abbatiale romane du XIe siècle, l'une des rares copies de l'oratoire de Charlemagne à Aix-la-Chapelle classée monument historique, et l'une des plus importantes zones industrielles et portuaires de la plaine d'Alsace, liée au canal du Rhône au Rhin. Ce mélange singulier de patrimoine médiéval et d'activité industrielle contemporaine crée un tissu urbain et architectural varié qui génère des besoins en serrurerie très divers.

Albert Serrurerie intervient dans l'ensemble d'Ottmarsheim : centre-village, Zone industrielle canal, Quartier pavillonnaire, Les Berges, Zone portuaire et Lotissements récents. Nos techniciens s'adaptent à la diversité du bâti ottmarsheimois — de la maison ancienne du centre-village aux logements récents des lotissements, en passant par les locaux professionnels de la zone industrielle.

La zone industrielle et portuaire d'Ottmarsheim, l'une des plus actives de la plaine alsacienne, abrite de nombreuses entreprises qui nécessitent des prestations en serrurerie professionnelle : accès industriels, portes d'entrepôts et de bureaux, systèmes de contrôle d'accès. Nos techniciens interviennent pour ces clients professionnels avec les mêmes engagements de réactivité et de transparence que pour les particuliers.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre maison du centre-village, serrure défaillante sur un local industriel, effraction constatée — nous intervenons en moins de 30 minutes depuis Mulhouse ou Ensisheim. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Ottmarsheim, c'est notre capacité à intervenir sur des bâtiments très différents dans une même commune : des maisons anciennes du centre historique, des logements pavillonnaires récents et des locaux industriels et portuaires. Cette polyvalence, rare dans le secteur de la serrurerie, est le fruit d'une formation continue de nos techniciens et d'un stock de matériel diversifié.

Comme partout dans le Haut-Rhin, Ottmarsheim peut être ciblée par des plateformes de serrurerie frauduleuses. Chez Albert Serrurerie, nous garantissons la transparence : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit. Nous sommes une entreprise locale inscrite à la Chambre des Métiers d'Alsace.

Pour les entreprises de la zone industrielle et portuaire d'Ottmarsheim, nous proposons des contrats de maintenance préventive annuelle : vérification des cylindres et serrures, remplacement préventif des pièces usées, audit des accès. Ces contrats permettent d'anticiper les défaillances et d'éviter les situations d'urgence coûteuses.

Contactez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.52!3d47.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b00000000009%3A0x9!2sOttmarsheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
