import { VilleData } from "./types";

export const colmarData: VilleData = {
  nom: "Colmar",
  slug: "serrurier-colmar",
  codePostal: "68000",
  population: "70 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Colmar (68000) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Colmar disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. Appelez maintenant.",
  h1: "Serrurier à Colmar (68000) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre historique", "Petite Venise", "Ladhof", "Maraîchers",
    "Saint-Joseph", "Europe", "Florimont", "Mittelharth",
    "Ouest", "Sud", "Cavalerie", "Saint-Antoine"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée ou verrouillée, nous intervenons sans dégât en moins de 30 minutes à Colmar.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Changement de serrure",
      description: "Remplacement de tout type de serrure : cylindre européen, multipoints, serrure en applique à Colmar.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour sécuriser votre domicile à Colmar.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Colmar.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité : Mul-T-Lock, Fichet, Vachette à Colmar.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Colmar ?",
      answer: "Notre délai moyen d'intervention à Colmar est de 20 à 30 minutes, quel que soit le quartier. Que vous soyez dans le centre historique, à Ladhof, aux Maraîchers ou dans le quartier Europe, un technicien de proximité est disponible pour intervenir rapidement. Nous disposons de serruriers répartis stratégiquement sur l'agglomération colmarienne pour garantir cette réactivité, y compris la nuit et les jours fériés.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Colmar ?",
      answer: "Le tarif d'une ouverture de porte à Colmar dépend du type de serrure. Pour une serrure simple (1 point), le tarif commence à 89€ TTC. Pour une serrure 3 points, comptez à partir de 130€ TTC. L'ouverture d'une porte blindée débute à 180€ TTC. Un devis précis et gratuit vous est systématiquement communiqué par téléphone avant toute intervention, sans engagement de votre part.",
    },
    {
      question: "Intervenez-vous la nuit à Colmar ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Colmar et dans tout le Haut-Rhin. Les urgences de serrurerie ne respectent pas les horaires de bureau : porte claquée à 3h du matin, effraction un dimanche, clé cassée un jour férié… Nous répondons à chaque appel sans exception. Aucun supplément caché n'est appliqué, les tarifs annoncés sont les tarifs facturés.",
    },
    {
      question: "Couvrez-vous tous les quartiers de Colmar ?",
      answer: "Absolument. Nous intervenons dans tous les quartiers de Colmar sans exception : centre historique, Petite Venise, Ladhof, Maraîchers, Saint-Joseph, Europe, Florimont, Mittelharth, Ouest, Sud, Cavalerie et Saint-Antoine. Nous couvrons également les communes limitrophes comme Horbourg-Wihr, Wintzenheim, Ingersheim, Turckheim et Houssen.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Colmar ?",
      answer: "Pour éviter les arnaques, plusieurs réflexes s'imposent. Exigez toujours un devis détaillé avant le début des travaux. Vérifiez que le serrurier est inscrit à la Chambre des Métiers d'Alsace et qu'il dispose d'un numéro SIRET vérifiable. Méfiez-vous des tarifs anormalement bas au téléphone qui explosent une fois sur place. Chez Albert Serrurerie, nous affichons nos tarifs publiquement, nous fournissons un devis gratuit avant chaque intervention et nous ne commençons jamais les travaux sans votre accord écrit.",
    },
    {
      question: "Acceptez-vous les remboursements assurance habitation à Colmar ?",
      answer: "Oui, nous travaillons régulièrement avec les assurances habitation (Groupama, Crédit Mutuel, MMA, AXA, Allianz, MAIF…). Après chaque intervention, nous vous remettons une facture détaillée conforme aux exigences des compagnies d'assurance, incluant le descriptif précis des travaux réalisés, les références des pièces installées et les photos si nécessaire. Ce document vous permet d'obtenir un remboursement rapide auprès de votre assureur.",
    },
    {
      question: "Faut-il une pièce d'identité pour une ouverture de porte à Colmar ?",
      answer: "Oui, c'est une obligation légale. Pour toute ouverture de porte, nous demandons obligatoirement une pièce d'identité en cours de validité (carte d'identité, passeport ou titre de séjour) ainsi qu'un justificatif de domicile (quittance de loyer, facture EDF, avis d'imposition). Cette vérification protège les occupants légitimes du logement. En cas de locataire sans justificatif sur place, nous pouvons contacter le propriétaire ou le bailleur pour confirmation.",
    },
    {
      question: "Proposez-vous des portes blindées à Colmar ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P (BP1, BP2, BP3) adaptées aux appartements et maisons de Colmar. L'installation est réalisée par nos techniciens qualifiés, généralement en une demi-journée. Les tarifs débutent à 890€ TTC pose comprise pour un bloc-porte blindé d'entrée de gamme. Nous proposons également le blindage de porte existante, une solution plus économique à partir de 490€ TTC.",
    },
  ],

  villesVoisines: [
    { nom: "Horbourg-Wihr", cp: "68180", slug: "serrurier-horbourg-wihr" },
    { nom: "Wintzenheim", cp: "68920", slug: "serrurier-wintzenheim" },
    { nom: "Ingersheim", cp: "68040", slug: "serrurier-ingersheim" },
    { nom: "Turckheim", cp: "68230", slug: "serrurier-turckheim" },
    { nom: "Houssen", cp: "68125", slug: "serrurier-houssen" },
    { nom: "Sainte-Croix-en-Plaine", cp: "68127", slug: "serrurier-sainte-croix-en-plaine" },
  ],

  seoBlock1: `Colmar, préfecture du Haut-Rhin et capitale des vins d'Alsace, compte plus de 70 000 habitants au cœur d'une agglomération de 130 000 personnes. Cette ville au patrimoine architectural exceptionnel, célèbre pour sa Petite Venise et ses maisons à colombages, abrite un centre historique dense où les besoins en serrurerie sont permanents.

Albert Serrurerie est votre serrurier de confiance à Colmar. Nous intervenons dans l'ensemble de l'agglomération colmarienne, du centre historique aux quartiers résidentiels de Ladhof, en passant par les Maraîchers, Saint-Joseph, le quartier Europe, Florimont, Mittelharth, les secteurs Ouest et Sud, la Cavalerie et Saint-Antoine.

Nos techniciens qualifiés sont disponibles 24 heures sur 24, 7 jours sur 7, pour répondre à toutes vos urgences de serrurerie. Porte claquée en sortant de votre appartement dans le centre historique ? Clé perdue après une visite au Musée Unterlinden ? Tentative d'effraction dans votre maison à Ladhof en pleine nuit ? Nous intervenons systématiquement en moins de 30 minutes, quel que soit le quartier de Colmar.

Notre connaissance approfondie de la ville nous permet d'optimiser nos trajets et de vous garantir les meilleurs délais d'intervention. Chaque technicien dispose d'un véhicule entièrement équipé avec le matériel nécessaire pour traiter 95% des situations sur place, sans avoir à revenir chercher des pièces. Cette organisation logistique nous distingue des dépanneurs occasionnels et garantit une intervention complète dès le premier passage.

Que vous soyez propriétaire, locataire, syndic de copropriété ou gérant de commerce à Colmar, nous adaptons notre intervention à votre situation. Les résidents des immeubles anciens du centre historique comme les habitants des pavillons de Ladhof ou des résidences récentes du quartier Europe bénéficient du même niveau de service et des mêmes tarifs transparents. La densité du bâti ancien colmarien, avec ses portes d'entrée en bois massif et ses serrures traditionnelles, requiert un savoir-faire spécifique que nos artisans maîtrisent parfaitement.`,

  seoBlock2: `Choisir Albert Serrurerie à Colmar, c'est faire le choix d'un artisan serrurier local, déclaré et inscrit à la Chambre des Métiers d'Alsace. Contrairement aux plateformes téléphoniques nationales qui sous-traitent à des intervenants non qualifiés, nous sommes une entreprise de proximité qui engage sa réputation sur chaque intervention.

Le secteur de la serrurerie d'urgence à Colmar, comme dans toute la France, souffre malheureusement de pratiques frauduleuses. Des sociétés basées hors de la région annoncent des tarifs d'appel de 39€ ou 49€ au téléphone, pour facturer ensuite 500€ à 1 500€ une fois sur place, profitant de la vulnérabilité des personnes en situation d'urgence. Chez Albert Serrurerie, nous combattons ces pratiques par la transparence totale.

Nos tarifs sont publics et consultables sur ce site. Le devis est systématiquement communiqué avant le début des travaux, par téléphone pour les interventions standard, et sur place pour les cas complexes. Nous ne débutons jamais une intervention sans votre accord explicite sur le montant. Si le tarif ne vous convient pas, vous êtes libre de refuser sans frais — seul le déplacement de 49,50€ TTC reste dû si le technicien s'est déplacé.

Nos certifications et partenariats témoignent de notre sérieux professionnel. Nous travaillons exclusivement avec des marques de serrurerie reconnues : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, Picard, ISEO. Chaque pièce installée est neuve, certifiée et couverte par la garantie fabricant. Nos interventions sont garanties et nous assurons un service après-vente réactif.

Colmar, en tant que ville touristique majeure d'Alsace et carrefour économique du Haut-Rhin, connaît une activité soutenue toute l'année. Les marchés de Noël, les festivals, la saison viticole attirent des millions de visiteurs, ce qui génère des besoins spécifiques en sécurisation des commerces et des hébergements. Nous proposons des audits de sécurité gratuits pour évaluer la résistance de vos accès et vous recommander les améliorations pertinentes : serrures multipoints, cylindres haute sécurité, portes blindées certifiées A2P, cornières anti-pince, protège-cylindres.

Faire appel à Albert Serrurerie, c'est la garantie d'un travail propre, durable et au juste prix. Plus de 2 500 interventions réalisées dans le Haut-Rhin, un taux de satisfaction client de 98%, et une note moyenne de 4.8/5 sur Google — notre réputation parle d'elle-même.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43000!2d7.35!3d48.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916945e0f10d3d%3A0xa1bfb56e3e6e5e0!2sColmar!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
