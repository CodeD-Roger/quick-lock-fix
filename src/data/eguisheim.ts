import { VilleData } from "./types";

export const eguisheimData: VilleData = {
  nom: "Eguisheim",
  slug: "serrurier-eguisheim",
  codePostal: "68420",
  population: "1 700",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Eguisheim (68420) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Eguisheim disponible 24h/24. Ouverture de porte, serrures médiévales, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Eguisheim (68420) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre historique circulaire", "Remparts", "Zone pavillonnaire",
    "Vignobles Grand Cru", "Route des Vins", "Husseren-les-Châteaux"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Eguisheim ? Intervention sans dégât en moins de 30 minutes, centre circulaire médiéval inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure médiévale et ancienne",
      description: "Spécialistes des serrures sur maisons XVe siècle de l'architecture circulaire unique d'Eguisheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P compatibles avec les cadres anciens d'Eguisheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Eguisheim.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres haute sécurité adaptés aux portes historiques d'Eguisheim : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Eguisheim ?",
      answer: "Notre délai moyen d'intervention à Eguisheim est de 25 à 35 minutes. La commune est accessible rapidement depuis Colmar, à moins de 10 kilomètres. Que vous soyez dans le centre circulaire médiéval, aux remparts, ou dans la zone pavillonnaire, nos techniciens interviennent 24h/24 et 7j/7.",
    },
    {
      question: "Intervenez-vous sur les serrures de l'architecture circulaire d'Eguisheim ?",
      answer: "Oui, c'est notre spécialité dans ce village unique. Eguisheim présente une architecture circulaire médiévale sans équivalent en Alsace — trois enceintes concentriques de maisons du XVe siècle disposées en spirale. Ces maisons ont des portes en bois massif et des serrures à gorge qui nécessitent une expertise spécifique. Nos techniciens interviennent sans endommager ce patrimoine exceptionnel.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Eguisheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous pour les résidences secondaires à Eguisheim ?",
      answer: "Oui. Eguisheim est l'un des plus beaux villages de France, ce qui attire de nombreux acquéreurs de résidences secondaires. Ces propriétaires, qui occupent leur logement quelques semaines par an, ont des besoins spécifiques en sécurisation. Nous proposons des solutions adaptées aux logements occupés saisonnièrement.",
    },
    {
      question: "Couvrez-vous Colmar et les villages voisins depuis Eguisheim ?",
      answer: "Oui, depuis Eguisheim nous intervenons à Colmar (68000), Rouffach (68250), Wintzenheim (68920), Guebwiller (68500) et Turckheim (68230) dans des délais similaires.",
    },
    {
      question: "Peut-on installer une porte blindée dans le centre historique d'Eguisheim ?",
      answer: "Oui, sous certaines conditions. Le centre d'Eguisheim étant classé et soumis à l'avis des Architectes des Bâtiments de France, nous accompagnons les démarches nécessaires et proposons des solutions compatibles avec les contraintes architecturales.",
    },
    {
      question: "Travaillez-vous pendant la haute saison touristique à Eguisheim ?",
      answer: "Oui, Albert Serrurerie intervient 365 jours par an, 24h/24. Eguisheim figure parmi les villages les plus visités de France — nous sommes disponibles à toute heure, y compris pendant les pics d'affluence. Appelez-nous au 03 74 47 47 93.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Eguisheim ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs irréels. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais sans votre accord.",
    },
  ],

  villesVoisines: [
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Rouffach", cp: "68250", slug: "serrurier-rouffach" },
    { nom: "Wintzenheim", cp: "68920", slug: "serrurier-wintzenheim" },
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Turckheim", cp: "68230", slug: "serrurier-turckheim" },
    { nom: "Ribeauvillé", cp: "68150", slug: "serrurier-ribeauville" },
  ],

  seoBlock1: `Eguisheim, l'un des plus beaux villages de France avec seulement 1 700 habitants, est un joyau architectural unique en son genre. Son centre historique est organisé en trois enceintes concentriques de maisons à colombages colorées du XVe siècle, disposées en spirale autour du château octogonal carolingien — une configuration circulaire sans équivalent en Alsace et rarissime en France. Cette architecture exceptionnelle fait d'Eguisheim l'un des villages les plus photographiés d'Europe et attire des centaines de milliers de visiteurs chaque année sur la Route des Vins.

Albert Serrurerie intervient dans l'ensemble d'Eguisheim : centre historique circulaire, Remparts, Zone pavillonnaire, Vignobles Grand Cru, Route des Vins et Husseren-les-Châteaux. La particularité architecturale du centre d'Eguisheim — ses maisons XVe siècle aux portes en chêne massif, ses serrures à gorge, ses cylindres aux entrées non normalisées — nécessite une expertise spécifique que nos techniciens ont développée au fil d'interventions sur le patrimoine médiéval alsacien.

La très forte fréquentation touristique d'Eguisheim et la présence nombreuse de résidences secondaires — des propriétaires venus de toute l'Europe ont acquis des maisons dans ce village de rêve — créent des besoins constants en serrurerie d'urgence et en sécurisation. Les maisons médiévales inoccupées une grande partie de l'année sont exposées à des risques spécifiques : serrures qui se grippent, cylindres qui vieillissent, besoin de sécurisation renforcée compatible avec le patrimoine classé.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre maison du centre circulaire, effraction constatée sur votre résidence secondaire — nous intervenons en moins de 30 minutes depuis Colmar. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Eguisheim, c'est notre expertise du bâti médiéval circulaire de ce village unique. Intervenir sur les portes des maisons à colombages du XVe siècle sans abîmer les boiseries sculptées ni les ferronneries forgées requiert une formation spécifique et une approche artisanale que nos techniciens ont perfectionnée au fil des années.

Eguisheim, avec sa réputation internationale de plus beau village de France, est ciblée par des plateformes de serrurerie frauduleuses qui profitent de la vulnérabilité des visiteurs et des propriétaires de résidences secondaires. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord.

Pour les propriétaires de maisons médiévales à Eguisheim, nous proposons des audits de sécurité gratuits prenant en compte les contraintes patrimoniales et les avis des Architectes des Bâtiments de France. Nos solutions respectent l'authenticité architecturale tout en offrant un niveau de protection moderne : cylindres adaptables aux entrées anciennes, serrures à larder discrètes, condamnations compatibles avec les boiseries d'époque.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.3!3d48.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000006%3A0x6!2sEguisheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
