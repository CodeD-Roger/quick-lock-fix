import { Link } from "react-router-dom";
import GuidePageLayout, { NeedHelp, TocItem, BreadcrumbItem } from "@/components/GuidePageLayout";

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

const tocItems: TocItem[] = [
  { id: "causes", title: "Pourquoi une porte claque ?" },
  { id: "techniques", title: "Techniques à essayer seul" },
  { id: "limites", title: "Quand ces techniques échouent" },
  { id: "forcer", title: "Pourquoi forcer est dangereux" },
  { id: "serrurier-68", title: "Faire appel à un serrurier dans le 68" },
  { id: "tarifs", title: "Tarifs d'ouverture de porte" },
  { id: "prevention", title: "Prévenir les portes claquées" },
  { id: "faq", title: "Questions fréquentes" },
];

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Accueil", url: "/" },
  { name: "Guides", url: undefined },
  { name: "Comment ouvrir une porte claquée" },
];

const faqItems = [
  {
    question: "Peut-on ouvrir une porte claquée sans abîmer la serrure ?",
    answer:
      "Oui, dans la grande majorité des cas. Un serrurier professionnel utilise des outils de crochetage non destructifs (crochet de serrurier, cartes de déverrouillage) qui permettent d'ouvrir sans aucune détérioration. La méthode destructive (perçage) n'est utilisée qu'en dernier recours, et uniquement si la serrure est trop complexe pour être crochetée.",
  },
  {
    question: "Combien de temps faut-il à un serrurier pour ouvrir une porte claquée ?",
    answer:
      "Pour une serrure 1 ou 2 points standard, le crochetage prend généralement 5 à 15 minutes une fois le technicien sur place. Une serrure 3 points ou multipoints nécessite davantage de temps : comptez 15 à 30 minutes. Le temps de déplacement s'ajoute selon votre localisation — dans l'agglomération mulhousienne, nous intervenons en 20 à 30 minutes.",
  },
  {
    question: "Combien coûte l'ouverture d'une porte claquée ?",
    answer:
      "Le tarif dépend du type de serrure : à partir de 89€ TTC pour une serrure 1 point simple, à partir de 130€ TTC pour une serrure 3 points, et à partir de 180€ TTC pour une porte blindée. Ces tarifs incluent le déplacement et la main d'œuvre. Un devis gratuit vous est communiqué avant toute intervention au 03 74 47 47 93.",
  },
  {
    question: "Peut-on appeler un serrurier la nuit pour une porte claquée ?",
    answer:
      "Oui. Albert Serrurerie est disponible 24 heures sur 24, 7 jours sur 7, y compris les nuits, week-ends et jours fériés. Le tarif nocturne n'inclut pas de supplément caché : le prix annoncé au téléphone est le prix que vous payez. Appelez le 03 74 47 47 93 à n'importe quelle heure.",
  },
  {
    question: "Mon assurance habitation rembourse-t-elle l'ouverture d'une porte claquée ?",
    answer:
      "Certains contrats d'assurance habitation incluent une garantie assistance ou une garantie dommages électriques et serrurerie qui couvre l'ouverture de porte. Vérifiez vos conditions générales. Albert Serrurerie remet une facture détaillée avec SIRET qui sert de justificatif pour votre dossier de remboursement.",
  },
  {
    question: "Que faire si ma porte est blindée et que je suis enfermé dehors ?",
    answer:
      "Une porte blindée ne signifie pas qu'elle est impossible à ouvrir pour un professionnel équipé. Appelez immédiatement le 03 74 47 47 93. Nos techniciens disposent du matériel adapté aux portes blindées certifiées A2P et à serrures multipoints. Le tarif pour ce type d'ouverture démarre à 180€ TTC.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Comment ouvrir une porte claquée : conseils d'un serrurier du 68",
    description:
      "Guide complet pour comprendre comment ouvrir une porte claquée. Techniques à essayer seul, risques à éviter, quand appeler un serrurier dans le Haut-Rhin.",
    author: { "@type": "Organization", name: "Albert Serrurerie" },
    publisher: {
      "@type": "Organization",
      name: "Albert Serrurerie",
      logo: {
        "@type": "ImageObject",
        url: "https://albert-serrurerie.com/favicon.ico",
      },
    },
    datePublished: "2024-01-15",
    dateModified: "2024-03-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://albert-serrurerie.com/comment-ouvrir-porte-claquee",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://albert-serrurerie.com/" },
      { "@type": "ListItem", position: 2, name: "Guides" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Comment ouvrir une porte claquée",
        item: "https://albert-serrurerie.com/comment-ouvrir-porte-claquee",
      },
    ],
  },
];

const CommentOuvrirPorteClaquee = () => {
  return (
    <GuidePageLayout
      metaTitle="Comment ouvrir une porte claquée sans serrurier | Albert Serrurerie 68"
      metaDescription="Porte claquée dans le Haut-Rhin ? Découvrez les techniques à essayer seul, les erreurs à éviter et quand appeler un serrurier professionnel. Intervention 20-30 min dans le 68."
      h1="Comment ouvrir une porte claquée : conseils d'un serrurier du 68"
      slug="comment-ouvrir-porte-claquee"
      breadcrumbItems={breadcrumbItems}
      tocItems={tocItems}
      schemas={schemas}
    >
      {/* ── Section 1 : Causes ── */}
      <section id="causes">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-0 mb-4">
          Pourquoi une porte claque — et pourquoi c'est si fréquent
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une porte claquée est l'une des situations les plus communes en serrurerie. Dans le Haut-Rhin, nos équipes
          interviennent plusieurs fois par semaine pour ce type de problème. Comprendre pourquoi cela arrive permet
          d'anticiper et, surtout, d'éviter de répéter l'erreur.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Le pêne dormant qui se verrouille automatiquement
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          La cause la plus fréquente est mécanique : votre serrure est équipée d'un pêne dormant à ressort
          (ou "pêne demi-tour") qui se verrouille dès que la porte se ferme. Ce mécanisme est présent sur la
          grande majorité des serrures d'entrée standard. Quand vous quittez votre logement en ayant oublié votre
          clé — ou quand le vent referme la porte derrière vous — le pêne s'enclenche automatiquement et vous
          vous retrouvez dehors sans recours immédiat.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          La clé oubliée à l'intérieur
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Situation classique : vous êtes sorti rapidement — pour sortir la poubelle, chercher le courrier, aller
          chercher un enfant sur le palier — et la porte s'est refermée avec vos clés à l'intérieur. Ce scénario
          concerne aussi bien les appartements en immeuble que les maisons individuelles. La présence des clés côté
          intérieur peut d'ailleurs compliquer certaines techniques de déverrouillage.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          La serrure bloquée par une défaillance mécanique
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une serrure ancienne, mal entretenue ou endommagée peut bloquer alors que vous avez la clé en main. Le
          barillet usé ne tourne plus, la clé ne rentre plus ou reste coincée dans le cylindre. Dans ce cas, c'est
          moins une "porte claquée" qu'une serrure défaillante — mais le résultat est identique : vous ne pouvez
          pas entrer.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          La clé cassée dans la serrure
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Les clés en métaux de mauvaise qualité, usées par des années d'utilisation ou soumises à un effort
          excessif, peuvent se casser dans le cylindre. Le tronçon restant bloque alors complètement le mécanisme.
          Tenter de l'extraire soi-même avec des pinces risque d'endommager définitivement le barillet.
        </p>
      </section>

      <NeedHelp context="Porte claquée dans le Haut-Rhin ? Nous intervenons en 20 à 30 minutes, 24h/24." />

      {/* ── Section 2 : Techniques ── */}
      <section id="techniques">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Techniques à essayer seul avant d'appeler un serrurier
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Avant de décrocher votre téléphone, quelques vérifications et tentatives simples peuvent vous éviter
          une intervention. Ces techniques fonctionnent dans des cas spécifiques et ne présentent pas de risque
          si elles sont appliquées correctement.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          1. Vérifier toutes les entrées possibles
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Avant tout, faites le tour complet de votre logement : fenêtres du rez-de-chaussée, porte de garage,
          accès jardin, porte de service, fenêtre de cave. Une ouverture non verrouillée résout le problème
          immédiatement sans aucun frais. C'est évident, mais dans le stress de la situation, cette étape est
          souvent négligée.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          2. Contacter un voisin ou le gardien d'immeuble
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Si vous vivez en appartement, le gardien ou le syndic peut parfois disposer d'un double de clé ou d'un
          passe-partout pour les parties communes. Un voisin de confiance auquel vous avez confié un double de clé
          est votre première ressource. Pensez également aux membres de votre famille qui pourraient en avoir un.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          3. La technique de la carte rigide (pêne à ressort uniquement)
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Cette technique, popularisée par les films, fonctionne <strong>uniquement sur les pênes demi-tour à
          ressort</strong> — jamais sur les serrures 3 points, multipoints, ou à pêne dormant. Elle consiste à
          glisser une carte rigide (carte de fidélité périmée, carte téléphonique) entre le bord de la porte et
          le dormant, au niveau du pêne. En inclinant la carte et en appuyant simultanément sur la porte, on
          peut parfois repousser le pêne et ouvrir.
        </p>
        <p className="text-[#334155] leading-relaxed mb-4">
          Cette méthode ne fonctionne que si le jeu entre le bord de porte et le dormant est suffisant, et si
          le pêne n'est pas bloqué par un dispositif anti-ouverture. Si votre serrure est certifiée A2P, elle
          intègre précisément des éléments qui rendent cette technique inefficace.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          4. Déverrouiller par l'intérieur via la boîte aux lettres
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Si vos clés sont à l'intérieur et visibles, et si votre porte dispose d'une boîte aux lettres large
          ou d'un passage suffisant, certains outils très fins permettent parfois d'atteindre la poignée ou la
          clé laissée sur le côté intérieur. Cette technique est extrêmement limitée en pratique et ne fonctionne
          que dans des configurations très spécifiques.
        </p>
      </section>

      {/* ── Section 3 : Limites ── */}
      <section id="limites">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Quand ces techniques ne fonctionnent pas
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          La réalité est que la plupart des portes d'entrée modernes résistent à ces tentatives d'ouverture
          bricolée. Voici les cas où toute tentative autonome est vouée à l'échec :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#334155] mb-6 pl-2">
          <li>
            <strong>Serrure 3 points ou multipoints :</strong> le mécanisme enclenche simultanément plusieurs
            pênes dans le dormant et le seuil. La technique de la carte est sans effet.
          </li>
          <li>
            <strong>Porte blindée :</strong> les renforts acier, les gonds anti-dégondage et les cylindres
            haute sécurité rendent toute tentative d'ouverture non professionnelle impossible.
          </li>
          <li>
            <strong>Serrure certifiée A2P :</strong> la certification A2P implique une résistance au crochetage
            de 5, 10 ou 15 minutes par des professionnels équipés. Une tentative amateur n'aboutira pas.
          </li>
          <li>
            <strong>Clé cassée dans le barillet :</strong> sans extracteur de clé spécifique, vous risquez
            d'enfoncer davantage le fragment et de bloquer définitivement le mécanisme.
          </li>
          <li>
            <strong>Serrure ancienne grippée :</strong> une serrure oxydée ou grippée ne répond pas aux
            techniques d'ouverture classiques et peut nécessiter un remplacement complet.
          </li>
        </ul>
        <p className="text-[#334155] leading-relaxed mb-4">
          Dans ces cas, chaque minute perdue à improviser est une minute de stress inutile et parfois une
          aggravation du problème. Contactez directement le{" "}
          <a href={PHONE_LINK} className="text-[#f97316] font-semibold hover:underline">
            {PHONE}
          </a>.
        </p>
      </section>

      {/* ── Section 4 : Forcer ── */}
      <section id="forcer">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Pourquoi forcer la porte est une mauvaise idée
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          La tentation de forcer la porte — avec un pied de biche, une perceuse ou simplement à l'épaule — est
          compréhensible dans un moment de stress. Mais les conséquences peuvent se révéler beaucoup plus
          coûteuses qu'une intervention de serrurier.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Les dégâts matériels sont souvent importants
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Forcer une porte endommage le cadre de porte, la gâche métallique, les charnières et parfois la porte
          elle-même. Sur une porte blindée, une tentative de forçage peut déformer le vantail et nécessiter
          son remplacement complet — un coût nettement supérieur à l'intervention d'un serrurier. Sur les portes
          en bois, l'éclat du chambranle est quasi inévitable.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Vous compromettez la sécurité de votre logement
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une porte forcée qui a été "réparée" à la va-vite — cadre recollé, gâche tordue replacée — offre une
          résistance considérablement réduite à une intrusion. Vous avez peut-être ouvert votre porte, mais vous
          avez également ouvert une brèche que n'importe qui peut exploiter. Sans compter que certains assureurs
          peuvent refuser une indemnisation en cas de cambriolage si la porte ne répond plus aux normes
          d'installation.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Le risque de blessure est réel
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Forcer une porte à l'épaule ou au pied peut provoquer des entorses, des fractures ou des blessures
          au dos. Les outils inadaptés (tournevis, pied de biche) glissent facilement et peuvent causer des
          coupures profondes. La serrurerie d'urgence existe précisément pour éviter ces situations.
        </p>
      </section>

      <NeedHelp context="Ne forcez pas votre porte. Appelez Albert Serrurerie — intervention propre, sans dégâts, 24h/24." />

      {/* ── Section 5 : Serrurier 68 ── */}
      <section id="serrurier-68">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Faire appel à un serrurier professionnel dans le Haut-Rhin (68)
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Albert Serrurerie couvre l'ensemble du Haut-Rhin pour les ouvertures de portes d'urgence. Nos
          techniciens sont basés dans l'agglomération mulhousienne et interviennent dans tout le département :
          Mulhouse, Colmar, Guebwiller, Thann, Altkirch, Cernay et leurs communes périphériques.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Ce que fait un serrurier lors d'une ouverture de porte
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          À son arrivée, le technicien évalue rapidement le type de serrure et choisit la technique la plus
          adaptée. Dans 80% des cas, il utilise des outils de crochetage non destructifs : crochet de serrurier,
          pick gun, ou décodeur de cylindre. L'ouverture est silencieuse, propre et rapide.
        </p>
        <p className="text-[#334155] leading-relaxed mb-4">
          Sur les serrures haute sécurité ou les portes blindées, des outils spécialisés permettent d'ouvrir
          sans perçage dans la plupart des cas. Le perçage du barillet — méthode destructive — n'est utilisé
          qu'en dernier recours absolu, quand le crochetage est impossible. Dans ce cas, le cylindre est
          remplacé immédiatement après l'ouverture.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Zones d'intervention prioritaires dans le 68
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Nous intervenons en priorité dans les secteurs suivants, avec un délai garanti de 20 à 30 minutes :
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-[#334155] mb-6 pl-2">
          <li>
            <Link to="/serrurier-mulhouse" className="text-[#f97316] hover:underline font-medium">
              Mulhouse (68100)
            </Link>{" "}
            et toute l'agglomération
          </li>
          <li>
            <Link to="/serrurier-colmar" className="text-[#f97316] hover:underline font-medium">
              Colmar (68000)
            </Link>{" "}
            et les communes du Rhin
          </li>
          <li>Guebwiller (68500) — Cernay (68700) — Thann (68800)</li>
          <li>Altkirch (68130) — Dannemarie (68210)</li>
          <li>Masevaux (68290) — Saint-Amarin (68550)</li>
          <li>Tous les villages du Sundgau, de la plaine d'Alsace et du piémont vosgien</li>
        </ul>

        <p className="text-[#334155] leading-relaxed mb-6">
          Pour les zones plus éloignées (vallée de Munster, secteur de Sainte-Marie-aux-Mines), le délai
          peut atteindre 45 à 60 minutes. Appelez-nous au{" "}
          <a href={PHONE_LINK} className="text-[#f97316] font-semibold hover:underline">
            {PHONE}
          </a>{" "}
          pour une estimation précise selon votre localisation.
        </p>

        <div className="rounded-xl bg-[#f0f9ff] border border-[#bae6fd] p-5 mb-6">
          <p className="font-bold text-[#1a2c4e] mb-2">Comment se passe un appel d'urgence chez Albert Serrurerie ?</p>
          <ol className="list-decimal list-inside space-y-1.5 text-[#334155] text-sm pl-1">
            <li>Vous appelez le {PHONE} — un technicien répond directement, 24h/24.</li>
            <li>Il vous demande votre adresse et le type de serrure (si vous le connaissez).</li>
            <li>Il vous communique un tarif ferme et un délai d'intervention estimé.</li>
            <li>Vous confirmez (ou non) — aucun engagement sans votre accord explicite.</li>
            <li>Le technicien arrive et réalise l'ouverture, le plus souvent sans dégâts.</li>
            <li>Vous payez après l'intervention sur présentation d'une facture détaillée.</li>
          </ol>
        </div>
      </section>

      {/* ── Section 6 : Tarifs ── */}
      <section id="tarifs">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Tarifs d'ouverture de porte dans le Haut-Rhin
        </h2>
        <p className="text-[#334155] leading-relaxed mb-5">
          Les tarifs ci-dessous sont indicatifs. Ils incluent le déplacement, la main d'œuvre et, si nécessaire,
          le remplacement du cylindre après perçage. Un devis gratuit vous est systématiquement communiqué avant
          intervention.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#1a2c4e] text-white">
                <th className="text-left px-4 py-3 font-semibold">Prestation</th>
                <th className="text-right px-4 py-3 font-semibold">Tarif indicatif</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ouverture de porte — serrure 1 point simple", "À partir de 89€ TTC"],
                ["Ouverture de porte — serrure 2 points", "À partir de 110€ TTC"],
                ["Ouverture de porte — serrure 3 points multipoints", "À partir de 130€ TTC"],
                ["Ouverture porte blindée", "À partir de 180€ TTC"],
                ["Extraction de clé cassée dans le cylindre", "À partir de 90€ TTC"],
                ["Déplacement (inclus dans les tarifs ci-dessus)", "49,50€ TTC"],
              ].map(([prestation, prix], i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}
                >
                  <td className="px-4 py-3 text-[#334155]">{prestation}</td>
                  <td className="px-4 py-3 text-right font-semibold text-[#1a2c4e]">{prix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#64748b] mb-4">
          * Tarifs hors pièces supplémentaires (cylindre de remplacement, serrure). Valables pour les
          interventions en journée. Pas de supplément nocturne chez Albert Serrurerie.
        </p>

        <a
          href={PHONE_LINK}
          className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-base rounded-xl px-8 py-4 transition-colors shadow-[0_4px_14px_rgba(249,115,22,0.3)]"
        >
          Appeler le {PHONE}
        </a>
      </section>

      {/* ── Section 7 : Prévention ── */}
      <section id="prevention">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Prévenir les portes claquées : conseils pratiques
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une porte claquée est souvent un incident ponctuel, mais il existe des mesures simples pour en réduire
          considérablement la probabilité.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Toujours avoir un double de clé chez un proche
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          La solution la plus simple et la moins coûteuse : confiez un double de clé à un voisin de confiance,
          à un membre de votre famille habitant à proximité, ou à votre gestionnaire d'immeuble. En cas de porte
          claquée, vous pouvez résoudre le problème en quelques minutes et sans frais.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Installer une serrure à poignée intérieure toujours ouverte
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Certains modèles de serrures permettent de bloquer le pêne demi-tour en position rentrée depuis
          l'intérieur. Ainsi, la porte ne peut se verrouiller automatiquement que si vous le souhaitez
          explicitement. Cette option est intéressante pour les maisons où l'on fait régulièrement des
          allers-retours sans clé (jardin, cave, garage).
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Envisager une serrure connectée ou à code
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Les serrures à code ou connectées (smartphone) éliminent le risque de porte claquée car elles ne
          nécessitent pas de clé physique. Elles permettent également de gérer les accès à distance et
          de créer des codes temporaires pour les prestataires (plombiers, femmes de ménage, etc.).
          Albert Serrurerie installe et configure ce type d'équipement.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Entretenir régulièrement sa serrure
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une serrure grippée, un cylindre mal aligné ou une porte qui frotte sur son cadre sont des signes
          avant-coureurs d'une future panne. Un entretien annuel (quelques gouttes de lubrifiant spécial
          serrure, vérification du réglage de la porte) suffit à prolonger significativement la durée de vie
          de vos équipements. Pour en savoir plus sur le remplacement, consultez notre guide{" "}
          <Link
            to="/comment-changer-cylindre-serrure"
            className="text-[#f97316] hover:underline font-medium"
          >
            Comment changer un cylindre de serrure
          </Link>.
        </p>
      </section>

      {/* ── Section FAQ ── */}
      <section id="faq">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-6">
          Questions fréquentes — Porte claquée
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border border-[#e2e8f0] rounded-xl overflow-hidden">
              <div className="bg-[#f8fafc] px-5 py-4">
                <p className="font-semibold text-[#1a2c4e]">{item.question}</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-[#334155] text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA final ── */}
      <div className="mt-12 rounded-2xl bg-[#1a2c4e] p-8 text-center">
        <p className="font-display text-xl font-bold text-white mb-2">
          Porte claquée dans le Haut-Rhin ?
        </p>
        <p className="text-[#94a3b8] mb-5 text-sm">
          Albert Serrurerie intervient en 20 à 30 minutes, 24h/24, 7j/7. Devis gratuit avant intervention.
        </p>
        <a
          href={PHONE_LINK}
          className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-lg rounded-xl px-10 py-4 transition-colors shadow-[0_4px_20px_rgba(249,115,22,0.35)]"
        >
          Appeler le {PHONE}
        </a>
      </div>
    </GuidePageLayout>
  );
};

export default CommentOuvrirPorteClaquee;
