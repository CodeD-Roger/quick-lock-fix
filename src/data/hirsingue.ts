import { VilleData } from "./types";

export const hirsingueData: VilleData = {
  nom: "Hirsingue",
  slug: "serrurier-hirsingue",
  codePostal: "68137",
  population: "2 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Hirsingue (68137) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Hirsingue disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Hirsingue (68137) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Zone pavillonnaire", "Quartier résidentiel",
    "Lotissement récent", "Sundgau rural", "Hameau"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Hirsingue ? Intervention rapide dans ce village du Sundgau alsacien.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de serrures dans les maisons alsaciennes et pavillons récents d'Hirsingue.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements d'Hirsingue.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Hirsingue.",
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
      question: "Quel est le délai d'intervention à Hirsingue ?",
      answer: "Notre délai d'intervention à Hirsingue est de 30 à 45 minutes. La commune est accessible depuis Altkirch et Dannemarie. Nous couvrons Hirsingue et les communes voisines du Sundgau 24h/24, 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Hirsingue ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous dans les lotissements récents d'Hirsingue ?",
      answer: "Oui, nous intervenons dans tous les quartiers d'Hirsingue, y compris les lotissements récents. Les maisons neuves ou récentes sont souvent équipées de serrures multipoints ou de cylindres européens standard que nous remplaçons et améliorons régulièrement.",
    },
    {
      question: "Couvrez-vous les communes voisines depuis Hirsingue ?",
      answer: "Oui, depuis Hirsingue nous intervenons à Altkirch (68130), Dannemarie (68210), Ferrette (68480), Mulhouse (68100) et les communes environnantes du Sundgau dans des délais similaires.",
    },
    {
      question: "Travaillez-vous la nuit à Hirsingue ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Hirsingue ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Hirsingue ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs, incluant le descriptif des travaux, les références des pièces posées et notre numéro SIRET.",
    },
  ],

  villesVoisines: [
    { nom: "Altkirch", cp: "68130", slug: "serrurier-altkirch" },
    { nom: "Dannemarie", cp: "68210", slug: "serrurier-dannemarie" },
    { nom: "Ferrette", cp: "68480", slug: "serrurier-ferrette" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Illfurth", cp: "68720", slug: "serrurier-illfurth" },
    { nom: "Landser", cp: "68440", slug: "serrurier-landser" },
  ],

  seoBlock1: `Hirsingue, commune de 2 000 habitants du Haut-Rhin, est un village résidentiel du Sundgau alsacien en plein développement. Sa situation géographique avantageuse entre Altkirch et la frontière suisse, à proximité des axes routiers reliant Mulhouse et Bâle, en fait une commune attractive pour les familles qui souhaitent bénéficier d'un cadre de vie rural tout en restant à bonne distance des pôles économiques. Ce dynamisme démographique se traduit par un parc immobilier diversifié, alliant maisons alsaciennes traditionnelles du centre-village à des lotissements résidentiels récents.

Albert Serrurerie intervient dans l'ensemble d'Hirsingue : centre-village, Zone pavillonnaire, lotissements récents et hameaux. La diversité du bâti de la commune — des maisons d'architecture alsacienne traditionnelle du XIXe siècle aux constructions de ces vingt dernières années — demande une polyvalence technique que nos équipes possèdent. Nous intervenons aussi bien sur les vieilles serrures à gorge des maisons anciennes que sur les cylindres européens des portes récentes.

La croissance démographique d'Hirsingue s'accompagne d'une augmentation des besoins en serrurerie, notamment pour les mises en sécurité des maisons neuves : remplacement des cylindres de chantier par des équipements définitifs de haute sécurité, installation de serrures multipoints. Ces interventions préventives sont particulièrement recommandées dans les nouveaux lotissements.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre logement, serrure défaillante, effraction constatée — nous intervenons depuis Altkirch et Mulhouse. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Hirsingue, c'est notre connaissance du tissu résidentiel du Sundgau alsacien et notre réactivité pour les urgences en zone périurbaine. Les villages comme Hirsingue, situés entre les villes-centres d'Altkirch et Mulhouse, ont souvent du mal à trouver des prestataires de serrurerie disponibles et fiables. Albert Serrurerie comble ce manque avec une équipe dédiée au Sundgau.

Les habitants d'Hirsingue qui ont acquis des maisons neuves dans les lotissements récents ont souvent un besoin immédiat : remplacer les cylindres de chantier installés par les constructeurs par des équipements de sécurité conformes aux standards actuels. Nous réalisons ces remplacements préventifs avec des cylindres certifiés A2P ou équivalents, pour un investissement modeste mais une sécurité durablement renforcée.

Pour tous les résidents d'Hirsingue, nous proposons des audits de sécurité gratuits. Nos techniciens évaluent le niveau de protection de votre logement — portes d'entrée, portes de service, fenêtres — et vous remettent un rapport avec des recommandations adaptées à votre budget.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.24!3d47.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a000000000c%3A0xc!2sHirsingue!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
