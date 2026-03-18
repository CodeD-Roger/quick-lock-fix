import { VilleData } from "./types";

export const ensisheimData: VilleData = {
  nom: "Ensisheim",
  slug: "serrurier-ensisheim",
  codePostal: "68190",
  population: "7 200",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Ensisheim (68190) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Ensisheim disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Ensisheim (68190) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Ensisheim-Village", "Zone industrielle",
    "Quartier résidentiel", "Les Acacias", "Quartier Gare"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée ou bloquée à Ensisheim ? Intervention sans dégât en moins de 30 minutes, centre historique et zone industrielle inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les logements anciens et modernes d'Ensisheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements et locaux professionnels d'Ensisheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement ou local après une effraction à Ensisheim.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Ensisheim ?",
      answer: "Notre délai moyen d'intervention à Ensisheim est de 20 à 30 minutes. Que vous soyez dans le centre-ville, au quartier des Acacias, en zone industrielle ou au Quartier Gare, un technicien intervient rapidement. Notre position sur l'axe Mulhouse-Colmar (A35) nous permet d'optimiser nos trajets et de couvrir Ensisheim efficacement.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Ensisheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, comptez à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué par téléphone avant toute intervention, sans engagement.",
    },
    {
      question: "Intervenez-vous pour les entreprises de la zone industrielle d'Ensisheim ?",
      answer: "Oui, nous intervenons pour les professionnels et entreprises de la zone industrielle d'Ensisheim. Que ce soit pour une porte d'entrepôt bloquée, une serrure de bureau à changer ou une mise en sécurité après effraction, nos techniciens sont disponibles 24h/24. Nous proposons également des contrats de maintenance pour les parcs locatifs industriels.",
    },
    {
      question: "Couvrez-vous les communes entre Mulhouse et Colmar ?",
      answer: "Oui, depuis Ensisheim sur l'axe A35, nous intervenons facilement à Mulhouse (68100), Colmar (68000), Rouffach (68250), Baldersheim (68390), Battenheim (68390) et Ottmarsheim (68490). Notre positionnement central entre les deux grandes villes du Haut-Rhin nous permet d'intervenir rapidement sur tout ce corridor.",
    },
    {
      question: "Travaillez-vous la nuit et les week-ends à Ensisheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Ensisheim. Les urgences ne respectent pas les horaires : porte claquée la nuit, effraction un dimanche, clé cassée un jour férié. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Ensisheim ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P (BP1, BP2, BP3) pour les logements et locaux professionnels d'Ensisheim. L'installation est réalisée en une demi-journée. Tarifs à partir de 890€ TTC pose comprise pour un bloc-porte blindé standard. Nous proposons également le blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Ensisheim ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez que le serrurier est inscrit à la Chambre des Métiers d'Alsace et dispose d'un numéro SIRET vérifiable. Méfiez-vous des tarifs irréels annoncés au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord explicite.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation à Ensisheim ?",
      answer: "Oui, nous remettons systématiquement une facture détaillée conforme aux exigences des assureurs après chaque intervention : descriptif des travaux, références des pièces installées, numéro SIRET. Nous travaillons régulièrement avec Groupama, Crédit Mutuel, MMA, AXA, Allianz et MAIF.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Rouffach", cp: "68250", slug: "serrurier-rouffach" },
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
  ],

  seoBlock1: `Ensisheim, ville de 7 200 habitants du Haut-Rhin, est un bourg chargé d'histoire : ancienne capitale de la Haute-Alsace sous les Habsbourg, elle conserve un patrimoine architectural remarquable avec son Hôtel de la Régence, ses ruelles médiévales et ses maisons Renaissance. Idéalement positionnée sur l'axe Mulhouse-Colmar (autoroute A35), Ensisheim est aujourd'hui une commune mixte alliant un centre-ville historique à une zone industrielle active et des quartiers résidentiels récents.

Albert Serrurerie intervient dans l'ensemble d'Ensisheim : centre-ville, Ensisheim-Village, Zone industrielle, Quartier résidentiel, Les Acacias et Quartier Gare. Nos techniciens connaissent les spécificités du bâti ensisheimois — des maisons anciennes du cœur historique aux pavillons modernes des quartiers nord — et disposent du matériel adapté pour chaque configuration.

La zone industrielle d'Ensisheim, accueillant de nombreuses entreprises et entrepôts, génère une demande professionnelle en serrurerie : portes industrielles, accès sécurisés, serrures de locaux. Nos techniciens interviennent aussi bien pour les particuliers que pour les professionnels, 24 heures sur 24, avec les mêmes engagements de délai et de transparence tarifaire.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée en sortant de votre domicile du centre-ville, serrure défaillante sur un local industriel, effraction constatée au Quartier Gare — nous intervenons en moins de 30 minutes depuis Mulhouse ou Colmar grâce à notre positionnement sur l'A35.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Ensisheim, c'est notre capacité à intervenir aussi bien sur le patrimoine bâti historique du centre-ville que sur les besoins des entreprises de la zone industrielle. Ces deux réalités coexistent à Ensisheim et exigent des compétences différentes : serrures anciennes à mortaise pour les bâtiments historiques, accès industriels et systèmes multipoints pour les locaux professionnels. Nos techniciens maîtrisent ces deux registres.

La position d'Ensisheim sur l'A35, entre Mulhouse et Colmar, en fait un nœud stratégique qui peut attirer des sociétés de serrurerie de passage pratiquant des tarifs d'appel trompeurs. Chez Albert Serrurerie, nous combattons ces pratiques : tarifs publics sur ce site, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit. Nous sommes une entreprise locale inscrite à la Chambre des Métiers d'Alsace, pas une plateforme téléphonique nationale.

Pour les entreprises de la zone industrielle d'Ensisheim, nous proposons des contrats de maintenance préventive : vérification annuelle des cylindres et serrures, remplacement préventif des pièces usées, audit des accès. Ces contrats permettent d'anticiper les défaillances et d'éviter les situations d'urgence coûteuses.

Appelez-nous au 03 74 47 47 93. Nous utilisons exclusivement les marques Fichet, Vachette, Bricard, Mul-T-Lock, Mottura et ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client, 4,8/5 sur Google.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.35!3d47.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b00000000006%3A0x6!2sEnsisheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
