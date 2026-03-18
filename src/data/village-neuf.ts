import { VilleData } from "./types";

export const villageNeufData: VilleData = {
  nom: "Village-Neuf",
  slug: "serrurier-village-neuf",
  codePostal: "68128",
  population: "4 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Village-Neuf (68128) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Village-Neuf disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Village-Neuf (68128) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre-village", "Bords du Rhin", "Zone pavillonnaire",
    "Quartier résidentiel", "Port Rhénan", "Zone frontalière"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Village-Neuf ? Intervention sans dégât en moins de 30 minutes, bords du Rhin et village inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure dans les maisons et pavillons de Village-Neuf.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements de Village-Neuf, commune frontalière.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Village-Neuf.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Village-Neuf ?",
      answer: "Notre délai moyen d'intervention à Village-Neuf est de 20 à 30 minutes. Le village est accessible rapidement depuis Saint-Louis et Huningue. Nos techniciens interviennent dans toute la commune — centre, bords du Rhin, zone pavillonnaire — 24h/24 et 7j/7.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Village-Neuf ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous pour les frontaliers à Village-Neuf ?",
      answer: "Oui. Village-Neuf, commune limitrophe de l'Allemagne (Weil am Rhein juste en face du pont), compte de nombreux frontaliers. Nous proposons des solutions de sécurisation adaptées : cylindres haute sécurité, serrures multipoints, portes blindées. Votre logement est protégé même pendant vos longues absences.",
    },
    {
      question: "Couvrez-vous les communes autour de Village-Neuf ?",
      answer: "Oui, depuis Village-Neuf nous intervenons à Saint-Louis (68300), Huningue (68330), Hésingue (68220), Blotzheim (68730), Bartenheim (68870) et Mulhouse (68100). Toute la zone frontalière est couverte.",
    },
    {
      question: "Travaillez-vous la nuit et le week-end à Village-Neuf ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7. Les urgences ne respectent pas les horaires. Nous répondons à chaque appel au 03 74 47 47 93 sans exception et sans supplément caché.",
    },
    {
      question: "Proposez-vous des portes blindées à Village-Neuf ?",
      answer: "Oui. Dans une commune frontalière comme Village-Neuf, une porte blindée A2P est un investissement particulièrement judicieux. Tarifs à partir de 890€ TTC pose comprise pour un bloc-porte blindé. Blindage de porte existante à partir de 490€ TTC.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Village-Neuf ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des prix trop bas. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
    {
      question: "Votre facture est-elle reconnue par les assurances habitation à Village-Neuf ?",
      answer: "Oui, chaque intervention donne lieu à une facture détaillée conforme aux exigences des assureurs, incluant le descriptif des travaux, les références des pièces posées et notre numéro SIRET. Nous travaillons avec tous les grands assureurs du Haut-Rhin.",
    },
  ],

  villesVoisines: [
    { nom: "Saint-Louis", cp: "68300", slug: "serrurier-saint-louis" },
    { nom: "Huningue", cp: "68330", slug: "serrurier-huningue" },
    { nom: "Hésingue", cp: "68220", slug: "serrurier-hesingue" },
    { nom: "Blotzheim", cp: "68730", slug: "serrurier-blotzheim" },
    { nom: "Bartenheim", cp: "68870", slug: "serrurier-bartenheim" },
    { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  ],

  seoBlock1: `Village-Neuf, commune de 4 000 habitants du Haut-Rhin, occupe une position géographique remarquable en bordure du Rhin, face à Weil am Rhein en Allemagne. Ce village transfrontalier fait partie de l'agglomération trinationale de Bâle et bénéficie d'une accessibilité exceptionnelle vers la Suisse et l'Allemagne. Son port rhénan et ses berges aménagées en font une commune agréable à vivre, prisée des frontaliers et des familles cherchant un cadre résidentiel calme à proximité des bassins d'emploi suisses et allemands.

Albert Serrurerie intervient dans l'ensemble de Village-Neuf : centre-village, Bords du Rhin, Zone pavillonnaire, Quartier résidentiel, Port Rhénan et Zone frontalière. Nos techniciens connaissent la géographie de cette commune et ses caractéristiques architecturales — principalement des maisons individuelles récentes et des pavillons modernes dotés de serrures et portes contemporaines.

La forte présence de frontaliers à Village-Neuf crée une réalité particulière pour la sécurité résidentielle. Les logements sont régulièrement inoccupés de longues heures, ce qui nécessite des solutions de sécurisation performantes. Nous proposons des équipements adaptés à ce profil : cylindres haute sécurité anti-effraction certifiés A2P, serrures multipoints résistantes aux tentatives de crochetage, et portes blindées qui constituent la protection la plus efficace contre les intrusions.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée en rentrant d'Allemagne ou de Suisse, serrure défaillante, effraction constatée — nous intervenons en moins de 30 minutes depuis Saint-Louis ou Huningue. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Village-Neuf, c'est notre compréhension des enjeux de sécurité spécifiques à cette commune frontalière. Village-Neuf, à quelques centaines de mètres de l'Allemagne, est dans une zone trinationale très dynamique qui implique des flux importants et une vigilance accrue. Nos recommandations de sécurisation sont calibrées pour ce contexte géographique particulier.

Comme dans toutes les communes frontalières du Haut-Rhin, Village-Neuf peut être ciblée par des sociétés de serrurerie peu scrupuleuses. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics sur ce site, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit.

Pour les résidents de Village-Neuf, nous proposons des audits de sécurité gratuits à domicile. Ces audits permettent d'évaluer la robustesse de vos accès et de recommander les investissements prioritaires. Les maisons individuelles récentes des lotissements de Village-Neuf sont souvent livrées avec des équipements d'entrée de gamme — remplacer le cylindre d'origine par un cylindre haute sécurité Mul-T-Lock ou Fichet est un geste simple et économique qui augmente considérablement la protection de votre domicile.

Contactez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.57!3d47.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b00000000008%3A0x8!2sVillage-Neuf!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
