import { VilleData } from "./types";

export const habsheimData: VilleData = {
  nom: "Habsheim",
  slug: "serrurier-habsheim",
  codePostal: "68440",
  population: "5 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Habsheim (68440) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Habsheim disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Habsheim (68440) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Habsheim-Village", "Zone industrielle",
    "Aérodrome", "Zone pavillonnaire", "Quartier résidentiel"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Habsheim ? Intervention sans dégât en moins de 30 minutes dans toute la commune.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les pavillons et maisons individuelles d'Habsheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les maisons et pavillons d'Habsheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Habsheim.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Habsheim ?",
      answer: "Notre délai moyen d'intervention à Habsheim est de 20 à 30 minutes. La proximité avec Mulhouse et l'accès direct par la rocade mulhousienne nous permettent d'intervenir très rapidement dans toute la commune, que vous soyez en centre-ville, dans la zone pavillonnaire ou près de l'aérodrome, 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Habsheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué avant toute intervention au 03 74 47 47 93.",
    },
    {
      question: "Intervenez-vous pour les entreprises de la zone industrielle d'Habsheim ?",
      answer: "Oui, nous intervenons pour les professionnels de la zone industrielle d'Habsheim : portes d'entrepôt bloquées, serrures de bureau à changer, mise en sécurité après effraction. Nos techniciens sont disponibles 24h/24 pour les urgences professionnelles et proposent des contrats de maintenance pour les entreprises.",
    },
    {
      question: "Couvrez-vous les communes autour d'Habsheim ?",
      answer: "Oui, depuis Habsheim nous intervenons à Mulhouse (68100), Rixheim (68170), Riedisheim (68400), Landser (68440), Sierentz (68510) et Saint-Louis (68300). Toutes ces communes sont couvertes dans les mêmes délais et aux mêmes tarifs.",
    },
    {
      question: "Travaillez-vous la nuit à Habsheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Habsheim. Porte claquée la nuit, effraction le week-end, clé cassée un jour férié — nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Habsheim ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P pour les pavillons et maisons d'Habsheim. Les maisons individuelles sont des cibles privilégiées pour les cambrioleurs — une porte blindée A2P est l'investissement sécuritaire le plus efficace. Tarifs à partir de 890€ TTC pose comprise.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Habsheim ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs trop bas annoncés au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord explicite.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation à Habsheim ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs. Ce document inclut le descriptif des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec Crédit Mutuel, Groupama, AXA, Allianz, MAIF et MMA.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Rixheim", cp: "68170", slug: "serrurier-rixheim" },
    { nom: "Riedisheim", cp: "68400", slug: "serrurier-riedisheim" },
    { nom: "Saint-Louis", cp: "68300", slug: "serrurier-saint-louis" },
    { nom: "Sierentz", cp: "68510", slug: "serrurier-sierentz" },
    { nom: "Brunstatt-Didenheim", cp: "68350", slug: "serrurier-brunstatt-didenheim" },
  ],

  seoBlock1: `Habsheim, commune résidentielle de 5 000 habitants du Haut-Rhin, est idéalement positionnée au sud-est de Mulhouse, à laquelle elle est reliée directement par la rocade mulhousienne. Cette accessibilité routière exceptionnelle, combinée à un cadre de vie agréable et à des prix immobiliers plus accessibles qu'en ville, a favorisé un développement pavillonnaire important qui a transformé ce bourg alsacien en commune résidentielle attractive pour les actifs travaillant à Mulhouse.

Albert Serrurerie intervient dans l'ensemble d'Habsheim : centre-ville, Habsheim-Village, Zone industrielle, secteur Aérodrome, Zone pavillonnaire et Quartier résidentiel. Nos techniciens connaissent la géographie de la commune et ses caractéristiques architecturales — maisons individuelles récentes, pavillons des années 1980-2000, quelques bâtiments anciens du bourg d'origine. La grande majorité des logements d'Habsheim est équipée de portes modernes en PVC ou aluminium avec des serrures multipoints, que nos techniciens maîtrisent parfaitement.

La zone industrielle d'Habsheim accueille plusieurs entreprises et locaux d'activité qui génèrent une demande professionnelle en serrurerie : accès industriels, portes d'entrepôts, locaux de bureau. Nos techniciens interviennent aussi bien pour les particuliers que pour les professionnels, avec les mêmes engagements de délai et de transparence tarifaire.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre pavillon, serrure défaillante sur votre local professionnel, effraction constatée — nous intervenons en moins de 30 minutes depuis Mulhouse. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Choisir Albert Serrurerie à Habsheim, c'est opter pour un artisan local déclaré, inscrit à la Chambre des Métiers d'Alsace. Notre connaissance de l'agglomération mulhousienne et de ses communes résidentielles nous permet d'intervenir à Habsheim dans des délais optimaux, en connaissant les accès et les caractéristiques du bâti local.

La proximité avec Mulhouse expose Habsheim aux mêmes risques de serrurerie frauduleuse que la grande ville. Des plateformes téléphoniques nationales publient des annonces ciblant les communes résidentielles proches des grandes agglomérations. Chez Albert Serrurerie, nous garantissons la transparence : tarifs publics sur ce site, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit.

Pour les propriétaires de maisons individuelles à Habsheim, nous proposons des audits de sécurité gratuits. Ces audits permettent d'identifier les points faibles de votre habitation et de recommander les solutions adaptées : cylindres haute sécurité, serrures multipoints A2P, portes blindées, cornières anti-pince. Dans une commune résidentielle pavillonnaire comme Habsheim, les maisons individuelles sont statistiquement plus exposées aux cambriolages que les appartements en immeuble.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.42!3d47.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b00000000004%3A0x4!2sHabsheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
