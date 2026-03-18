import { VilleData } from "./types";

export const wittelsheimData: VilleData = {
  nom: "Wittelsheim",
  slug: "serrurier-wittelsheim",
  codePostal: "68310",
  population: "12 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Wittelsheim (68310) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Wittelsheim disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Wittelsheim (68310) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Wittelsheim-Village", "Cité Amélie",
    "Cité Sainte-Barbe", "Zone pavillonnaire", "Quartier des Mines"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée ou clé perdue à Wittelsheim ? Intervention sans dégât en moins de 30 minutes, cités minières et pavillons inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les logements ouvriers, pavillons et résidences de Wittelsheim.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour sécuriser votre domicile à Wittelsheim.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Wittelsheim.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Wittelsheim ?",
      answer: "Notre délai moyen d'intervention à Wittelsheim est de 20 à 30 minutes. Que vous soyez à la Cité Amélie, à la Cité Sainte-Barbe, dans le centre-ville ou dans la zone pavillonnaire, un technicien de proximité est disponible à toute heure. Nos serruriers connaissent parfaitement la géographie de Wittelsheim et des communes voisines comme Wittenheim et Cernay pour optimiser leurs trajets.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Wittelsheim ?",
      answer: "Le tarif d'une ouverture de porte à Wittelsheim dépend du type de serrure. Pour une serrure simple à 1 point, le tarif commence à 89€ TTC. Pour une serrure 3 points, comptez à partir de 130€ TTC. Pour une porte blindée, le tarif débute à 180€ TTC. Un devis précis et gratuit vous est communiqué par téléphone avant toute intervention, sans engagement.",
    },
    {
      question: "Intervenez-vous dans les cités minières de Wittelsheim ?",
      answer: "Oui, nous intervenons dans toutes les cités résidentielles de Wittelsheim, y compris la Cité Amélie et la Cité Sainte-Barbe, héritages de l'histoire minière potassique de la région. Ces ensembles de logements ouvriers construits au XXe siècle présentent des configurations de portes et serrures parfois spécifiques que nos techniciens maîtrisent parfaitement.",
    },
    {
      question: "Travaillez-vous 24h/24 à Wittelsheim ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Wittelsheim et dans tout le Haut-Rhin. Les urgences de serrurerie ne respectent pas les horaires : porte claquée la nuit, effraction un dimanche, clé cassée un jour férié. Nous répondons à chaque appel sans exception au 03 74 47 47 93, sans supplément caché.",
    },
    {
      question: "Couvrez-vous les communes autour de Wittelsheim ?",
      answer: "Absolument. Depuis Wittelsheim, nous intervenons également à Wittenheim (68270), Cernay (68700), Kingersheim (68260), Staffelfelden (68850), Pulversheim (68840) et Mulhouse (68100). Toutes ces communes sont couvertes dans les mêmes délais et aux mêmes tarifs transparents qu'à Wittelsheim.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Wittelsheim ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez que le serrurier est inscrit à la Chambre des Métiers d'Alsace et dispose d'un numéro SIRET vérifiable. Méfiez-vous des tarifs anormalement bas annoncés par téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord explicite.",
    },
    {
      question: "Acceptez-vous les remboursements assurance habitation à Wittelsheim ?",
      answer: "Oui, nous remettons systématiquement une facture détaillée conforme aux exigences des compagnies d'assurance après chaque intervention. Ce document inclut le descriptif précis des travaux, les références des pièces installées et les photos si nécessaire. Nous travaillons avec Groupama, Crédit Mutuel, MMA, AXA, Allianz, MAIF et la plupart des assureurs actifs dans le Haut-Rhin.",
    },
    {
      question: "Proposez-vous des portes blindées à Wittelsheim ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P (BP1, BP2, BP3) adaptées aux maisons individuelles et appartements de Wittelsheim. L'installation est réalisée par nos techniciens qualifiés en une demi-journée. Les tarifs débutent à 890€ TTC pose comprise. Nous proposons également le blindage de porte existante à partir de 490€ TTC.",
    },
  ],

  villesVoisines: [
    { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
    { nom: "Kingersheim", cp: "68260", slug: "serrurier-kingersheim" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Pfastatt", cp: "68120", slug: "serrurier-pfastatt" },
  ],

  seoBlock1: `Wittelsheim, commune de 12 000 habitants du Haut-Rhin, est une ville marquée par son passé industriel minier. Ancienne cité de l'exploitation potassique, elle conserve un tissu urbain caractéristique avec ses cités ouvrières construites au XXe siècle — la Cité Amélie et la Cité Sainte-Barbe — qui témoignent de l'histoire sociale et industrielle de la région. Ce patrimoine bâti particulier génère des besoins spécifiques en serrurerie, tant pour les logements anciens des cités que pour les pavillons modernes de la zone résidentielle.

Albert Serrurerie intervient dans l'ensemble de Wittelsheim : centre-ville, Wittelsheim-Village, Cité Amélie, Cité Sainte-Barbe, zone pavillonnaire et Quartier des Mines. Nos techniciens connaissent parfaitement la géographie et les spécificités architecturales de chaque secteur. Les logements des cités minières, souvent construits avec des portes et des menuiseries d'époque, peuvent nécessiter un outillage adapté que nos équipes maîtrisent.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7, pour répondre à toutes vos urgences de serrurerie à Wittelsheim. Porte claquée en sortant de votre maison de la Cité Amélie, clé cassée dans la serrure de votre pavillon de la zone résidentielle, tentative d'effraction dans votre appartement du centre-ville — nous intervenons en moins de 30 minutes, quel que soit le quartier. Nos véhicules sont entièrement équipés pour traiter la grande majorité des situations sur place dès le premier passage.

Wittelsheim est idéalement positionnée entre Mulhouse, Cernay et Wittenheim, ce qui nous permet d'optimiser nos interventions sur toute cette zone. La proximité avec la zone industrielle de Staffelfelden et les communes potassiques voisines (Pulversheim, Staffelfelden) fait de notre secteur d'intervention l'un des plus denses du Haut-Rhin. Propriétaires, locataires, syndics de copropriété et gérants de commerce à Wittelsheim bénéficient tous du même niveau de service et des mêmes tarifs transparents.`,

  seoBlock2: `Choisir Albert Serrurerie à Wittelsheim, c'est faire le choix d'un artisan serrurier local, déclaré et inscrit à la Chambre des Métiers d'Alsace. Nous sommes une entreprise de proximité qui connaît les spécificités du bâti wittelsheimois — des maisons de mineurs aux pavillons contemporains — et qui engage sa réputation sur chaque intervention.

Le secteur de la serrurerie d'urgence souffre malheureusement de pratiques frauduleuses. Des sociétés basées hors de la région annoncent des tarifs d'appel de 39€ ou 49€ au téléphone pour facturer 500€ à 1 500€ une fois sur place. Chez Albert Serrurerie, nous combattons ces pratiques par la transparence totale : nos tarifs sont publics et consultables sur ce site, le devis est systématiquement communiqué avant le début des travaux, et nous ne débutons jamais une intervention sans votre accord explicite sur le montant.

Nos certifications et partenariats témoignent de notre sérieux. Nous travaillons exclusivement avec des marques reconnues : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Chaque pièce installée est neuve, certifiée et couverte par la garantie fabricant. Nos interventions sont garanties et nous assurons un service après-vente réactif.

La situation de Wittelsheim dans le bassin potassique du Haut-Rhin, à proximité immédiate de Mulhouse et de Cernay, en fait une commune résidentielle attractive où la sécurité des biens est une préoccupation croissante. Nous proposons des audits de sécurité gratuits pour évaluer la résistance de vos accès et vous recommander les améliorations pertinentes : serrures multipoints, cylindres haute sécurité, portes blindées A2P, cornières anti-pince.

Contactez-nous au 03 74 47 47 93 pour toute urgence ou demande de devis. Plus de 2 500 interventions réalisées dans le Haut-Rhin, un taux de satisfaction de 98% et une note de 4,8/5 sur Google témoignent de notre engagement quotidien.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.24!3d47.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b00000000001%3A0x1!2sWittelsheim!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
