import { VilleData } from "./types";

export const saintAmarinData: VilleData = {
  nom: "Saint-Amarin",
  slug: "serrurier-saint-amarin",
  codePostal: "68550",
  population: "2 500",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Saint-Amarin (68550) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Saint-Amarin disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Saint-Amarin (68550) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Quartier Gare", "Zone industrielle",
    "Zone pavillonnaire", "Vallée de la Thur", "Quartier résidentiel"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Saint-Amarin ? Intervention rapide dans le chef-lieu de la vallée de la Thur.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les logements ouvriers et résidentiels de Saint-Amarin.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements de Saint-Amarin.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Saint-Amarin.",
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
      question: "Quel est le délai d'intervention à Saint-Amarin ?",
      answer: "Notre délai d'intervention à Saint-Amarin est de 30 à 40 minutes. La ville est accessible depuis Thann et Cernay. Nous couvrons Saint-Amarin et l'ensemble de la haute vallée de la Thur 24h/24, 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Saint-Amarin ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Couvrez-vous les communes de la haute vallée de la Thur ?",
      answer: "Oui, depuis Saint-Amarin nous intervenons à Thann (68800), Cernay (68700), Husseren-Wesserling (68470), Masevaux (68290), Mulhouse (68100) et Kruth (68820). Toute la vallée est couverte.",
    },
    {
      question: "Intervenez-vous pour les entreprises de la zone industrielle ?",
      answer: "Oui, nous intervenons pour les professionnels de la zone industrielle de Saint-Amarin : serrures de locaux, portes d'entrepôts, mises en sécurité après effraction. Nos techniciens sont disponibles 24h/24.",
    },
    {
      question: "Travaillez-vous la nuit à Saint-Amarin ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Saint-Amarin ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P. Tarifs à partir de 890€ TTC pose comprise. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Saint-Amarin ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs, incluant le descriptif des travaux, les références des pièces posées et notre numéro SIRET.",
    },
  ],

  villesVoisines: [
    { nom: "Thann", cp: "68800", slug: "serrurier-thann" },
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
    { nom: "Husseren-Wesserling", cp: "68470", slug: "serrurier-husseren-wesserling" },
    { nom: "Masevaux", cp: "68290", slug: "serrurier-masevaux" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Wittelsheim", cp: "68310", slug: "serrurier-wittelsheim" },
  ],

  seoBlock1: `Saint-Amarin, ville de 2 500 habitants du Haut-Rhin, est le chef-lieu du canton de la vallée de la Thur et le centre administratif de la haute vallée. Niché entre les versants vosgiens, ce bourg industriel et résidentiel accueille des entreprises actives et une population ouvrière et résidentielle dont les besoins en serrurerie sont réels et constants. Son histoire est intimement liée à l'industrie textile alsacienne qui a façonné l'architecture et le tissu urbain de la vallée.

Albert Serrurerie intervient dans l'ensemble de Saint-Amarin : centre-ville, Quartier Gare, Zone industrielle, Zone pavillonnaire, Vallée de la Thur et Quartier résidentiel. Le bâti de la ville mêle des logements ouvriers anciens issus de l'ère industrielle, des maisons individuelles et des constructions plus récentes. Nos techniciens s'adaptent à cette diversité et disposent du matériel adapté pour chaque configuration.

La position enclavée de Saint-Amarin dans la haute vallée de la Thur en fait une ville qui dépend davantage des prestataires locaux et régionaux. Nous organisons nos interventions pour garantir des délais raisonnables depuis Thann et Cernay, même pour les urgences nocturnes. Notre couverture de la vallée de la Thur est complète, du fond de vallée aux versants montagnards.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre logement, serrure défaillante sur votre local professionnel, effraction constatée — nous intervenons depuis Thann. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Choisir Albert Serrurerie à Saint-Amarin, c'est faire confiance à un artisan inscrit à la Chambre des Métiers d'Alsace, qui connaît les spécificités de la haute vallée de la Thur et de ses besoins en serrurerie. La diversité architecturale de Saint-Amarin — des logements ouvriers anciens aux constructions récentes — demande une polyvalence technique que nos équipes possèdent.

La position de Saint-Amarin comme chef-lieu de vallée peut la rendre vulnérable aux prestataires peu scrupuleux. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord.

Pour les résidents et les entreprises de Saint-Amarin, nous proposons des audits de sécurité gratuits et des contrats de maintenance pour les locaux professionnels. Ces solutions permettent d'anticiper les pannes et d'éviter les situations d'urgence coûteuses.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.01!3d47.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000008%3A0x8!2sSaint-Amarin!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
