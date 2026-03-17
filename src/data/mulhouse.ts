import { VilleData } from "./types";

export const mulhouseData: VilleData = {
  nom: "Mulhouse",
  slug: "serrurier-mulhouse",
  codePostal: "68100",
  population: "109 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Mulhouse (68100) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Mulhouse disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 30 min. Devis gratuit. Appelez maintenant.",
  h1: "Serrurier à Mulhouse (68100) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Bourtzwiller", "Dornach", "Rebberg", "Cronenbourg", "Coteaux",
    "Vieux-Croix-d'Argent", "Franklin", "Nordfeld", "Belvédère",
    "Cité Briand", "Hautepierre", "Centre-ville"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée ou fermée à clé, nous intervenons sans dégât en moins de 30 minutes à Mulhouse.",
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
      description: "Pose de portes blindées certifiées A2P pour sécuriser votre domicile à Mulhouse.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence pour sécuriser votre logement après une effraction à Mulhouse.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Mulhouse ?",
      answer: "Notre délai moyen d'intervention à Mulhouse est de 20 à 30 minutes, quel que soit le quartier. Que vous soyez au Rebberg, à Bourtzwiller, à Dornach ou en centre-ville, un technicien de proximité est disponible pour intervenir rapidement. Nous disposons de serruriers répartis stratégiquement sur l'agglomération mulhousienne pour garantir cette réactivité, y compris la nuit et les jours fériés.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Mulhouse ?",
      answer: "Le tarif d'une ouverture de porte à Mulhouse dépend du type de serrure. Pour une serrure simple (1 point), le tarif commence à 89€ TTC. Pour une serrure 3 points, comptez à partir de 130€ TTC. L'ouverture d'une porte blindée débute à 180€ TTC. Un devis précis et gratuit vous est systématiquement communiqué par téléphone avant toute intervention, sans engagement de votre part.",
    },
    {
      question: "Intervenez-vous la nuit à Mulhouse ?",
      answer: "Oui, Albert Serrurerie intervient 24 heures sur 24, 7 jours sur 7 à Mulhouse et dans tout le Haut-Rhin. Les urgences de serrurerie ne respectent pas les horaires de bureau : porte claquée à 3h du matin, effraction un dimanche, clé cassée un jour férié… Nous répondons à chaque appel sans exception. Aucun supplément caché n'est appliqué, les tarifs annoncés sont les tarifs facturés.",
    },
    {
      question: "Couvrez-vous tous les quartiers de Mulhouse ?",
      answer: "Absolument. Nous intervenons dans tous les quartiers de Mulhouse sans exception : Bourtzwiller, Dornach, Rebberg, Cronenbourg, Coteaux, Franklin, Nordfeld, Belvédère, Cité Briand, Hautepierre, Vieux-Croix-d'Argent et le centre-ville. Nous couvrons également les communes limitrophes comme Illzach, Wittenheim, Kingersheim, Riedisheim et Pfastatt.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Mulhouse ?",
      answer: "Pour éviter les arnaques, plusieurs réflexes s'imposent. Exigez toujours un devis détaillé avant le début des travaux. Vérifiez que le serrurier est inscrit à la Chambre des Métiers d'Alsace et qu'il dispose d'un numéro SIRET vérifiable. Méfiez-vous des tarifs anormalement bas au téléphone qui explosent une fois sur place. Chez Albert Serrurerie, nous affichons nos tarifs publiquement, nous fournissons un devis gratuit avant chaque intervention et nous ne commençons jamais les travaux sans votre accord écrit.",
    },
    {
      question: "Acceptez-vous les remboursements assurance habitation à Mulhouse ?",
      answer: "Oui, nous travaillons régulièrement avec les assurances habitation (Groupama, Crédit Mutuel, MMA, AXA, Allianz, MAIF…). Après chaque intervention, nous vous remettons une facture détaillée conforme aux exigences des compagnies d'assurance, incluant le descriptif précis des travaux réalisés, les références des pièces installées et les photos si nécessaire. Ce document vous permet d'obtenir un remboursement rapide auprès de votre assureur.",
    },
    {
      question: "Faut-il une pièce d'identité pour une ouverture de porte à Mulhouse ?",
      answer: "Oui, c'est une obligation légale. Pour toute ouverture de porte, nous demandons obligatoirement une pièce d'identité en cours de validité (carte d'identité, passeport ou titre de séjour) ainsi qu'un justificatif de domicile (quittance de loyer, facture EDF, avis d'imposition). Cette vérification protège les occupants légitimes du logement. En cas de locataire sans justificatif sur place, nous pouvons contacter le propriétaire ou le bailleur pour confirmation.",
    },
    {
      question: "Proposez-vous des portes blindées à Mulhouse ?",
      answer: "Oui, nous proposons une gamme complète de portes blindées certifiées A2P (BP1, BP2, BP3) adaptées aux appartements et maisons de Mulhouse. L'installation est réalisée par nos techniciens qualifiés, généralement en une demi-journée. Les tarifs débutent à 890€ TTC pose comprise pour un bloc-porte blindé d'entrée de gamme. Nous proposons également le blindage de porte existante, une solution plus économique à partir de 490€ TTC.",
    },
  ],

  villesVoisines: [
    { nom: "Illzach", cp: "68110", slug: "serrurier-illzach" },
    { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
    { nom: "Kingersheim", cp: "68260", slug: "serrurier-kingersheim" },
    { nom: "Riedisheim", cp: "68400", slug: "serrurier-riedisheim" },
    { nom: "Pfastatt", cp: "68120", slug: "serrurier-pfastatt" },
    { nom: "Lutterbach", cp: "68460", slug: "serrurier-lutterbach" },
  ],

  seoBlock1: `Mulhouse, deuxième ville d'Alsace avec plus de 109 000 habitants, est un carrefour urbain dynamique situé au cœur du Haut-Rhin. Cette ville industrielle historique, à la croisée des frontières allemande et suisse, présente un tissu urbain dense et varié qui génère des besoins constants en serrurerie d'urgence.

Albert Serrurerie est votre serrurier de confiance à Mulhouse. Nous intervenons dans l'ensemble de l'agglomération mulhousienne, du centre-ville historique aux quartiers résidentiels du Rebberg, en passant par Bourtzwiller, Dornach, Cronenbourg, les Coteaux, Franklin, Nordfeld, le Belvédère, la Cité Briand, Hautepierre et le Vieux-Croix-d'Argent.

Nos techniciens qualifiés sont disponibles 24 heures sur 24, 7 jours sur 7, pour répondre à toutes vos urgences de serrurerie. Porte claquée en rentrant chez vous après une soirée au centre-ville ? Clé cassée dans la serrure de votre appartement à Dornach un dimanche matin ? Tentative d'effraction dans votre maison au Rebberg en pleine nuit ? Nous intervenons systématiquement en moins de 30 minutes, quel que soit le quartier de Mulhouse.

Notre connaissance approfondie de la ville nous permet d'optimiser nos trajets et de vous garantir les meilleurs délais d'intervention. Chaque technicien dispose d'un véhicule entièrement équipé avec le matériel nécessaire pour traiter 95% des situations sur place, sans avoir à revenir chercher des pièces. Cette organisation logistique nous distingue des dépanneurs occasionnels et garantit une intervention complète dès le premier passage.

Que vous soyez propriétaire, locataire, syndic de copropriété ou gérant de commerce à Mulhouse, nous adaptons notre intervention à votre situation. Les résidents des immeubles anciens du centre-ville comme les habitants des pavillons du Rebberg ou des résidences récentes de Bourtzwiller bénéficient du même niveau de service et des mêmes tarifs transparents.`,

  seoBlock2: `Choisir Albert Serrurerie à Mulhouse, c'est faire le choix d'un artisan serrurier local, déclaré et inscrit à la Chambre des Métiers d'Alsace. Contrairement aux plateformes téléphoniques nationales qui sous-traitent à des intervenants non qualifiés, nous sommes une entreprise de proximité qui engage sa réputation sur chaque intervention.

Le secteur de la serrurerie d'urgence à Mulhouse, comme dans toute la France, souffre malheureusement de pratiques frauduleuses. Des sociétés basées hors de la région annoncent des tarifs d'appel de 39€ ou 49€ au téléphone, pour facturer ensuite 500€ à 1 500€ une fois sur place, profitant de la vulnérabilité des personnes en situation d'urgence. Chez Albert Serrurerie, nous combattons ces pratiques par la transparence totale.

Nos tarifs sont publics et consultables sur ce site. Le devis est systématiquement communiqué avant le début des travaux, par téléphone pour les interventions standard, et sur place pour les cas complexes. Nous ne débutons jamais une intervention sans votre accord explicite sur le montant. Si le tarif ne vous convient pas, vous êtes libre de refuser sans frais — seul le déplacement de 49,50€ TTC reste dû si le technicien s'est déplacé.

Nos certifications et partenariats témoignent de notre sérieux professionnel. Nous travaillons exclusivement avec des marques de serrurerie reconnues : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, Picard, ISEO. Chaque pièce installée est neuve, certifiée et couverte par la garantie fabricant. Nos interventions sont garanties et nous assurons un service après-vente réactif.

La proximité avec l'Allemagne et la Suisse fait de Mulhouse une ville cosmopolite où la sécurité des biens est une préoccupation majeure. Les taux de cambriolage dans certains quartiers imposent des solutions de sécurisation adaptées. Nous proposons des audits de sécurité gratuits pour évaluer la résistance de vos accès et vous recommander les améliorations pertinentes : serrures multipoints, cylindres haute sécurité, portes blindées certifiées A2P, cornières anti-pince, protège-cylindres.

Faire appel à Albert Serrurerie, c'est la garantie d'un travail propre, durable et au juste prix. Plus de 2 500 interventions réalisées dans le Haut-Rhin, un taux de satisfaction client de 98%, et une note moyenne de 4.8/5 sur Google — notre réputation parle d'elle-même.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43000!2d7.3!3d47.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b72f6e42417%3A0x40a5fb99a3b960!2sMulhouse!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
