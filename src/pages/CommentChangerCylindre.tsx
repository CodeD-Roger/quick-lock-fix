import { Link } from "react-router-dom";
import GuidePageLayout, { NeedHelp, TocItem, BreadcrumbItem } from "@/components/GuidePageLayout";

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

const tocItems: TocItem[] = [
  { id: "pourquoi", title: "Pourquoi changer son cylindre ?" },
  { id: "choisir-cylindre", title: "Choisir le bon cylindre" },
  { id: "certifications", title: "Certifications A2P expliquées" },
  { id: "etapes", title: "Les 6 étapes du remplacement" },
  { id: "comparatif", title: "Comparatif cylindres du marché" },
  { id: "tarifs", title: "Tarifs dans le 68" },
  { id: "faq", title: "Questions fréquentes" },
];

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Accueil", url: "/" },
  { name: "Guides", url: undefined },
  { name: "Comment changer un cylindre de serrure" },
];

const faqItems = [
  {
    question: "Peut-on changer son cylindre de serrure soi-même ?",
    answer:
      "Techniquement oui, si votre porte est standard et que vous avez les bons outils. Cependant, un cylindre mal dimensionné ou mal positionné offre une sécurité réduite et peut bloquer la serrure. Pour les serrures multipoints, portes blindées ou si vous n'êtes pas bricoleur, faire appel à un serrurier professionnel garantit un résultat optimal.",
  },
  {
    question: "Quelle est la différence entre un cylindre et une serrure ?",
    answer:
      "Le cylindre (ou barillet) est la partie ronde dans laquelle vous insérez votre clé. Il est logé dans le corps de la serrure, lequel contient le mécanisme multipoints. On peut changer le cylindre seul sans toucher au mécanisme de serrure. Changer la serrure complète implique un chantier plus important.",
  },
  {
    question: "Qu'est-ce que la certification A2P et pourquoi est-elle importante ?",
    answer:
      "A2P (Assurance Prévention Protection) est une certification délivrée par le CNPP qui garantit la résistance du cylindre au crochetage, au cassage et à l'arrachage. A2P* = 5 minutes de résistance, A2P** = 10 minutes, A2P*** = 15 minutes. Beaucoup d'assureurs exigent un cylindre au minimum A2P* pour valider une indemnisation en cas de cambriolage.",
  },
  {
    question: "Combien coûte le changement d'un cylindre à Mulhouse ou Colmar ?",
    answer:
      "Le changement d'un cylindre standard (cylindre seul fourni par le client) démarre à 79€ TTC en main d'œuvre. Avec fourniture d'un cylindre haute sécurité certifié A2P**, comptez entre 150€ et 230€ TTC selon la marque et le modèle. Devis gratuit au 03 74 47 47 93 avant toute intervention.",
  },
  {
    question: "Quelles marques de cylindres conseillez-vous ?",
    answer:
      "Nous recommandons prioritairement Mul-T-Lock, Fichet, Vachette et Bricard pour leur fiabilité, leur service après-vente et la qualité de leur certification A2P. Ces marques proposent des cylindres brevetés (clés non reproductibles chez un cordonnier standard), ce qui renforce la sécurité globale.",
  },
  {
    question: "Mon cylindre actuel mesure combien ? Comment le savoir ?",
    answer:
      "Mesurez avec un mètre ou un pied à coulisse : la longueur totale du cylindre de part et d'autre de la porte, puis chaque côté séparément (exemple : 30mm côté extérieur + 10mm pour la came + 30mm côté intérieur = 30/30 ou 30/10/30 selon la notation). Ces mesures sont essentielles pour commander le bon modèle de remplacement.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Comment changer un cylindre de serrure : guide complet 2024",
    description:
      "Guide étape par étape pour changer un cylindre de serrure. Certifications A2P, comparatif marques, tarifs dans le Haut-Rhin. Conseils de serrurier professionnel.",
    author: { "@type": "Organization", name: "Albert Serrurerie" },
    publisher: {
      "@type": "Organization",
      name: "Albert Serrurerie",
      logo: { "@type": "ImageObject", url: "https://albert-serrurerie.com/favicon.ico" },
    },
    datePublished: "2024-01-20",
    dateModified: "2024-03-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://albert-serrurerie.com/comment-changer-cylindre-serrure",
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
        name: "Comment changer un cylindre de serrure",
        item: "https://albert-serrurerie.com/comment-changer-cylindre-serrure",
      },
    ],
  },
];

const CommentChangerCylindre = () => {
  return (
    <GuidePageLayout
      metaTitle="Comment changer un cylindre de serrure : guide complet | Albert Serrurerie 68"
      metaDescription="Guide complet pour changer un cylindre de serrure dans le Haut-Rhin. Certifications A2P, étapes pas à pas, comparatif marques (Mul-T-Lock, Fichet, Vachette). Tarifs 68."
      h1="Comment changer un cylindre de serrure : guide complet 2024"
      slug="comment-changer-cylindre-serrure"
      breadcrumbItems={breadcrumbItems}
      tocItems={tocItems}
      schemas={schemas}
    >
      {/* ── Section 1 : Pourquoi ── */}
      <section id="pourquoi">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-0 mb-4">
          Pourquoi et quand changer son cylindre de serrure
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Le cylindre de serrure — appelé aussi barillet — est la pièce maîtresse de votre sécurité d'entrée.
          C'est lui qui reconnaît votre clé et actionne le mécanisme d'ouverture. Avec le temps ou après
          certains événements, il peut devenir un maillon faible. Voici les situations qui justifient
          un remplacement.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Après un cambriolage ou une tentative d'effraction
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Même si la tentative a échoué, un cylindre forcé ou griffé est mécaniquement compromis. Les rayures
          d'un crochet de cambrioleur peuvent affaiblir les goupilles et faciliter une prochaine tentative.
          Remplacer le cylindre immédiatement est impératif — consultez également notre guide sur{" "}
          <Link to="/comment-securiser-porte-apres-cambriolage" className="text-[#f97316] hover:underline font-medium">
            la sécurisation après cambriolage
          </Link>.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Après la perte ou le vol de clés
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une clé perdue dans la rue, dans un sac volé ou laissée chez un prestataire dont vous n'êtes plus sûr
          est une clé potentiellement entre de mauvaises mains. Le seul moyen d'être certain que personne
          d'indésirable ne peut entrer chez vous est de changer le cylindre. Les doubles que vous aviez remis
          à des personnes qui n'y ont plus droit (ex-locataire, prestataire terminé) justifient également
          un remplacement.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Lors d'un déménagement dans un logement existant
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Vous venez d'emménager dans un appartement ou une maison ancienne ? Vous ne savez pas combien de
          doubles de clés ont été faits par les anciens occupants, ni qui en dispose. Changer le cylindre dès
          votre arrivée est la seule façon de maîtriser totalement les accès à votre logement. C'est un
          investissement modeste (à partir de 79€ TTC en pose) pour une tranquillité d'esprit totale.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Quand le cylindre est usé ou grippé
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Un cylindre qui résiste à l'insertion de la clé, qui nécessite de forcer pour tourner, ou dont les
          goupilles collent est un cylindre en fin de vie. Attendre que la panne soit complète vous expose à
          une situation de porte bloquée qui nécessitera une intervention d'urgence bien plus coûteuse.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Pour moderniser la sécurité d'un logement ancien
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          De nombreuses maisons alsaciennes du Haut-Rhin conservent des serrures installées dans les
          années 1980-1990, dont les cylindres n'offrent aucune résistance aux techniques modernes de
          cambriolage (picking, bumping). Le remplacement par un cylindre haute sécurité certifié A2P
          est l'upgrade sécurité le plus efficace pour son prix.
        </p>
      </section>

      <NeedHelp context="Changement de cylindre dans le 68 — devis gratuit, intervention le jour même. 03 74 47 47 93." />

      {/* ── Section 2 : Choisir ── */}
      <section id="choisir-cylindre">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Choisir le bon cylindre : dimensions et types
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Avant d'acheter ou de commander un cylindre, deux paramètres sont indispensables : les dimensions
          exactes et le type de cylindre adapté à votre porte.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Mesurer son cylindre actuel
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          La dimension d'un cylindre européen s'exprime en deux chiffres correspondant aux longueurs de chaque
          côté de la porte (ex : 30/30, 35/45, 40/50). Pour mesurer correctement :
        </p>
        <ol className="list-decimal list-inside space-y-2 text-[#334155] mb-6 pl-2">
          <li>Ouvrez la porte et repérez la vis de fixation centrale du cylindre dans la serrure.</li>
          <li>
            Mesurez la distance entre le centre de cette vis et le bord extérieur du cylindre côté extérieur.
          </li>
          <li>Faites la même mesure côté intérieur.</li>
          <li>
            Ajoutez environ 5 mm à chaque mesure pour que le cylindre dépasse légèrement — il ne doit
            pas être affleurant au bord, ce qui faciliterait son arrachage.
          </li>
        </ol>
        <p className="text-[#334155] leading-relaxed mb-4">
          Attention : un cylindre trop court ne peut pas être fixé correctement. Un cylindre trop long
          dépasse trop du bord de porte et peut être arraché avec une pince-étau. La précision est donc
          importante.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Cylindre européen profil : le standard
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Le cylindre "profil européen" (section ovale) est le standard installé sur la quasi-totalité des
          serrures modernes. Il est compatible avec les serrures de la plupart des marques (Vachette, Bricard,
          Fichet, Mul-T-Lock). C'est ce format que nous installons sauf contre-indication spécifique.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Cylindre à bouton intérieur
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Pour les logements où vous souhaitez pouvoir sortir sans clé depuis l'intérieur, le cylindre à
          bouton (ou demi-cylindre intérieur) est une option pratique. Il remplace la clé intérieure par un
          bouton rotatif. Particulièrement apprécié pour les maisons avec chien, où sortir en urgence doit
          rester possible sans chercher ses clés.
        </p>
      </section>

      {/* ── Section 3 : Certifications ── */}
      <section id="certifications">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Les certifications A2P expliquées
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          La certification A2P (Assurance Prévention Protection) est le standard français de référence pour
          évaluer la résistance d'un cylindre à l'effraction. Elle est délivrée par le CNPP (Centre National
          de Prévention et de Protection) après des tests rigoureux réalisés par des professionnels.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#1a2c4e] text-white">
                <th className="text-left px-4 py-3 font-semibold">Certification</th>
                <th className="text-left px-4 py-3 font-semibold">Résistance</th>
                <th className="text-left px-4 py-3 font-semibold">Recommandé pour</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A2P* (1 étoile)", "5 min de résistance", "Logement standard, 1er recours"],
                ["A2P** (2 étoiles)", "10 min de résistance", "Maison individuelle, appartement cible"],
                ["A2P*** (3 étoiles)", "15 min de résistance", "Porte blindée, logement à risque élevé"],
                ["BP1 / BP2 / BP3", "Résistance renforcée bumpkeys", "Zones à forte criminalité"],
              ].map(([cert, resistance, usage], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                  <td className="px-4 py-3 font-semibold text-[#1a2c4e]">{cert}</td>
                  <td className="px-4 py-3 text-[#334155]">{resistance}</td>
                  <td className="px-4 py-3 text-[#334155]">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[#334155] leading-relaxed mb-4">
          La plupart des contrats d'assurance habitation "tous risques" exigent au minimum un cylindre A2P*
          pour valider une indemnisation après cambriolage. Certains contrats premium exigent A2P**. Vérifiez
          vos conditions générales. En cas de doute, choisissez A2P** : c'est le meilleur rapport
          sécurité/prix du marché.
        </p>

        <div className="rounded-xl bg-[#fff7ed] border border-[#fed7aa] p-5 mb-6">
          <p className="font-bold text-[#9a3412] mb-2">Important — Assurance habitation</p>
          <p className="text-sm text-[#7c2d12] leading-relaxed">
            Si votre logement est cambriolé et que votre cylindre ne répond pas aux exigences de votre
            contrat d'assurance, votre assureur peut légitimement réduire ou refuser l'indemnisation. Un
            cylindre A2P** à 100-150€ peut éviter des milliers d'euros de pertes non remboursées.
          </p>
        </div>
      </section>

      {/* ── Section 4 : Étapes ── */}
      <section id="etapes">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Les 6 étapes du remplacement de cylindre
        </h2>
        <p className="text-[#334155] leading-relaxed mb-5">
          Voici le protocole exact qu'un technicien qualifié applique pour changer un cylindre de serrure.
          Chaque étape compte — une erreur dans le dimensionnement ou le positionnement peut compromettre
          l'ensemble du dispositif.
        </p>

        {[
          {
            num: "1",
            titre: "Diagnostiquer la serrure existante",
            texte:
              "Avant toute commande, identifier le type de serrure (1 point, 3 points, multipoints), le format du cylindre (profil européen, suisse, ovale), et l'état du mécanisme. Un mécanisme défaillant ne sera pas corrigé par le seul changement du cylindre.",
          },
          {
            num: "2",
            titre: "Mesurer avec précision",
            texte:
              "Mesurer les deux côtés du cylindre au millimètre près, comme décrit dans la section précédente. Une erreur de 5 mm peut rendre le montage impossible ou compromettre la sécurité.",
          },
          {
            num: "3",
            titre: "Déposer le cylindre existant",
            texte:
              "Insérer la clé dans le cylindre et la tourner légèrement (position de déverrouillage) pour aligner la came. Desserrer la vis de fixation centrale (vis de 3 ou 4 mm généralement). Tirer le cylindre vers soi tout en maintenant la position de la clé.",
          },
          {
            num: "4",
            titre: "Vérifier et nettoyer le logement",
            texte:
              "Inspecter le logement dans la serrure : absence de copeaux, d'oxydation ou de déformation. Nettoyer et lubrifier légèrement le mécanisme si nécessaire. C'est le bon moment pour vérifier que la gâche est correctement alignée.",
          },
          {
            num: "5",
            titre: "Installer le nouveau cylindre",
            texte:
              "Insérer le nouveau cylindre en alignant la came avec l'axe de la serrure (toujours en position légèrement tournée). S'assurer que le cylindre entre sans forcer. Visser la vis centrale sans serrer à fond pour tester d'abord.",
          },
          {
            num: "6",
            titre: "Tester et régler",
            texte:
              "Tester l'ouverture et la fermeture avec toutes les clés fournies, porte ouverte d'abord puis porte fermée. Vérifier le bon fonctionnement sur tous les points de la serrure multipoints. Serrer définitivement la vis. Remettre tous les doubles de clés au client.",
          },
        ].map((step) => (
          <div key={step.num} className="flex gap-4 mb-5">
            <div className="w-8 h-8 rounded-full bg-[#f97316] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
              {step.num}
            </div>
            <div>
              <p className="font-semibold text-[#1a2c4e] mb-1">{step.titre}</p>
              <p className="text-[#334155] text-sm leading-relaxed">{step.texte}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Section 5 : Comparatif ── */}
      <section id="comparatif">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Comparatif des principales marques de cylindres
        </h2>
        <p className="text-[#334155] leading-relaxed mb-5">
          Le marché des cylindres haute sécurité est dominé par quelques grandes marques, chacune avec ses
          spécificités. Voici un aperçu objectif des modèles que nous installons le plus souvent dans le
          Haut-Rhin.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#1a2c4e] text-white">
                <th className="text-left px-4 py-3 font-semibold">Marque / Modèle</th>
                <th className="text-left px-4 py-3 font-semibold">Certification</th>
                <th className="text-left px-4 py-3 font-semibold">Points forts</th>
                <th className="text-right px-4 py-3 font-semibold">Prix indicatif</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mul-T-Lock MT5+", "A2P***", "Clé brevetée, anti-picking, anti-bumping", "150–220€"],
                ["Fichet F3D", "A2P***", "3 rangées de goupilles, résistance élevée", "130–190€"],
                ["Vachette Radial NT+", "A2P**", "Bon rapport qualité/prix, clé brevetée", "80–130€"],
                ["Bricard Astral", "A2P**", "Large compatibilité, clé interchangeable", "75–120€"],
                ["ISEO Aperio", "A2P**", "Version connectée disponible, IoT", "120–200€"],
                ["Mottura Champions C28", "A2P*", "Entrée de gamme fiable, prix accessible", "50–80€"],
              ].map(([marque, cert, points, prix], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                  <td className="px-4 py-3 font-semibold text-[#1a2c4e]">{marque}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-[#f97316]/10 text-[#f97316] font-semibold text-xs px-2 py-0.5 rounded-full">
                      {cert}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#334155]">{points}</td>
                  <td className="px-4 py-3 text-right font-medium text-[#1a2c4e]">{prix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#64748b] mb-4">
          * Prix indicatifs cylindre seul, hors pose. La pose par un technicien Albert Serrurerie est
          facturée à partir de 79€ TTC en main d'œuvre.
        </p>

        <p className="text-[#334155] leading-relaxed mb-4">
          Notre recommandation pour le Haut-Rhin : le <strong>Vachette Radial NT+</strong> offre le meilleur
          compromis pour une maison individuelle standard (A2P**, clé brevetée, prix raisonnable). Pour une
          porte blindée ou un logement ciblé, nous recommandons le <strong>Mul-T-Lock MT5+</strong>.
          Pour en savoir plus, consultez notre guide{" "}
          <Link to="/comment-choisir-serrure-3-points" className="text-[#f97316] hover:underline font-medium">
            Comment choisir une serrure 3 points
          </Link>.
        </p>
      </section>

      <NeedHelp context="Changement de cylindre dans le Haut-Rhin. Intervention le jour même, matériel certifié A2P fourni." />

      {/* ── Section 6 : Tarifs ── */}
      <section id="tarifs">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Tarifs de changement de cylindre dans le Haut-Rhin (68)
        </h2>
        <p className="text-[#334155] leading-relaxed mb-5">
          Nos tarifs incluent le déplacement, la main d'œuvre et, selon la formule choisie, la fourniture
          du cylindre. Un devis gratuit vous est systématiquement communiqué avant intervention.
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
                ["Pose cylindre fourni par le client", "À partir de 79€ TTC"],
                ["Cylindre standard A2P* fourni + pose", "À partir de 120€ TTC"],
                ["Cylindre haute sécurité A2P** fourni + pose", "À partir de 155€ TTC"],
                ["Cylindre A2P*** premium fourni + pose", "À partir de 220€ TTC"],
                ["Remplacement cylindre porte blindée", "À partir de 180€ TTC"],
                ["Remplacement cylindre serrure multipoints", "À partir de 150€ TTC"],
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
          Nous intervenons dans toute l'agglomération mulhousienne et dans le Haut-Rhin pour les
          changements de cylindre — aussi bien en urgence qu'en rendez-vous planifié.
          Consultez notre page{" "}
          <Link to="/serrurier-mulhouse" className="text-[#f97316] hover:underline font-medium">
            Serrurier à Mulhouse
          </Link>{" "}
          ou{" "}
          <Link to="/serrurier-colmar" className="text-[#f97316] hover:underline font-medium">
            Serrurier à Colmar
          </Link>.
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
          Questions fréquentes — Cylindre de serrure
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
          Changer votre cylindre dans le Haut-Rhin
        </p>
        <p className="text-[#94a3b8] mb-5 text-sm">
          Matériel certifié A2P fourni sur place. Devis gratuit avant intervention. Intervention le jour même.
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

export default CommentChangerCylindre;
