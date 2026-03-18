import { VilleData } from "./types";

export const saintLouisData: VilleData = {
  nom: "Saint-Louis",
  slug: "serrurier-saint-louis",
  codePostal: "68300",
  population: "22 400",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Saint-Louis (68300) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Saint-Louis disponible 24h/24 et 7j/7. Ouverture de porte, changement serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Saint-Louis (68300) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Bourgfelden", "Village-Neuf", "Huningue",
    "Hésingue", "Saint-Louis-la-Chaussée", "Zone industrielle"
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
      question: "Quel est le délai d'intervention d'un serrurier à Saint-Louis 68300 ?",
      answer: "Notre délai moyen d'intervention à Saint-Louis est de 20 à 30 minutes, quel que soit le quartier. Que vous soyez au Centre-ville, à Bourgfelden, à Hésingue ou à Saint-Louis-la-Chaussée, un technicien disponible intervient rapidement. Nos serruriers couvrent l'ensemble de la commune et ses alentours, y compris la nuit, les week-ends et les jours fériés, sans délai supplémentaire.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Saint-Louis ?",
      answer: "Le tarif d'une ouverture de porte à Saint-Louis dépend du type de serrure. Pour une serrure simple à 1 point, le tarif commence à 89€ TTC. Pour une serrure 3 points, comptez à partir de 130€ TTC. Pour une porte blindée, le tarif débute à 180€ TTC. Un devis précis et gratuit vous est communiqué par téléphone au 03 74 47 47 93 avant toute intervention, sans engagement de votre part.",
    },
    {
      question: "Êtes-vous disponible la nuit et le week-end à Saint-Louis ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Saint-Louis et dans tout le Haut-Rhin. Porte claquée un samedi soir, clé cassée un dimanche matin, effraction en pleine nuit — nous répondons à chaque appel sans exception. Aucun supplément de nuit ou de week-end caché n'est appliqué : les tarifs annoncés au téléphone sont les tarifs facturés.",
    },
    {
      question: "Couvrez-vous Huningue et Village-Neuf depuis Saint-Louis ?",
      answer: "Oui, nous couvrons Huningue (68330) et Village-Neuf (68128) au même titre que Saint-Louis. Ces communes sont limitrophes et font partie de notre zone d'intervention principale. Nous intervenons également sur Blotzheim, Hésingue, Bartenheim et toutes les communes de l'agglomération de Saint-Louis, avec des délais identiques de 20 à 30 minutes.",
    },
    {
      question: "Êtes-vous un serrurier agréé assurance à Saint-Louis ?",
      answer: "Oui, Albert Serrurerie est agréé auprès des principales compagnies d'assurance habitation. Après chaque intervention à Saint-Louis, nous remettons une facture détaillée conforme aux exigences des assureurs (Crédit Mutuel, Groupama, AXA, Allianz, MAIF, MMA…) incluant le descriptif précis des travaux, les références des pièces posées et le montant TTC ventilé. Ce document vous permet d'obtenir un remboursement rapide auprès de votre assureur.",
    },
    {
      question: "Intervenez-vous après un cambriolage à Saint-Louis ?",
      answer: "Oui, la mise en sécurité après cambriolage est l'une de nos interventions prioritaires à Saint-Louis. Nous intervenons en urgence pour condamner les accès fracturés, remplacer les serrures endommagées, poser des planches ou des serrures provisoires si nécessaire, puis réaliser les travaux définitifs. Saint-Louis, de par sa situation frontalière avec la Suisse et l'Allemagne, est une zone qui connaît une activité de cambriolage non négligeable. Nous pouvons également vous conseiller sur les améliorations préventives.",
    },
    {
      question: "Posez-vous des portes blindées à Saint-Louis 68300 ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P (BP1, BP2, BP3) adaptées aux appartements et maisons de Saint-Louis. L'installation est réalisée par nos techniciens qualifiés en une demi-journée. Les tarifs débutent à 890€ TTC pose comprise pour un bloc-porte blindé. Saint-Louis, ville frontalière avec la Suisse à 5 km de Bâle, attire des actifs à fort pouvoir d'achat qui investissent dans la sécurisation de leur logement. Nous vous accompagnons dans ce choix avec un audit de sécurité gratuit.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Saint-Louis ?",
      answer: "Pour éviter les arnaques à Saint-Louis, plusieurs réflexes essentiels : exigez toujours un devis détaillé avant le début des travaux et ne signez rien sous pression. Vérifiez que le serrurier est inscrit à la Chambre des Métiers d'Alsace (numéro SIRET vérifiable). Méfiez-vous des tarifs irréalistes au téléphone (39€, 49€) qui explosent une fois sur place. Chez Albert Serrurerie, nos tarifs sont publics sur ce site, le devis est gratuit et aucun travail ne commence sans votre accord écrit sur le montant final.",
    },
  ],

  villesVoisines: [
    { nom: "Huningue", cp: "68330", slug: "serrurier-huningue" },
    { nom: "Village-Neuf", cp: "68128", slug: "serrurier-village-neuf" },
    { nom: "Blotzheim", cp: "68730", slug: "serrurier-blotzheim" },
    { nom: "Hésingue", cp: "68220", slug: "serrurier-hesingue" },
    { nom: "Bartenheim", cp: "68870", slug: "serrurier-bartenheim" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Saint-Louis, ville de 22 400 habitants dans le Haut-Rhin, occupe une position géographique stratégique unique en France : nichée au carrefour des trois frontières, elle est limitrophe de la Suisse à seulement 5 kilomètres de Bâle et à quelques pas de l'Allemagne. Cette situation exceptionnelle en fait l'une des villes alsaciennes les plus dynamiques sur le plan économique, avec une proportion élevée de frontaliers travaillant quotidiennement en Suisse dans les secteurs de la banque, de la pharmacie, de la chimie et des services.

Albert Serrurerie est votre serrurier de confiance à Saint-Louis 68300. Nous intervenons dans l'ensemble des quartiers de la commune : Centre-ville, Bourgfelden, Village-Neuf, Huningue, Hésingue, Saint-Louis-la-Chaussée et la Zone industrielle. Chaque technicien connaît la géographie locale, les axes de circulation et les spécificités du parc immobilier saint-louisien — un mélange de résidences récentes construites pour accueillir les familles de frontaliers et de bâtiments plus anciens du centre historique.

La population de Saint-Louis présente un profil particulier : des ménages à double revenu, souvent propriétaires, qui investissent dans la qualité de leur logement et accordent une importance particulière à la sécurité de leur domicile. Les absences prolongées liées au travail en Suisse font de la sécurisation des accès une priorité. La demande en cylindres haute sécurité, serrures multipoints et portes blindées est significativement plus élevée à Saint-Louis que dans des villes comparables.

Nos techniciens sont disponibles 24 heures sur 24, 7 jours sur 7, pour répondre à toutes vos urgences de serrurerie à Saint-Louis. Porte claquée en rentrant de Bâle un soir de semaine, clé perdue après une soirée à Huningue, effraction découverte au retour d'un week-end — nous intervenons en moins de 30 minutes, tous quartiers couverts. Chaque véhicule est entièrement équipé pour traiter 95% des situations sur place sans déplacement complémentaire.`,

  seoBlock2: `Choisir Albert Serrurerie à Saint-Louis, c'est faire le choix d'un artisan serrurier local, déclaré et inscrit à la Chambre des Métiers d'Alsace. La spécificité de Saint-Louis comme ville frontalière attire malheureusement des acteurs peu scrupuleux du secteur de la serrurerie d'urgence, qui profitent de la notoriété de la ville et de sa population aisée pour pratiquer des tarifs abusifs.

Des plateformes téléphoniques nationales affichent des prix d'appel de 39€ ou 49€ sur les résultats de recherche, pour facturer ensuite 500€ à 1 500€ une fois le technicien sur place, profitant de l'urgence et de la vulnérabilité des personnes bloquées dehors. Ces sociétés n'ont aucun technicien à Saint-Louis : elles sous-traitent à des intervenants non qualifiés envoyés depuis Mulhouse ou Bâle, sans garantie de compétence ni de matériel adapté. Chez Albert Serrurerie, nous combattons ces pratiques par la transparence totale : nos tarifs sont publics et consultables sur ce site, le devis est systématiquement communiqué avant le début des travaux, et nous ne débutons jamais une intervention sans votre accord explicite sur le montant.

Notre proximité géographique avec la Suisse et l'Allemagne nous permet d'offrir un niveau d'exigence aligné avec les standards des pays voisins. Nous travaillons exclusivement avec des marques de serrurerie reconnues — Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO — dont chaque pièce est neuve, certifiée et couverte par la garantie fabricant. Nos certifications A2P et notre inscription à la Chambre des Métiers d'Alsace sont vérifiables à tout moment.

Pour les résidents de Saint-Louis qui s'absentent fréquemment pour le travail en Suisse, nous proposons des audits de sécurité gratuits pour évaluer la résistance de vos accès et vous recommander les améliorations pertinentes : serrures multipoints, cylindres haute sécurité, portes blindées A2P, cornières anti-pince, protège-cylindres. Appelez-nous au 03 74 47 47 93 pour un devis gratuit. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client, 4,8/5 sur Google.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.56!3d47.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791985d3a56c2c1%3A0x40a5fb99a3b960!2sSaint-Louis%2C%2068300!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
