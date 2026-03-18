import { VilleData } from "./types";

export const ferretteData: VilleData = {
  nom: "Ferrette",
  slug: "serrurier-ferrette",
  codePostal: "68480",
  population: "900",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Ferrette (68480) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Ferrette disponible 24h/24. Ouverture de porte, serrures médiévales, porte blindée. Intervention rapide. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Ferrette (68480) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre médiéval", "Château de Ferrette", "Bourg bas",
    "Zone pavillonnaire", "Sundgau frontalier", "Hameau"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Ferrette ? Intervention rapide dans ce bourg médiéval du Sundgau alsacien.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure médiévale et ancienne",
      description: "Spécialistes des serrures sur maisons médiévales et bâtiments historiques de Ferrette.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P compatibles avec les cadres anciens de Ferrette.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Ferrette.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité adaptés aux portes historiques de Ferrette.",
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
      question: "Quel est le délai d'intervention à Ferrette ?",
      answer: "Notre délai d'intervention à Ferrette est de 35 à 50 minutes. Le bourg est accessible depuis Altkirch et Dannemarie. Sa position en lisière de Suisse et d'Allemagne ne ralentit pas notre intervention — nous couvrons Ferrette 24h/24, 7j/7.",
    },
    {
      question: "Intervenez-vous sur les serrures des maisons médiévales de Ferrette ?",
      answer: "Oui, c'est l'une de nos spécialités dans ce village. Ferrette, ancienne capitale du comté du même nom, possède un centre médiéval avec des maisons du XIVe au XVIIe siècle dont les portes et serrures sont souvent d'origine ou de facture ancienne. Nos techniciens interviennent sur ce patrimoine sans l'abîmer.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Ferrette ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Un devis gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Couvrez-vous les communes du Sundgau frontalier autour de Ferrette ?",
      answer: "Oui, depuis Ferrette nous intervenons à Altkirch (68130), Dannemarie (68210), Hirsingue (68137), Mulhouse (68100) et les communes frontalières du Sundgau. La proximité avec la Suisse et l'Allemagne ne nous empêche pas d'intervenir dans les meilleurs délais.",
    },
    {
      question: "Travaillez-vous la nuit à Ferrette ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Nous répondons à chaque appel au 03 74 47 47 93 sans exception.",
    },
    {
      question: "Proposez-vous des portes blindées à Ferrette ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P, y compris des modèles compatibles avec les cadres anciens du centre médiéval. Tarifs à partir de 890€ TTC pose comprise.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Ferrette ?",
      answer: "Demandez le numéro SIRET du serrurier et vérifiez qu'il est actif sur le site officiel sirene.fr. Un artisan qui refuse de communiquer son SIRET ou son inscription à la Chambre des Métiers est un signal d'alarme. Chez Albert Serrurerie, nos coordonnées complètes figurent sur chaque devis et chaque facture.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation ?",
      answer: "Oui. Le délai habituel de remboursement varie de 15 à 45 jours selon votre assureur. Pour optimiser ce délai, déclarez le sinistre le jour même et joignez notre facture à votre courrier. Elle inclut toutes les informations requises : nature des travaux, références des pièces posées, montant TTC et notre numéro SIRET.",
    },
  ],

  villesVoisines: [
    { nom: "Altkirch", cp: "68130", slug: "serrurier-altkirch" },
    { nom: "Dannemarie", cp: "68210", slug: "serrurier-dannemarie" },
    { nom: "Hirsingue", cp: "68137", slug: "serrurier-hirsingue" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
    { nom: "Illfurth", cp: "68720", slug: "serrurier-illfurth" },
    { nom: "Huningue", cp: "68330", slug: "serrurier-huningue" },
  ],

  seoBlock1: `Ferrette, bourg médiéval de 900 habitants du Haut-Rhin, est l'une des communes les plus historiques du Sundgau alsacien. Ancienne capitale du comté de Ferrette — l'un des plus anciens fiefs d'Alsace, dont les comtes ont joué un rôle majeur dans l'histoire de l'Alsace médiévale avant le rattachement à la maison des Habsbourg au XIVe siècle — le village perché domine la plaine du Sundgau depuis ses ruines de château. Cette position dominante et son patrimoine médiéval exceptionnel font de Ferrette un village touristique apprécié, avec un centre historique de grande qualité préservé.

Albert Serrurerie intervient dans l'ensemble de Ferrette : centre médiéval, secteur du Château, Bourg bas, Zone pavillonnaire et hameaux environnants. La particularité de Ferrette réside dans la coexistence de deux réalités immobilières très distinctes : un centre médiéval avec des maisons du XIVe au XVIIe siècle aux portes en bois massif et aux serrures souvent d'époque, et une zone résidentielle périphérique avec des constructions récentes dotées de systèmes de fermeture modernes. Nos techniciens maîtrisent ces deux univers.

La position de Ferrette à l'extrême sud du Haut-Rhin, à quelques kilomètres de la Suisse et non loin de l'Allemagne, en fait un lieu où les résidents ont parfois des difficultés à trouver des prestataires locaux réactifs. Albert Serrurerie couvre l'ensemble du Sundgau depuis sa base opérationnelle et assure des délais d'intervention acceptables même pour les communes les plus éloignées.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre maison médiévale, serrure défaillante, effraction constatée — nous intervenons depuis Altkirch. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Ferrette, c'est notre expertise du bâti médiéval du Sundgau alsacien. Les maisons du centre historique de Ferrette présentent des configurations de serrures uniques — portes en chêne massif de plusieurs siècles d'âge, serrures à gorge forgées, cylindres dans des entrées non normalisées. Intervenir sur ce patrimoine sans l'endommager nécessite des compétences spécifiques que nos techniciens ont développées au fil des interventions.

Ferrette, en tant que commune touristique et frontalière, peut être ciblée par des prestataires peu scrupuleux qui profitent de l'isolement relatif de la commune. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics, devis gratuit avant intervention, aucun commencement de travaux sans votre accord. Nous sommes une entreprise inscrite à la Chambre des Métiers d'Alsace.

Pour les propriétaires de maisons médiévales à Ferrette, nous proposons des audits de sécurité gratuits prenant en compte les contraintes patrimoniales et les préconisations des Architectes des Bâtiments de France pour les bâtiments classés ou situés en zone protégée. Nos solutions respectent l'authenticité architecturale tout en offrant un niveau de protection moderne.

Appelez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.31!3d47.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a000000000b%3A0xb!2sFerrette!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
