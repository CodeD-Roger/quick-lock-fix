import { VilleData } from "./types";

export const cernayData: VilleData = {
  nom: "Cernay",
  slug: "serrurier-cernay",
  codePostal: "68700",
  population: "11 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Cernay (68700) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Cernay disponible 24h/24 et 7j/7. Ouverture de porte, changement serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Cernay (68700) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Cernay-la-Ville", "Quartier Gare",
    "Zone industrielle", "Les Vergers", "Quartier Pavillonnaire Nord"
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
      question: "Quel est le délai d'intervention d'un serrurier à Cernay 68700 ?",
      answer: "Notre délai moyen à Cernay est de 25 à 40 minutes depuis notre base dans l'agglomération mulhousienne. Cernay se trouvant à une vingtaine de kilomètres de Mulhouse, nous maintenons des délais compétitifs grâce à notre organisation logistique. Nos techniciens couvrent l'ensemble des quartiers de Cernay et de ses communes voisines comme Thann et Wittelsheim.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Cernay ?",
      answer: "L'ouverture de porte à Cernay commence à 89€ TTC pour une serrure simple à 1 point, 130€ TTC pour une serrure 3 points, 180€ TTC pour une porte blindée. Devis gratuit par téléphone au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous la nuit et le week-end à Cernay ?",
      answer: "Oui, Albert Serrurerie intervient 24h/24 et 7j/7 à Cernay. Cernay, à l'entrée de la vallée de Saint-Amarin, peut voir ses habitants bloqués à toute heure. Aucun supplément de nuit ou week-end : les tarifs annoncés sont ceux facturés.",
    },
    {
      question: "Couvrez-vous Thann et Wittelsheim depuis Cernay ?",
      answer: "Oui, nous couvrons Thann (68800), Wittelsheim (68310), Staffelfelden (68850), Wattwiller (68700) et Soultz-Haut-Rhin (68360) depuis notre présence à Cernay et dans l'agglomération mulhousienne. Même qualité de service et mêmes tarifs transparents.",
    },
    {
      question: "Êtes-vous agréé assurance habitation à Cernay ?",
      answer: "Oui. Nos factures détaillées permettent un remboursement rapide auprès de votre assureur. Elles sont conformes aux exigences des principales compagnies (Crédit Mutuel Alsace, Groupama, AXA, MAIF, MMA…) et incluent la description précise des travaux et les références des pièces posées.",
    },
    {
      question: "Intervenez-vous après un cambriolage à Cernay ?",
      answer: "Oui, intervention d'urgence prioritaire à Cernay après effraction. Cernay, ville à la jonction entre zone industrielle et secteur résidentiel, voit son taux de cambriolage évoluer selon les saisons. Nous sécurisons immédiatement votre logement ou local commercial après intrusion.",
    },
    {
      question: "Posez-vous des portes blindées à Cernay 68700 ?",
      answer: "Oui, portes blindées A2P BP1, BP2, BP3 à Cernay à partir de 890€ TTC. Les pavillons du Quartier Nord et les maisons individuelles de Cernay-la-Ville sont bien adaptés à ce type d'installation. Nous réalisons un audit de sécurité gratuit avant toute recommandation.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Cernay ?",
      answer: "Exigez un devis écrit avant travaux, vérifiez le SIRET, méfiez-vous des prix d'appel irréalistes sur internet. Les serruriers frauduleux ciblent aussi les villes moyennes comme Cernay. Albert Serrurerie : tarifs publics, devis gratuit, accord écrit obligatoire.",
    },
  ],

  villesVoisines: [
    { nom: "Thann", cp: "68800", slug: "serrurier-thann" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Wittelsheim", cp: "68310", slug: "serrurier-wittelsheim" },
    { nom: "Staffelfelden", cp: "68850", slug: "serrurier-staffelfelden" },
    { nom: "Wattwiller", cp: "68700", slug: "serrurier-wattwiller" },
    { nom: "Soultz-Haut-Rhin", cp: "68360", slug: "serrurier-soultz-haut-rhin" },
  ],

  seoBlock1: `Cernay, commune de 11 500 habitants du Haut-Rhin, occupe une position charnière à l'entrée de la vallée de Saint-Amarin, au pied des Vosges alsaciennes. Ville industrielle historique — Cernay a abrité d'importantes filatures et des industries chimiques au XIXe et XXe siècle — elle a progressivement évolué vers un profil mixte mêlant activités industrielles résiduelles, commerces, services et habitat résidentiel diversifié.

Albert Serrurerie est votre serrurier de confiance à Cernay 68700. Nous intervenons dans l'ensemble des quartiers de la commune : Centre-ville, Cernay-la-Ville, Quartier Gare, Zone industrielle, Les Vergers et le Quartier Pavillonnaire Nord. Le tissu urbain de Cernay est varié : des immeubles collectifs du centre côtoient des maisons ouvrières du début du XXe siècle, des pavillons des années 1970-1990 et quelques résidences plus récentes. Cette diversité génère des besoins en serrurerie tout aussi variés, auxquels nos techniciens sont formés à répondre.

Cernay est également un point de passage entre l'agglomération mulhousienne et les communes de la vallée vosgiennes. Les habitants de Thann, Vieux-Thann, Staffelfelden et des villages environnants font régulièrement appel à nos services lors de situations d'urgence. Notre couverture géographique s'étend à l'ensemble du secteur, avec des délais d'intervention adaptés à chaque localisation.

La Zone industrielle de Cernay regroupe de nombreuses entreprises, artisans et commerces dont la sécurisation des locaux est une préoccupation quotidienne. Nous intervenons sur les locaux professionnels avec la même réactivité que sur les habitations : portes de service, rideaux métalliques, serrures de bureaux, accès sécurisés. Disponibles 24 heures sur 24, 7 jours sur 7, nos équipes répondent aux urgences de serrurerie industrielle et commerciale dans les mêmes délais que pour le secteur résidentiel.`,

  seoBlock2: `Albert Serrurerie à Cernay, c'est l'assurance d'un artisan sérieux qui intervient avec les bons outils, les bonnes pièces et la bonne méthode. Dans les villes moyennes comme Cernay, les opérateurs frauduleux de la serrurerie d'urgence savent que les options alternatives sont moins nombreuses et que les habitants sont plus vulnérables à leurs pratiques abusives. Annonces mensongères sur internet, cartes de visite glissées dans les boîtes aux lettres, numéros à l'apparence locale qui redirigent vers des plateformes nationales — ces méthodes ciblent Cernay comme toutes les communes du Haut-Rhin.

Chez Albert Serrurerie, nos engagements sont clairs : tarifs publics consultables sur ce site, devis gratuit communiqué avant déplacement, aucun travail sans votre accord écrit sur le montant. Si le tarif annoncé ne vous convient pas, vous êtes libre de refuser notre intervention — seul le déplacement de 49,50€ TTC reste dû. Nous ne pratiquerons jamais de surfacturation une fois sur place.

Nos techniciens travaillent exclusivement avec des pièces neuves de marques certifiées : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Chaque installation est couverte par la garantie fabricant et documentée sur la facture d'intervention. Nos certifications A2P et notre inscription à la Chambre des Métiers d'Alsace sont des références que vous pouvez vérifier en ligne.

Pour les entreprises et artisans de la zone industrielle de Cernay, nous proposons des contrats de maintenance et d'entretien incluant des interventions d'urgence prioritaires. Pour les particuliers qui souhaitent anticiper les risques, nous proposons des audits de sécurité gratuits à domicile. Appelez le 03 74 47 47 93 pour tout besoin en serrurerie à Cernay et dans la vallée de Thann.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.18!3d47.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479185af4e2c2c1%3A0x40a5fb99a3b960!2sCernay%2C%2068700!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
