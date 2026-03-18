import { VilleData } from "./types";

export const wintzenheimData: VilleData = {
  nom: "Wintzenheim",
  slug: "serrurier-wintzenheim",
  codePostal: "68920",
  population: "8 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Wintzenheim (68920) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Wintzenheim disponible 24h/24. Ouverture de porte, serrures alsaciennes, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Wintzenheim (68920) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Wintzenheim-Village", "Logelbach",
    "Zone pavillonnaire", "Route des Vins", "Quartier viticole"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée ou serrure bloquée à Wintzenheim ? Intervention sans dégât en moins de 30 minutes, maisons vigneronnes incluses.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure alsacienne ancienne",
      description: "Spécialistes des serrures sur maisons alsaciennes typiques et portes anciennes de Wintzenheim et de la Route des Vins.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les maisons et résidences secondaires de Wintzenheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement ou exploitation après une effraction à Wintzenheim.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité adaptés aux portes alsaciennes et modernes : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Wintzenheim ?",
      answer: "Notre délai moyen d'intervention à Wintzenheim est de 20 à 30 minutes. Que vous soyez dans le centre-village, à Logelbach, sur la Route des Vins ou dans la zone pavillonnaire, un technicien disponible intervient rapidement. La proximité avec Colmar nous permet d'optimiser nos trajets et de vous garantir une réactivité maximale, 24h/24 et 7j/7.",
    },
    {
      question: "Intervenez-vous sur les serrures des maisons alsaciennes à Wintzenheim ?",
      answer: "Oui, c'est l'une de nos spécialités. Wintzenheim compte de nombreuses maisons alsaciennes typiques avec des portes en bois massif, des serrures à mortaise et des configurations anciennes. Nos techniciens disposent de l'outillage adapté pour intervenir sans abîmer le bâti et peuvent remplacer des serrures anciennes par des cylindres modernes haute sécurité tout en préservant l'esthétique de votre porte.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Wintzenheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, comptez à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Les maisons alsaciennes anciennes peuvent nécessiter un outillage spécifique. Un devis précis et gratuit est communiqué par téléphone avant toute intervention.",
    },
    {
      question: "Intervenez-vous pour les résidences secondaires à Wintzenheim ?",
      answer: "Oui, Wintzenheim compte une proportion importante de résidences secondaires, notamment liées à la Route des Vins d'Alsace et à la proximité de Colmar. Nous intervenons pour les propriétaires de résidences secondaires qui se retrouvent bloqués ou qui souhaitent sécuriser leur bien en leur absence. Nous proposons également des solutions de sécurisation adaptées aux logements inoccupés une partie de l'année.",
    },
    {
      question: "Couvrez-vous Colmar depuis Wintzenheim ?",
      answer: "Oui, nous couvrons Colmar (68000) et l'ensemble de l'agglomération colmarienne depuis Wintzenheim. Nous intervenons également à Turckheim (68230), Wettolsheim (68920), Eguisheim (68420), Rouffach (68250) et Guebwiller (68500) dans les mêmes conditions.",
    },
    {
      question: "Pouvez-vous sécuriser une exploitation viticole à Wintzenheim ?",
      answer: "Oui, nous intervenons pour les professionnels du secteur viticole à Wintzenheim : caves, caveaux de dégustation, locaux professionnels. Nous proposons des solutions de serrurerie adaptées aux bâtiments agricoles et professionnels : serrures robustes, cylindres haute sécurité, barres de sécurité, contrôle d'accès. Un devis gratuit sur site est disponible sur demande.",
    },
    {
      question: "Travaillez-vous le week-end et les jours fériés à Wintzenheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7, y compris le week-end et les jours fériés. Les vendanges, les marchés de producteurs et l'afflux touristique sur la Route des Vins font que les besoins en serrurerie d'urgence ne s'arrêtent jamais à Wintzenheim. Nous répondons à chaque appel au 03 74 47 47 93 sans exception.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des compagnies d'assurance. Ce document inclut le descriptif précis des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec les principaux assureurs : Crédit Mutuel, Groupama Alsace, AXA, Allianz, MAIF, MMA.",
    },
  ],

  villesVoisines: [
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Turckheim", cp: "68230", slug: "serrurier-turckheim" },
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Rouffach", cp: "68250", slug: "serrurier-rouffach" },
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Wintzenheim, commune de 8 000 habitants du Haut-Rhin, est une perle de la Route des Vins d'Alsace, nichée à quelques kilomètres de Colmar. Entourée de vignobles réputés — dont le grand cru Hengst — et agrémentée de maisons alsaciennes typiques à colombages, cette commune viticole allie patrimoine architectural et cadre de vie privilégié. Cette concentration de bâtiments anciens et de résidences secondaires génère des besoins spécifiques en serrurerie, notamment pour les portes en bois massif et les serrures traditionnelles des maisons vigneronnes.

Albert Serrurerie intervient dans l'ensemble de Wintzenheim : centre-ville, Wintzenheim-Village, Logelbach, Zone pavillonnaire, Route des Vins et Quartier viticole. Nos techniciens connaissent les spécificités architecturales des maisons alsaciennes — portes à panneaux en chêne, serrures à mortaise, entrées de cylindres aux formats non standards — et disposent du matériel adapté pour intervenir sans endommager le bâti.

La présence de nombreuses résidences secondaires à Wintzenheim, liée à l'attractivité touristique de la Route des Vins et à la proximité de Colmar, crée une demande particulière : propriétaires qui se retrouvent bloqués lors de leur visite, biens à sécuriser en leur absence, serrures détériorées par l'humidité après une longue période de fermeture. Nos techniciens ont l'habitude de ces situations et apportent des solutions adaptées.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7, pour répondre à toutes vos urgences à Wintzenheim. Que vous ayez claqué la porte de votre maison vigneronne ou que vous ayez besoin de changer la serrure de votre cave à vins, nous intervenons en moins de 30 minutes depuis Colmar ou Turckheim.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Wintzenheim, c'est notre expertise sur les bâtiments anciens de la Route des Vins d'Alsace. Les maisons alsaciennes typiques de Wintzenheim, avec leurs colombages et leurs portes centenaires, nécessitent une approche respectueuse du patrimoine. Nos techniciens maîtrisent les techniques d'ouverture non destructive et l'adaptation de systèmes de sécurité modernes à des portes historiques, sans compromettre ni l'esthétique ni l'intégrité des boiseries.

La fréquentation touristique de Wintzenheim — Route des Vins, vignobles du Hengst, proximité de Colmar et d'Eguisheim — peut malheureusement attirer des sociétés de serrurerie peu scrupuleuses qui profitent de la vulnérabilité des personnes en situation d'urgence. Chez Albert Serrurerie, nous avons fait le choix de la transparence totale : tarifs publics sur ce site, devis gratuit avant chaque intervention, aucun commencement de travaux sans accord écrit du client.

Pour les propriétaires de résidences secondaires à Wintzenheim, nous proposons des audits de sécurité complets afin d'évaluer la résistance des accès et de recommander les solutions adaptées : cylindres haute sécurité anti-crochetage et anti-arrachement, serrures multipoints A2P, portes blindées compatibles avec les cadres anciens. Nous accompagnons également les démarches patrimoniales pour les biens soumis à des contraintes architecturales.

Appelez-nous au 03 74 47 47 93 pour toute urgence ou demande de devis gratuit. Nous utilisons exclusivement les marques Fichet, Vachette, Bricard, Mul-T-Lock, Mottura et ISEO avec garantie fabricant. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client, 4,8/5 sur Google.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.28!3d48.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b00000000004%3A0x4!2sWintzenheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
