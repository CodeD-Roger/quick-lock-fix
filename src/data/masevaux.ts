import { VilleData } from "./types";

export const masevauxData: VilleData = {
  nom: "Masevaux",
  slug: "serrurier-masevaux",
  codePostal: "68290",
  population: "3 200",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Masevaux (68290) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Masevaux disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Masevaux (68290) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Quartier Gare", "Abbaye",
    "Zone pavillonnaire", "Vallée de la Doller", "Quartier résidentiel"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Masevaux ? Intervention rapide dans cette ville de la vallée de la Doller.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de serrures dans les logements anciens et récents de Masevaux.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements et maisons de Masevaux.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Masevaux.",
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
      question: "Quel est le délai d'intervention à Masevaux ?",
      answer: "Notre délai d'intervention à Masevaux est de 30 à 45 minutes. La ville est accessible depuis Thann et Cernay via la vallée de la Doller. Nous couvrons Masevaux et les communes voisines 24h/24, 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Masevaux ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous dans le quartier de l'Abbaye à Masevaux ?",
      answer: "Oui, nous intervenons dans tous les quartiers de Masevaux, y compris le secteur de l'Abbaye. Ce quartier patrimonial comporte des bâtiments anciens dont certaines serrures nécessitent une expertise spécifique que nos techniciens possèdent.",
    },
    {
      question: "Couvrez-vous les communes de la vallée de la Doller ?",
      answer: "Oui, depuis Masevaux nous intervenons à Thann (68800), Cernay (68700), Saint-Amarin (68550), Altkirch (68130), Dannemarie (68210) et Mulhouse (68100). Toute la vallée de la Doller est couverte.",
    },
    {
      question: "Travaillez-vous la nuit à Masevaux ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Masevaux ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Masevaux ?",
      answer: "Pour éviter les arnaques, exigez impérativement un devis écrit et signé avant tout début de travaux — c'est une obligation légale en France depuis 2015. Chez Albert Serrurerie, le devis est gratuit, détaillé et transmis avant l'intervention. Aucun travail ne commence sans votre accord explicite.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui. En plus de la facture standard, nous établissons sur demande un rapport d'intervention décrivant les circonstances, l'état du matériel avant et après intervention, et les travaux réalisés. Ce document complet accélère le traitement de votre dossier et facilite le remboursement par votre assureur habitation.",
    },
  ],

  villesVoisines: [
    { nom: "Thann", cp: "68800", slug: "serrurier-thann" },
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
    { nom: "Saint-Amarin", cp: "68550", slug: "serrurier-saint-amarin" },
    { nom: "Altkirch", cp: "68130", slug: "serrurier-altkirch" },
    { nom: "Dannemarie", cp: "68210", slug: "serrurier-dannemarie" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Masevaux, ville de 3 200 habitants du Haut-Rhin, est le chef-lieu du canton de Masevaux-Niederbruck et le centre principal de la vallée de la Doller. Nichée entre les versants boisés des Vosges méridionales, cette ville possède un riche patrimoine architectural dominé par l'ancienne abbaye bénédictine du XIIe siècle, qui a structuré le développement urbain de la cité pendant des siècles. Masevaux mêle aujourd'hui un centre historique chargé d'histoire, des quartiers résidentiels pavillonnaires et une zone d'activités qui en font un bourg dynamique et attractif.

Albert Serrurerie intervient dans l'ensemble de Masevaux : centre-ville, Quartier Gare, secteur de l'Abbaye, Zone pavillonnaire, Vallée de la Doller et Quartier résidentiel. Le tissu bâti de la ville est varié : maisons bourgeoises du XIXe siècle dans le centre historique, logements ouvriers hérités de l'activité industrielle, pavillons récents dans les quartiers périphériques. Nos techniciens maîtrisent les configurations spécifiques à chaque type de bâti — serrures à gorge sur portes anciennes, cylindres européens sur constructions modernes, serrures multipoints sur portes récentes.

La vallée de la Doller, aux paysages vosgiens préservés, attire des familles qui ont choisi Masevaux pour sa qualité de vie entre montagne et plaine. Le parc immobilier se renouvelle progressivement, mais une partie significative des logements conserve un bâti ancien dont les systèmes de fermeture méritent une modernisation. Nos audits de sécurité gratuits permettent d'évaluer le niveau de protection de chaque logement et de proposer des améliorations adaptées.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre logement, serrure défaillante sur votre commerce, effraction constatée — nous intervenons depuis Thann et Cernay. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Masevaux, c'est notre connaissance de la vallée de la Doller et de ses besoins spécifiques en serrurerie. Chef-lieu de canton isolé dans sa vallée, Masevaux dépend de prestataires fiables et réactifs pour les urgences. Notre organisation nous permet de garantir des délais d'intervention raisonnables depuis Thann et Cernay, même pour les appels nocturnes.

Le secteur de l'Abbaye de Masevaux représente une particularité locale : ses bâtiments anciens, certains remontant au XVIIIe siècle et reconvertis en logements ou en locaux associatifs, présentent des portes et des serrures qui nécessitent une approche artisanale. Nos techniciens interviennent sur ces bâtiments sans endommager les boiseries ni les cadres d'époque, avec le matériel et les compétences adaptés.

Pour les résidents et les entreprises de Masevaux, nous proposons des audits de sécurité gratuits et des contrats de maintenance pour les locaux professionnels. Ces solutions permettent d'anticiper les défaillances et d'éviter les situations d'urgence coûteuses. La prévention est toujours moins onéreuse que l'intervention d'urgence.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.00!3d47.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000009%3A0x9!2sMasevaux!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
