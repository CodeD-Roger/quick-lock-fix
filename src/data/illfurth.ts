import { VilleData } from "./types";

export const illfurthData: VilleData = {
  nom: "Illfurth",
  slug: "serrurier-illfurth",
  codePostal: "68720",
  population: "2 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Illfurth (68720) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Illfurth disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Illfurth (68720) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Zone pavillonnaire", "Quartier résidentiel",
    "Lotissement récent", "Environs de Mulhouse", "Hameau"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Illfurth ? Intervention rapide dans ce village résidentiel du Sundgau.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de serrures dans les maisons pavillonnaires et logements d'Illfurth.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les maisons et appartements d'Illfurth.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Illfurth.",
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
      question: "Quel est le délai d'intervention à Illfurth ?",
      answer: "Notre délai d'intervention à Illfurth est de 20 à 35 minutes. La commune est accessible rapidement depuis Mulhouse, à moins de 15 kilomètres au nord. Nous couvrons Illfurth et les villages environnants du Sundgau 24h/24, 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Illfurth ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous pour les résidents des lotissements récents d'Illfurth ?",
      answer: "Oui. Illfurth a connu un fort développement résidentiel ces dernières années avec plusieurs lotissements pavillonnaires. Nous intervenons régulièrement pour remplacer les cylindres de chantier par des équipements haute sécurité, ou pour les urgences quotidiennes.",
    },
    {
      question: "Couvrez-vous les villages voisins depuis Illfurth ?",
      answer: "Oui, depuis Illfurth nous intervenons à Mulhouse (68100), Brunstatt-Didenheim (68350), Altkirch (68130), Dannemarie (68210), Landser (68440) et Zimmersheim (68440) dans des délais similaires.",
    },
    {
      question: "Travaillez-vous la nuit à Illfurth ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Illfurth ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Illfurth ?",
      answer: "Prenez 60 secondes pour vérifier les avis Google d'un serrurier avant de l'appeler en urgence : les prestataires peu scrupuleux accumulent les témoignages négatifs facilement repérables. Albert Serrurerie affiche une note de 4,8/5 sur plus de 127 avis vérifiés. Nos tarifs sont publics et notre devis est transmis avant toute intervention.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, et en cas de cambriolage, pensez à déposer plainte dans les 24 heures : le récépissé de dépôt de plainte est systématiquement exigé par les assureurs pour les remboursements liés à une effraction. Notre facture de mise en sécurité, avec descriptif complet et numéro SIRET, constitue la pièce justificative de serrurerie pour votre dossier sinistre.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Brunstatt-Didenheim", cp: "68350", slug: "serrurier-brunstatt-didenheim" },
    { nom: "Altkirch", cp: "68130", slug: "serrurier-altkirch" },
    { nom: "Dannemarie", cp: "68210", slug: "serrurier-dannemarie" },
    { nom: "Landser", cp: "68440", slug: "serrurier-landser" },
    { nom: "Zimmersheim", cp: "68440", slug: "serrurier-zimmersheim" },
  ],

  seoBlock1: `Illfurth, commune de 2 500 habitants du Haut-Rhin, est un village résidentiel dynamique du Sundgau qui bénéficie d'une position géographique idéale : à moins de 15 kilomètres au sud de Mulhouse, sur l'axe vers Altkirch et le Sundgau profond. Cette proximité avec la capitale économique du Haut-Rhin en fait un village très recherché par les familles qui veulent combiner le calme de la campagne alsacienne et la facilité d'accès aux pôles d'emploi de l'agglomération mulhousienne.

Albert Serrurerie intervient dans l'ensemble d'Illfurth : centre-village historique, Zone pavillonnaire, lotissements récents et hameaux. Le développement résidentiel important d'Illfurth ces dernières décennies a considérablement enrichi le parc immobilier de la commune, qui mêle désormais des maisons alsaciennes traditionnelles, des pavillons des années 1970-1990 et des constructions récentes. Chaque époque constructive présente des spécificités en matière de serrurerie que nos techniciens connaissent bien.

La croissance démographique d'Illfurth s'est accompagnée d'une augmentation des cambriolages dans les communes périphériques de Mulhouse — un phénomène qui touche l'ensemble de la couronne périurbaine mulhousienne. Cette réalité renforce l'intérêt des habitants à investir dans des équipements de sécurité de qualité : cylindres haute sécurité, serrures certifiées A2P, portes blindées.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre pavillon, serrure défaillante, effraction constatée — nous intervenons depuis Mulhouse en moins de 25 minutes. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Illfurth, c'est notre réactivité depuis Mulhouse et notre connaissance du tissu résidentiel pavillonnaire du Sundgau. Village de la couronne mulhousienne, Illfurth concentre un parc immobilier essentiellement composé de maisons individuelles — un secteur que nous connaissons parfaitement et pour lequel nous intervenons quotidiennement.

Les propriétaires de maisons neuves à Illfurth ont une priorité souvent négligée : remplacer les cylindres de chantier posés par le constructeur par des équipements définitifs de haute sécurité. Ces cylindres temporaires sont souvent de très faible résistance et peuvent avoir été utilisés par de nombreuses personnes pendant les travaux. Albert Serrurerie réalise ces remplacements préventifs avec des équipements certifiés, pour un coût modeste mais un gain de sécurité significatif.

Pour les résidents d'Illfurth, nous proposons des audits de sécurité gratuits à domicile. Nos techniciens évaluent l'ensemble des points d'entrée de votre logement — portes, fenêtres, portails — et vous remettent un rapport avec des recommandations priorisées selon votre budget.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.33!3d47.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a000000000d%3A0xd!2sIllfurth!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
