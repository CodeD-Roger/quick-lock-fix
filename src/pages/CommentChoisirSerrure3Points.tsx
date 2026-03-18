import { Link } from "react-router-dom";
import GuidePageLayout, { NeedHelp, TocItem, BreadcrumbItem } from "@/components/GuidePageLayout";

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

const tocItems: TocItem[] = [
  { id: "definition", title: "Serrure 3 points : définition" },
  { id: "avantages", title: "Avantages vs serrure 1 point" },
  { id: "criteres", title: "Critères de choix essentiels" },
  { id: "certifications", title: "Certifications et normes" },
  { id: "comparatif", title: "Comparatif des meilleures serrures" },
  { id: "installation", title: "Installation professionnelle" },
  { id: "tarifs", title: "Tarifs dans le 68" },
  { id: "faq", title: "Questions fréquentes" },
];

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Accueil", url: "/" },
  { name: "Guides", url: undefined },
  { name: "Comment choisir une serrure 3 points" },
];

const faqItems = [
  {
    question: "Une serrure 3 points est-elle vraiment plus sécurisée qu'une serrure 1 point ?",
    answer:
      "Oui, significativement. Une serrure 3 points enclenche simultanément 3 pênes dans le dormant et le seuil, rendant le forçage de la porte physiquement très difficile — même avec un pied de biche. Une serrure 1 point ne verrouille qu'en un seul endroit, ce qui permet de « faire levier » sur la porte pour arracher la gâche.",
  },
  {
    question: "Peut-on installer une serrure 3 points sur une porte existante ?",
    answer:
      "Oui, dans la grande majorité des cas. L'installation nécessite de fraiser le chant de la porte pour loger le boîtier de serrure, et d'installer les renvois haut et bas dans le dormant. Cette opération est réalisable sur portes en bois, alu et PVC. Pour les portes métalliques, une adaptation peut être nécessaire.",
  },
  {
    question: "Quelle est la différence entre serrure 3 points et serrure multipoints ?",
    answer:
      "Une serrure 3 points utilise exactement 3 pênes (un central + un haut + un bas). Une serrure multipoints peut en avoir 4, 5 ou davantage, avec des pênes sur les côtés. Les serrures multipoints offrent une résistance encore plus élevée et sont systématiquement présentes sur les portes blindées.",
  },
  {
    question: "Quelle marque de serrure 3 points me recommandez-vous ?",
    answer:
      "Pour une maison individuelle ou un appartement standard, la Vachette Radialis 3 points est notre recommandation première (A2P**, bon rapport qualité/prix). Pour un logement à risque ou une porte blindée, la Fichet Octo ou la Mul-T-Lock Integra sont les références du marché.",
  },
  {
    question: "Combien de temps dure l'installation d'une serrure 3 points ?",
    answer:
      "L'installation d'une serrure 3 points sur une porte existante prend entre 1h30 et 3h selon le type de porte et l'état du bâti. Sur une porte neuve ou préparée, le temps peut être réduit à 1h. Une intervention en urgence (remplacement d'une serrure défaillante) est possible le jour même.",
  },
  {
    question: "Mon assurance exige-t-elle une serrure 3 points ?",
    answer:
      "Beaucoup de contrats multirisques habitation, notamment les formules « tous risques » ou avec garantie cambriolage, exigent une serrure certifiée A2P sur la porte d'entrée principale. Certains contrats spécifient explicitement une serrure 3 points ou multipoints. Vérifiez votre contrat ou demandez à votre assureur.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Comment choisir une serrure 3 points : guide complet pour le Haut-Rhin",
    description:
      "Tout savoir sur les serrures 3 points : avantages, critères de choix, certifications A2P, comparatif des meilleures marques et tarifs d'installation dans le 68.",
    author: { "@type": "Organization", name: "Albert Serrurerie" },
    publisher: {
      "@type": "Organization",
      name: "Albert Serrurerie",
      logo: { "@type": "ImageObject", url: "https://albert-serrurerie.com/favicon.ico" },
    },
    datePublished: "2024-02-01",
    dateModified: "2024-03-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://albert-serrurerie.com/comment-choisir-serrure-3-points",
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
        name: "Comment choisir une serrure 3 points",
        item: "https://albert-serrurerie.com/comment-choisir-serrure-3-points",
      },
    ],
  },
];

const CommentChoisirSerrure3Points = () => {
  return (
    <GuidePageLayout
      metaTitle="Comment choisir une serrure 3 points : guide complet | Albert Serrurerie 68"
      metaDescription="Guide pour choisir la meilleure serrure 3 points dans le Haut-Rhin. Critères A2P, comparatif Fichet Vachette Mul-T-Lock, tarifs d'installation. Conseils de serrurier professionnel."
      h1="Comment choisir une serrure 3 points : guide complet pour le Haut-Rhin"
      slug="comment-choisir-serrure-3-points"
      breadcrumbItems={breadcrumbItems}
      tocItems={tocItems}
      schemas={schemas}
    >
      {/* ── Section 1 : Définition ── */}
      <section id="definition">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-0 mb-4">
          Qu'est-ce qu'une serrure 3 points ?
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une serrure 3 points est un mécanisme de verrouillage qui actionne simultanément trois pênes
          distincts quand vous fermez votre porte à clé : un pêne central (au niveau de la serrure), un
          pêne supérieur (en haut de la porte) et un pêne inférieur (en bas). Ces trois points d'ancrage
          répartissent les contraintes sur toute la hauteur de la porte, rendant le forçage physique
          extrêmement difficile.
        </p>
        <p className="text-[#334155] leading-relaxed mb-4">
          Contrairement à une serrure 1 point — qui ne verrouille qu'au milieu de la porte — une serrure
          3 points transforme l'ensemble de la porte en un système solidaire avec son cadre. Même une
          force importante appliquée avec un levier ne peut pas "ouvrir" la porte sans briser physiquement
          le vantail ou le dormant.
        </p>
        <p className="text-[#334155] leading-relaxed mb-4">
          Le mécanisme est logé dans le chant de la porte et relié par des tiges de renvoi aux gâches
          hautes et basses installées dans le dormant. Quand vous tournez la clé ou la poignée dans
          certains modèles, les trois pênes s'engagent ou se retirent simultanément.
        </p>

        <div className="rounded-xl bg-[#f0fdf4] border border-[#86efac] p-5 mb-6">
          <p className="font-bold text-[#14532d] mb-2">À retenir</p>
          <p className="text-sm text-[#166534] leading-relaxed">
            Une serrure 3 points certifiée A2P** offre une résistance à l'effraction 4 à 6 fois supérieure
            à une serrure 1 point standard. C'est l'upgrade sécurité le plus efficace pour une maison
            individuelle dans le Haut-Rhin, avant même d'envisager une porte blindée.
          </p>
        </div>
      </section>

      <NeedHelp context="Devis gratuit pour l'installation d'une serrure 3 points dans le 68. Appelez le 03 74 47 47 93." />

      {/* ── Section 2 : Avantages ── */}
      <section id="avantages">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Avantages d'une serrure 3 points vs serrure 1 point
        </h2>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Résistance au forçage incomparablement supérieure
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Le point de faiblesse d'une serrure 1 point est physique : si vous appliquez un effort au bas ou
          au haut de la porte, seule la zone centrale résiste. Un cambrioleur expérimenté peut ouvrir une
          porte verrouillée en 1 point en quelques secondes avec un pied de biche, en exerçant un
          effet de levier qui arrache la gâche du dormant.
        </p>
        <p className="text-[#334155] leading-relaxed mb-4">
          Avec une serrure 3 points, les pênes haut et bas s'opposent à cet effet de levier. La porte
          tient même sous des contraintes importantes. Les statistiques de la police nationale montrent que
          les effractions par forçage mécanique représentent encore 60% des cambriolages en zone
          périurbaine — c'est exactement la menace à laquelle répond une serrure 3 points.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Meilleure résistance au gauchissement de la porte
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Dans les vieilles maisons alsaciennes, les portes en bois ont tendance à gonfler en hiver
          (humidité) et à rétrécir en été (chaleur). Ce gauchissement crée des jours entre la porte et
          son cadre qui facilitent l'intrusion. Les pênes haut et bas d'une serrure 3 points compensent
          ce phénomène en maintenant la porte plaquée sur tout son périmètre.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Valorisation du logement et exigences assurantielles
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une serrure 3 points certifiée A2P est souvent exigée par les assureurs pour valider une
          couverture cambriolage complète. Elle peut également être mise en avant lors de la vente du
          logement comme équipement de sécurité. L'investissement est rentabilisé par la réduction du
          risque et parfois par la diminution de la prime d'assurance.
        </p>
      </section>

      {/* ── Section 3 : Critères ── */}
      <section id="criteres">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Les critères essentiels pour choisir sa serrure 3 points
        </h2>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          1. La compatibilité avec votre porte
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Toutes les serrures 3 points ne sont pas compatibles avec toutes les portes. Les paramètres à
          vérifier : l'épaisseur du vantail (55 à 100 mm selon les modèles), le matériau (bois, alu, PVC,
          métal), la hauteur de la porte (les tiges de renvoi doivent correspondre) et la position des
          gonds. Avant tout achat, une visite d'un technicien permet d'identifier le modèle adapté.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          2. La certification A2P du cylindre associé
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une serrure 3 points sans cylindre certifié n'offre qu'une protection partielle. Un cambrioleur
          peut contourner la résistance mécanique du mécanisme en crochetant un cylindre bas de gamme.
          Exigez toujours un cylindre certifié minimum A2P** avec votre serrure 3 points — consultez
          notre guide sur{" "}
          <Link to="/comment-changer-cylindre-serrure" className="text-[#f97316] hover:underline font-medium">
            comment changer un cylindre de serrure
          </Link>.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          3. Le type de pênes : dormants ou à ressort ?
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Les pênes dormants (qui nécessitent la clé pour s'engager et se retirer) sont plus sécurisés que
          les pênes à ressort (qui s'engagent automatiquement à la fermeture). Sur une serrure 3 points,
          les pênes haut et bas sont généralement de type dormant, ce qui signifie que la porte n'est
          réellement verrouillée en 3 points que si vous avez effectivement tourné la clé.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          4. La clé brevetée
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Un cylindre avec clé brevetée signifie que les doubles ne peuvent être fabriqués que par le
          fabricant ou des revendeurs agréés, sur présentation d'une carte personnalisée remise à
          l'achat. C'est une protection contre la reproduction frauduleuse de vos clés. Toutes les
          marques haut de gamme (Mul-T-Lock, Fichet, Vachette Système) proposent cette option.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          5. La compatibilité avec une porte blindée future
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Si vous envisagez d'installer une porte blindée dans les années à venir, choisissez un modèle
          de serrure qui peut être repris sur ce type de porte, ou qui utilise des cylindres compatibles
          avec les serrures multipoints de porte blindée. Cela évite de changer à nouveau le cylindre
          lors de la pose de la blindée. Pour en savoir plus sur la sécurisation complète après
          effraction, consultez notre guide{" "}
          <Link to="/comment-securiser-porte-apres-cambriolage" className="text-[#f97316] hover:underline font-medium">
            comment sécuriser votre porte après un cambriolage
          </Link>.
        </p>
      </section>

      {/* ── Section 4 : Certifications ── */}
      <section id="certifications">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Certifications et normes applicables aux serrures
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Le marché de la serrurerie est régi par plusieurs normes dont la compréhension permet de faire
          des choix éclairés.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#1a2c4e] text-white">
                <th className="text-left px-4 py-3 font-semibold">Norme / Certification</th>
                <th className="text-left px-4 py-3 font-semibold">Ce qu'elle garantit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A2P* (1 étoile)", "Résistance au crochetage, picking, bumping — 5 minutes minimum"],
                ["A2P** (2 étoiles)", "Résistance renforcée — 10 minutes — recommandé pour maisons individuelles"],
                ["A2P*** (3 étoiles)", "Résistance maximum — 15 minutes — portes blindées et zones à risque"],
                ["NF EN 12209", "Norme européenne : résistance mécanique et durabilité du mécanisme de serrure"],
                ["NF EN 1303", "Norme européenne pour les cylindres — classes 1 à 6 (1=minimal, 6=maximum)"],
                ["BP1 / BP2 / BP3", "Résistance anti-bumping certifiée (technique d'ouverture par percussion)"],
              ].map(([norme, garantie], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                  <td className="px-4 py-3 font-semibold text-[#1a2c4e]">{norme}</td>
                  <td className="px-4 py-3 text-[#334155]">{garantie}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[#334155] leading-relaxed mb-4">
          Pour les logements du Haut-Rhin, nous recommandons systématiquement l'association{" "}
          <strong>serrure 3 points NF EN 12209 + cylindre A2P** minimum</strong>. Cette combinaison
          couvre les deux vecteurs d'attaque principaux : le forçage mécanique (serrure) et le
          crochetage/bumping (cylindre).
        </p>
      </section>

      {/* ── Section 5 : Comparatif ── */}
      <section id="comparatif">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Comparatif des meilleures serrures 3 points du marché
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#1a2c4e] text-white">
                <th className="text-left px-4 py-3 font-semibold">Modèle</th>
                <th className="text-left px-4 py-3 font-semibold">Certification</th>
                <th className="text-left px-4 py-3 font-semibold">Type de porte</th>
                <th className="text-right px-4 py-3 font-semibold">Prix fourni + posé</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fichet B-Series 3 points", "A2P***", "Bois, métal, blindée", "380–520€ TTC"],
                ["Vachette Radialis 3P", "A2P**", "Bois, PVC, alu", "220–320€ TTC"],
                ["Bricard Alpha 3 points", "A2P**", "Bois, alu standard", "200–290€ TTC"],
                ["Mul-T-Lock Integra", "A2P***", "Toutes portes, connectée", "400–580€ TTC"],
                ["ISEO Libra Multipoint", "A2P**", "PVC, alu, rénovation", "250–360€ TTC"],
                ["Mottura Champions 3P", "A2P*", "Bois, budget serré", "150–220€ TTC"],
              ].map(([modele, cert, porte, prix], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                  <td className="px-4 py-3 font-semibold text-[#1a2c4e]">{modele}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-[#f97316]/10 text-[#f97316] font-semibold text-xs px-2 py-0.5 rounded-full">
                      {cert}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#334155]">{porte}</td>
                  <td className="px-4 py-3 text-right font-medium text-[#1a2c4e]">{prix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#64748b] mb-4">
          * Prix indicatifs incluant la fourniture de la serrure et la pose par un technicien
          Albert Serrurerie dans le Haut-Rhin. Peuvent varier selon la configuration de la porte.
        </p>
      </section>

      <NeedHelp context="Installation de serrure 3 points dans le Haut-Rhin — devis gratuit, matériel certifié A2P." />

      {/* ── Section 6 : Installation ── */}
      <section id="installation">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Pourquoi faire appel à un professionnel pour l'installation
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          L'installation d'une serrure 3 points n'est pas comparable au changement d'un simple cylindre.
          Elle implique des travaux de fraisage dans le chant de la porte, l'installation précise des
          tiges de renvoi, et le réglage des gâches dans le dormant. Une erreur de millimètre peut
          rendre la serrure inopérante ou, pire, lui faire perdre sa certification A2P.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Le fraisage de la porte
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Le boîtier de serrure 3 points est plus volumineux qu'un boîtier standard. Son installation
          nécessite de fraiser (creuser) le chant de la porte à la dimension exacte du boîtier. Un
          fraisage trop large affaiblit la porte ; un fraisage trop étroit empêche le montage. Cela
          requiert un outillage professionnel (fraiseuse, ciseau à bois de précision) et une expérience
          de la serrurerie menuiserie.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Le réglage des renvois et gâches
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Les tiges de renvoi haut et bas doivent être coupées à la bonne longueur et les gâches percées
          précisément dans le dormant à la position correspondante. Un mauvais alignement crée des
          contraintes mécaniques permanentes qui usent prématurément le mécanisme et peuvent bloquer
          la serrure.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          La garantie constructeur et l'assurance
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une serrure installée par un artisan qualifié est couverte par sa garantie constructeur et par
          notre garantie de main d'œuvre. En cas de sinistre, votre assureur peut demander la preuve
          d'une installation professionnelle pour valider l'indemnisation. Une facture d'installation
          par une entreprise inscrite constitue cette preuve.
        </p>

        <p className="text-[#334155] leading-relaxed mb-4">
          Nos équipes interviennent dans tout le{" "}
          <Link to="/serrurier-mulhouse" className="text-[#f97316] hover:underline font-medium">
            secteur de Mulhouse
          </Link>{" "}
          et de{" "}
          <Link to="/serrurier-colmar" className="text-[#f97316] hover:underline font-medium">
            Colmar
          </Link>{" "}
          pour les installations de serrures 3 points, en rendez-vous planifié ou en urgence.
        </p>
      </section>

      {/* ── Section 7 : Tarifs ── */}
      <section id="tarifs">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Tarifs d'installation de serrure 3 points dans le Haut-Rhin
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
                ["Main d'œuvre pose seule (serrure fournie par le client)", "À partir de 120€ TTC"],
                ["Serrure 3 points A2P* fournie + pose", "À partir de 220€ TTC"],
                ["Serrure 3 points A2P** fournie + pose", "À partir de 290€ TTC"],
                ["Serrure 3 points A2P*** fournie + pose", "À partir de 400€ TTC"],
                ["Remplacement serrure 3 points existante", "À partir de 180€ TTC"],
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
          Questions fréquentes — Serrure 3 points
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
          Installer une serrure 3 points certifiée A2P dans le 68
        </p>
        <p className="text-[#94a3b8] mb-5 text-sm">
          Devis gratuit, matériel certifié A2P fourni. Intervention en journée ou en urgence dans tout le Haut-Rhin.
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

export default CommentChoisirSerrure3Points;
