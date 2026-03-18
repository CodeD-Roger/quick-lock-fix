import { VilleData } from "./types";

export const husserenWesserlingData: VilleData = {
  nom: "Husseren-Wesserling",
  slug: "serrurier-husseren-wesserling",
  codePostal: "68470",
  population: "1 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Husseren-Wesserling (68470) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Husseren-Wesserling disponible 24h/24. Ouverture de porte, serrures ancienne manufacture, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Husseren-Wesserling (68470) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Husseren", "Wesserling", "Parc de Wesserling",
    "Zone pavillonnaire", "Vallée de la Thur", "Chalets"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Husseren-Wesserling ? Intervention rapide dans la vallée de la Thur.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure historique et ancienne",
      description: "Spécialistes des serrures sur bâtiments de l'ancienne manufacture textile et logements ouvriers historiques.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements de Husseren-Wesserling.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Husseren-Wesserling.",
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
      question: "Quel est le délai d'intervention à Husseren-Wesserling ?",
      answer: "Notre délai d'intervention à Husseren-Wesserling est de 30 à 45 minutes. La commune est accessible depuis Thann et Cernay. Nous couvrons l'ensemble de la vallée de la Thur 24h/24, 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Husseren-Wesserling ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous sur les bâtiments du Parc de Wesserling ?",
      answer: "Oui, le Parc de Wesserling — site touristique réhabilité sur l'ancienne manufacture textile — abrite des bâtiments historiques du XIXe siècle. Nous intervenons pour les locataires et propriétaires des logements et locaux de ce site patrimonial.",
    },
    {
      question: "Couvrez-vous les communes de la vallée de la Thur ?",
      answer: "Oui, depuis Husseren-Wesserling nous intervenons à Thann (68800), Saint-Amarin (68550), Cernay (68700), Masevaux (68290), Kruth (68820) et jusqu'à Mulhouse (68100).",
    },
    {
      question: "Travaillez-vous la nuit à Husseren-Wesserling ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Husseren-Wesserling ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Husseren-Wesserling ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs, incluant le descriptif des travaux, les références des pièces posées et notre numéro SIRET.",
    },
  ],

  villesVoisines: [
    { nom: "Thann", cp: "68800", slug: "serrurier-thann" },
    { nom: "Saint-Amarin", cp: "68550", slug: "serrurier-saint-amarin" },
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
    { nom: "Masevaux", cp: "68290", slug: "serrurier-masevaux" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Wittelsheim", cp: "68310", slug: "serrurier-wittelsheim" },
  ],

  seoBlock1: `Husseren-Wesserling, commune de 1 500 habitants du Haut-Rhin, est une entité fusionnant deux villages de la vallée de la Thur avec un site touristique et patrimonial exceptionnel : le Parc de Wesserling. Cet ensemble architectural et naturel, installé sur le site d'une ancienne manufacture textile du XVIIIe siècle, est aujourd'hui un centre culturel et touristique qui accueille des expositions, des spectacles et des événements tout au long de l'année. La coexistence entre ce site patrimonial animé et une commune résidentielle calme crée des besoins variés en serrurerie.

Albert Serrurerie intervient dans l'ensemble de Husseren-Wesserling : Husseren, Wesserling, Parc de Wesserling, Zone pavillonnaire, Vallée de la Thur et Chalets. Le tissu bâti de la commune mêle des bâtiments industriels réhabilités du XIXe siècle — avec leurs spécificités architecturales et leurs serrures souvent d'époque — et des logements résidentiels plus récents. Nos techniciens s'adaptent à ces deux réalités.

La vallée de la Thur, aux paysages vosgiens préservés, attire des propriétaires de chalets et de maisons de montagne qui cherchent calme et nature. Ces résidences secondaires, exposées aux conditions climatiques montagnardes, nécessitent des équipements de serrurerie adaptés — cylindres anti-gel, serrures robustes — que nos techniciens installent avec expertise.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre logement, serrure défaillante, effraction constatée — nous intervenons depuis Thann ou Cernay. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Husseren-Wesserling, c'est notre capacité à intervenir sur les bâtiments très divers de cette commune : bâtisses historiques réhabilitées du Parc de Wesserling, logements ouvriers anciens, maisons individuelles récentes et chalets de montagne. Cette polyvalence est le fruit d'une formation continue de nos techniciens et d'un stock de matériel adapté à chaque type de bâti.

Husseren-Wesserling, dans la vallée de la Thur, peut être ciblée par des prestataires peu scrupuleux pendant les périodes touristiques du Parc de Wesserling. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord.

Pour les résidents et propriétaires de Husseren-Wesserling, nous proposons des audits de sécurité gratuits. La diversité architecturale de la commune implique des approches différentes selon le type de logement — bâtiment historique ou construction récente. Nos recommandations sont toujours adaptées à la réalité du bâti.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.05!3d47.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000007%3A0x7!2sHusseren-Wesserling!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
