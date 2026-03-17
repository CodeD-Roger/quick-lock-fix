import { VilleData } from "./types";

export const colmarData: VilleData = {
  nom: "Colmar",
  slug: "serrurier-colmar",
  codePostal: "68000",
  population: "68 700",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Colmar (68000) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Colmar disponible 24h/24 et 7j/7. Ouverture de porte, serrures alsaciennes anciennes, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Colmar (68000) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre historique", "Petite Venise", "Gare", "Vieux-Colmar",
    "Lauch", "Logelbach", "Quartier des Tanneurs", "Saint-Joseph",
    "Europe", "Cavalerie", "Florimont"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée, clé perdue ou serrure bloquée à Colmar ? Intervention sans dégât en moins de 30 minutes, centre historique inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure alsacienne ancienne",
      description: "Spécialistes des serrures sur portes anciennes en bois massif, colombages et immeubles classés du patrimoine colmarien.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P compatibles avec les cadres anciens des appartements et maisons de Colmar.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement ou commerce après une effraction à Colmar.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité adaptés aux portes modernes et historiques : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Colmar ?",
      answer: "Notre délai moyen d'intervention à Colmar est de 20 à 30 minutes, quel que soit le quartier. Que vous soyez en plein centre historique, dans le quartier de la Gare, à Logelbach ou au quartier Europe, un technicien disponible interviendra rapidement. Nos serruriers sont positionnés stratégiquement dans l'agglomération colmarienne pour garantir cette réactivité à toute heure, y compris la nuit, les week-ends et les jours fériés.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Colmar ?",
      answer: "Le tarif d'une ouverture de porte à Colmar varie selon le type de serrure. Pour une serrure simple à 1 point, le tarif commence à 89€ TTC. Pour une serrure 3 points, comptez à partir de 130€ TTC. Pour une porte blindée, le tarif débute à 180€ TTC. Attention : les bâtiments anciens du centre historique de Colmar peuvent nécessiter un outillage spécifique selon l'état et le modèle de la serrure. Un devis précis et gratuit vous est communiqué par téléphone avant toute intervention.",
    },
    {
      question: "Êtes-vous disponible pendant le marché de Noël de Colmar ?",
      answer: "Absolument. Albert Serrurerie est disponible 365 jours par an, 24 heures sur 24, y compris pendant toute la durée du marché de Noël de Colmar — l'un des plus fréquentés d'Europe avec plus de 2 millions de visiteurs chaque année. Cette période engendre une activité intense dans tout le centre-ville et une forte demande en serrurerie d'urgence. Nos équipes sont en effectif renforcé pendant les marchés de Noël pour garantir des délais d'intervention inférieurs à 30 minutes même dans la zone piétonne.",
    },
    {
      question: "Intervenez-vous dans le quartier de la Petite Venise à Colmar ?",
      answer: "Oui, nous intervenons régulièrement dans le quartier de la Petite Venise, l'un des secteurs les plus caractéristiques du patrimoine colmarien. Ce quartier longeant la Lauch est composé de maisons alsaciennes du XVIIe et XVIIIe siècles dont les portes en bois massif sont souvent équipées de serrures traditionnelles ou de modèles anciens qui demandent une expertise particulière. Nos techniciens maîtrisent ces spécificités et interviennent en prenant soin du bâti ancien, sans causer de dégâts au cadre ni aux boiseries.",
    },
    {
      question: "Pouvez-vous changer une serrure sur une ancienne porte alsacienne à Colmar ?",
      answer: "Oui, c'est l'une de nos spécialités. Colmar compte un parc immobilier ancien exceptionnel — centre historique classé, maisons à colombages, immeubles XIXe et début XXe — dont les portes sont souvent équipées de serrures obsolètes, de cylindres non normalisés ou de systèmes à gorge d'un autre âge. Nos techniciens disposent d'un stock de pièces pour ces configurations atypiques et savent adapter des cylindres modernes haute sécurité (européen 30+10, 45+5) à des gâches et entrées anciennes. Nous préservons l'esthétique de votre porte tout en rehaussant significativement son niveau de sécurité.",
    },
    {
      question: "Intervenez-vous à Horbourg-Wihr depuis Colmar ?",
      answer: "Oui, nous couvrons Horbourg-Wihr (68180) au même titre que les quartiers de Colmar, avec un délai d'intervention identique de 20 à 30 minutes. Commune limitrophe de Colmar sur la rive droite de l'Ill, Horbourg-Wihr fait partie intégrante de notre zone d'intervention principale. Nous couvrons également l'ensemble des communes de l'agglomération colmarienne : Wintzenheim, Wittelsheim, Turckheim, Ribeauvillé, Guebwiller et les villages du vignoble alsacien environnant.",
    },
    {
      question: "Votre facture est-elle reconnue pour un remboursement assurance habitation à Colmar ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des compagnies d'assurance. Ce document inclut : la description précise des travaux réalisés, les références des pièces posées (marque, modèle, certification A2P le cas échéant), le montant TTC ventilé, ainsi que nos coordonnées complètes et notre numéro SIRET. Nous travaillons régulièrement avec les principaux assureurs présents à Colmar : Crédit Mutuel, Groupama Alsace, MMA, AXA, Allianz, MAIF, MACIF, GMF. Sur demande, nous pouvons également établir un rapport d'intervention détaillé pour les dossiers de sinistre.",
    },
    {
      question: "Peut-on installer une porte blindée dans un appartement ancien à Colmar ?",
      answer: "Oui, et c'est même fortement recommandé dans les immeubles anciens du centre de Colmar dont les portes d'entrée d'origine offrent souvent une résistance insuffisante face aux effractions modernes. Nos techniciens réalisent des audits de faisabilité gratuits pour évaluer la configuration de votre entrée (dimensions du baie, nature des murs, type de huisserie). Nous proposons des blocs-portes blindés certifiés A2P BP1, BP2 et BP3, disponibles dans des finitions qui respectent le caractère de l'immeuble. Pour les bâtiments soumis à des règles patrimoniales ou des règlements de copropriété, nous accompagnons les démarches de validation architecturale.",
    },
  ],

  villesVoisines: [
    { nom: "Wintzenheim", cp: "68920", slug: "serrurier-wintzenheim" },
    { nom: "Wittelsheim", cp: "68310", slug: "serrurier-wittelsheim" },
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Ribeauvillé", cp: "68150", slug: "serrurier-ribeauville" },
    { nom: "Turckheim", cp: "68230", slug: "serrurier-turckheim" },
    { nom: "Horbourg-Wihr", cp: "68180", slug: "serrurier-horbourg-wihr" },
  ],

  seoBlock1: `Colmar, préfecture du Haut-Rhin et capitale mondiale des vins d'Alsace, est une ville d'exception qui accueille chaque année plus de 4 millions de visiteurs venus admirer ses ruelles médiévales, ses maisons à colombages multicolores et son célèbre quartier de la Petite Venise. Avec 68 700 habitants et un centre historique entièrement classé, Colmar présente des caractéristiques uniques en matière de serrurerie urbaine.

Albert Serrurerie intervient dans l'ensemble de l'agglomération colmarienne : du cœur du centre historique aux rues de Vieux-Colmar, de la Petite Venise et du Quartier des Tanneurs aux quartiers résidentiels de Logelbach, Lauch, Saint-Joseph, du quartier Europe, de la Cavalerie, de Florimont et du secteur de la Gare. Chaque technicien connaît la géographie des ruelles piétonnes, les contraintes de circulation du cœur de ville et les spécificités architecturales du patrimoine colmarien.

Ce que distingue Colmar d'autres villes alsaciennes, c'est la concentration exceptionnelle de bâtiments anciens en plein cœur de l'habitat quotidien. Contrairement aux secteurs patrimoniaux muséifiés, le centre historique de Colmar est vivant : des milliers de Colmariens y habitent dans des appartements dont les portes en chêne massif, les serrures à mortaise du XIXe siècle ou les cylindres d'époque nécessitent un savoir-faire que seuls des serruriers expérimentés maîtrisent. Un cylindre européen standard ne s'adapte pas toujours à l'entrée d'une maison à colombages du XVIIe siècle : nos techniciens disposent des outils et du stock de pièces adaptés pour ces configurations atypiques.

Nos équipes sont disponibles 24 heures sur 24, 7 jours sur 7, pour répondre à toutes vos situations d'urgence à Colmar. Que vous ayez claqué votre porte en sortant de votre appartement rue des Marchands, cassé votre clé dans la serrure de votre maison à Logelbach, ou constaté une tentative d'effraction sur votre commerce de la Grand'Rue — nous intervenons en moins de 30 minutes, même en zone piétonne. Chaque véhicule est entièrement équipé pour traiter 95% des situations sur place sans déplacement complémentaire.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Colmar, c'est avant tout une expertise technique adaptée au patrimoine bâti exceptionnel de la préfecture du Haut-Rhin. Intervenir sur les serrures d'un immeuble haussmannien du quartier de la Gare, d'une maison renaissance de la Petite Venise ou d'un pavillon contemporain du quartier Europe ne s'improvise pas. Nos techniciens suivent des formations continues sur les serrures anciennes, les normes A2P et les techniques d'ouverture non destructive pour préserver l'intégrité des boiseries et des bâtis patrimoniaux.

Colmar concentre une population touristique et saisonnière importante qui génère malheureusement des opportunités pour des sociétés de serrurerie frauduleuses. Pendant le marché de Noël, la saison viticole ou les grands week-ends, des plateformes téléphoniques nationales inondent les résultats de recherche en affichant des prix irréels — 49€, 59€ — pour facturer ensuite 600€ à 1 200€ une fois le technicien sur place. Ces pratiques ciblent particulièrement les personnes de passage, mais aussi les Colmariens en situation de détresse. Albert Serrurerie ne pratique pas ces méthodes : nos tarifs sont publics, notre devis est gratuit, et nous ne commençons aucun travail sans votre accord écrit sur le montant final.

Nous proposons également des audits de sécurité gratuits pour les propriétaires et gestionnaires d'immeubles du patrimoine colmarien. L'enjeu est double : sécuriser efficacement les accès sans dénaturer l'aspect architectural des bâtiments. Nous recommandons uniquement des solutions compatibles avec les contraintes des Architectes des Bâtiments de France lorsque les logements sont soumis à des servitudes patrimoniales.

Faire confiance à Albert Serrurerie à Colmar, c'est choisir un artisan de proximité déclaré à la Chambre des Métiers d'Alsace, qui utilise exclusivement des pièces neuves des marques Fichet, Vachette, Bricard, Mul-T-Lock, Mottura et ISEO — avec garantie fabricant sur chaque installation. Plus de 2 500 interventions réalisées dans le Haut-Rhin, 98% de satisfaction client, 4,8/5 sur Google : notre réputation est le reflet de notre exigence quotidienne.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43000!2d7.35!3d48.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916945e0f10d3d%3A0xa1bfb56e3e6e5e0!2sColmar!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
