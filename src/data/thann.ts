import { VilleData } from "./types";

export const thannData: VilleData = {
  nom: "Thann",
  slug: "serrurier-thann",
  codePostal: "68800",
  population: "8 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Thann (68800) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Thann disponible 24h/24. Ouverture de porte, serrures anciennes, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Thann (68800) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville historique", "Quartier Gare", "Vieux-Thann",
    "Zone industrielle", "Les Vignes", "Quartier Sud"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée ou bloquée à Thann ? Intervention sans dégât en moins de 30 minutes, centre historique et vignobles inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure ancienne et historique",
      description: "Spécialistes des serrures sur portes anciennes du patrimoine médiéval thannois, maisons à colombages et bâtiments classés.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P adaptées aux cadres anciens et modernes des logements de Thann.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement ou commerce après une effraction à Thann.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité adaptés aux portes historiques et modernes : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Thann ?",
      answer: "Notre délai moyen d'intervention à Thann est de 20 à 30 minutes. Que vous soyez dans le centre-ville historique, au quartier de la Gare, dans le Vieux-Thann ou au quartier des Vignes, un technicien intervient rapidement. Nous couvrons également Vieux-Thann et les communes de la vallée de la Thur dans les mêmes délais.",
    },
    {
      question: "Intervenez-vous sur les serrures anciennes du centre historique de Thann ?",
      answer: "Oui, c'est l'une de nos spécialités. Le centre historique de Thann, avec sa collégiale Saint-Thiébaut et ses maisons médiévales, compte de nombreux bâtiments anciens équipés de serrures à gorge, de cylindres non normalisés ou de systèmes d'un autre âge. Nos techniciens disposent du matériel adapté pour intervenir sans abîmer le bâti ancien, et peuvent adapter des cylindres modernes haute sécurité aux entrées historiques.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Thann ?",
      answer: "Pour une serrure simple à 1 point, le tarif commence à 89€ TTC. Pour une serrure 3 points, comptez à partir de 130€ TTC. Pour une porte blindée, le tarif débute à 180€ TTC. Les bâtiments anciens du centre historique peuvent nécessiter un outillage spécifique selon l'état de la serrure. Un devis précis et gratuit est communiqué par téléphone avant toute intervention.",
    },
    {
      question: "Couvrez-vous les communes de la vallée de la Thur depuis Thann ?",
      answer: "Oui, depuis Thann nous intervenons dans toute la vallée de la Thur : Vieux-Thann (68800), Cernay (68700), Saint-Amarin (68550), Staffelfelden (68850), Wittelsheim (68310) et jusqu'à Mulhouse (68100). Chaque commune est couverte dans les mêmes délais et aux mêmes tarifs que Thann.",
    },
    {
      question: "Travaillez-vous la nuit et les week-ends à Thann ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Thann. La ville accueille des touristes qui visitent la collégiale Saint-Thiébaut et les vignobles — les urgences de serrurerie peuvent survenir à tout moment. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Peut-on installer une porte blindée dans un bâtiment ancien à Thann ?",
      answer: "Oui, et c'est souvent recommandé pour les bâtiments anciens dont les portes d'origine offrent une résistance insuffisante. Nous réalisons des audits de faisabilité gratuits pour évaluer la configuration de votre entrée. Pour les bâtiments soumis à des règles patrimoniales, nous accompagnons les démarches de validation architecturale et proposons des finitions respectant le caractère de l'immeuble.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Thann ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez que le serrurier est inscrit à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs trop bas annoncés au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord explicite sur le montant.",
    },
    {
      question: "Votre facture permet-elle un remboursement assurance à Thann ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs : description précise des travaux, références des pièces posées, montant TTC ventilé, numéro SIRET. Nous travaillons avec les principaux assureurs du Haut-Rhin : Crédit Mutuel, Groupama Alsace, MMA, AXA, Allianz, MAIF, MACIF.",
    },
  ],

  villesVoisines: [
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
    { nom: "Wittelsheim", cp: "68310", slug: "serrurier-wittelsheim" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Soultz-Haut-Rhin", cp: "68360", slug: "serrurier-soultz-haut-rhin" },
    { nom: "Pfastatt", cp: "68120", slug: "serrurier-pfastatt" },
  ],

  seoBlock1: `Thann, ville de 8 000 habitants aux portes de la vallée de la Thur, est l'une des cités historiques les plus remarquables du Haut-Rhin. Son centre-ville médiéval, dominé par la majestueuse collégiale Saint-Thiébaut, son hôtel de ville du XVIe siècle, ses maisons à colombages et ses ruelles pavées en font un joyau patrimonial alsacien. Cette concentration de bâtiments anciens génère des besoins en serrurerie qui requièrent une expertise particulière, notamment pour les portes en bois massif, les serrures à gorge et les systèmes anciens encore en service dans le cœur historique.

Albert Serrurerie intervient dans l'ensemble de Thann : centre-ville historique, Vieux-Thann, Quartier Gare, Zone industrielle, Les Vignes et Quartier Sud. Nos techniciens maîtrisent les spécificités architecturales des bâtiments thannois, des maisons médiévales du centre aux logements modernes des quartiers résidentiels. La présence de vignobles sur les coteaux environnants et l'activité touristique liée à la collégiale Saint-Thiébaut créent une demande régulière en serrurerie d'urgence, notamment pour les propriétés de résidences secondaires et les locaux touristiques.

Nos équipes sont disponibles 24 heures sur 24, 7 jours sur 7, pour répondre à toutes vos urgences à Thann. Porte claquée dans votre appartement du centre historique, clé cassée dans la serrure ancienne de votre maison du Vieux-Thann, effraction constatée sur votre local professionnel de la zone industrielle — nous intervenons en moins de 30 minutes. Chaque véhicule est entièrement équipé pour traiter la grande majorité des situations dès le premier passage, y compris avec le matériel adapté aux serrures et portes anciennes.

Thann est également un point d'entrée stratégique de la vallée de la Thur, ce qui nous permet de couvrir l'ensemble des communes de cette vallée dans les mêmes délais : Vieux-Thann, Staffelfelden, Saint-Amarin et les villages environnants.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Thann, c'est une expertise technique adaptée au patrimoine bâti exceptionnel de cette ville historique. Intervenir sur les serrures d'une maison médiévale du centre-ville, d'une maison vigneronne des coteaux ou d'un pavillon contemporain du Quartier Sud ne s'improvise pas. Nos techniciens suivent des formations continues sur les serrures anciennes, les normes A2P et les techniques d'ouverture non destructive pour préserver l'intégrité des boiseries et des bâtis patrimoniaux.

La fréquentation touristique de Thann — liée à la collégiale Saint-Thiébaut, aux vignobles du Rangen et aux randonnées dans la vallée de la Thur — génère une présence saisonnière qui peut malheureusement attirer des sociétés de serrurerie peu scrupuleuses. Ces plateformes affichent des prix irréels pour facturer des sommes excessives une fois sur place. Albert Serrurerie ne pratique pas ces méthodes : nos tarifs sont publics, notre devis est gratuit, et nous ne commençons aucun travail sans votre accord écrit.

Nous proposons également des audits de sécurité gratuits pour les propriétaires de Thann. La mixité du bâti — des maisons anciennes aux pavillons modernes en passant par les logements collectifs du Quartier Gare — crée des profils de risque variés. Nos recommandations sont toujours adaptées à la configuration réelle de chaque logement et aux contraintes patrimoniales éventuelles.

Faire confiance à Albert Serrurerie à Thann, c'est choisir un artisan inscrit à la Chambre des Métiers d'Alsace, utilisant exclusivement des pièces neuves des marques Fichet, Vachette, Bricard, Mul-T-Lock, Mottura et ISEO. Appelez-nous au 03 74 47 47 93. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client, 4,8/5 sur Google.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.1!3d47.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b00000000003%3A0x3!2sThann!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
