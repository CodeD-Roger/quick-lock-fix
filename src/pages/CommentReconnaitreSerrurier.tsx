import { Link } from "react-router-dom";
import GuidePageLayout, { NeedHelp, TocItem, BreadcrumbItem } from "@/components/GuidePageLayout";

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

const tocItems: TocItem[] = [
  { id: "signaux", title: "Les signaux d'alarme à connaître" },
  { id: "verifications", title: "5 vérifications avant d'appeler" },
  { id: "arnaques", title: "Comment fonctionnent les arnaques" },
  { id: "recours", title: "Recours si vous avez été arnaqué" },
  { id: "criteres", title: "Les critères d'un serrurier de confiance" },
  { id: "urgence", title: "En urgence : comment réagir vite et bien" },
  { id: "faq", title: "Questions fréquentes" },
];

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Accueil", url: "/" },
  { name: "Guides", url: undefined },
  { name: "Comment reconnaître un serrurier sérieux" },
];

const faqItems = [
  {
    question: "Comment vérifier qu'un serrurier est bien installé localement ?",
    answer:
      "Demandez le numéro SIRET de l'entreprise et vérifiez-le sur le site societe.com ou infogreffe.fr. Un numéro SIRET valide confirme l'existence légale de l'entreprise. Vérifiez que l'adresse du siège social correspond à la zone géographique annoncée. Méfiez-vous des entreprises dont le siège est dans une grande ville mais qui prétendent intervenir chez vous en 15 minutes.",
  },
  {
    question: "Un serrurier peut-il refuser de me donner un devis avant d'intervenir ?",
    answer:
      "Non. Depuis la loi Hamon de 2014, tout prestataire doit fournir un devis écrit pour tout travail d'un montant supérieur à 150€ TTC (si vous le demandez). Pour les travaux urgents, un devis verbal est acceptable mais vous devez pouvoir le confirmer par écrit. Refuser de chiffrer l'intervention avant de commencer est un signal d'arnaque.",
  },
  {
    question: "Que faire si un serrurier exige un paiement en espèces uniquement ?",
    answer:
      "C'est un signal d'alarme fort. Un artisan sérieux accepte les modes de paiement habituels : chèque, virement, carte bancaire. L'insistance sur le cash uniquement permet à des prestataires malhonnêtes d'éviter toute trace comptable et de pratiquer des prix non déclarés. Refusez l'intervention si vous ne pouvez pas payer autrement.",
  },
  {
    question: "Comment signaler une arnaque de serrurier ?",
    answer:
      "Plusieurs recours sont possibles : déposer une plainte au commissariat ou à la gendarmerie pour escroquerie ou abus de faiblesse, signaler sur le site SignalConso (signal.conso.gouv.fr) du Ministère de l'Économie, contacter la DGCCRF (Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes), et laisser un avis négatif documenté sur Google Maps.",
  },
  {
    question: "Un serrurier doit-il obligatoirement fournir une facture ?",
    answer:
      "Oui, c'est une obligation légale pour tout professionnel. La facture doit comporter : le nom et l'adresse de l'entreprise, le numéro SIRET, la description des travaux, le montant TTC ventilé (main d'œuvre, pièces, déplacement), la date et la TVA appliquée. Exigez systématiquement une facture — son absence est un signe de travail non déclaré.",
  },
  {
    question: "Albert Serrurerie est-il inscrit à la Chambre des Métiers ?",
    answer:
      "Oui. Albert Serrurerie est une entreprise inscrite au Répertoire des Métiers d'Alsace, avec numéro SIRET, assurance responsabilité civile professionnelle et décennale. Nos tarifs sont publics et affichés sur ce site. Nous remettons une facture détaillée après chaque intervention, sans exception.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Comment reconnaître un serrurier sérieux et éviter les arnaques dans le 68",
    description:
      "Guide complet pour identifier un serrurier de confiance dans le Haut-Rhin. Signaux d'alarme, vérifications, recours contre les arnaques. Conseils de professionnel.",
    author: { "@type": "Organization", name: "Albert Serrurerie" },
    publisher: {
      "@type": "Organization",
      name: "Albert Serrurerie",
      logo: { "@type": "ImageObject", url: "https://albert-serrurerie.com/favicon.ico" },
    },
    datePublished: "2024-02-20",
    dateModified: "2024-03-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://albert-serrurerie.com/comment-reconnaitre-serrurier-serieux",
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
        name: "Comment reconnaître un serrurier sérieux",
        item: "https://albert-serrurerie.com/comment-reconnaitre-serrurier-serieux",
      },
    ],
  },
];

const CommentReconnaitreSerrurier = () => {
  return (
    <GuidePageLayout
      metaTitle="Comment reconnaître un serrurier sérieux et éviter les arnaques | Albert Serrurerie 68"
      metaDescription="Comment identifier un bon serrurier dans le Haut-Rhin et éviter les arnaques ? Signaux d'alarme, 5 vérifications essentielles, recours. Guide complet d'Albert Serrurerie."
      h1="Comment reconnaître un serrurier sérieux : guide anti-arnaques dans le 68"
      slug="comment-reconnaitre-serrurier-serieux"
      breadcrumbItems={breadcrumbItems}
      tocItems={tocItems}
      schemas={schemas}
    >
      {/* ── Intro ── */}
      <p className="text-[#334155] leading-relaxed mb-6 text-base">
        Les arnaques à la serrurerie représentent des milliers de victimes par an en France. Le secteur
        est l'un des plus infiltrés par des prestataires malhonnêtes, qui profitent de la vulnérabilité
        des personnes en situation d'urgence — porte claquée, serrure bloquée, lendemain d'effraction.
        Ce guide vous donne toutes les clés pour identifier un prestataire de confiance et éviter les
        pièges les plus fréquents dans le Haut-Rhin.
      </p>

      {/* ── Section 1 : Signaux ── */}
      <section id="signaux">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-2 mb-4">
          Les signaux d'alarme à connaître avant de rappeler
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Un serrurier peu scrupuleux peut être identifié dès le premier contact téléphonique ou à
          l'arrivée sur place. Voici les signaux qui doivent vous alerter.
        </p>

        <div className="space-y-4 mb-6">
          {[
            {
              signal: "Tarif affiché très bas (39€, 49€, 59€)",
              explication:
                "Un prix d'appel irréel sert exclusivement à décrocher l'appel. Une fois le technicien sur place et la porte ouverte, la facture finale s'envole à 400€, 600€ ou davantage avec des arguments impossibles à contester.",
            },
            {
              signal: "Refus de donner un tarif par téléphone",
              explication:
                "Un professionnel sérieux est capable de communiquer une fourchette de prix dès le premier appel, sur la base du type de serrure et de l'intervention. Refuser de s'engager sur un prix avant de voir « sur place » est une tactique pour garder la liberté de facturer ce qu'il veut.",
            },
            {
              signal: "Aucune adresse locale identifiable",
              explication:
                "Les plateformes d'arnaques affichent souvent des adresses dans votre ville mais le technicien vient d'une autre région. Cherchez leur adresse sur Google Maps : si c'est une boîte aux lettres dans une salle de réunion partagée, c'est suspect.",
            },
            {
              signal: "Pression pour signer un devis rapidement",
              explication:
                "Une fois sur place, si le technicien vous pousse à signer un bon de commande immédiatement « sinon le prix change », prenez le temps de lire attentivement avant de signer. Rien ne vous oblige à signer sous pression.",
            },
            {
              signal: "Facture non remise ou non détaillée",
              explication:
                "L'absence de facture ou une facture rédigée à la main sans SIRET est un signal fort de travail non déclaré et potentiellement d'arnaque. Exigez une facture officielle avant tout paiement.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl border border-[#fecaca] bg-[#fef2f2]">
              <div className="w-5 h-5 rounded-full bg-[#ef4444] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                !
              </div>
              <div>
                <p className="font-semibold text-[#991b1b] mb-1">{item.signal}</p>
                <p className="text-sm text-[#7f1d1d] leading-relaxed">{item.explication}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NeedHelp context="Albert Serrurerie : tarifs publics, SIRET vérifiable, facture systématique. Appelez le 03 74 47 47 93." />

      {/* ── Section 2 : Vérifications ── */}
      <section id="verifications">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          5 vérifications à faire avant d'appeler un serrurier
        </h2>
        <p className="text-[#334155] leading-relaxed mb-5">
          Même en situation d'urgence, ces 5 vérifications prennent moins de 3 minutes et peuvent vous
          éviter une arnaque coûteuse.
        </p>

        {[
          {
            num: "1",
            titre: "Vérifiez les avis Google",
            texte:
              "Cherchez le nom de l'entreprise sur Google et regardez les avis clients. Une entreprise sérieuse cumule des dizaines voire des centaines d'avis sur plusieurs années, avec une note généralement au-dessus de 4/5. Méfiez-vous des entreprises avec des avis tous récents et quasi identiques : c'est un signe de faux avis achetés. Les avis négatifs décrivant des tarifs abusifs sont le signal le plus fiable.",
          },
          {
            num: "2",
            titre: "Vérifiez le numéro SIRET",
            texte:
              "Demandez le numéro SIRET par téléphone et vérifiez-le sur societe.com ou sur infogreffe.fr. Vous pouvez voir l'ancienneté de l'entreprise, son activité déclarée (serrurerie = code APE 4322A), et si elle est toujours active. Une entreprise créée il y a 3 mois avec une adresse en dehors de votre département est suspecte.",
          },
          {
            num: "3",
            titre: "Demandez un tarif ferme par téléphone",
            texte:
              "Décrivez précisément votre situation (type de serrure si vous le connaissez, adresse, urgence ou rendez-vous) et demandez une fourchette de prix. Un professionnel sérieux peut vous communiquer un tarif indicatif : « Pour une ouverture de porte serrure 1 point, c'est entre X€ et Y€ TTC. » S'il refuse de donner le moindre chiffre, raccrochez.",
          },
          {
            num: "4",
            titre: "Vérifiez que l'entreprise est bien locale",
            texte:
              "Demandez l'adresse exacte de l'entreprise et cherchez-la sur Google Maps. Un serrurier qui prétend être « à Mulhouse » mais dont l'adresse est à Paris ou dans une zone industrielle lointaine n'est pas le prestataire local qu'il prétend être.",
          },
          {
            num: "5",
            titre: "Consultez votre assurance habitation",
            texte:
              "Beaucoup de contrats d'assurance habitation incluent une assistance dépannage qui couvre les interventions de serrurier. Appelez d'abord votre assureur — il peut avoir un réseau de prestataires agréés à des tarifs encadrés. Cette solution est souvent plus avantageuse qu'un appel direct à un prestataire inconnu.",
          },
        ].map((step) => (
          <div key={step.num} className="flex gap-4 mb-5">
            <div className="w-8 h-8 rounded-full bg-[#1a2c4e] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
              {step.num}
            </div>
            <div>
              <p className="font-semibold text-[#1a2c4e] mb-1">{step.titre}</p>
              <p className="text-[#334155] text-sm leading-relaxed">{step.texte}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Section 3 : Comment ça marche ── */}
      <section id="arnaques">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Comment fonctionnent les arnaques à la serrurerie
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Comprendre le mécanisme de l'arnaque permet de mieux s'en prémunir. Les plateformes de
          serrurerie frauduleuses opèrent avec une organisation rodée et professionnelle.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Le référencement publicitaire comme piège
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Ces plateformes investissent massivement en publicité Google Ads pour apparaître en tête
          des résultats quand vous cherchez « serrurier urgence + votre ville ». Elles paient plusieurs
          dizaines d'euros par clic pour capturer des personnes en situation d'urgence. Le prix
          publicitaire est ensuite répercuté sur la facture finale.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Le centre d'appel qui décroche partout
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Ces plateformes ont souvent un centre d'appel centralisé qui gère des dizaines de villes
          simultanément. L'opérateur qui vous répond peut se trouver n'importe où en France. Il dispatche
          l'appel à un technicien itinérant (souvent sous-traitant) qui peut venir de loin — d'où les
          délais annoncés impossibles à tenir.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          La facturation abusive sur place
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Une fois la porte ouverte, la situation est psychologiquement difficile : vous êtes rentré
          chez vous et vous voulez que ça se règle vite. Le technicien présente alors une facture
          largement supérieure au tarif annoncé, en inventant des surcoûts : « serrure ancienne »,
          « crochetage impossible, perçage obligatoire », « pièces détachées rares »... Toutes des
          justifications difficiles à contester après coup.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          La pression au paiement immédiat
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          En insistant pour un paiement en espèces ou par carte avant de partir — et en menaçant
          d'appeler la police si vous refusez — les escrocs misent sur le fait que vous cédez pour
          éviter une scène ou un conflit. Sachez que vous avez toujours le droit de refuser une
          facture non conforme au devis initial.
        </p>
      </section>

      {/* ── Section 4 : Recours ── */}
      <section id="recours">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Recours si vous avez été victime d'une arnaque
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Si vous avez payé une facture abusive, vous n'êtes pas sans recours. Plusieurs voies
          s'offrent à vous.
        </p>

        <div className="space-y-4 mb-6">
          {[
            {
              titre: "Déposer plainte pour escroquerie ou abus de faiblesse",
              texte:
                "Au commissariat ou à la gendarmerie, décrivez les faits : tarif annoncé vs facture réelle, comportement coercitif. Apportez la facture, le devis si vous en avez un, et relevez de mémoire le numéro de la voiture du technicien. Ces plaintes sont fondées sur les articles 313-1 (escroquerie) du Code pénal.",
            },
            {
              titre: "Signaler sur SignalConso",
              texte:
                "Le site signal.conso.gouv.fr du Ministère de l'Économie permet de signaler les arnaques aux professionnels. Votre signalement est transmis à la DGCCRF et alerte d'autres consommateurs.",
            },
            {
              titre: "Contester la facture par lettre recommandée",
              texte:
                "Envoyez une lettre recommandée AR à l'entreprise en exposant les faits et en réclamant le remboursement du trop-perçu. Gardez une copie. Si la somme en jeu est inférieure à 10 000€, le Tribunal de proximité est compétent — la procédure peut être lancée sans avocat.",
            },
            {
              titre: "Contacter votre assureur ou votre banque",
              texte:
                "Si vous avez payé par carte bancaire, une procédure de chargeback peut être initiée auprès de votre banque dans certains cas. Votre assurance habitation peut aussi couvrir des dommages liés à une prestation frauduleuse — vérifiez votre contrat.",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 border border-[#e2e8f0] rounded-xl">
              <p className="font-semibold text-[#1a2c4e] mb-2">{item.titre}</p>
              <p className="text-[#334155] text-sm leading-relaxed">{item.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 5 : Critères ── */}
      <section id="criteres">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          Les critères d'un serrurier de confiance
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          Un artisan sérieux présente systématiquement les caractéristiques suivantes :
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#e2e8f0] rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#1a2c4e] text-white">
                <th className="text-left px-4 py-3 font-semibold">Critère</th>
                <th className="text-left px-4 py-3 font-semibold">Serrurier sérieux</th>
                <th className="text-left px-4 py-3 font-semibold">Signal d'arnaque</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tarif au téléphone", "Fourchette communiquée", "Refus ou tarif irréel"],
                ["SIRET", "Fourni sur demande, vérifiable", "Absent ou invalide"],
                ["Adresse", "Locale et vérifiable", "Fictive ou hors zone"],
                ["Devis avant travaux", "Écrit ou verbal, confirmable", "Inexistant ou sous pression"],
                ["Facture", "Détaillée, avec SIRET", "Manuscrite, sans SIRET"],
                ["Paiement", "CB, chèque, virement acceptés", "Espèces uniquement"],
                ["Avis clients", "Nombreux, anciens, variés", "Rares, récents, identiques"],
              ].map(([critere, serieux, arnaque], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                  <td className="px-4 py-3 font-medium text-[#1a2c4e]">{critere}</td>
                  <td className="px-4 py-3 text-[#16a34a] font-medium">{serieux}</td>
                  <td className="px-4 py-3 text-[#dc2626] font-medium">{arnaque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <NeedHelp context="Albert Serrurerie : 2 500+ interventions dans le 68, 98% de satisfaction, tarifs affichés." />

      {/* ── Section 6 : Urgence ── */}
      <section id="urgence">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-4">
          En urgence : comment réagir vite et bien dans le 68
        </h2>
        <p className="text-[#334155] leading-relaxed mb-4">
          La pression de l'urgence est précisément ce que les arnaques exploitent. Mais prendre
          60 secondes pour les bonnes vérifications peut vous économiser des centaines d'euros.
        </p>

        <h3 className="font-display text-lg font-bold text-[#1a2c4e] mt-6 mb-3">
          Numéro à composer en cas de porte claquée dans le 68
        </h3>
        <p className="text-[#334155] leading-relaxed mb-4">
          Albert Serrurerie est joignable directement au{" "}
          <a href={PHONE_LINK} className="text-[#f97316] font-bold hover:underline text-lg">
            {PHONE}
          </a>{" "}
          24 heures sur 24, 7 jours sur 7. Quand vous appelez, notre technicien répond directement —
          pas un centre d'appel externalisé. Il vous communique un tarif ferme et un délai réaliste.
          Aucune intervention ne commence sans votre accord explicite.
        </p>

        <div className="rounded-xl bg-[#f0fdf4] border border-[#86efac] p-5 mb-6">
          <p className="font-bold text-[#14532d] mb-3">Albert Serrurerie — Nos engagements</p>
          <ul className="space-y-2">
            {[
              "Tarif communiqué par téléphone avant déplacement",
              "Devis écrit remis avant le début des travaux",
              "Aucun travail commencé sans accord explicite",
              "Facture détaillée avec SIRET après chaque intervention",
              "Paiement accepté en CB, chèque et virement",
              "Inscription au Répertoire des Métiers d'Alsace",
              "Assurance RC professionnelle et décennale",
              "Plus de 2 500 interventions dans le Haut-Rhin",
            ].map((engagement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#166534]">
                <span className="text-[#16a34a] font-bold shrink-0">✓</span>
                {engagement}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[#334155] leading-relaxed mb-4">
          Pour toute urgence dans le Haut-Rhin, que vous soyez à{" "}
          <Link to="/serrurier-mulhouse" className="text-[#f97316] hover:underline font-medium">
            Mulhouse
          </Link>,{" "}
          <Link to="/serrurier-colmar" className="text-[#f97316] hover:underline font-medium">
            Colmar
          </Link>{" "}
          ou dans un village de la plaine alsacienne, nous intervenons en 20 à 45 minutes selon votre
          localisation. Si vous venez d'être victime d'une effraction, consultez notre guide sur{" "}
          <Link to="/comment-securiser-porte-apres-cambriolage" className="text-[#f97316] hover:underline font-medium">
            comment sécuriser sa porte après un cambriolage
          </Link>. Si vous avez un doute sur votre serrure actuelle, consultez notre guide sur{" "}
          <Link to="/comment-ouvrir-porte-claquee" className="text-[#f97316] hover:underline font-medium">
            comment ouvrir une porte claquée
          </Link>.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <h2 className="font-display text-2xl font-bold text-[#1a2c4e] mt-10 mb-6">
          Questions fréquentes — Choisir un serrurier de confiance
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
          Un serrurier de confiance dans tout le Haut-Rhin
        </p>
        <p className="text-[#94a3b8] mb-5 text-sm">
          Tarifs publics affichés. Devis gratuit avant intervention. Facture avec SIRET. 24h/24, 7j/7.
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

export default CommentReconnaitreSerrurier;
