import { VilleData } from "./types";

export const bartenheimData: VilleData = {
  nom: "Bartenheim",
  slug: "serrurier-bartenheim",
  codePostal: "68870",
  population: "4 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Bartenheim (68870) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Bartenheim disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Bartenheim (68870) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Bartenheim-Village", "Zone pavillonnaire",
    "Quartier résidentiel", "Les Vergers", "Lotissements récents"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Bartenheim ? Intervention sans dégât en moins de 30 minutes dans toute la commune.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les pavillons et maisons individuelles de Bartenheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les maisons individuelles de Bartenheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Bartenheim.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Bartenheim ?",
      answer: "Notre délai moyen d'intervention à Bartenheim est de 20 à 30 minutes. La commune est bien desservie depuis Saint-Louis et Mulhouse, ce qui nous permet d'intervenir rapidement dans tous les quartiers — centre-village, zone pavillonnaire, Les Vergers ou lotissements récents — 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Bartenheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué avant toute intervention au 03 74 47 47 93.",
    },
    {
      question: "Intervenez-vous pour les frontaliers à Bartenheim ?",
      answer: "Oui. Bartenheim compte une forte proportion de frontaliers travaillant en Suisse. Ce mode de vie implique des absences prolongées du domicile et une demande accrue en sécurisation résidentielle. Nous proposons des solutions adaptées : cylindres haute sécurité, serrures multipoints, portes blindées et audits de sécurité.",
    },
    {
      question: "Couvrez-vous les communes autour de Bartenheim ?",
      answer: "Oui, depuis Bartenheim nous intervenons à Saint-Louis (68300), Hésingue (68220), Blotzheim (68730), Huningue (68330), Sierentz (68510) et Mulhouse (68100). Toutes ces communes sont couvertes dans des délais similaires.",
    },
    {
      question: "Travaillez-vous la nuit à Bartenheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Porte claquée la nuit, effraction le week-end, clé cassée un jour férié — nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des audits de sécurité à Bartenheim ?",
      answer: "Oui, nous proposons des audits de sécurité gratuits pour les maisons individuelles de Bartenheim. Bartenheim est une commune pavillonnaire en forte croissance avec de nombreuses maisons récentes dont la sécurisation mérite d'être évaluée. L'audit permet d'identifier les points faibles et de recommander les équipements adaptés.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Bartenheim ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs trop bas au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs, incluant le descriptif des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec les principaux assureurs : Crédit Mutuel, Groupama, AXA, Allianz, MAIF, MMA.",
    },
  ],

  villesVoisines: [
    { nom: "Saint-Louis", cp: "68300", slug: "serrurier-saint-louis" },
    { nom: "Hésingue", cp: "68220", slug: "serrurier-hesingue" },
    { nom: "Blotzheim", cp: "68730", slug: "serrurier-blotzheim" },
    { nom: "Huningue", cp: "68330", slug: "serrurier-huningue" },
    { nom: "Sierentz", cp: "68510", slug: "serrurier-sierentz" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Bartenheim, commune résidentielle de 4 500 habitants du Haut-Rhin, est l'un des villages du Sundgau nord qui connaît la croissance démographique la plus soutenue de la région. Bénéficiant d'une situation géographique idéale entre Saint-Louis et Mulhouse, et d'une proximité avec la frontière suisse attractive pour les frontaliers, Bartenheim a vu se développer de nombreux lotissements pavillonnaires ces dernières décennies. Ce parc immobilier récent, principalement composé de maisons individuelles, génère une demande soutenue en serrurerie de qualité.

Albert Serrurerie intervient dans l'ensemble de Bartenheim : centre-ville, Bartenheim-Village, Zone pavillonnaire, Quartier résidentiel, Les Vergers et Lotissements récents. Nos techniciens connaissent les caractéristiques des maisons pavillonnaires récentes — portes en PVC ou aluminium, serrures multipoints, cylindres européens modernes — et disposent du matériel adapté pour chaque type de configuration.

La forte proportion de frontaliers à Bartenheim crée des besoins spécifiques en serrurerie : des personnes qui rentrent souvent tard le soir depuis la Suisse, des logements parfois inoccupés de longues heures, une sensibilité accrue aux questions de sécurité résidentielle. Nous proposons des solutions de sécurisation adaptées à ce mode de vie : cylindres haute sécurité A2P, serrures multipoints, portes blindées et systèmes complémentaires.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée en rentrant de Bâle, serrure défaillante sur votre pavillon des Vergers, effraction constatée dans votre maison des lotissements récents — nous intervenons en moins de 30 minutes. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Choisir Albert Serrurerie à Bartenheim, c'est faire confiance à un artisan local déclaré, inscrit à la Chambre des Métiers d'Alsace. Notre connaissance des communes du Sundgau nord et de la zone frontalière nous permet d'intervenir à Bartenheim dans des conditions optimales, avec une compréhension des besoins spécifiques des résidents frontaliers.

La croissance pavillonnaire de Bartenheim attire malheureusement l'attention de sociétés de serrurerie peu scrupuleuses qui ciblent les communes résidentielles récentes. Ces plateformes annoncent des prix irréels au téléphone et facturent des sommes excessives une fois sur place. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit.

Pour les propriétaires de maisons récentes à Bartenheim, nous proposons des audits de sécurité gratuits. Les lotissements pavillonnaires récents sont souvent équipés de serrures d'entrée de gamme par les constructeurs — des équipements qui méritent d'être remplacés par des cylindres haute sécurité et des serrures multipoints certifiés A2P. Cet investissement modeste offre une protection bien supérieure et peut réduire votre prime d'assurance habitation.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.5!3d47.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b00000000005%3A0x5!2sBartenheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
