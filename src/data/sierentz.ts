import { VilleData } from "./types";

export const sierentzData: VilleData = {
  nom: "Sierentz",
  slug: "serrurier-sierentz",
  codePostal: "68510",
  population: "3 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Sierentz (68510) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Sierentz disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Sierentz (68510) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Zone pavillonnaire", "Quartier résidentiel",
    "Les Vergers", "Lotissements", "Zone commerciale"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Sierentz ? Intervention sans dégât en moins de 30 minutes dans toute la commune.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les pavillons et maisons de Sierentz.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements de Sierentz.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Sierentz.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Sierentz ?",
      answer: "Notre délai moyen d'intervention à Sierentz est de 20 à 30 minutes. Le village est accessible depuis Saint-Louis, Habsheim et Bartenheim. Nos techniciens interviennent dans toute la commune 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Sierentz ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous pour les frontaliers à Sierentz ?",
      answer: "Oui. Sierentz compte de nombreux frontaliers qui travaillent en Suisse. Ce mode de vie implique des absences régulières et une demande accrue en sécurisation résidentielle. Nous proposons des solutions adaptées : cylindres haute sécurité, serrures multipoints, portes blindées.",
    },
    {
      question: "Couvrez-vous les communes autour de Sierentz ?",
      answer: "Oui, depuis Sierentz nous intervenons à Saint-Louis (68300), Habsheim (68440), Bartenheim (68870), Blotzheim (68730), Mulhouse (68100) et Landser (68440).",
    },
    {
      question: "Travaillez-vous la nuit et le week-end à Sierentz ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des audits de sécurité à Sierentz ?",
      answer: "Oui, nous proposons des audits de sécurité gratuits pour les propriétaires de Sierentz. Les maisons pavillonnaires récentes des lotissements sont souvent équipées de cylindres d'entrée de gamme facilement améliorables. L'audit identifie les points faibles et recommande les équipements prioritaires.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Sierentz ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs trop bas. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs, incluant le descriptif des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec tous les grands assureurs du Haut-Rhin.",
    },
  ],

  villesVoisines: [
    { nom: "Saint-Louis", cp: "68300", slug: "serrurier-saint-louis" },
    { nom: "Habsheim", cp: "68440", slug: "serrurier-habsheim" },
    { nom: "Bartenheim", cp: "68870", slug: "serrurier-bartenheim" },
    { nom: "Blotzheim", cp: "68730", slug: "serrurier-blotzheim" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Huningue", cp: "68330", slug: "serrurier-huningue" },
  ],

  seoBlock1: `Sierentz, village résidentiel de 3 500 habitants du Haut-Rhin, est une commune du Sundgau nord qui bénéficie d'une situation géographique privilégiée entre Mulhouse, Saint-Louis et la frontière suisse. Ce village calme et familial, organisé autour de son centre traditionnel alsacien, a connu un développement pavillonnaire important grâce à l'attractivité de la zone frontalière pour les travailleurs se rendant en Suisse.

Albert Serrurerie intervient dans l'ensemble de Sierentz : centre-village, Zone pavillonnaire, Quartier résidentiel, Les Vergers, Lotissements et Zone commerciale. Nos techniciens connaissent les caractéristiques des maisons individuelles et pavillons de la commune — principalement des constructions récentes dotées de portes et serrures modernes — et disposent du matériel adapté pour chaque situation.

La forte présence de frontaliers à Sierentz crée des besoins spécifiques en matière de sécurité résidentielle. Les logements régulièrement inoccupés pendant les heures de travail en Suisse représentent des cibles potentielles pour les cambrioleurs. Nous proposons des solutions de sécurisation adaptées au profil frontalier : cylindres haute sécurité certifiés A2P, serrures multipoints résistantes et portes blindées qui offrent une protection optimale.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre pavillon, serrure défaillante, effraction constatée — nous intervenons en moins de 30 minutes depuis Saint-Louis ou Mulhouse. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Choisir Albert Serrurerie à Sierentz, c'est opter pour un artisan local déclaré, inscrit à la Chambre des Métiers d'Alsace. Notre connaissance des communes du Sundgau nord et de la zone frontalière nous permet d'intervenir à Sierentz dans des conditions optimales, en comprenant les besoins spécifiques des résidents frontaliers.

Comme dans tous les villages résidentiels du Sundgau nord, Sierentz peut être ciblé par des sociétés de serrurerie peu scrupuleuses. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit.

Pour les propriétaires de Sierentz, nous proposons des audits de sécurité gratuits. Ces audits permettent d'évaluer le niveau de protection de votre domicile et de recommander les investissements les plus pertinents. Dans les lotissements récents de Sierentz, le remplacement du cylindre d'origine par un cylindre haute sécurité certifié est souvent la première recommandation — une intervention rapide et abordable qui améliore significativement la protection.

Contactez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.45!3d47.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b0000000000f%3A0xf!2sSierentz!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
