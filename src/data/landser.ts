import { VilleData } from "./types";

export const landserData: VilleData = {
  nom: "Landser",
  slug: "serrurier-landser",
  codePostal: "68440",
  population: "2 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Landser (68440) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Landser disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Landser (68440) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Château de Landser", "Zone pavillonnaire",
    "Quartier résidentiel", "Lotissement récent", "Hameau"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Landser ? Intervention rapide dans ce village résidentiel du Sundgau.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de serrures dans les maisons et pavillons de Landser.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements de Landser.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Landser.",
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
      question: "Quel est le délai d'intervention à Landser ?",
      answer: "Notre délai d'intervention à Landser est de 20 à 35 minutes. La commune est à proximité de Mulhouse et de l'agglomération mulhousienne. Nous couvrons Landser et les villages voisins 24h/24, 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Landser ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous près du Château de Landser ?",
      answer: "Oui, nous intervenons dans tout le village de Landser, y compris à proximité du château médiéval. Le vieux centre du village comporte quelques maisons anciennes dont les serrures nécessitent parfois une expertise spécifique que nos techniciens possèdent.",
    },
    {
      question: "Couvrez-vous les communes voisines depuis Landser ?",
      answer: "Oui, depuis Landser nous intervenons à Mulhouse (68100), Habsheim (68440), Zimmersheim (68440), Illfurth (68720), Altkirch (68130) et Brunstatt-Didenheim (68350) dans des délais similaires.",
    },
    {
      question: "Travaillez-vous la nuit à Landser ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Landser ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Landser ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs, incluant le descriptif des travaux, les références des pièces posées et notre numéro SIRET.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Habsheim", cp: "68440", slug: "serrurier-habsheim" },
    { nom: "Zimmersheim", cp: "68440", slug: "serrurier-zimmersheim" },
    { nom: "Illfurth", cp: "68720", slug: "serrurier-illfurth" },
    { nom: "Altkirch", cp: "68130", slug: "serrurier-altkirch" },
    { nom: "Brunstatt-Didenheim", cp: "68350", slug: "serrurier-brunstatt-didenheim" },
  ],

  seoBlock1: `Landser, commune de 2 000 habitants du Haut-Rhin, est un village résidentiel du Sundgau septentrional situé dans la couronne périurbaine de Mulhouse. Son château médiéval — les ruines du Château de Landser dominant le village depuis une butte — et son centre-village alsacien typique lui confèrent un cadre de vie apprécié des familles qui recherchent la qualité de vie à la campagne sans s'éloigner des commodités de l'agglomération mulhousienne. La commune partage le même code postal (68440) que Habsheim, sa voisine immédiate.

Albert Serrurerie intervient dans l'ensemble de Landser : centre-village, secteur du Château, Zone pavillonnaire, lotissements récents et hameaux. Le parc immobilier de la commune est typique des villages de la périphérie mulhousienne : maisons alsaciennes traditionnelles dans le vieux centre, pavillons des années 1970 à 1990 dans les quartiers résidentiels, et quelques constructions récentes dans les lotissements. Nos techniciens s'adaptent à chaque type de bâti.

La proximité de Mulhouse place Landser dans une zone de vigilance particulière concernant les cambriolages : les maisons des villages périurbains constituent des cibles pour les cambrioleurs qui opèrent dans l'agglomération. Investir dans un cylindre haute sécurité ou une serrure certifiée A2P représente une protection efficace et un investissement rentabilisé dès le premier incident évité.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre logement, serrure défaillante, effraction constatée — nous intervenons depuis Mulhouse en moins de 25 minutes. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Landser, c'est notre expertise du tissu résidentiel de la périphérie mulhousienne et notre réactivité pour les urgences dans ce secteur. Landser, village de la couronne de Mulhouse, bénéficie de notre couverture étendue de l'agglomération et de nos délais d'intervention parmi les meilleurs du secteur.

Les résidents de Landser qui sont victimes d'une tentative de cambriolage ont souvent besoin d'une double intervention : la mise en sécurité immédiate après l'effraction, puis un audit de sécurité complet pour identifier toutes les vulnérabilités. Albert Serrurerie propose ces deux prestations en une seule intervention, avec un technicien qui évalue l'ensemble de votre logement et vous remet un devis détaillé pour les travaux de renforcement.

Pour tous les résidents de Landser, nous proposons des audits de sécurité gratuits. L'audit comprend l'évaluation des portes d'entrée principale et de service, des fenêtres accessibles, du portail et de tout accès secondaire. Nos techniciens vous remettent ensuite un rapport avec des recommandations priorisées.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.41!3d47.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a000000000e%3A0xe!2sLandser!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
