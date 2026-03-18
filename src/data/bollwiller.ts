import { VilleData } from "./types";

export const bollwillerData: VilleData = {
  nom: "Bollwiller",
  slug: "serrurier-bollwiller",
  codePostal: "68540",
  population: "3 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Bollwiller (68540) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Bollwiller disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Bollwiller (68540) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Zone pavillonnaire", "Quartier résidentiel",
    "Les Vergers", "Lotissements", "Zone artisanale"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Bollwiller ? Intervention sans dégât en moins de 30 minutes dans toute la commune.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les pavillons et maisons individuelles de Bollwiller.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les maisons de Bollwiller.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Bollwiller.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Bollwiller ?",
      answer: "Notre délai moyen d'intervention à Bollwiller est de 20 à 30 minutes. Le village est facilement accessible depuis Guebwiller, Pulversheim et Ensisheim. Nos techniciens interviennent dans toute la commune 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Bollwiller ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Couvrez-vous les communes autour de Bollwiller ?",
      answer: "Oui, depuis Bollwiller nous intervenons à Guebwiller (68500), Pulversheim (68840), Soultz-Haut-Rhin (68360), Ensisheim (68190), Staffelfelden (68850) et Colmar (68000). Toute la zone entre Guebwiller et Ensisheim est couverte.",
    },
    {
      question: "Intervenez-vous dans les logements de l'ancienne zone potasse à Bollwiller ?",
      answer: "Oui, Bollwiller fait partie de l'ancien bassin potassique alsacien. Certains logements hérités de cette époque industrielle peuvent présenter des configurations de portes et serrures spécifiques. Nos techniciens s'adaptent à tous les types de bâti, des maisons ouvrières réhabilitées aux pavillons récents.",
    },
    {
      question: "Travaillez-vous la nuit à Bollwiller ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Bollwiller ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Bollwiller ?",
      answer: "Prenez 60 secondes pour vérifier les avis Google d'un serrurier avant de l'appeler en urgence : les prestataires peu scrupuleux accumulent les témoignages négatifs facilement repérables. Albert Serrurerie affiche une note de 4,8/5 sur plus de 127 avis vérifiés. Nos tarifs sont publics et notre devis est transmis avant toute intervention.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui. Nous remettons après chaque intervention une facture détaillée contenant tous les éléments exigés par les assureurs : descriptif complet des travaux, références précises des pièces posées, montant TTC ventilé et notre numéro SIRET. Ce document est suffisant pour constituer votre dossier de remboursement.",
    },
  ],

  villesVoisines: [
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Pulversheim", cp: "68840", slug: "serrurier-pulversheim" },
    { nom: "Soultz-Haut-Rhin", cp: "68360", slug: "serrurier-soultz-haut-rhin" },
    { nom: "Ensisheim", cp: "68190", slug: "serrurier-ensisheim" },
    { nom: "Staffelfelden", cp: "68850", slug: "serrurier-staffelfelden" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Bollwiller, village de 3 000 habitants du Haut-Rhin, est un bourg de la plaine alsacienne situé entre Guebwiller et Ensisheim, dans l'ancien bassin potassique du Haut-Rhin. Ce territoire, marqué par des décennies d'extraction minière jusqu'à la fermeture des mines en 2002, a opéré une reconversion réussie vers un tissu résidentiel familial. Bollwiller a ainsi accueilli de nouveaux habitants attirés par ses prix immobiliers accessibles et son cadre de vie calme, à bonne distance de Mulhouse et Colmar.

Albert Serrurerie intervient dans l'ensemble de Bollwiller : centre-village, Zone pavillonnaire, Quartier résidentiel, Les Vergers, Lotissements et Zone artisanale. Nos techniciens connaissent la diversité du parc immobilier bollwillerois — des maisons de mineurs réhabilitées aux pavillons contemporains — et s'adaptent à chaque configuration.

La mixité du tissu immobilier de Bollwiller crée des besoins variés en serrurerie : les maisons anciennes issues de l'ère minière peuvent présenter des serrures et cylindres vieillissants qui méritent d'être remplacés, tandis que les pavillons récents des lotissements sont souvent équipés de serrures d'entrée de gamme qui peuvent être améliorées. Nos techniciens évaluent chaque situation et proposent la solution la plus adaptée au bâti existant.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre maison des Vergers, serrure défaillante dans un logement ancien, effraction constatée — nous intervenons en moins de 30 minutes. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Choisir Albert Serrurerie à Bollwiller, c'est opter pour un artisan local déclaré, inscrit à la Chambre des Métiers d'Alsace. Notre connaissance de l'ancien bassin potassique alsacien et de ses caractéristiques architecturales nous permet d'intervenir efficacement sur tous les types de bâti présents dans la commune.

La position de Bollwiller entre Guebwiller et Ensisheim, sur un axe fréquenté, peut attirer des sociétés de serrurerie peu scrupuleuses. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics sur ce site, devis gratuit avant intervention, aucun commencement de travaux sans votre accord.

Pour les propriétaires de Bollwiller, nous proposons des audits de sécurité gratuits adaptés à la diversité du bâti local. Que vous habitiez une ancienne maison de mineur réhabilitée ou un pavillon récent d'un lotissement, nos techniciens évaluent le niveau de protection de vos accès et recommandent les équipements les plus pertinents : cylindres haute sécurité, serrures multipoints A2P, portes blindées.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.28!3d47.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b0000000000c%3A0xc!2sBollwiller!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
