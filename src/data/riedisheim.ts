import { VilleData } from "./types";

export const riedisheimData: VilleData = {
  nom: "Riedisheim",
  slug: "serrurier-riedisheim",
  codePostal: "68400",
  population: "12 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Riedisheim (68400) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Riedisheim disponible 24h/24 et 7j/7. Ouverture de porte, changement serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Riedisheim (68400) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville", "Riedisheim-Village", "Quartier Parc",
    "Les Tilleuls", "Zone pavillonnaire Sud", "Cité ouvrière"
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
      question: "Quel est le délai d'intervention d'un serrurier à Riedisheim 68400 ?",
      answer: "Notre délai moyen à Riedisheim est de 20 à 30 minutes, quel que soit le quartier. Riedisheim étant directement limitrophe de Mulhouse, nos équipes peuvent intervenir très rapidement depuis plusieurs points de l'agglomération. Disponibilité garantie 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Riedisheim ?",
      answer: "Ouverture de porte à Riedisheim : dès 89€ TTC (serrure 1 point), 130€ TTC (3 points), 180€ TTC (porte blindée). Devis gratuit au 03 74 47 47 93 avant tout déplacement.",
    },
    {
      question: "Intervenez-vous la nuit et le week-end à Riedisheim ?",
      answer: "Oui, 24h/24, 7j/7 à Riedisheim. Nos tarifs sont les mêmes jour et nuit, semaine et week-end. Aucun supplément caché. Porte claquée, serrure bloquée, effraction — nous sommes joignables et opérationnels à toute heure.",
    },
    {
      question: "Couvrez-vous Mulhouse et Rixheim depuis Riedisheim ?",
      answer: "Oui, nous couvrons toute l'agglomération depuis Riedisheim : Mulhouse (68100), Rixheim (68170), Illzach (68110), Pfastatt (68120), Lutterbach (68460), Baldersheim (68390). Même réactivité et mêmes tarifs partout.",
    },
    {
      question: "Êtes-vous agréé assurance habitation à Riedisheim ?",
      answer: "Oui. Nos factures sont conformes aux standards des compagnies d'assurance (Crédit Mutuel, Groupama, AXA, MAIF, MMA…). Après sinistre à Riedisheim, vous disposez d'un document complet pour votre dossier de remboursement.",
    },
    {
      question: "Intervenez-vous après un cambriolage à Riedisheim ?",
      answer: "Oui, c'est une priorité. Riedisheim, commune résidentielle cossue avec de nombreuses villas et maisons bourgeoises, est une cible attractive pour les cambrioleurs. Nous intervenons en urgence pour sécuriser votre logement et vous recommandons les solutions préventives adaptées à votre type de bien.",
    },
    {
      question: "Posez-vous des portes blindées à Riedisheim 68400 ?",
      answer: "Oui, portes blindées certifiées A2P BP1, BP2, BP3 à partir de 890€ TTC pose incluse. Riedisheim, avec son parc de villas et maisons bourgeoises, est l'une des communes du Haut-Rhin où la demande en portes blindées est la plus soutenue. Audit de sécurité gratuit sur demande au 03 74 47 47 93.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Riedisheim ?",
      answer: "Devis écrit avant travaux, vérification du SIRET et de l'inscription Chambre des Métiers, refus des tarifs d'appel irréalistes. Albert Serrurerie : tarifs publics, devis gratuit, intervention uniquement sur accord écrit de votre part.",
    },
  ],

  villesVoisines: [
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Rixheim", cp: "68170", slug: "serrurier-rixheim" },
    { nom: "Illzach", cp: "68110", slug: "serrurier-illzach" },
    { nom: "Pfastatt", cp: "68120", slug: "serrurier-pfastatt" },
    { nom: "Lutterbach", cp: "68460", slug: "serrurier-lutterbach" },
    { nom: "Baldersheim", cp: "68390", slug: "serrurier-baldersheim" },
  ],

  seoBlock1: `Riedisheim, commune résidentielle de 12 000 habitants du Haut-Rhin directement limitrophe de Mulhouse, est réputée pour la qualité de son cadre de vie et la beauté de son patrimoine architectural. Surnommée parfois la "commune cossue" de l'agglomération mulhousienne, Riedisheim abrite de nombreuses villas bourgeoises, des maisons alsaciennes de caractère et des propriétés de standing qui font sa réputation. Cette concentration de patrimoine immobilier de valeur génère une demande forte et constante en solutions de serrurerie haut de gamme.

Albert Serrurerie est votre serrurier de confiance à Riedisheim 68400. Nous intervenons dans l'ensemble des quartiers de la commune : Centre-ville, Riedisheim-Village, Quartier Parc, Les Tilleuls, Zone pavillonnaire Sud et la Cité ouvrière. Chaque quartier présente ses spécificités : les maisons bourgeoises du centre peuvent nécessiter des interventions délicates sur serrures anciennes, tandis que les pavillons de la Zone Sud sont davantage demandeurs de solutions de sécurisation modernes.

Le parc immobilier de Riedisheim est particulièrement hétérogène : des hôtels particuliers du XIXe siècle côtoient des maisons de maîtres des années 1920-1930, des pavillons des années 1960-1980 et quelques résidences récentes. Cette diversité se traduit par des besoins en serrurerie tout aussi variés. Nos techniciens sont formés pour intervenir sur toutes ces configurations : serrures à gorge d'époque, cylindres européens standards, serrures multipoints modernes, systèmes électroniques.

Nos équipes sont disponibles 24 heures sur 24, 7 jours sur 7 à Riedisheim. La contiguïté avec Mulhouse nous permet de garantir des délais d'intervention de 20 à 30 minutes depuis plusieurs points de départ. Porte claquée, clé perdue, serrure défectueuse, tentative d'intrusion — nous répondons à chaque urgence avec le même professionnalisme et la même attention portée à votre bien.`,

  seoBlock2: `Riedisheim concentre un profil de population particulièrement solvable, ce qui en fait une cible privilégiée pour les acteurs frauduleux de la serrurerie d'urgence. Des opérateurs peu scrupuleux ciblent spécifiquement les communes résidentielles aisées comme Riedisheim, sachant que les propriétaires de villas et de maisons bourgeoises sont plus enclins à payer des montants élevés pour sortir d'une situation d'urgence.

Face à cette réalité, Albert Serrurerie se positionne comme l'alternative locale de confiance. Notre inscription à la Chambre des Métiers d'Alsace, nos certifications professionnelles et notre réputation construite sur plusieurs années d'interventions dans l'agglomération mulhousienne sont des gages de sérieux que vous pouvez vérifier. Nos tarifs sont affichés publiquement, notre devis est systématiquement communiqué avant intervention, et aucun travail ne commence sans votre accord écrit.

Pour les propriétaires de villas et maisons de caractère à Riedisheim, nous proposons une gamme de services adaptés aux biens de standing : pose de serrures de marque haut de gamme (Fichet 787+, Vachette Radialis, Mul-T-Lock Integra), installation de portes blindées A2P BP3, mise en place de systèmes d'accès électroniques, audit de sécurité complet avec rapport détaillé. Ces prestations sont réalisées avec le soin et la discrétion que demandent les biens de valeur.

Pour les situations d'urgence comme pour les projets planifiés, contactez-nous au 03 74 47 47 93. Nous intervenons également pour les gestionnaires de copropriété et les syndics de Riedisheim, avec des contrats d'entretien sur mesure pour les parties communes. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction, 4,8/5 sur Google.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.37!3d47.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479197cf4e2c2c1%3A0x40a5fb99a3b960!2sRiedisheim%2C%2068400!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
