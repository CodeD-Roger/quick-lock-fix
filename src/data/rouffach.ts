import { VilleData } from "./types";

export const rouffachData: VilleData = {
  nom: "Rouffach",
  slug: "serrurier-rouffach",
  codePostal: "68250",
  population: "5 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Rouffach (68250) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Rouffach disponible 24h/24. Ouverture de porte, serrures anciennes, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Rouffach (68250) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre historique", "Quartier des Sorcières", "Zone pavillonnaire",
    "Route des Vins", "Quartier Gare", "Vignobles"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Rouffach ? Intervention sans dégât en moins de 30 minutes, centre médiéval et vignobles inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure alsacienne ancienne",
      description: "Spécialistes des serrures sur maisons à colombages, portes médiévales et bâtiments du patrimoine rouffachois.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P adaptées aux logements anciens et modernes de Rouffach.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement ou exploitation après une effraction à Rouffach.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Rouffach ?",
      answer: "Notre délai moyen d'intervention à Rouffach est de 25 à 35 minutes. Que vous soyez dans le centre historique, au Quartier des Sorcières, en zone pavillonnaire ou sur la Route des Vins, un technicien intervient rapidement depuis Guebwiller ou Colmar. Nous couvrons Rouffach 24h/24, 7j/7.",
    },
    {
      question: "Intervenez-vous sur les serrures des maisons à colombages de Rouffach ?",
      answer: "Oui, c'est l'une de nos spécialités. Rouffach possède un centre historique remarquablement préservé avec ses maisons à colombages, ses remparts médiévaux et ses portes en bois massif. Nos techniciens maîtrisent les serrures à gorge, les cylindres anciens non normalisés et les configurations atypiques de l'habitat médiéval alsacien.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Rouffach ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué avant toute intervention au 03 74 47 47 93.",
    },
    {
      question: "Couvrez-vous les exploitations viticoles autour de Rouffach ?",
      answer: "Oui, nous intervenons pour les propriétaires et exploitants viticoles de Rouffach et des communes voisines : caveaux de dégustation, chais, locaux professionnels. Nous proposons des serrures robustes adaptées aux bâtiments agricoles et professionnels, avec des cylindres haute sécurité maîtrisables pour les accès multi-utilisateurs.",
    },
    {
      question: "Travaillez-vous la nuit et les week-ends à Rouffach ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Rouffach. Les urgences ne respectent pas les horaires. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Peut-on installer une porte blindée dans le centre historique de Rouffach ?",
      answer: "Oui. Pour les bâtiments soumis à des contraintes architecturales, nous réalisons des audits de faisabilité gratuits et accompagnons les démarches de validation si nécessaire. Nous proposons des blocs-portes blindés dans des finitions respectant le caractère du bâtiment, avec certification A2P BP1, BP2 ou BP3.",
    },
    {
      question: "Intervenez-vous pour les résidences secondaires à Rouffach ?",
      answer: "Oui. Rouffach attire des acquéreurs de maisons vigneronnes et de maisons alsaciennes de caractère. Nous intervenons pour les propriétaires de résidences secondaires et proposons des solutions de sécurisation adaptées aux logements occupés saisonnièrement : cylindres haute sécurité, serrures multipoints, audit de sécurité.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Rouffach ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs anormalement bas annoncés au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord explicite.",
    },
  ],

  villesVoisines: [
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Soultz-Haut-Rhin", cp: "68360", slug: "serrurier-soultz-haut-rhin" },
    { nom: "Wintzenheim", cp: "68920", slug: "serrurier-wintzenheim" },
    { nom: "Ensisheim", cp: "68190", slug: "serrurier-ensisheim" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Rouffach, ville médiévale vigneronne de 5 000 habitants du Haut-Rhin, est l'une des cités les plus remarquables de la Route des Vins d'Alsace. Son centre historique, ceinturé de remparts partiellement conservés, abrite une concentration exceptionnelle de maisons à colombages du XVe au XVIIIe siècle, une collégiale gothique imposante et un hôtel de ville Renaissance. Cette richesse architecturale, associée à la renommée de ses vignobles — dont le Grand Cru Zinnkoepflé — fait de Rouffach une destination prisée des amateurs de patrimoine alsacien.

Albert Serrurerie intervient dans l'ensemble de Rouffach : centre historique, Quartier des Sorcières, Zone pavillonnaire, Route des Vins, Quartier Gare et secteur viticole. Nos techniciens maîtrisent les spécificités architecturales des bâtiments rouffachois — portes en bois massif à panneaux sculptés, serrures à gorge du XVIIe et XVIIIe siècle, cylindres anciens aux entrées non normalisées. Ces configurations nécessitent un outillage spécialisé que nos équipes emportent systématiquement lors de chaque intervention.

Le tissu immobilier de Rouffach est particulièrement varié : maisons vigneronnes du centre historique acquises comme résidences principales ou secondaires, pavillons modernes des nouveaux quartiers, caveaux et locaux professionnels liés à la viticulture. Chaque type de bâtiment présente des besoins en serrurerie spécifiques que nos techniciens évaluent avant de proposer la solution la plus adaptée.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre maison vigneronne du centre, serrure défaillante sur votre caveau de dégustation, effraction constatée dans votre appartement — nous intervenons en moins de 35 minutes depuis Guebwiller ou Colmar. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Rouffach, c'est notre expertise combinée du patrimoine bâti médiéval et des besoins professionnels des viticulteurs. Intervenir sur les serrures d'une maison à colombages du XVIe siècle sans endommager le bâti ancien, ou sécuriser un chai viticole avec des cylindres maîtrisables multi-utilisateurs, nécessite des compétences variées que nos techniciens ont développées au fil des années.

Rouffach, commune viticole sur la Route des Vins, est fréquentée par de nombreux touristes et acheteurs de résidences secondaires. Cette affluence peut malheureusement attirer des sociétés de serrurerie peu scrupuleuses. Chez Albert Serrurerie, nous combattons ces pratiques : tarifs publics sur ce site, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit. Nous sommes une entreprise locale inscrite à la Chambre des Métiers d'Alsace.

Pour les propriétaires de maisons vigneronnes à Rouffach, nous proposons des audits de sécurité gratuits adaptés à ce type de bâti : évaluation des points d'accès, recommandations de cylindres adaptables aux entrées anciennes, solutions de condamnation discrètes qui préservent l'esthétique des façades. Pour les bâtiments soumis à des servitudes architecturales, nous accompagnons les démarches nécessaires.

Contactez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client, 4,8/5 sur Google.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.3!3d47.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b00000000003%3A0x3!2sRouffach!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
