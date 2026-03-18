import { VilleData } from "./types";

export const wittenheimData: VilleData = {
  nom: "Wittenheim",
  slug: "serrurier-wittenheim",
  codePostal: "68270",
  population: "16 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Wittenheim (68270) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Wittenheim disponible 24h/24 et 7j/7. Ouverture de porte, changement serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Wittenheim (68270) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Wittenheim-Village", "Cité Syndicat",
    "Zone industrielle potasse", "Les Aiguières", "Quartier Nord"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée ou fermée à clé, nous intervenons sans dégât en moins de 30 minutes.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure : cylindre européen, multipoints, serrure en applique.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour sécuriser votre domicile.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Wittenheim 68270 ?",
      answer: "Notre délai moyen d'intervention à Wittenheim est de 20 à 30 minutes. Que vous soyez au Centre-ville, à la Cité Syndicat, aux Aiguières ou dans le Quartier Nord, un technicien disponible intervient rapidement. Notre positionnement stratégique dans l'agglomération mulhousienne nous permet de garantir cette réactivité à toute heure, y compris les nuits, week-ends et jours fériés.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Wittenheim ?",
      answer: "Le tarif d'ouverture de porte à Wittenheim commence à 89€ TTC pour une serrure simple à 1 point, 130€ TTC pour une serrure 3 points et 180€ TTC pour une porte blindée. Tous nos tarifs sont annoncés avant intervention. Appelez-nous au 03 74 47 47 93 pour obtenir un devis gratuit et sans engagement.",
    },
    {
      question: "Intervenez-vous la nuit à Wittenheim ?",
      answer: "Oui, Albert Serrurerie intervient 24h/24, 7j/7 à Wittenheim. Porte claquée en pleine nuit, effraction le week-end, clé perdue un jour férié — nous répondons à toute heure sans exception. Aucun supplément caché de nuit ou de week-end : les tarifs annoncés au téléphone sont ceux facturés.",
    },
    {
      question: "Couvrez-vous aussi Kingersheim et Wittelsheim depuis Wittenheim ?",
      answer: "Oui, nous couvrons Kingersheim (68260) et Wittelsheim (68310) avec les mêmes délais d'intervention qu'à Wittenheim. Nous intervenons également sur Mulhouse, Illzach, Pulversheim et Staffelfelden. Toutes ces communes font partie de notre zone d'intervention principale dans l'agglomération mulhousienne.",
    },
    {
      question: "Êtes-vous agréé assurance habitation à Wittenheim ?",
      answer: "Oui, nous sommes agréés auprès des principales compagnies d'assurance. Après chaque intervention à Wittenheim, nous remettons une facture détaillée conforme aux exigences des assureurs : Crédit Mutuel, Groupama, AXA, MAIF, MMA, Allianz… Ce document inclut la description précise des travaux, les références des pièces posées et le montant TTC ventilé.",
    },
    {
      question: "Intervenez-vous après un cambriolage à Wittenheim ?",
      answer: "Oui, la mise en sécurité après effraction est une intervention prioritaire à Wittenheim. Nous intervenons en urgence pour condamner les accès fracturés, remplacer les serrures endommagées et sécuriser provisoirement le logement. Wittenheim, ancienne ville minière avec un habitat social dense, dispose d'un parc immobilier varié qui nécessite parfois une remise à niveau sécuritaire complète après une intrusion.",
    },
    {
      question: "Posez-vous des portes blindées à Wittenheim 68270 ?",
      answer: "Oui, nous proposons la pose de portes blindées certifiées A2P BP1, BP2 et BP3 à Wittenheim. L'installation est réalisée par nos techniciens en une demi-journée, à partir de 890€ TTC. Le parc immobilier de Wittenheim mêle logements sociaux et pavillons individuels : nous adaptons notre offre à chaque configuration, avec un audit de sécurité gratuit préalable.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Wittenheim ?",
      answer: "Pour éviter les arnaques à Wittenheim : exigez un devis écrit avant le début des travaux, vérifiez le numéro SIRET du prestataire (inscrit à la Chambre des Métiers d'Alsace), méfiez-vous des tarifs d'appel irréalistes (39€, 49€). Chez Albert Serrurerie, nos tarifs sont affichés publiquement, le devis est gratuit et aucun travail ne commence sans votre accord écrit.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Kingersheim", cp: "68260", slug: "serrurier-kingersheim" },
    { nom: "Wittelsheim", cp: "68310", slug: "serrurier-wittelsheim" },
    { nom: "Pulversheim", cp: "68840", slug: "serrurier-pulversheim" },
    { nom: "Staffelfelden", cp: "68850", slug: "serrurier-staffelfelden" },
    { nom: "Illzach", cp: "68110", slug: "serrurier-illzach" },
  ],

  seoBlock1: `Wittenheim, commune de 16 000 habitants du Haut-Rhin, est intimement liée à l'histoire minière de l'Alsace. Ancienne ville de la potasse, Wittenheim a construit son identité autour des Mines de Potasse d'Alsace (MDPA) qui ont façonné son tissu urbain, sa démographie et son architecture pendant une grande partie du XXe siècle. Aujourd'hui, la ville a entamé une profonde transformation pour accueillir de nouvelles activités économiques et répondre aux besoins d'une population diversifiée.

Albert Serrurerie est votre serrurier de confiance à Wittenheim 68270. Nous intervenons dans tous les quartiers de la commune : Centre-ville, Wittenheim-Village, Cité Syndicat, Zone industrielle de la potasse, Les Aiguières et le Quartier Nord. Le parc immobilier wittenheimois est particulièrement varié : logements sociaux collectifs hérités de l'ère minière côtoient des maisons individuelles plus récentes et des résidences intermédiaires construites depuis les années 1980.

Cette diversité architecturale se traduit par des besoins en serrurerie tout aussi variés. Les portes des logements sociaux de la Cité Syndicat présentent souvent des configurations spécifiques nécessitant des cylindres adaptés. Les pavillons individuels du Quartier Nord bénéficient quant à eux d'une demande croissante en solutions de sécurisation renforcée. Nos techniciens maîtrisent l'ensemble de ces configurations et interviennent avec le matériel adapté à chaque situation.

Nos équipes sont disponibles 24 heures sur 24, 7 jours sur 7 à Wittenheim. La proximité avec Mulhouse (à moins de 10 minutes) nous permet de garantir des délais d'intervention de 20 à 30 minutes maximum, quel que soit l'heure ou le jour. Chaque véhicule est entièrement équipé pour traiter l'immense majorité des situations sur place, sans nécessiter de déplacement complémentaire pour chercher des pièces.`,

  seoBlock2: `Choisir Albert Serrurerie à Wittenheim, c'est opter pour un artisan local sérieux, inscrit à la Chambre des Métiers d'Alsace et engageant sa réputation sur chaque intervention. Le secteur de la serrurerie d'urgence à Wittenheim, comme dans l'ensemble de l'agglomération mulhousienne, est malheureusement ciblé par des opérateurs peu scrupuleux qui profitent des situations d'urgence pour facturer des montants exorbitants.

Ces plateformes nationales affichent des tarifs d'appel de 39€ à 59€ pour attirer les personnes en détresse, avant de facturer 500€ à 1 200€ une fois le technicien sur place. Elles sous-traitent à des intervenants sans qualification locale, parfois sans outil adéquat, qui endommagent les portes et les cadres au lieu d'ouvrir proprement. Pour les locataires de Wittenheim, ces pratiques sont doublement problématiques : ils doivent payer le serrurier abusif ET les réparations des dégâts causés.

Albert Serrurerie applique une politique de prix transparente et publique. Nos tarifs sont consultables sur ce site avant même de nous appeler. Lors de chaque appel, nous vous communiquons une estimation précise avant de nous déplacer. Nous n'intervenons que sur votre accord explicite sur le montant, et vous êtes libre de refuser si le tarif ne vous convient pas — seul le déplacement de 49,50€ TTC reste dû.

Pour les syndics de copropriété et les bailleurs sociaux de Wittenheim, nous proposons des contrats de maintenance et d'entretien des parties communes : serrurerie des halls d'entrée, interphones, boîtes aux lettres sécurisées, parkings. Contactez-nous au 03 74 47 47 93 pour un devis gratuit. Nous intervenons également sur appel d'urgence pour les gestionnaires d'immeubles en cas de problème sur les accès communs.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.34!3d47.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791924f3e2c2c1%3A0x40a5fb99a3b960!2sWittenheim%2C%2068270!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
