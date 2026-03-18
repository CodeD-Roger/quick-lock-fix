import { VilleData } from "./types";

export const lutterbachData: VilleData = {
  nom: "Lutterbach",
  slug: "serrurier-lutterbach",
  codePostal: "68460",
  population: "6 100",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Lutterbach (68460) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Lutterbach disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Lutterbach (68460) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Lutterbach-Village", "Zone industrielle",
    "Quartier pavillonnaire", "Les Prairies", "Cité ouvrière"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Lutterbach ? Intervention sans dégât en moins de 30 minutes dans toute la commune.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les logements collectifs, ouvriers et pavillonnaires de Lutterbach.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les appartements et maisons de Lutterbach.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Lutterbach.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Lutterbach ?",
      answer: "Notre délai moyen d'intervention à Lutterbach est de 20 à 30 minutes. Que vous soyez dans la cité ouvrière, au quartier pavillonnaire, aux Prairies ou dans le centre-ville, un technicien intervient rapidement. La contiguïté avec Mulhouse nous permet d'intervenir à Lutterbach dans des délais exceptionnels, 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Lutterbach ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, comptez à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué avant toute intervention, sans engagement.",
    },
    {
      question: "Intervenez-vous dans les immeubles collectifs de Lutterbach ?",
      answer: "Oui, Lutterbach compte une forte proportion de logements collectifs — anciens immeubles ouvriers et résidences récentes — dont les portes palières et les accès communs nécessitent une expertise spécifique. Nous intervenons pour les particuliers comme pour les syndics de copropriété et les bailleurs sociaux présents à Lutterbach.",
    },
    {
      question: "Couvrez-vous Mulhouse depuis Lutterbach ?",
      answer: "Absolument. Lutterbach est directement limitrophe de Mulhouse, et nous couvrons les deux communes dans les mêmes délais. Nous intervenons également à Pfastatt (68120), Kingersheim (68260), Riedisheim (68400), Wittenheim (68270) et Illzach (68110) dans des conditions identiques.",
    },
    {
      question: "Travaillez-vous la nuit à Lutterbach ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Lutterbach. Porte claquée la nuit, effraction le dimanche, clé cassée un jour férié — nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Faut-il une pièce d'identité pour une ouverture de porte à Lutterbach ?",
      answer: "Oui, c'est une obligation légale. Pour toute ouverture de porte, nous demandons obligatoirement une pièce d'identité en cours de validité et un justificatif de domicile. Cette vérification protège les occupants légitimes. En cas de locataire sans justificatif sur place, nous pouvons contacter le propriétaire ou le bailleur.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Lutterbach ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez que le serrurier est inscrit à la Chambre des Métiers d'Alsace. Méfiez-vous des prix trop bas annoncés au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord explicite.",
    },
    {
      question: "Proposez-vous des portes blindées pour les logements collectifs à Lutterbach ?",
      answer: "Oui, nous proposons une gamme de portes blindées certifiées A2P adaptées aux appartements en immeubles collectifs. L'installation est réalisée en une demi-journée. Tarifs à partir de 890€ TTC pose comprise. Nous réalisons également le blindage de porte palière existante à partir de 490€ TTC, une solution économique pour les locataires.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Pfastatt", cp: "68120", slug: "serrurier-pfastatt" },
    { nom: "Kingersheim", cp: "68260", slug: "serrurier-kingersheim" },
    { nom: "Riedisheim", cp: "68400", slug: "serrurier-riedisheim" },
    { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
    { nom: "Illzach", cp: "68110", slug: "serrurier-illzach" },
  ],

  seoBlock1: `Lutterbach, commune industrielle de 6 100 habitants du Haut-Rhin, est directement limitrophe de Mulhouse à l'ouest. Sa situation géographique particulière — enclavée entre Mulhouse, Pfastatt et Kingersheim — en fait une commune de l'agglomération mulhousienne à part entière, avec toutes les caractéristiques d'un tissu urbain dense et mixte. Le parc immobilier lutterbachois associe des cités ouvrières héritées de l'industrie textile alsacienne, des immeubles collectifs des années 1960-1980 et une zone pavillonnaire plus récente.

Albert Serrurerie intervient dans l'ensemble de Lutterbach : centre-ville, Lutterbach-Village, Zone industrielle, Quartier pavillonnaire, Les Prairies et Cité ouvrière. Nos techniciens connaissent la géographie de la commune et ses caractéristiques architecturales variées. La forte densité de logements collectifs implique une demande régulière pour les ouvertures de portes palières, les changements de cylindres d'entrée et les interventions après effraction sur des appartements.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. La contiguïté de Lutterbach avec Mulhouse nous permet d'intervenir avec des délais exceptionnels — souvent inférieurs à 20 minutes — dans toute la commune. Porte claquée dans votre appartement de la cité ouvrière, serrure défaillante dans votre pavillon des Prairies, effraction constatée sur votre logement collectif — nos techniciens arrivent rapidement et entièrement équipés.

Chaque véhicule dispose du matériel nécessaire pour traiter la grande majorité des situations sur place dès le premier passage, qu'il s'agisse d'une serrure de porte palière d'immeuble ou d'une porte d'entrée de maison individuelle.`,

  seoBlock2: `Choisir Albert Serrurerie à Lutterbach, c'est opter pour un artisan local déclaré, inscrit à la Chambre des Métiers d'Alsace, avec une connaissance approfondie de l'agglomération mulhousienne. Notre expertise des immeubles collectifs — cités ouvrières réhabilitées, résidences des années 1970, copropriétés récentes — nous distingue des intervenants généralistes non spécialisés.

La densité urbaine de Lutterbach, liée à sa proximité immédiate avec Mulhouse, peut attirer des sociétés de serrurerie peu scrupuleuses qui pratiquent des tarifs d'appel trompeurs. Chez Albert Serrurerie, nous garantissons la transparence totale : nos tarifs sont publics sur ce site, le devis est gratuit avant intervention, et nous ne commençons aucun travail sans votre accord écrit. Le déplacement de 49,50€ TTC est le seul montant dû si vous refusez notre devis.

Pour les bailleurs sociaux et syndics de copropriété de Lutterbach, nous proposons des tarifs dégressifs sur les interventions groupées et des contrats de maintenance préventive annuelle. Ces partenariats permettent d'anticiper les défaillances et de gérer efficacement le parc de serrurerie des logements collectifs.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Garantie fabricant sur chaque pièce installée. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.28!3d47.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b00000000008%3A0x8!2sLutterbach!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
