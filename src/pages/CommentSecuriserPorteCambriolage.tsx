import { Link } from "react-router-dom";
import GuidePageLayout, { NeedHelp, TocItem, BreadcrumbItem } from "@/components/GuidePageLayout";

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

const tocItems: TocItem[] = [
  { id: "urgence", title: "Les premières heures après l'effraction" },
  { id: "mise-en-securite", title: "Mise en sécurité immédiate" },
  { id: "audit", title: "Audit complet des points d'entrée" },
  { id: "renforcement", title: "Solutions de renforcement durables" },
  { id: "demarches", title: "Démarches administratives et assurance" },
  { id: "tarifs", title: "Tarifs de mise en sécurité dans le 68" },
  { id: "faq", title: "Questions fréquentes" },
];

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Accueil", url: "/" },
  { name: "Guides", url: undefined },
  { name: "Sécuriser sa porte après un cambriolage" },
];

const faqItems = [
  {
    question: "Que faire en priorité quand on rentre chez soi après un cambriolage ?",
    answer:
      "Ne touchez à rien avant l'arrivée de la police : chaque objet déplacé efface des indices. Appelez immédiatement le 17 (police) ou le 15 (SAMU si blessure). Attendez que les agents aient relevé les indices. Ensuite seulement, appelez un serrurier pour la mise en sécurité immédiate. Ne dormez pas dans votre logement si la porte ne peut pas être verrouillée.",
  },
  {
    question: "Dois-je porter plainte même si les voleurs n'ont pas pris grand chose ?",
    answer:
      "Oui, absolument. La plainte est indispensable pour votre dossier d'assurance : sans récépissé de plainte, la plupart des assureurs refusent d'indemniser. De plus, votre déclaration contribue aux statistiques de la délinquance et peut permettre d'identifier un réseau opérant dans votre secteur.",
  },
  {
    question: "Mon assurance couvre-t-elle la mise en sécurité après cambriolage ?",
    answer:
      "Dans la majorité des contrats multirisques habitation, la garantie cambriolage inclut le remboursement des frais de mise en sécurité immédiate (serrure, porte). Certains contrats remboursent jusqu'à 1500€ de travaux de sécurisation. Vérifiez vos conditions générales ou contactez votre assureur directement. Notre facture détaillée avec SIRET est reconnue par tous les assureurs.",
  },
  {
    question: "Combien coûte la mise en sécurité d'urgence après effraction ?",
    answer:
      "Le coût dépend des dégâts : si seule la serrure est endommagée, comptez 150 à 250€ TTC pour le remplacement. Si la porte ou le dormant sont forcés, les travaux peuvent s'élever à 300-600€. Si la porte doit être remplacée complètement, comptez à partir de 890€ pour une porte blindée posée.",
  },
  {
    question: "Est-il possible de renforcer une porte sans la changer complètement ?",
    answer:
      "Oui. On peut renforcer une porte existante par plusieurs mesures : installation d'une serrure 3 points, ajout d'un cylindre haute sécurité A2P**, renforcement du dormant avec des gâches longues, installation de barres anti-levier, renforcement des charnières. Ces interventions sont moins coûteuses qu'une porte neuve et peuvent augmenter significativement la résistance à l'effraction.",
  },
  {
    question: "Mon propriétaire doit-il prendre en charge la mise en sécurité si je suis locataire ?",
    answer:
      "C'est une question fréquente. En règle générale, la remise en état après cambriolage incombe au locataire si l'effraction a eu lieu sans faute du propriétaire, mais l'assurance habitation du locataire doit couvrir ces frais. Le propriétaire est responsable de la sécurité structurelle du logement (porte, cadre). Contactez votre assureur rapidement.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Comment sécuriser votre porte après un cambriolage : guide complet",
    description:
      "Que faire après un cambriolage ? Mise en sécurité immédiate, démarches assurance, renforcements durables. Guide complet par Albert Serrurerie, Haut-Rhin (68).",
    author: { "@type": "Organization", name: "Albert Serrurerie" },
    publisher: {
      "@type": "Organization",
      name: "Albert Serrurerie",
      logo: { "@type": "ImageObject", url: "https://albert-serrurerie.com/favicon.ico" },
    },
    datePublished: "2024-02-10",
    dateModified: "2024-03-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://albert-serrurerie.com/comment-securiser-porte-apres-cambriolage",
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
        name: "Sécuriser sa porte après un cambriolage",
        item: "https://albert-serrurerie.com/comment-securiser-porte-apres-cambriolage",
      },
    ],
  },
];

const CommentSecuriserPorteCambriolage = () => {
  return (
    <GuidePageLayout
      metaTitle="Comment sécuriser votre porte après un cambriolage | Albert Serrurerie 68"
      metaDescription="Victime d'une effraction dans le Haut-Rhin ? Guide complet : premières démarches, mise en sécurité immédiate, renforcements durables, démarches assurance. Albert Serrurerie intervient 24h/24."
      h1="Comment sécuriser votre porte après un cambriolage : guide complet"
      slug="comment-securiser-porte-apres-cambriolage"
      breadcrumbItems={breadcrumbItems}
      tocItems={tocItems}
      schemas={schemas}
    >
      {/* ── Intro ── */}
      <p className="text-[#334155] leading-relaxed mb-6 text-base">
        Découvrir que son logement a été cambriolé est un choc traumatique. Au sentiment de violation
        s'ajoutent le désordre, les pertes matérielles et l'urgence pratique : sécuriser son logement
        avant la nuit. Ce guide vous explique pas à pas quoi faire dans les premières heures, comment
        mettre votre logement en sécurité et quelles démarches entreprendre pour être indemnisé.
      </p>

      {/* ── Section 1 : Urgence ── */}
      <section id="urgence">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-2 mb-4">
          Les premières heures après l'effraction : que faire ?
        </h2>

        <div className="rounded-xl bg-[#fef2f2] border border-[#fecaca] p-5 mb-6">
          <p className="font-bold text-[#991b1b] mb-2">Important — Préservez la scène</p>
          <p className="text-sm text-[#7f1d1d] leading-relaxed">
            Ne touchez, ne déplacez et ne nettoyez rien avant l'intervention de la police. Chaque objet
            manipulé peut effacer des empreintes digitales ou des indices crucibles. Attendez que les
            enquêteurs aient terminé leurs relevés avant de commencer à ranger ou à faire des réparations.
          </p>
        </div>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Étape 1 — Appelez la police (17) ou la gendarmerie
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Le dépôt de plainte est indispensable, même si vous pensez que peu de choses ont été volées.
          La plainte déclenche l'intervention d'une équipe de relevés d'empreintes, documente officiellement
          le sinistre et — surtout — est exigée par votre assureur pour ouvrir un dossier
          d'indemnisation. Le récépissé de dépôt de plainte est la pièce clé de votre dossier.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Étape 2 — Photographiez les dégâts
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Avant que la police ou le serrurier ne touche à quoi que ce soit, photographiez et filmez
          l'ensemble des dégâts : porte enfoncée, serrure arrachée, cadre fracturé, fenêtres brisées,
          pièces saccagées. Ces photos constituent une preuve visuelle essentielle pour votre assureur.
          Notez l'heure et la date sur vos photos (géolocalisation activée sur smartphone).
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Étape 3 — Prévenez votre assureur dans les 5 jours ouvrés
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          La loi vous impose de déclarer le sinistre à votre assureur dans les 5 jours ouvrés suivant
          la constatation du cambriolage. Passé ce délai, votre assureur peut légalement refuser toute
          indemnisation. Appelez votre conseiller dès que possible — la plupart des assureurs ont une
          ligne d'urgence disponible 24h/24.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Étape 4 — Appelez un serrurier pour la mise en sécurité
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une fois la police repartie et les photos faites, appelez immédiatement Albert Serrurerie au{" "}
          <a href={PHONE_LINK} className="text-[#f97316] font-semibold hover:underline">
            {PHONE}
          </a>. Nous intervenons en urgence pour sécuriser votre logement avant la nuit — porte
          condamnée provisoirement si nécessaire, serrure de remplacement posée, cylindre changé.
          Vous ne dormez pas dans un logement non sécurisé.
        </p>
      </section>

      <NeedHelp context="Victime d'une effraction dans le 68 ? Nous intervenons en urgence pour sécuriser votre logement, 24h/24." />

      {/* ── Section 2 : Mise en sécurité ── */}
      <section id="mise-en-securite">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Mise en sécurité immédiate : ce que fait le serrurier
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Lors d'une intervention d'urgence après effraction, notre technicien évalue d'abord l'étendue
          des dégâts, puis applique une solution adaptée — provisoire si la porte est trop endommagée
          pour être réparée sur le champ, définitive si la structure permet une remise en état immédiate.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Condamnation provisoire de la porte
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Si la porte est sévèrement endommagée (vantail défoncé, cadre arraché), elle peut nécessiter
          un remplacement complet qui ne peut pas être réalisé dans les heures qui suivent. Dans ce cas,
          le technicien condamne la porte avec des planches et des équerres métalliques, puis installe
          une serrure provisoire suffisamment résistante pour la nuit. Un devis pour la pose d'une porte
          définitive vous est remis le lendemain.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Remplacement de la serrure et du cylindre
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Si la structure de la porte est saine mais que la serrure est arrachée ou défoncée, le
          technicien remplace le mécanisme complet et installe un nouveau cylindre haute sécurité.
          C'est l'occasion idéale — même si douloureuse — d'upgrader vers un cylindre certifié A2P**
          qui rendra la prochaine tentative d'effraction bien plus difficile.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Réparation du dormant et de la gâche
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          La majorité des effractions par forçage endommagent la gâche (la pièce métallique dans le
          dormant dans laquelle s'encastre le pêne). Une gâche arrachée laisse un trou béant dans
          lequel n'importe quelle clé peut introduire le pêne. Le technicien répare ou remplace la
          gâche et, si nécessaire, renforce le dormant avec des plaques d'acier.
        </p>
      </section>

      {/* ── Section 3 : Audit ── */}
      <section id="audit">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Audit complet des points d'entrée après effraction
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Un cambriolage est le révélateur brutal des failles de sécurité de votre logement. Après la
          mise en sécurité immédiate, un audit complet permet d'identifier toutes les vulnérabilités —
          pas seulement le point d'entrée utilisé par les cambrioleurs.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Points d'entrée systématiquement vérifiés
        </h3>
        <ul className="list-disc list-inside space-y-2 text-[#334155] mb-6 pl-2">
          <li>
            <strong>Porte d'entrée principale :</strong> état du dormant, de la gâche, des charnières,
            du cylindre. Résistance du vantail.
          </li>
          <li>
            <strong>Porte de service ou de garage :</strong> souvent le maillon faible — moins
            surveillée, moins renforcée que la porte principale.
          </li>
          <li>
            <strong>Fenêtres du rez-de-chaussée :</strong> espagnolettes, crémones, verrous. Les
            fenêtres sont le point d'entrée dans 30% des cambriolages.
          </li>
          <li>
            <strong>Portes-fenêtres et baies vitrées :</strong> verrous supplémentaires, barres de
            seuil, film de sécurité.
          </li>
          <li>
            <strong>Cave et sous-sol :</strong> accès oublié mais souvent vulnérable.
          </li>
          <li>
            <strong>Volets roulants :</strong> systèmes anti-relevage, blocage.
          </li>
        </ul>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Le rapport d'audit
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          À l'issue de l'audit, notre technicien vous remet un rapport écrit listant les vulnérabilités
          identifiées, classées par niveau de risque (critique, modéré, faible), avec des recommandations
          concrètes et chiffrées pour chaque point. Vous choisissez les améliorations à réaliser selon
          votre priorité et votre budget.
        </p>
      </section>

      {/* ── Section 4 : Renforcement ── */}
      <section id="renforcement">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Solutions de renforcement durables après effraction
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Voici les solutions que nous recommandons, par ordre d'efficacité et de coût croissants.
          Consultez également notre guide sur{" "}
          <Link to="/comment-choisir-serrure-3-points" className="text-[#f97316] hover:underline font-medium">
            comment choisir une serrure 3 points
          </Link>.
        </p>

        {[
          {
            titre: "Cylindre haute sécurité A2P** ou A2P***",
            description:
              "Première mesure, la plus rentable. Un cylindre certifié résiste au crochetage et au bumping. Il ne modifie pas l'aspect de la porte et peut être fait le jour de l'intervention. Coût : 100–200€ TTC.",
            priorite: "Priorité 1",
          },
          {
            titre: "Serrure 3 points certifiée A2P",
            description:
              "Si votre porte n'est équipée que d'une serrure 1 point, passer en 3 points multiplie la résistance au forçage par 4 à 6. C'est l'upgrade sécurité le plus efficace pour une maison individuelle. Coût : 220–400€ TTC.",
            priorite: "Priorité 2",
          },
          {
            titre: "Renforcement du dormant et gâches longues",
            description:
              "Les gâches longues (220 mm) avec vis de 70 mm dans les montants du mur résistent bien mieux au forçage que les gâches standard. Souvent négligé, c'est pourtant un renforcement très efficace et peu coûteux. Coût : 80–150€ TTC.",
            priorite: "Priorité 2",
          },
          {
            titre: "Barres anti-levier et protège-cylindre",
            description:
              "Le protège-cylindre empêche l'arrachage du barillet. La barre anti-levier renforce la zone centrale de la porte. Ces accessoires sont compatibles avec toutes les portes. Coût : 60–120€ TTC.",
            priorite: "Priorité 3",
          },
          {
            titre: "Porte blindée avec serrure multipoints",
            description:
              "La solution ultime pour une maison individuelle à risque. Une porte blindée certifiée A2P avec serrure 5 points est pratiquement impossible à forcer. Investissement durable, valorisation immobilière. Coût : à partir de 890€ TTC posée.",
            priorite: "Priorité 4",
          },
        ].map((solution, i) => (
          <div key={i} className="flex gap-4 mb-5 p-4 border border-[#e2e8f0] rounded-xl">
            <div className="shrink-0">
              <span className="inline-block bg-[#f97316]/10 text-[#f97316] font-bold text-xs px-2.5 py-1 rounded-full">
                {solution.priorite}
              </span>
            </div>
            <div>
              <p className="font-semibold text-[#1a2c4e] mb-1">{solution.titre}</p>
              <p className="text-[#334155] text-sm leading-relaxed">{solution.description}</p>
            </div>
          </div>
        ))}

        <p className="text-[#334155] leading-relaxed mb-4">
          Pour savoir quel serrurier choisir pour ces travaux de renforcement et éviter les arnaques,
          consultez notre guide{" "}
          <Link to="/comment-reconnaitre-serrurier-serieux" className="text-[#f97316] hover:underline font-medium">
            comment reconnaître un serrurier sérieux
          </Link>.
        </p>
      </section>

      <NeedHelp context="Audit de sécurité gratuit après cambriolage dans le Haut-Rhin. Appelez le 03 74 47 47 93." />

      {/* ── Section 5 : Démarches ── */}
      <section id="demarches">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Démarches administratives et dossier d'assurance
        </h2>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Les documents à réunir pour votre assureur
        </h3>
        <ul className="list-disc list-inside space-y-2 text-[#334155] mb-6 pl-2">
          <li>Récépissé de dépôt de plainte (police ou gendarmerie)</li>
          <li>Facture détaillée du serrurier avec SIRET, description des travaux, montant TTC</li>
          <li>Inventaire des objets volés avec leurs valeurs estimées</li>
          <li>Photos des dégâts (prises avant toute intervention)</li>
          <li>Éventuellement : attestation d'intervention de la police / constat d'huissier</li>
          <li>Justificatifs de valeur pour les objets précieux (factures, certificats d'authenticité)</li>
        </ul>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Notre facture est reconnue par les assureurs
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Albert Serrurerie remet après chaque intervention une facture complète contenant : le numéro
          SIRET de l'entreprise, le descriptif précis des travaux réalisés, les références exactes des
          pièces posées, le montant TTC ventilé (main d'œuvre + pièces + déplacement), et la date et
          l'adresse de l'intervention. Ce document est suffisant pour constituer votre dossier de
          remboursement auprès de n'importe quel assureur.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Le délai de déclaration à respecter absolument
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          L'article L113-2 du Code des assurances vous impose de déclarer un sinistre dans un délai
          raisonnable, et la plupart des contrats fixent ce délai à 5 jours ouvrés. Ne laissez pas
          passer ce délai, même si vous êtes sous le choc ou que les travaux de remise en état ne sont
          pas terminés. La déclaration peut être faite par téléphone et confirmée par courrier.
        </p>

        <div className="rounded-xl bg-[#f0f9ff] border border-[#bae6fd] p-5 mb-6">
          <p className="font-bold text-[#1a2c4e] mb-2">Conseil pratique — Reconstruction du dossier</p>
          <p className="text-sm text-[#334155] leading-relaxed">
            Si vous n'avez pas de factures pour des objets volés précieux, votre assureur peut accepter
            des photos montrant votre possession de ces objets, des attestations de proches, ou des
            relevés de carte bancaire montrant l'achat. Conservez également le rapport de police : il
            liste les objets déclarés volés et fait foi en cas de litige.
          </p>
        </div>
      </section>

      {/* ── Section 6 : Tarifs ── */}
      <section id="tarifs">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Tarifs de mise en sécurité après cambriolage dans le Haut-Rhin
        </h2>

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
                ["Mise en sécurité urgence (serrure + cylindre)", "À partir de 150€ TTC"],
                ["Condamnation provisoire de porte", "À partir de 90€ TTC"],
                ["Remplacement cylindre haute sécurité A2P**", "À partir de 155€ TTC"],
                ["Remplacement serrure 3 points + cylindre", "À partir de 290€ TTC"],
                ["Réparation / remplacement gâche et dormant", "À partir de 80€ TTC"],
                ["Porte blindée posée (solution définitive)", "À partir de 890€ TTC"],
                ["Audit de sécurité complet", "Gratuit sur demande"],
                ["Déplacement (inclus dans les tarifs)", "49,50€ TTC"],
              ].map(([prestation, prix], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                  <td className="px-4 py-3 text-[#334155]">{prestation}</td>
                  <td className="px-4 py-3 text-right font-semibold text-[#1a2c4e]">{prix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[#334155] leading-relaxed mb-6">
          Nos interventions d'urgence après effraction sont assurées dans tout le{" "}
          <Link to="/serrurier-mulhouse" className="text-[#f97316] hover:underline font-medium">
            secteur de Mulhouse
          </Link>,{" "}
          <Link to="/serrurier-colmar" className="text-[#f97316] hover:underline font-medium">
            Colmar
          </Link>{" "}
          et l'ensemble du Haut-Rhin, 24h/24, 7j/7.
        </p>

        <a
          href={PHONE_LINK}
          className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-base rounded-xl px-8 py-4 transition-colors shadow-[0_4px_14px_rgba(249,115,22,0.3)]"
        >
          Appeler le {PHONE}
        </a>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-6">
          Questions fréquentes — Cambriolage et mise en sécurité
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
          Victime d'effraction dans le Haut-Rhin ?
        </p>
        <p className="text-[#94a3b8] mb-5 text-sm">
          Albert Serrurerie intervient en urgence pour sécuriser votre logement, 24h/24, 7j/7.
          Facture reconnue assureurs. Audit de sécurité gratuit.
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

export default CommentSecuriserPorteCambriolage;
