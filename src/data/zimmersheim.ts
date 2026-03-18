import { VilleData } from "./types";

export const zimmersheimData: VilleData = {
  nom: "Zimmersheim",
  slug: "serrurier-zimmersheim",
  codePostal: "68440",
  population: "1 800",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Zimmersheim (68440) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Zimmersheim disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Zimmersheim (68440) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Zone pavillonnaire", "Quartier résidentiel",
    "Lotissement récent", "Environs de Habsheim", "Hameau"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Zimmersheim ? Intervention rapide dans ce village résidentiel du Haut-Rhin.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de serrures dans les maisons et pavillons de Zimmersheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements de Zimmersheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Zimmersheim.",
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
      question: "Quel est le délai d'intervention à Zimmersheim ?",
      answer: "Notre délai d'intervention à Zimmersheim est de 20 à 30 minutes. Le village est situé dans la périphérie immédiate de Mulhouse et de Habsheim, ce qui garantit des délais très rapides. Nous couvrons Zimmersheim 24h/24, 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Zimmersheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous dans les nouvelles constructions de Zimmersheim ?",
      answer: "Oui. Zimmersheim a accueilli plusieurs lotissements pavillonnaires ces dernières années. Nous intervenons régulièrement pour remplacer les cylindres de chantier par des équipements définitifs haute sécurité, ou pour les urgences habituelles.",
    },
    {
      question: "Couvrez-vous les communes voisines depuis Zimmersheim ?",
      answer: "Oui, depuis Zimmersheim nous intervenons à Mulhouse (68100), Habsheim (68440), Landser (68440), Illfurth (68720), Brunstatt-Didenheim (68350) et Altkirch (68130) dans des délais similaires.",
    },
    {
      question: "Travaillez-vous la nuit à Zimmersheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Zimmersheim ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Zimmersheim ?",
      answer: "Refusez tout serrurier qui exige un paiement avant d'avoir terminé son travail ou qui n'accepte que le liquide sans reçu. Les arnaques fonctionnent souvent ainsi : un prix bas annoncé, une facture imposée une fois la porte ouverte. Chez Albert Serrurerie, vous payez uniquement après l'intervention terminée, sur présentation d'une facture détaillée.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, et en cas de cambriolage, pensez à déposer plainte dans les 24 heures : le récépissé de dépôt de plainte est systématiquement exigé par les assureurs pour les remboursements liés à une effraction. Notre facture de mise en sécurité, avec descriptif complet et numéro SIRET, constitue la pièce justificative de serrurerie pour votre dossier sinistre.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Habsheim", cp: "68440", slug: "serrurier-habsheim" },
    { nom: "Landser", cp: "68440", slug: "serrurier-landser" },
    { nom: "Illfurth", cp: "68720", slug: "serrurier-illfurth" },
    { nom: "Brunstatt-Didenheim", cp: "68350", slug: "serrurier-brunstatt-didenheim" },
    { nom: "Altkirch", cp: "68130", slug: "serrurier-altkirch" },
  ],

  seoBlock1: `Zimmersheim, commune de 1 800 habitants du Haut-Rhin, est un village résidentiel de la couronne sud-est de Mulhouse. Partageant le code postal 68440 avec Habsheim, sa voisine directe, Zimmersheim est un village typique de la plaine alsacienne entre Mulhouse et le Rhin. Sa proximité avec l'aéroport EuroAirport de Bâle-Mulhouse-Fribourg et les zones d'activités de l'agglomération mulhousienne en fait un choix résidentiel prisé par les actifs de l'agglomération.

Albert Serrurerie intervient dans l'ensemble de Zimmersheim : centre-village, Zone pavillonnaire, lotissements récents et hameaux. Le tissu immobilier de Zimmersheim est principalement composé de maisons individuelles — un parc qui s'est considérablement étoffé avec les lotissements des trente dernières années. Nos techniciens interviennent aussi bien sur les maisons alsaciennes du vieux centre que sur les pavillons récents des quartiers périphériques.

La position de Zimmersheim dans la zone périurbaine de Mulhouse la rend accessible depuis plusieurs axes. Notre équipe intervient depuis Mulhouse, Habsheim ou Altkirch selon la localisation et la disponibilité des techniciens, pour garantir le délai d'intervention le plus court possible. Les urgences nocturnes ne font pas exception — un technicien est disponible à toute heure.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre logement, serrure défaillante, effraction constatée — nous intervenons depuis Mulhouse en moins de 25 minutes. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Zimmersheim, c'est notre connaissance des villages de la couronne mulhousienne et notre capacité à intervenir rapidement dans ce secteur dense. Zimmersheim, bien que petit village, bénéficie de l'ensemble de notre offre de serrurerie professionnelle — du simple dépannage d'urgence à la mise en sécurité complète d'un logement.

Les villages de la périphérie de Mulhouse comme Zimmersheim sont régulièrement ciblés par des plateformes de serrurerie frauduleuses qui affichent des tarifs attractifs en ligne avant de facturer des sommes exorbitantes sur place. Albert Serrurerie est une entreprise inscrite à la Chambre des Métiers d'Alsace, avec des tarifs publics et un devis gratuit avant toute intervention. Nous ne commençons jamais les travaux sans votre accord explicite.

Pour les résidents de Zimmersheim, nous proposons des audits de sécurité gratuits à domicile. En tant que village de la couronne périurbaine de Mulhouse, Zimmersheim mérite une attention particulière à la sécurité résidentielle. Un cylindre haute sécurité, une serrure certifiée A2P ou une porte blindée constituent des investissements durables et efficaces.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.44!3d47.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a000000000f%3A0xf!2sZimmersheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
