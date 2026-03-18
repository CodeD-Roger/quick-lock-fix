import { VilleData } from "./types";

export const sainteMarieMinesData: VilleData = {
  nom: "Sainte-Marie-aux-Mines",
  slug: "serrurier-sainte-marie-aux-mines",
  codePostal: "68160",
  population: "5 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Sainte-Marie-aux-Mines (68160) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Sainte-Marie-aux-Mines disponible 24h/24. Ouverture de porte, serrures anciennes, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Sainte-Marie-aux-Mines (68160) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Quartier Gare", "Saint-Pierre-sur-l'Hâte",
    "Zone pavillonnaire", "Lièpvre", "Quartier minier historique"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Sainte-Marie-aux-Mines ? Intervention sans dégât en moins de 40 minutes.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure ancienne et historique",
      description: "Spécialistes des serrures sur maisons bourgeoises et ouvrières du patrimoine minier de Sainte-Marie.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements et locaux de Sainte-Marie-aux-Mines.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Sainte-Marie-aux-Mines.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Sainte-Marie-aux-Mines ?",
      answer: "Notre délai d'intervention à Sainte-Marie-aux-Mines est de 35 à 45 minutes depuis Colmar ou Sélestat. La ville est accessible par la route des Crêtes ou la RN59 via le tunnel. Nous couvrons Sainte-Marie et Lièpvre 24h/24, 7j/7.",
    },
    {
      question: "Intervenez-vous sur les serrures des maisons anciennes de Sainte-Marie-aux-Mines ?",
      answer: "Oui. Sainte-Marie-aux-Mines possède un patrimoine immobilier remarquable issu de ses siècles d'histoire minière : maisons bourgeoises du XIXe siècle, logements ouvriers des filatures, bâtiments administratifs de l'ère industrielle. Nos techniciens maîtrisent les serrures et cylindres anciens de ces bâtiments.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Sainte-Marie-aux-Mines ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Couvrez-vous Lièpvre depuis Sainte-Marie-aux-Mines ?",
      answer: "Oui, nous couvrons Lièpvre et l'ensemble de la vallée dans les mêmes conditions. Nous intervenons également à Ribeauvillé (68150), Sélestat (67600), Colmar (68000), Lapoutroie (68650) et Orbey (68370).",
    },
    {
      question: "Travaillez-vous pendant le salon européen du tissu à Sainte-Marie-aux-Mines ?",
      answer: "Oui, Albert Serrurerie intervient 365 jours par an, 24h/24. Le salon européen du tissu — l'un des plus grands d'Europe — génère une affluence touristique intense. Nous sommes disponibles en permanence, y compris pendant ces événements. Appelez-nous au 03 74 47 47 93.",
    },
    {
      question: "Proposez-vous des portes blindées à Sainte-Marie-aux-Mines ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Sainte-Marie-aux-Mines ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs, incluant le descriptif des travaux, les références des pièces posées et notre numéro SIRET.",
    },
  ],

  villesVoisines: [
    { nom: "Ribeauvillé", cp: "68150", slug: "serrurier-ribeauville" },
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Lapoutroie", cp: "68650", slug: "serrurier-lapoutroie" },
    { nom: "Orbey", cp: "68370", slug: "serrurier-orbey" },
    { nom: "Kaysersberg", cp: "68240", slug: "serrurier-kaysersberg" },
    { nom: "Munster", cp: "68140", slug: "serrurier-munster" },
  ],

  seoBlock1: `Sainte-Marie-aux-Mines, ville de 5 500 habitants du Haut-Rhin, est une cité minière historique dont l'histoire remonte au Moyen Âge, quand l'exploitation de l'argent et du cuivre en fit l'une des villes les plus riches d'Alsace. Nichée dans la vallée de la Lièpvre, aux confins du Haut-Rhin et du Bas-Rhin, la ville conserve un patrimoine architectural remarquable issu de ses siècles d'histoire : maisons bourgeoises du XVIe au XIXe siècle, bâtiments des filatures textiles qui prirent le relais des mines, et logements ouvriers caractéristiques de l'architecture industrielle alsacienne.

Albert Serrurerie intervient dans l'ensemble de Sainte-Marie-aux-Mines et de la vallée : centre-ville, Quartier Gare, Saint-Pierre-sur-l'Hâte, Zone pavillonnaire, Lièpvre et Quartier minier historique. Nos techniciens s'adaptent à la diversité architecturale de cette ville — des maisons bourgeoises du XIXe siècle aux logements modernes — et maîtrisent les serrures et cylindres anciens présents dans le bâti historique.

Sainte-Marie-aux-Mines est également connue pour son salon européen du tissu — Tissu Chic, l'un des plus grands salons de tissu d'Europe — qui attire chaque année des milliers de visiteurs professionnels et amateurs. Cette activité événementielle génère des séjours temporaires et une demande ponctuelle en serrurerie d'urgence pour les visiteurs qui se retrouvent bloqués dans leur hébergement.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre logement, serrure défaillante, effraction constatée — nous intervenons depuis Colmar ou Ribeauvillé. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Sainte-Marie-aux-Mines, c'est notre capacité à intervenir efficacement dans une ville dont le patrimoine immobilier est marqué par plusieurs siècles d'histoire industrielle. Les maisons bourgeoises du XIXe siècle, les anciens logements de filature et les bâtiments miniers réhabilités présentent des configurations de serrures très diverses que nos techniciens maîtrisent.

Sainte-Marie-aux-Mines, ville enclavée dans sa vallée mais animée par son salon textile international, peut être ciblée par des prestataires peu scrupuleux pendant les périodes d'affluence. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord.

Pour les propriétaires de Sainte-Marie-aux-Mines, nous proposons des audits de sécurité gratuits. Le parc immobilier ancien de la ville mérite souvent une mise à niveau des cylindres et serrures — des équipements qui datent parfois de plusieurs décennies. Nos techniciens évaluent chaque situation et recommandent les améliorations pertinentes.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.19!3d48.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000004%3A0x4!2sSainte-Marie-aux-Mines!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
