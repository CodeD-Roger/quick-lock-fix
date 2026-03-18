import { VilleData } from "./types";

export const guebwillerData: VilleData = {
  nom: "Guebwiller",
  slug: "serrurier-guebwiller",
  codePostal: "68500",
  population: "11 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Guebwiller (68500) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Guebwiller disponible 24h/24 et 7j/7. Ouverture serrures anciennes, porte blindée, urgence. Intervention en 30-40 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Guebwiller (68500) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-ville historique", "Murbach", "Quartier Gare",
    "Lautenbach", "Zone pavillonnaire", "Quartier des Fleurs"
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
      question: "Quel est le délai d'intervention d'un serrurier à Guebwiller 68500 ?",
      answer: "Notre délai moyen à Guebwiller est de 30 à 40 minutes depuis l'agglomération mulhousienne. Guebwiller étant situé à environ 25 kilomètres de Mulhouse, nous maintenons des délais compétitifs grâce à notre organisation. Nos techniciens interviennent dans tous les quartiers de Guebwiller, y compris le centre-ville historique et le secteur de Murbach.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Guebwiller ?",
      answer: "L'ouverture de porte à Guebwiller commence à 89€ TTC pour une serrure 1 point, 130€ TTC pour une serrure 3 points, 180€ TTC pour une porte blindée. Les bâtiments anciens du centre historique de Guebwiller peuvent nécessiter un outillage spécifique selon le modèle de serrure. Devis gratuit au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous la nuit et le week-end à Guebwiller ?",
      answer: "Oui, 24h/24, 7j/7 à Guebwiller. Guebwiller, sous-préfecture entourée de vignobles, accueille de nombreux visiteurs et événements liés à la Route des Vins. Aucun supplément de nuit ou week-end : les tarifs communiqués sont les tarifs facturés.",
    },
    {
      question: "Couvrez-vous Soultz-Haut-Rhin et Rouffach depuis Guebwiller ?",
      answer: "Oui, nous couvrons Soultz-Haut-Rhin (68360), Rouffach (68250), Bollwiller (68540), Pulversheim (68840) et Cernay (68700) depuis Guebwiller. Ces communes font partie de notre zone d'intervention du sud Haut-Rhin, avec des délais adaptés à chaque localisation.",
    },
    {
      question: "Êtes-vous agréé assurance habitation à Guebwiller ?",
      answer: "Oui. Nos factures détaillées sont conformes aux exigences des assureurs. Après sinistre à Guebwiller, vous recevez un document complet pour votre dossier de remboursement, incluant la description des travaux et les références des pièces posées.",
    },
    {
      question: "Intervenez-vous après un cambriolage à Guebwiller ?",
      answer: "Oui, intervention prioritaire après effraction à Guebwiller. Guebwiller, avec son patrimoine architectural et ses maisons alsaciennes de caractère, peut voir ses logements ciblés. Nous intervenons en urgence pour sécuriser les accès et vous conseillons sur les solutions préventives adaptées au bâti ancien.",
    },
    {
      question: "Savez-vous intervenir sur les serrures anciennes à Guebwiller ?",
      answer: "Oui, c'est l'une de nos spécialités. Le centre historique de Guebwiller abrite de nombreuses maisons alsaciennes des XVIIIe et XIXe siècles avec des serrures à gorge, des cylindres non normalisés ou des systèmes anciens difficiles à trouver en stock. Nos techniciens disposent de l'outillage et du savoir-faire pour intervenir sur ces configurations sans endommager les portes en bois de caractère.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Guebwiller ?",
      answer: "À Guebwiller comme ailleurs, méfiez-vous des tarifs d'appel irréalistes (39€, 49€) qui explosent une fois le technicien sur place. Exigez un devis écrit, vérifiez le SIRET. Chez Albert Serrurerie : tarifs publics, devis gratuit, accord écrit obligatoire avant tout travail.",
    },
  ],

  villesVoisines: [
    { nom: "Soultz-Haut-Rhin", cp: "68360", slug: "serrurier-soultz-haut-rhin" },
    { nom: "Rouffach", cp: "68250", slug: "serrurier-rouffach" },
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Bollwiller", cp: "68540", slug: "serrurier-bollwiller" },
    { nom: "Pulversheim", cp: "68840", slug: "serrurier-pulversheim" },
    { nom: "Cernay", cp: "68700", slug: "serrurier-cernay" },
  ],

  seoBlock1: `Guebwiller, sous-préfecture du Haut-Rhin et ville emblématique de la Route des Vins d'Alsace, est une cité d'art et d'histoire qui conjugue richesse patrimoniale et dynamisme économique. Avec 11 000 habitants, Guebwiller est le centre urbain naturel du sud de l'arrondissement, entourée par les vignobles des Grands Crus (Kitterlé, Saering, Spiegel, Kessler) et dominée par les contreforts vosgiens du Florival. Cette situation géographique et ce patrimoine exceptionnel font de Guebwiller une ville dont le parc immobilier présente des caractéristiques uniques en matière de serrurerie.

Albert Serrurerie est votre serrurier de confiance à Guebwiller 68500. Nous intervenons dans l'ensemble des quartiers de la commune : Centre-ville historique, Murbach, Quartier Gare, Lautenbach, Zone pavillonnaire et Quartier des Fleurs. Le centre-ville historique de Guebwiller concentre un patrimoine architectural remarquable : l'église Notre-Dame, l'église Saint-Léger, l'église des Dominicains et de nombreux hôtels particuliers des XVIIIe et XIXe siècles témoignent du passé prospère de la ville. Ces bâtiments, pour beaucoup encore habités, disposent de serrures anciennes qui nécessitent une expertise spécifique.

Les serrures vétustes sont en effet une réalité courante à Guebwiller : cylindres non normalisés, serrures à gorge du XIXe siècle, systèmes à clé plate sur portes en chêne massif — autant de configurations qui demandent à la fois le bon outillage et le bon savoir-faire. Nos techniciens sont formés à intervenir sur ces équipements anciens sans abîmer le bâti de caractère, en proposant systématiquement des solutions d'adaptation modernes compatibles avec les portes d'époque.

Nos équipes sont disponibles 24 heures sur 24, 7 jours sur 7 à Guebwiller. Depuis notre base dans l'agglomération mulhousienne, nous garantissons des délais d'intervention de 30 à 40 minutes. Que vous soyez propriétaire d'une maison alsacienne du centre historique ou habitant d'un pavillon de la Zone pavillonnaire, nous intervenons avec la même réactivité et les mêmes exigences de qualité.`,

  seoBlock2: `L'intervention sur le patrimoine bâti ancien de Guebwiller requiert des compétences que tous les serruriers ne maîtrisent pas. Les portes en bois massif du centre historique, les serrures enchâssées dans des ouvrages de menuiserie anciens, les cylindres en bronze ou en laiton des hôtels particuliers — autant de configurations spécifiques où une intervention maladroite peut causer des dégâts irréparables et coûteux.

Albert Serrurerie s'est doté des compétences et du matériel nécessaires pour intervenir en douceur sur le patrimoine bâti guebwillerien. Nos techniciens maîtrisent les techniques d'ouverture non destructive adaptées aux serrures anciennes, ce qui permet dans la grande majorité des cas de préserver intégralement la porte et la serrure d'origine. Lorsqu'un remplacement s'avère nécessaire, nous proposons des solutions modernes compatibles avec les contraintes architecturales des bâtiments anciens.

Guebwiller, comme beaucoup de sous-préfectures de taille moyenne, est une ville où les alternatives en matière de serrurerie d'urgence sont limitées, ce qui la rend vulnérable aux pratiques frauduleuses des plateformes nationales. Ces opérateurs affichent des tarifs d'appel irréalistes sur internet — 39€, 49€ — pour facturer ensuite plusieurs centaines d'euros, profitant de l'absence d'alternatives locales visibles. Chez Albert Serrurerie, nous combattons ces pratiques par la transparence : tarifs publics, devis gratuit, accord écrit obligatoire.

Nous travaillons avec les meilleures marques — Fichet, Vachette, Bricard, Mul-T-Lock — et chaque pièce posée est neuve et garantie. Pour les propriétaires de biens anciens à Guebwiller, nous proposons des conseils personnalisés pour sécuriser les logements patrimoniaux sans dénaturer leur caractère. Appelez le 03 74 47 47 93 pour un devis gratuit ou pour toute urgence de serrurerie à Guebwiller et dans le Florival.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.21!3d47.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479183af4e2c2c1%3A0x40a5fb99a3b960!2sGuebwiller%2C%2068500!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
