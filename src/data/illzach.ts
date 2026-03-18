import { VilleData } from "./types";

export const illzachData: VilleData = {
  nom: "Illzach",
  slug: "serrurier-illzach",
  codePostal: "68110",
  population: "15 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Illzach (68110) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Illzach disponible 24h/24 et 7j/7. Ouverture de porte, changement serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Illzach (68110) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre", "Modenheim", "Illzach-Village",
    "Zone commerciale", "Les Collines", "Quartier des écoles"
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
      question: "Quel est le délai d'intervention d'un serrurier à Illzach 68110 ?",
      answer: "Notre délai moyen d'intervention à Illzach est de 20 à 30 minutes. Que vous soyez dans le quartier Centre, à Modenheim, à Illzach-Village ou aux Collines, un technicien est disponible pour intervenir rapidement. Notre positionnement dans l'agglomération mulhousienne garantit cette réactivité 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Illzach ?",
      answer: "L'ouverture de porte à Illzach commence à 89€ TTC pour une serrure 1 point, 130€ TTC pour une serrure 3 points et 180€ TTC pour une porte blindée. Un devis gratuit vous est fourni par téléphone au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous la nuit et le week-end à Illzach ?",
      answer: "Oui, nous sommes disponibles 24h/24, 7j/7 à Illzach. Aucun supplément caché de nuit ou de week-end : les tarifs communiqués au téléphone sont ceux effectivement facturés. Porte claquée, clé perdue, tentative d'effraction — nous intervenons à toute heure.",
    },
    {
      question: "Couvrez-vous aussi Mulhouse et Wittenheim depuis Illzach ?",
      answer: "Oui, Illzach étant directement limitrophe de Mulhouse, nous couvrons l'ensemble de l'agglomération : Mulhouse, Wittenheim, Kingersheim, Riedisheim, Pfastatt, Lutterbach. Tous avec le même délai de 20 à 30 minutes et les mêmes tarifs transparents.",
    },
    {
      question: "Êtes-vous agréé assurance habitation à Illzach ?",
      answer: "Oui, nous travaillons avec toutes les principales compagnies d'assurance. Nos factures détaillées permettent un remboursement rapide auprès de votre assureur. Elles incluent la description des travaux, les références des pièces et le montant TTC ventilé.",
    },
    {
      question: "Intervenez-vous après un cambriolage à Illzach ?",
      answer: "Oui, la mise en sécurité après effraction est traitée en priorité absolue à Illzach. Nous intervenons en urgence pour condamner les accès fracturés et sécuriser votre logement. Illzach dispose d'une zone commerciale importante et d'un habitat mixte — les commerces comme les particuliers peuvent faire appel à nos services.",
    },
    {
      question: "Posez-vous des portes blindées à Illzach 68110 ?",
      answer: "Oui, nous posons des portes blindées certifiées A2P BP1, BP2 et BP3 à Illzach. À partir de 890€ TTC pose comprise, nos techniciens réalisent l'installation en une demi-journée. Nous proposons un audit de sécurité gratuit pour déterminer la solution la plus adaptée à votre configuration.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Illzach ?",
      answer: "Exigez toujours un devis écrit avant travaux, vérifiez le numéro SIRET et l'inscription à la Chambre des Métiers, méfiez-vous des tarifs d'appel irréalistes. Chez Albert Serrurerie, tout est transparent : tarifs publics, devis gratuit, accord écrit obligatoire avant intervention.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
    { nom: "Kingersheim", cp: "68260", slug: "serrurier-kingersheim" },
    { nom: "Riedisheim", cp: "68400", slug: "serrurier-riedisheim" },
    { nom: "Pfastatt", cp: "68120", slug: "serrurier-pfastatt" },
    { nom: "Lutterbach", cp: "68460", slug: "serrurier-lutterbach" },
  ],

  seoBlock1: `Illzach, commune de 15 000 habitants du Haut-Rhin directement limitrophe de Mulhouse, forme avec elle une continuité urbaine dense et dynamique. Intégrée dans l'agglomération mulhousienne, Illzach se distingue par la présence d'une importante zone commerciale qui génère une activité économique significative et attire de nombreux usagers quotidiens. Son tissu urbain mêle habitat collectif en immeubles, logements pavillonnaires et quelques secteurs plus anciens autour d'Illzach-Village.

Albert Serrurerie est votre serrurier de confiance à Illzach 68110. Nous intervenons dans l'ensemble des quartiers de la commune : Centre, Modenheim, Illzach-Village, Zone commerciale, Les Collines et le Quartier des écoles. Chaque secteur présente ses spécificités : les logements collectifs du quartier Centre nécessitent souvent des interventions sur serrures multipoints, tandis que les pavillons des Collines sont davantage concernés par des projets de sécurisation renforcée.

La zone commerciale d'Illzach est l'un des pôles d'activité les plus fréquentés de l'agglomération mulhousienne, avec de nombreuses enseignes nationales et une importante fréquentation journalière. Les commerces et entreprises implantés dans cette zone font régulièrement appel à nos services pour des interventions d'urgence sur serrures de rideaux métalliques, caissons de volet, portes de service et accès sécurisés. Nous intervenons sur les locaux commerciaux avec la même réactivité et les mêmes exigences de qualité que sur les habitations.

Nos techniciens sont disponibles 24 heures sur 24, 7 jours sur 7 à Illzach. Grâce à notre maillage territorial dans l'agglomération, nous garantissons des délais d'intervention de 20 à 30 minutes, que vous soyez un particulier bloqué devant son domicile ou un commerçant confronté à un problème sur son point de vente. Nos véhicules sont entièrement équipés pour traiter l'immense majorité des situations sans déplacement complémentaire.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Illzach, c'est une présence locale réelle, des techniciens connaissant le terrain et une politique de prix limpide. Dans une agglomération aussi dense que celle de Mulhouse-Illzach, les faux serruriers pullulent sur les résultats de recherche internet : plateformes nationales sans technicien local, annonces avec des tarifs d'appel de 29€ ou 39€ qui se révèlent être de simples appâts.

Ces pratiques frauduleuses touchent particulièrement Illzach, commune jeune et active où une partie des habitants moins avertis peut se faire piéger. Un tarif de 39€ annoncé au téléphone peut devenir 600€, 800€ voire plus une fois le technicien sur place — avec des travaux parfois mal réalisés et des pièces de mauvaise qualité. Chez Albert Serrurerie, nous nous engageons contractuellement sur le montant avant de commencer : si notre devis ne vous convient pas, vous êtes libre de ne pas nous autoriser à intervenir, seul le déplacement de 49,50€ TTC reste dû.

Notre équipe travaille exclusivement avec des marques certifiées : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Chaque cylindre, serrure ou verrou posé est neuf, sous garantie fabricant, et documenté sur la facture d'intervention. Nos techniciens sont formés aux techniques d'ouverture non destructive, ce qui permet de préserver votre porte dans 95% des cas d'ouverture d'urgence.

Pour les gestionnaires de copropriété et les syndics d'Illzach, nous proposons des contrats d'entretien des parties communes et des interventions d'urgence prioritaires. Pour les commerçants de la zone commerciale, nous offrons des audits de sécurité gratuits et des devis sur mesure pour la sécurisation des locaux professionnels. Appelez le 03 74 47 47 93 pour toute demande.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.34!3d47.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b9f4e2c2c1%3A0x40a5fb99a3b960!2sIllzach%2C%2068110!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
