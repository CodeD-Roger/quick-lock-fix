import { VilleData } from "./types";

export const huningueData: VilleData = {
  nom: "Huningue",
  slug: "serrurier-huningue",
  codePostal: "68330",
  population: "6 700",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Huningue (68330) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Huningue disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Huningue (68330) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Huningue-Village", "Port du Rhin",
    "Zone frontalière", "Quartier résidentiel", "Les Berges"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Huningue ? Intervention sans dégât en moins de 30 minutes, zone frontalière et bords du Rhin inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les logements de Huningue, anciens et récents.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour sécuriser votre domicile dans cette zone frontalière trinationale.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Huningue.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Huningue ?",
      answer: "Notre délai moyen d'intervention à Huningue est de 20 à 30 minutes. Que vous soyez au centre-ville, au Port du Rhin, aux Berges ou dans la zone frontalière, un technicien intervient rapidement. La proximité avec Saint-Louis nous permet d'optimiser nos déplacements et de couvrir Huningue efficacement à toute heure.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Huningue ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, comptez à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué avant toute intervention, sans engagement de votre part.",
    },
    {
      question: "Intervenez-vous pour les frontaliers à Huningue ?",
      answer: "Oui, nous intervenons pour tous les résidents de Huningue, qu'ils soient frontaliers travaillant en Suisse ou en Allemagne, ou résidents permanents. La forte présence de frontaliers à Huningue crée des situations particulières : absence prolongée du domicile, besoin de sécurisation renforcée. Nous proposons des solutions adaptées à ce mode de vie transfrontalier.",
    },
    {
      question: "Couvrez-vous Saint-Louis et la zone frontalière ?",
      answer: "Oui, nous couvrons Saint-Louis (68300), Village-Neuf (68128), Hésingue (68220), Blotzheim (68730), Bartenheim (68870) et l'ensemble de la zone frontalière alsacienne. Ces communes situées aux confins de la France, de l'Allemagne et de la Suisse bénéficient du même niveau de service.",
    },
    {
      question: "La zone frontalière de Huningue est-elle plus exposée aux cambriolages ?",
      answer: "La position trinationale de Huningue, à 2 km de Bâle, implique une vigilance accrue en matière de sécurité résidentielle. Nous recommandons des équipements de sécurité certifiés A2P : cylindres haute sécurité anti-crochetage, serrures multipoints, portes blindées. Nos audits de sécurité gratuits permettent d'évaluer les points faibles de votre logement.",
    },
    {
      question: "Travaillez-vous la nuit à Huningue ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Huningue. Les urgences ne respectent pas les horaires : porte claquée la nuit, effraction le week-end, clé perdue en rentrant de Bâle. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Huningue ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P (BP1, BP2, BP3) pour les logements de Huningue. Dans une commune frontalière comme Huningue, une porte blindée est un investissement sécuritaire particulièrement judicieux. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs. Ce document inclut le descriptif précis des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec les principaux assureurs : Crédit Mutuel, Groupama, AXA, Allianz, MAIF, MMA.",
    },
  ],

  villesVoisines: [
    { nom: "Saint-Louis", cp: "68300", slug: "serrurier-saint-louis" },
    { nom: "Village-Neuf", cp: "68128", slug: "serrurier-village-neuf" },
    { nom: "Blotzheim", cp: "68730", slug: "serrurier-blotzheim" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Rixheim", cp: "68170", slug: "serrurier-rixheim" },
    { nom: "Bartenheim", cp: "68870", slug: "serrurier-bartenheim" },
  ],

  seoBlock1: `Huningue, commune de 6 700 habitants du Haut-Rhin, occupe une position géographique unique en Europe : elle est l'une des rares villes françaises à se trouver à la convergence de trois pays — la France, l'Allemagne et la Suisse — avec Bâle à seulement 2 kilomètres. Cette situation trinationale façonne profondément la vie locale, avec une forte proportion de frontaliers travaillant dans l'agglomération bâloise et une population cosmopolite qui génère des besoins spécifiques en serrurerie et sécurisation des logements.

Albert Serrurerie intervient dans l'ensemble de Huningue : centre-ville, Huningue-Village, Port du Rhin, Zone frontalière, Quartier résidentiel et Les Berges. Nos techniciens connaissent la géographie de la commune, ses caractéristiques résidentielles et les contraintes liées à la zone frontalière. Le parc immobilier de Huningue est relativement récent — beaucoup de logements neufs et semi-récents — avec des portes et serrures modernes qui nécessitent des techniciens maîtrisant les configurations contemporaines.

La forte présence de frontaliers à Huningue crée une réalité particulière : des logements parfois inoccupés de longues heures, des résidents qui rentrent tard du travail à Bâle, une sensibilité accrue à la sécurisation des habitations. Nous proposons des solutions adaptées à ce mode de vie : cylindres haute sécurité, serrures multipoints, portes blindées et audits de sécurité.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée en rentrant de Bâle, serrure défaillante au Port du Rhin, effraction constatée aux Berges — nous intervenons en moins de 30 minutes depuis Saint-Louis ou Mulhouse.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Huningue, c'est notre compréhension des enjeux sécuritaires spécifiques à cette commune frontalière trinationale. La proximité de Bâle, ville internationale à haute valeur économique, et la forte densité de frontaliers aisés font de Huningue une zone résidentielle attractive mais aussi potentiellement exposée. Nos recommandations de sécurisation sont adaptées à ce contexte : équipements certifiés A2P, solutions antieffraction de haut niveau.

Comme partout dans le Haut-Rhin, des sociétés de serrurerie peu scrupuleuses cherchent à profiter des situations d'urgence en pratiquant des tarifs d'appel trompeurs. Huningue, proche de Bâle et de ses centres commerciaux, peut être une cible de ces plateformes nationales qui sous-traitent à des intervenants non qualifiés. Chez Albert Serrurerie, nous garantissons la transparence : tarifs publics, devis gratuit, aucun commencement de travaux sans accord du client.

Nous proposons des audits de sécurité gratuits pour les résidents de Huningue, avec des recommandations adaptées aux logements récents de la commune. La nature résidentielle et la forte proportion de propriétaires créent une demande réelle pour des équipements de sécurité performants : portes blindées A2P, cylindres Mul-T-Lock ou Fichet, systèmes multipoints.

Contactez-nous au 03 74 47 47 93 pour toute urgence ou demande de devis. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client, 4,8/5 sur Google. Marques utilisées : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.59!3d47.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b00000000007%3A0x7!2sHuningue!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
