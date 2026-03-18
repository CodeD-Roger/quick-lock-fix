import { VilleData } from "./types";

export const blotzheimData: VilleData = {
  nom: "Blotzheim",
  slug: "serrurier-blotzheim",
  codePostal: "68730",
  population: "4 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Blotzheim (68730) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Blotzheim disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Blotzheim (68730) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Blotzheim-Village", "Aéroport Basel-Mulhouse",
    "Zone pavillonnaire", "Quartier résidentiel", "Zone logistique"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Blotzheim ? Intervention sans dégât en moins de 30 minutes, zone aéroportuaire et village inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les logements et locaux professionnels de Blotzheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements et entreprises de Blotzheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement ou local après une effraction à Blotzheim.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Blotzheim ?",
      answer: "Notre délai moyen d'intervention à Blotzheim est de 20 à 30 minutes. La commune est accessible rapidement depuis Saint-Louis, Bartenheim et Huningue. Que vous soyez dans le centre-village, la zone résidentielle ou à proximité de la zone logistique, nos techniciens interviennent 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Blotzheim ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué avant toute intervention au 03 74 47 47 93.",
    },
    {
      question: "Intervenez-vous pour les entreprises de la zone logistique de Blotzheim ?",
      answer: "Oui, nous intervenons pour les professionnels et entreprises de la zone logistique de Blotzheim, liée à l'activité de l'aéroport Basel-Mulhouse-Freiburg. Portes d'entrepôts, accès sécurisés, locaux de bureau — nos techniciens sont disponibles 24h/24 pour les urgences professionnelles.",
    },
    {
      question: "Intervenez-vous pour les frontaliers à Blotzheim ?",
      answer: "Oui. Blotzheim compte de nombreux frontaliers travaillant en Suisse ou en Allemagne. Ce profil de résidents, souvent absents de longues heures, génère des besoins spécifiques en sécurisation. Nous proposons des solutions adaptées : cylindres haute sécurité, serrures multipoints et portes blindées.",
    },
    {
      question: "Couvrez-vous les communes autour de Blotzheim ?",
      answer: "Oui, depuis Blotzheim nous intervenons à Saint-Louis (68300), Hésingue (68220), Bartenheim (68870), Huningue (68330), Village-Neuf (68128) et Mulhouse (68100). Toutes ces communes frontalières sont couvertes dans des délais optimaux.",
    },
    {
      question: "Travaillez-vous la nuit à Blotzheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Blotzheim. L'activité aéroportuaire génère des allers-retours à toute heure — en cas d'urgence de serrurerie, nous répondons au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Blotzheim ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs irréels annoncés au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation à Blotzheim ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs. Ce document inclut le descriptif des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec les principaux assureurs : Crédit Mutuel, Groupama, AXA, Allianz, MAIF, MMA.",
    },
  ],

  villesVoisines: [
    { nom: "Saint-Louis", cp: "68300", slug: "serrurier-saint-louis" },
    { nom: "Hésingue", cp: "68220", slug: "serrurier-hesingue" },
    { nom: "Bartenheim", cp: "68870", slug: "serrurier-bartenheim" },
    { nom: "Huningue", cp: "68330", slug: "serrurier-huningue" },
    { nom: "Village-Neuf", cp: "68128", slug: "serrurier-village-neuf" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Blotzheim, commune de 4 000 habitants du Haut-Rhin, est indissociable de l'aéroport international Basel-Mulhouse-Freiburg (EuroAirport), l'une des grandes plateformes aéroportuaires d'Europe centrale, qui s'étend sur son territoire. Cette situation unique génère une activité économique intense — zone logistique, hôtels, entreprises de services — et une population résidentielle dynamique composée en partie de frontaliers travaillant en Suisse ou en Allemagne.

Albert Serrurerie intervient dans l'ensemble de Blotzheim : centre-ville, Blotzheim-Village, Zone pavillonnaire, Quartier résidentiel et Zone logistique. Nos techniciens connaissent la géographie particulière de cette commune traversée par une frontière internationale et organisée autour de l'activité aéroportuaire. Le parc immobilier est récent et moderne, avec une majorité de maisons individuelles et de pavillons dotés de serrures et de portes contemporaines.

La zone logistique de Blotzheim, directement liée à l'activité de l'EuroAirport, abrite de nombreuses entreprises et entrepôts qui génèrent une demande professionnelle en serrurerie. Nos techniciens interviennent pour ces clients professionnels avec les mêmes exigences de réactivité et de transparence tarifaire que pour les particuliers.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre maison de la zone résidentielle, serrure défaillante sur un local logistique, effraction constatée — nous intervenons en moins de 30 minutes. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Blotzheim, c'est notre double capacité à servir aussi bien les particuliers résidents que les professionnels de la zone logistique aéroportuaire. Ces deux clientèles ont des besoins très différents — de l'ouverture de porte urgente pour un résident en déplacement rentrant tard de l'aéroport, aux accès sécurisés multi-utilisateurs pour un entrepôt logistique — et nous maîtrisons les deux registres.

La proximité de l'aéroport et la forte activité économique de la zone peuvent malheureusement attirer des sociétés de serrurerie peu scrupuleuses qui ciblent les personnes en situation d'urgence. Chez Albert Serrurerie, nous garantissons la transparence : tarifs publics sur ce site, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit.

Pour les résidents de Blotzheim, notamment les frontaliers, nous proposons des audits de sécurité gratuits et des solutions de sécurisation adaptées au mode de vie frontalier : cylindres haute sécurité anti-effraction, serrures multipoints A2P, portes blindées. Des équipements performants qui protègent votre domicile pendant vos absences.

Contactez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.53!3d47.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b00000000006%3A0x6!2sBlotzheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
