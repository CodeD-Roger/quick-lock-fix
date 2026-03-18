import { VilleData } from "./types";

export const ribeauvilleData: VilleData = {
  nom: "Ribeauvillé",
  slug: "serrurier-ribeauville",
  codePostal: "68150",
  population: "5 000",
  departement: "Haut-Rhin (68)",
  region: "Alsace",
  metaTitle: "Serrurier Ribeauvillé (68150) – Urgence 24h/7j | Albert Serrurerie",
  metaDescription: "Serrurier à Ribeauvillé disponible 24h/24. Ouverture de porte, serrures anciennes, porte blindée. Intervention en 30 min. Devis gratuit. 03 74 47 47 93.",
  h1: "Serrurier à Ribeauvillé (68150) — Urgence 24h/24, 7j/7",

  quartiers: [
    "Centre historique", "Quartier des Bouchers", "Ville basse",
    "Ville haute", "Zone pavillonnaire", "Route des Vins"
  ],

  interventions: [
    {
      titre: "Ouverture de porte",
      description: "Porte claquée à Ribeauvillé ? Intervention sans dégât en moins de 30 minutes, centre médiéval et maisons alsaciennes inclus.",
      slug: "ouverture-de-porte",
      icon: "DoorOpen",
    },
    {
      titre: "Serrure alsacienne ancienne",
      description: "Spécialistes des serrures sur maisons médiévales, colombages du Moyen-Âge et portes classées de Ribeauvillé.",
      slug: "changement-de-serrure",
      icon: "KeyRound",
    },
    {
      titre: "Porte blindée",
      description: "Pose de portes blindées certifiées A2P pour les logements et résidences secondaires de Ribeauvillé.",
      slug: "porte-blindee",
      icon: "Shield",
    },
    {
      titre: "Mise en sécurité après cambriolage",
      description: "Intervention d'urgence 24h/24 pour sécuriser votre logement ou commerce après une effraction à Ribeauvillé.",
      slug: "mise-en-securite-apres-cambriolage",
      icon: "ShieldAlert",
    },
    {
      titre: "Cylindre haute sécurité",
      description: "Installation de cylindres certifiés haute sécurité adaptés aux portes historiques et modernes : Mul-T-Lock, Fichet, Vachette.",
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
      question: "Quel est le délai d'intervention d'un serrurier à Ribeauvillé ?",
      answer: "Notre délai moyen d'intervention à Ribeauvillé est de 25 à 35 minutes. Que vous soyez dans le centre historique, au Quartier des Bouchers, en Ville haute ou dans la zone pavillonnaire, un technicien intervient rapidement depuis Colmar ou Sélestat. Nous couvrons Ribeauvillé 24h/24, 7j/7, y compris pendant la haute saison touristique.",
    },
    {
      question: "Intervenez-vous sur les serrures des maisons médiévales de Ribeauvillé ?",
      answer: "Oui, c'est l'une de nos spécialités. Ribeauvillé est l'une des cités médiévales les mieux conservées d'Alsace, avec ses maisons à colombages du XVe au XVIIIe siècle, ses portes en chêne massif et ses serrures d'époque. Nos techniciens maîtrisent les serrures à gorge, les cylindres anciens non normalisés et les entrées hors-standard. Nous intervenons sans abîmer le bâti et pouvons adapter des cylindres modernes haute sécurité aux portes historiques.",
    },
    {
      question: "Combien coûte l'ouverture d'une porte à Ribeauvillé ?",
      answer: "Le tarif commence à 89€ TTC pour une serrure simple à 1 point. Pour une serrure 3 points, à partir de 130€ TTC. Pour une porte blindée, à partir de 180€ TTC. Les bâtiments anciens du centre médiéval peuvent nécessiter un outillage spécifique. Un devis précis et gratuit est communiqué avant toute intervention au 03 74 47 47 93.",
    },
    {
      question: "Intervenez-vous pour les résidences secondaires à Ribeauvillé ?",
      answer: "Oui. Ribeauvillé attire de nombreux propriétaires de résidences secondaires, notamment des acquéreurs de maisons alsaciennes de charme dans le centre médiéval. Nous intervenons pour ces propriétaires qui se retrouvent bloqués lors de leur visite, et proposons des solutions de sécurisation adaptées aux logements occupés saisonnièrement : cylindres haute sécurité, serrures multipoints, portes blindées.",
    },
    {
      question: "Couvrez-vous les communes de la Route des Vins autour de Ribeauvillé ?",
      answer: "Oui, depuis Ribeauvillé nous intervenons à Colmar (68000), Sélestat (67600), Riquewihr (68340), Bergheim (68750), Guebwiller (68500) et Wintzenheim (68920). Toute la Route des Vins d'Alsace dans le secteur nord du Haut-Rhin est couverte dans des délais raisonnables.",
    },
    {
      question: "Peut-on installer une porte blindée dans un bâtiment classé à Ribeauvillé ?",
      answer: "Oui, sous certaines conditions. Pour les bâtiments soumis à des servitudes patrimoniales ou à l'avis des Architectes des Bâtiments de France, nous accompagnons les démarches de validation architecturale. Nous proposons des blocs-portes blindés dans des finitions bois naturel ou laqué qui respectent le caractère des bâtiments anciens tout en offrant une protection certifiée A2P.",
    },
    {
      question: "Travaillez-vous pendant le marché de Noël et la saison touristique à Ribeauvillé ?",
      answer: "Oui, Albert Serrurerie intervient 365 jours par an, 24h/24. Ribeauvillé étant une destination touristique majeure de la Route des Vins, les besoins en serrurerie d'urgence sont élevés en saison. Nos équipes sont disponibles en permanence au 03 74 47 47 93, y compris pendant les marchés de Noël et les grands week-ends viticoles.",
    },
    {
      question: "Comment éviter les arnaques de serrurier à Ribeauvillé ?",
      answer: "Exigez toujours un devis détaillé avant le début des travaux. Vérifiez l'inscription à la Chambre des Métiers d'Alsace et le numéro SIRET. Méfiez-vous des tarifs anormalement bas au téléphone. Chez Albert Serrurerie, nos tarifs sont publics, le devis est gratuit, et nous ne commençons jamais les travaux sans votre accord explicite.",
    },
  ],

  villesVoisines: [
    { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
    { nom: "Guebwiller", cp: "68500", slug: "serrurier-guebwiller" },
    { nom: "Wintzenheim", cp: "68920", slug: "serrurier-wintzenheim" },
    { nom: "Rouffach", cp: "68250", slug: "serrurier-rouffach" },
    { nom: "Munster", cp: "68140", slug: "serrurier-munster" },
    { nom: "Soultz-Haut-Rhin", cp: "68360", slug: "serrurier-soultz-haut-rhin" },
  ],

  seoBlock1: `Ribeauvillé, cité médiévale de 5 000 habitants du Haut-Rhin, est l'une des communes les plus visitées de la Route des Vins d'Alsace. Dominée par trois châteaux forts en ruines — le Girsberg, le Saint-Ulrich et le Haut-Ribeaupierre — et parcourue de ruelles pavées bordées de maisons à colombages du XVe au XVIIIe siècle, Ribeauvillé est un joyau patrimonial qui attire chaque année des centaines de milliers de touristes. Cette concentration exceptionnelle de bâtiments anciens, combinée à une population de résidents permanents et de propriétaires de résidences secondaires, crée une demande spécifique en serrurerie d'urgence et en expertise des serrures anciennes.

Albert Serrurerie intervient dans l'ensemble de Ribeauvillé : centre historique, Quartier des Bouchers, Ville basse, Ville haute, Zone pavillonnaire et Route des Vins. Nos techniciens maîtrisent les spécificités architecturales des maisons médiévales ribeauvilloises — portes en chêne massif à panneaux sculptés, serrures à gorge du XVIIIe siècle, cylindres anciens aux entrées non normalisées, huisseries en pierre de taille. Ces configurations atypiques nécessitent un outillage spécialisé que nos équipes emportent systématiquement sur chaque intervention.

La forte proportion de résidences secondaires à Ribeauvillé — acquises par des amoureux de l'Alsace qui s'y rendent quelques semaines par an — crée des situations particulières : logements inoccupés qui voient leurs serrures se gripper, propriétaires bloqués lors de leur arrivée après un long trajet, besoins de sécurisation des biens en l'absence des propriétaires. Nous proposons des solutions adaptées à ces profils : cylindres haute sécurité anti-effraction, serrures multipoints, audits de sécurité à distance.

Nous sommes disponibles 24 heures sur 24, 7 jours sur 7. Porte claquée dans votre appartement du centre historique, clé cassée dans la serrure de votre maison de la Ville haute, effraction constatée sur votre local commercial de la Ville basse — nous intervenons en moins de 35 minutes depuis Colmar. Appelez-nous au 03 74 47 47 93.`,

  seoBlock2: `Ce qui distingue Albert Serrurerie à Ribeauvillé, c'est notre double expertise : les bâtiments médiévaux du centre historique classé et les logements modernes de la zone pavillonnaire. Intervenir sur une porte alsacienne du XVIIe siècle sans endommager les boiseries ni les ferronneries d'époque nécessite une formation spécifique et une approche respectueuse du patrimoine que nos techniciens ont acquise au fil de centaines d'interventions dans le Haut-Rhin.

La fréquentation touristique intense de Ribeauvillé — notamment pendant le marché de Noël, le festival Pfifferdaj et les week-ends viticoles — peut malheureusement attirer des plateformes téléphoniques peu scrupuleuses qui profitent de la vulnérabilité des visiteurs en situation d'urgence. Ces sociétés annoncent des tarifs d'appel de 39€ ou 49€ pour facturer 500€ à 1 200€ une fois sur place. Albert Serrurerie s'y oppose par la transparence totale : tarifs publics sur ce site, devis gratuit avant chaque intervention, aucun commencement de travaux sans votre accord écrit.

Nous accompagnons également les propriétaires de résidences secondaires à Ribeauvillé dans leurs projets de sécurisation. Une maison alsacienne de caractère dans le centre médiéval nécessite une approche sécuritaire compatible avec son architecture : nous recommandons des cylindres Mul-T-Lock ou Fichet adaptables aux entrées anciennes, des serrures multipoints discrètes, et des cornières anti-pince en finition forgée qui s'intègrent esthétiquement aux ferronneries d'époque.

Pour les bâtiments soumis à des servitudes des Architectes des Bâtiments de France — fréquentes dans le secteur patrimonial de Ribeauvillé — nous accompagnons les démarches de validation et proposons des solutions homologuées. Contactez-nous au 03 74 47 47 93. Marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, ISEO. Plus de 2 500 interventions dans le Haut-Rhin, 98% de satisfaction.`,

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21500!2d7.32!3d48.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916b00000000001%3A0x1!2sRibeauvill%C3%A9!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};
