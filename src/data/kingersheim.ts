import { VilleData } from "./types";

export const kingersheimData: VilleData = {
  nom: "Kingersheim",
  slug: "serrurier-kingersheim",
  codePostal: "68260",
  population: "13 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Kingersheim (68260) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Kingersheim disponible 24h/24 et 7j/7. Ouverture de porte, changement serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Kingersheim (68260) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Kingersheim-Village", "Les Châtaigniers",
    "Cité des Abeilles", "Quartier Parc", "Zone pavillonnaire"
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
      question: "Quel est le délai d'intervention d'un serrurier à Kingersheim 68260 ?",
      answer: "Notre délai moyen est de 20 à 30 minutes à Kingersheim, quel que soit le quartier. Centre-ville, Les Châtaigniers, Cité des Abeilles ou Zone pavillonnaire — un technicien est disponible pour vous à toute heure, tous les jours de l'année.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Kingersheim ?",
      answer: "L'ouverture de porte à Kingersheim démarre à 89€ TTC (serrure 1 point), 130€ TTC (3 points), 180€ TTC (porte blindée). Devis gratuit par téléphone au 03 74 47 47 93 avant tout déplacement.",
    },
    {
      question: "Intervenez-vous la nuit et le week-end à Kingersheim ?",
      answer: "Oui, 24h/24, 7j/7. Aucun supplément de nuit ou week-end. Les tarifs annoncés au téléphone sont ceux facturés. Kingersheim est couverte en permanence par nos équipes.",
    },
    {
      question: "Couvrez-vous Wittenheim et Mulhouse depuis Kingersheim ?",
      answer: "Oui, Kingersheim étant au cœur de l'agglomération mulhousienne, nous couvrons toutes les communes voisines : Wittenheim, Mulhouse, Illzach, Wittelsheim, Pfastatt, Baldersheim. Mêmes délais, mêmes tarifs.",
    },
    {
      question: "Êtes-vous agréé assurance habitation à Kingersheim ?",
      answer: "Oui. Nos factures détaillées sont conformes aux exigences des assureurs (Crédit Mutuel, Groupama, AXA, MAIF, MMA…). Après intervention à Kingersheim, vous recevez un document complet pour votre dossier de remboursement.",
    },
    {
      question: "Intervenez-vous après un cambriolage à Kingersheim ?",
      answer: "Oui, c'est une priorité absolue. Nous intervenons en urgence à Kingersheim pour sécuriser votre logement après une effraction : condamnation des accès, remplacement des serrures, pose de serrures provisoires si nécessaire. Ville résidentielle de familles, Kingersheim doit bénéficier de la meilleure protection.",
    },
    {
      question: "Posez-vous des portes blindées à Kingersheim 68260 ?",
      answer: "Oui, nous posons des portes blindées A2P BP1, BP2 et BP3 à Kingersheim à partir de 890€ TTC. Kingersheim est une commune pavillonnaire prisée des familles — la sécurisation renforcée des entrées est une demande croissante. Audit de sécurité gratuit sur rendez-vous.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Kingersheim ?",
      answer: "Demandez un devis écrit avant travaux, vérifiez le SIRET et l'inscription Chambre des Métiers, refusez les tarifs anormalement bas au téléphone. Albert Serrurerie : tarifs publics, devis gratuit, accord écrit obligatoire avant toute intervention.",
    },
  ],

  villesVoisines: [
    { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Illzach", cp: "68110", slug: "serrurier-illzach" },
    { nom: "Wittelsheim", cp: "68310", slug: "serrurier-wittelsheim" },
    { nom: "Pfastatt", cp: "68120", slug: "serrurier-pfastatt" },
    { nom: "Baldersheim", cp: "68390", slug: "serrurier-baldersheim" },
  ],

  seoBlock1: `Kingersheim, commune dynamique de 13 000 habitants du Haut-Rhin, est l'une des villes résidentielles les plus appréciées de l'agglomération mulhousienne. Située sur l'axe Mulhouse-Colmar, Kingersheim offre un cadre de vie verdoyant, avec une forte proportion de maisons individuelles et de pavillons qui attirent de nombreuses familles cherchant la tranquillité de la banlieue tout en restant proches des équipements urbains de Mulhouse.

Albert Serrurerie est votre serrurier de confiance à Kingersheim 68260. Nous intervenons dans l'ensemble des quartiers de la commune : Centre-ville, Kingersheim-Village, Les Châtaigniers, Cité des Abeilles, Quartier Parc et la Zone pavillonnaire. Le profil résidentiel de Kingersheim se traduit par une demande particulièrement soutenue en serrurerie préventive et en sécurisation des logements : cylindres haute sécurité, serrures multipoints, portes blindées.

Le parc immobilier de Kingersheim est relativement récent et bien entretenu, avec une majorité de maisons individuelles des années 1970 à 2000. Ces logements disposent souvent de serrures d'entrée qui nécessitent une mise à niveau sécuritaire : les serrures d'origine ne répondent plus aux niveaux de certification actuels A2P. Nos techniciens proposent des solutions adaptées pour chaque type de porte, du remplacement de cylindre au changement de serrure complète, jusqu'à la pose de blocs-portes blindés.

Nos équipes sont disponibles 24 heures sur 24, 7 jours sur 7 à Kingersheim. Avec des délais d'intervention de 20 à 30 minutes, nous sommes l'un des serruriers d'urgence les plus réactifs de la commune. Porte claquée le matin avant l'école, clé oubliée à l'intérieur un soir de semaine, tentative d'intrusion remarquée en rentrant du travail — nous répondons à chaque situation avec le même professionnalisme et la même transparence tarifaire.`,

  seoBlock2: `La population de Kingersheim est composée en majorité de familles propriétaires de maisons individuelles, sensibles aux questions de sécurité et soucieuses de la valeur de leur patrimoine immobilier. Cette sociologie particulière fait de Kingersheim une cible privilégiée pour les serruriers peu scrupuleux qui proposent des travaux inutiles à prix exorbitants une fois sur place.

Albert Serrurerie s'engage à ne jamais vous proposer des travaux non nécessaires. Lors de chaque intervention à Kingersheim, notre technicien évalue honnêtement la situation et vous propose la solution la plus adaptée — pas nécessairement la plus coûteuse. Si votre serrure peut être simplement réparée plutôt que remplacée, nous vous le dirons. Si votre cylindre peut être rekeyed plutôt que remplacé, nous vous proposerons cette option moins onéreuse.

Nos certifications et notre inscription à la Chambre des Métiers d'Alsace sont des garanties que vous pouvez vérifier. Nous travaillons exclusivement avec des marques reconnues — Fichet, Vachette, Bricard, Mul-T-Lock — et chaque pièce posée est neuve et garantie. Nos techniciens sont formés régulièrement aux nouvelles technologies de serrurerie et aux techniques d'ouverture non destructive.

Pour les habitants de Kingersheim qui souhaitent anticiper plutôt que subir, nous proposons des audits de sécurité gratuits à domicile. Cet audit évalue la résistance de vos accès et identifie les points faibles à traiter en priorité. Appelez le 03 74 47 47 93 pour prendre rendez-vous. Nous intervenons également pour les demandes planifiées en dehors des urgences : changement de serrure après emménagement, remplacement de cylindre après perte de clé, pose de verrou supplémentaire.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.35!3d47.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479192af4e2c2c1%3A0x40a5fb99a3b960!2sKingersheim%2C%2068260!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
