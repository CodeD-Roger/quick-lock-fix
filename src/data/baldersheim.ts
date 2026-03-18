import { VilleData } from "./types";

export const baldersheimData: VilleData = {
  nom: "Baldersheim",
  slug: "serrurier-baldersheim",
  codePostal: "68390",
  population: "3 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Baldersheim (68390) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Baldersheim disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Baldersheim (68390) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Zone pavillonnaire", "Quartier résidentiel",
    "Les Vergers", "Lotissements", "Zone artisanale"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Baldersheim ? Intervention sans dégât en moins de 30 minutes dans toute la commune.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les pavillons et maisons individuelles de Baldersheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les maisons individuelles de Baldersheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Baldersheim.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Baldersheim ?",
      answer: "Notre délai moyen d'intervention à Baldersheim est de 20 à 30 minutes. Le village est facilement accessible depuis Mulhouse, Wittenheim et Kingersheim. Nos techniciens interviennent dans toute la commune 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Baldersheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Couvrez-vous les communes autour de Baldersheim ?",
      answer: "Oui, depuis Baldersheim nous intervenons à Mulhouse (68100), Wittenheim (68270), Kingersheim (68260), Battenheim (68390), Rixheim (68170) et Ottmarsheim (68490). Toutes ces communes sont couvertes rapidement.",
    },
    {
      question: "Intervenez-vous dans les maisons individuelles de Baldersheim ?",
      answer: "Oui, Baldersheim est un village résidentiel composé principalement de maisons individuelles et de pavillons. Nos techniciens maîtrisent les configurations des portes modernes en PVC et aluminium, les serrures multipoints et les cylindres européens courants dans ce type d'habitat.",
    },
    {
      question: "Travaillez-vous la nuit et le week-end à Baldersheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des audits de sécurité à Baldersheim ?",
      answer: "Oui, nous proposons des audits de sécurité gratuits pour les propriétaires de maisons individuelles à Baldersheim. Ces audits permettent d'identifier les points faibles de votre habitation et de recommander les solutions adaptées : cylindres haute sécurité, serrures multipoints, portes blindées.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Baldersheim ?",
      answer: "Un serrurier honnête affiche ses tarifs publiquement et sans ambiguïté. Chez Albert Serrurerie, nos prix sont consultables sur ce site : ce que vous lisez est exactement ce que vous payez. Aucun tarif variable selon l'urgence apparente ou la détresse de la situation — nos tarifs sont fixes et annoncés avant l'intervention.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs. Ce document inclut le descriptif des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec tous les grands assureurs du Haut-Rhin.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
    { nom: "Kingersheim", cp: "68260", slug: "serrurier-kingersheim" },
    { nom: "Battenheim", cp: "68390", slug: "serrurier-battenheim" },
    { nom: "Rixheim", cp: "68170", slug: "serrurier-rixheim" },
    { nom: "Ottmarsheim", cp: "68490", slug: "serrurier-ottmarsheim" },
  ],

  seoBlock1: `Baldersheim, village résidentiel de 3 500 habitants du Haut-Rhin, est niché dans la plaine alsacienne entre Mulhouse et Rixheim. Commune calme à la forte proportion de propriétaires occupants, Baldersheim a connu un développement pavillonnaire régulier qui a transformé ce bourg agricole en village résidentiel prisé des familles souhaitant allier la proximité de Mulhouse à un cadre de vie plus paisible.

Albert Serrurerie intervient dans l'ensemble de Baldersheim : centre-village, Zone pavillonnaire, Quartier résidentiel, Les Vergers, Lotissements et Zone artisanale. Nos techniciens connaissent les caractéristiques des maisons individuelles et pavillons de la commune — portes d'entrée modernes, serrures multipoints, cylindres européens — et disposent du matériel pour traiter chaque situation rapidement.

La forte proportion de propriétaires occupants à Baldersheim crée une demande soutenue pour des prestations de serrurerie de qualité et des solutions de sécurisation fiables. Les maisons individuelles, souvent avec jardin, sont statistiquement plus exposées aux tentatives de cambriolage que les appartements en immeuble. Nos techniciens sont formés pour évaluer ces risques et proposer des solutions adaptées.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre pavillon, serrure défaillante, effraction constatée — nous intervenons en moins de 30 minutes depuis Mulhouse ou Wittenheim. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Choisir Albert Serrurerie à Baldersheim, c'est faire confiance à un artisan local déclaré, inscrit à la Chambre des Métiers d'Alsace. Notre connaissance de l'agglomération mulhousienne étendue et de ses communes résidentielles nous permet d'intervenir à Baldersheim dans des délais optimaux.

Les communes résidentielles pavillonnaires comme Baldersheim peuvent être ciblées par des sociétés de serrurerie peu scrupuleuses. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics sur ce site, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit.

Pour les propriétaires de maisons à Baldersheim, nous proposons des audits de sécurité gratuits. La plupart des maisons individuelles sont livrées avec des serrures et cylindres d'entrée de gamme que nous recommandons de remplacer par des équipements certifiés haute sécurité. Ce remplacement simple et abordable augmente considérablement la résistance aux effractions et peut réduire votre prime d'assurance.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.44!3d47.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b0000000000a%3A0xa!2sBaldersheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
