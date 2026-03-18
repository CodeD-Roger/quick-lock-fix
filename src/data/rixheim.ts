import { VilleData } from "./types";

export const rixheimData: VilleData = {
  nom: "Rixheim",
  slug: "serrurier-rixheim",
  codePostal: "68170",
  population: "13 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Rixheim (68170) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Rixheim disponible 24h/24 et 7j/7. Ouverture de porte, changement serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Rixheim (68170) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Rixheim-Village", "Musée du Papier peint",
    "Zone pavillonnaire", "Les Berges du Rhin", "Quartier Est"
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
      question: "Quel est le délai d'intervention d'un serrurier à Rixheim 68170 ?",
      answer: "Notre délai moyen à Rixheim est de 20 à 30 minutes. Centre-ville, Les Berges du Rhin, Zone pavillonnaire ou Quartier Est — nos techniciens interviennent rapidement quelle que soit l'heure ou le jour.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Rixheim ?",
      answer: "Ouverture de porte à Rixheim : à partir de 89€ TTC (serrure 1 point), 130€ TTC (3 points), 180€ TTC (porte blindée). Devis gratuit au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous la nuit et le week-end à Rixheim ?",
      answer: "Oui, Albert Serrurerie intervient 24h/24, 7j/7 à Rixheim. Aucun supplément de nuit ou week-end : les tarifs annoncés au téléphone sont les tarifs facturés.",
    },
    {
      question: "Couvrez-vous Mulhouse et Habsheim depuis Rixheim ?",
      answer: "Oui, nous intervenons sur Mulhouse (68100), Habsheim (68440), Riedisheim (68400), Ottmarsheim (68490), Baldersheim (68390) et Saint-Louis (68300), toutes communes voisines de Rixheim, avec les mêmes délais et tarifs.",
    },
    {
      question: "Êtes-vous agréé assurance habitation à Rixheim ?",
      answer: "Oui. Nos factures détaillées sont conformes aux exigences des compagnies d'assurance habitation. Elles permettent un remboursement rapide auprès de votre assureur après sinistre à Rixheim.",
    },
    {
      question: "Intervenez-vous après un cambriolage à Rixheim ?",
      answer: "Oui, intervention d'urgence prioritaire à Rixheim après effraction. Rixheim, ville résidentielle proche de la frontière allemande, est concernée par les risques de cambriolage. Nous sécurisons immédiatement votre logement et vous conseillons sur les améliorations préventives.",
    },
    {
      question: "Posez-vous des portes blindées à Rixheim 68170 ?",
      answer: "Oui, portes blindées certifiées A2P BP1, BP2, BP3 à Rixheim à partir de 890€ TTC. Les maisons individuelles des Berges du Rhin et de la Zone pavillonnaire sont particulièrement adaptées à ce type d'installation. Audit de sécurité gratuit sur demande.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Rixheim ?",
      answer: "Exigez un devis écrit avant travaux, vérifiez le SIRET, refusez les tarifs d'appel irréalistes. Chez Albert Serrurerie : tarifs publics sur ce site, devis gratuit, accord écrit avant toute intervention à Rixheim.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Habsheim", cp: "68440", slug: "serrurier-habsheim" },
    { nom: "Riedisheim", cp: "68400", slug: "serrurier-riedisheim" },
    { nom: "Ottmarsheim", cp: "68490", slug: "serrurier-ottmarsheim" },
    { nom: "Baldersheim", cp: "68390", slug: "serrurier-baldersheim" },
    { nom: "Saint-Louis", cp: "68300", slug: "serrurier-saint-louis" },
  ],

  seoBlock1: `Rixheim, commune résidentielle de 13 000 habitants du Haut-Rhin, s'étire entre les berges du Rhin et les faubourgs sud de Mulhouse, offrant un cadre de vie agréable à ses habitants. Connue notamment pour abriter le Musée du Papier peint, l'un des rares musées mondiaux dédiés à cet art décoratif, Rixheim conjugue patrimoine culturel et qualité de vie résidentielle. Sa proximité avec la frontière allemande (quelques kilomètres seulement) en fait également une commune attractive pour les frontaliers.

Albert Serrurerie est votre serrurier de confiance à Rixheim 68170. Nous intervenons dans tous les quartiers de la commune : Centre-ville, Rixheim-Village, secteur du Musée du Papier peint, Zone pavillonnaire, Les Berges du Rhin et le Quartier Est. Rixheim présente un tissu urbain essentiellement résidentiel, composé en majorité de maisons individuelles et de quelques résidences collectives, ce qui génère une demande spécifique en sécurisation des entrées et des accès privés.

Le parc immobilier de Rixheim est dominé par des maisons individuelles construites entre les années 1960 et 2000, dont une partie significative bénéficierait d'une mise à niveau sécuritaire. Les serrures d'origine de ces logements sont souvent des modèles standards à 2 ou 3 points qui peuvent être remplacés par des systèmes plus performants certifiés A2P. Les maisons proches des berges du Rhin, en position plus isolée, sont particulièrement concernées par ces enjeux de sécurisation.

Nos techniciens sont disponibles 24 heures sur 24, 7 jours sur 7 à Rixheim. Grâce à notre présence dans l'agglomération mulhousienne, nous garantissons des délais d'intervention de 20 à 30 minutes. Porte claquée, clé perdue, serrure bloquée par le froid hivernal alsacien, tentative d'effraction — nous intervenons avec réactivité et professionnalisme, en préservant au maximum l'intégrité de votre porte.`,

  seoBlock2: `Rixheim, en tant que commune résidentielle aisée proche de Mulhouse et de la frontière allemande, est une zone régulièrement ciblée par des serruriers peu scrupuleux qui savent que la population est solvable et souvent peu renseignée sur les tarifs normaux de la serrurerie d'urgence. Des plaquettes publicitaires, des autocollants en boîte aux lettres et des annonces internet proposant des interventions à 49€ ou 69€ circulent régulièrement dans ce secteur, pour facturer plusieurs fois plus une fois sur place.

Albert Serrurerie s'engage à une transparence totale sur ses prix à Rixheim. Avant chaque déplacement, nous vous communiquons par téléphone le coût estimé de l'intervention selon la situation décrite. Nous n'intervenons que sur votre accord explicite, et si le tarif ne vous convient pas, vous êtes libre de refuser — seul le déplacement de 49,50€ TTC reste dû si le technicien s'est déjà rendu sur place.

Nous travaillons avec les meilleures marques du marché : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Toutes les pièces posées sont neuves, certifiées et garanties. Nos techniciens suivent des formations continues pour maîtriser les dernières technologies de serrurerie, y compris les systèmes connectés et les serrures électroniques de plus en plus présents dans les maisons modernes de Rixheim.

Pour les propriétaires de Rixheim qui souhaitent sécuriser leur domicile de manière préventive, nous proposons des audits de sécurité gratuits. Cet examen identifie les points faibles de vos accès et vous permet d'investir judicieusement dans votre sécurité, sans dépenser inutilement sur des installations superflues. Contactez-nous au 03 74 47 47 93 pour prendre rendez-vous ou pour toute intervention d'urgence.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.38!3d47.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479197af4e2c2c1%3A0x40a5fb99a3b960!2sRixheim%2C%2068170!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
