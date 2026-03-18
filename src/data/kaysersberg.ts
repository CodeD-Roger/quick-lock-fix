import { VilleData } from "./types";

export const kaysersbergData: VilleData = {
  nom: "Kaysersberg",
  slug: "serrurier-kaysersberg",
  codePostal: "68240",
  population: "3 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Kaysersberg (68240) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Kaysersberg disponible 24h/24. Ouverture de porte, serrures médiévales, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Kaysersberg (68240) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre historique", "Quartier du Château", "Kaysersberg-Vignoble",
    "Zone pavillonnaire", "Route des Vins", "Kientzheim"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Kaysersberg ? Intervention sans dégât en moins de 30 minutes, centre médiéval et vignobles inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure médiévale et ancienne",
      description: "Spécialistes des serrures sur maisons du XVe siècle, portes classées et bâtiments historiques de Kaysersberg.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P compatibles avec les cadres anciens des logements de Kaysersberg.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement après une effraction à Kaysersberg.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité adaptés aux portes historiques : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Kaysersberg ?",
      answer: "Notre délai moyen d'intervention à Kaysersberg est de 25 à 35 minutes. Que vous soyez dans le centre historique, au Quartier du Château, à Kaysersberg-Vignoble ou à Kientzheim, un technicien intervient depuis Colmar ou Turckheim. Nous couvrons Kaysersberg 24h/24, 7j/7, y compris pendant la haute saison touristique.",
    },
    {
      question: "Intervenez-vous sur les serrures des maisons médiévales de Kaysersberg ?",
      answer: "Oui, c'est l'une de nos spécialités. Kaysersberg est l'un des plus beaux villages de France, avec des maisons remontant au XVe siècle, des portes en chêne massif et des serrures à gorge d'époque. Nos techniciens maîtrisent ces configurations atypiques et interviennent sans abîmer le bâti classé. Nous pouvons adapter des cylindres modernes haute sécurité aux entrées historiques tout en préservant l'esthétique.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Kaysersberg ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Les bâtiments anciens classés peuvent nécessiter un outillage spécifique. Un devis précis et gratuit vous est communiqué au 03 74 47 47 93 avant toute intervention.",
    },
    {
      question: "Intervenez-vous pour les résidences secondaires à Kaysersberg ?",
      answer: "Oui. Kaysersberg attire de nombreux propriétaires de résidences secondaires qui acquièrent des maisons alsaciennes de caractère dans ce village classé. Nous intervenons pour les propriétaires bloqués lors de leur visite et proposons des solutions de sécurisation adaptées aux logements inoccupés une partie de l'année.",
    },
    {
      question: "Couvrez-vous Kientzheim et Sigolsheim depuis Kaysersberg ?",
      answer: "Oui, Kaysersberg-Vignoble regroupe les communes de Kaysersberg, Kientzheim, Sigolsheim et Ammerschwihr. Nous couvrons l'ensemble de cette commune fusionnée dans les mêmes délais, ainsi que Turckheim (68230), Colmar (68000), Lapoutroie (68650) et Orbey (68370).",
    },
    {
      question: "Peut-on installer une porte blindée dans un bâtiment classé à Kaysersberg ?",
      answer: "Oui, sous certaines conditions. Pour les bâtiments soumis à des servitudes patrimoniales ou à l'avis des Architectes des Bâtiments de France, nous accompagnons les démarches nécessaires. Nous proposons des blocs-portes blindés dans des finitions bois qui respectent le caractère architectural tout en offrant une protection certifiée A2P.",
    },
    {
      question: "Travaillez-vous pendant la saison touristique à Kaysersberg ?",
      answer: "Oui, Albert Serrurerie intervient 365 jours par an, 24h/24. Kaysersberg est une destination touristique majeure de la Route des Vins — nous sommes présents à toute heure, y compris pendant les pics d'affluence estivaux et les marchés de Noël. Appelez-nous au 03 74 47 47 93.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Kaysersberg ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace. Méfiez-vous des tarifs trop bas annoncés au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord.",
    },
  ],

  villesVoisines: [
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Turckheim", cp: "68230", slug: "serrurier-turckheim" },
    { nom: "Lapoutroie", cp: "68650", slug: "serrurier-lapoutroie" },
    { nom: "Orbey", cp: "68370", slug: "serrurier-orbey" },
    { nom: "Wintzenheim", cp: "68920", slug: "serrurier-wintzenheim" },
    { nom: "Munster", cp: "68140", slug: "serrurier-munster" },
  ],

  seoBlock1: `Kaysersberg, l'un des plus beaux villages de France et ville natale du Prix Nobel de la Paix Albert Schweitzer, est un joyau médiéval de la Route des Vins d'Alsace. Avec ses maisons à colombages du XVe siècle, son château en ruine dominant le village, son pont fortifié sur la Weiss et ses ruelles pavées d'une beauté saisissante, Kaysersberg attire chaque année plus d'un million de visiteurs. Cette concentration de patrimoine architectural exceptionnel crée des besoins très spécifiques en serrurerie, notamment pour les portes en bois massif et les serrures historiques des maisons médiévales.

Albert Serrurerie intervient dans l'ensemble de Kaysersberg-Vignoble : centre historique, Quartier du Château, Zone pavillonnaire, Route des Vins, ainsi que dans les villages fusionnés de Kientzheim, Sigolsheim et Ammerschwihr. Nos techniciens maîtrisent les spécificités des maisons alsaciennes médiévales — portes à panneaux sculptés en chêne, serrures à gorge du XVe au XVIIIe siècle, cylindres aux entrées non normalisées — et disposent de l'outillage adapté pour intervenir sans endommager le bâti classé.

La forte présence de résidences secondaires à Kaysersberg crée des besoins particuliers. Des propriétaires venus de toute la France et d'Europe ont acquis des maisons alsaciennes dans ce village de carte postale, qu'ils occupent pendant les vacances et les week-ends. Ces logements inoccupés une grande partie de l'année sont exposés à des risques spécifiques : serrures qui se grippent, cylindres qui vieillissent, besoin de sécurisation renforcée. Nous proposons des solutions adaptées à ces profils de propriétaires.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre maison du centre historique, clé cassée dans la serrure de votre gîte de Kientzheim, effraction constatée sur votre propriété de Sigolsheim — nous intervenons en moins de 35 minutes depuis Colmar. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Kaysersberg, c'est notre expertise du patrimoine bâti médiéval alsacien et notre respect absolu des bâtiments classés. Intervenir sur une porte du XVe siècle dans l'un des plus beaux villages de France sans laisser la moindre trace, sans abîmer les boiseries ni les ferronneries d'époque, nécessite une formation spécifique et une approche artisanale que nos techniciens ont développée au fil des années.

La fréquentation touristique exceptionnelle de Kaysersberg — qui fait partie des villages les plus visités de France — peut malheureusement attirer des sociétés de serrurerie peu scrupuleuses qui profitent de la vulnérabilité des visiteurs et des propriétaires de résidences secondaires. Ces plateformes affichent des prix irréels pour facturer des sommes excessives. Chez Albert Serrurerie, nous garantissons la transparence totale : tarifs publics sur ce site, devis gratuit avant intervention, aucun commencement de travaux sans votre accord écrit.

Pour les propriétaires de maisons médiévales à Kaysersberg, nous proposons des audits de sécurité gratuits prenant en compte les contraintes architecturales et patrimoniales. Nous recommandons des solutions qui améliorent significativement le niveau de sécurité sans dénaturer l'authenticité des bâtiments : cylindres adaptables aux entrées anciennes, serrures à larder discrètes, condamnations renforcées compatibles avec les boiseries d'époque.

Contactez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction client, 4,8/5 sur Google.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.26!3d48.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917a0000000001%3A0x1!2sKaysersberg!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
