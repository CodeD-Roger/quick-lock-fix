import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au site
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-gradient-gold">Mentions Légales</span>
        </h1>

        {/* Éditeur du site */}
        <section className="navy-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">1. Éditeur du site</h2>
          <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
            <li><strong className="text-white">Nom :</strong> SERRURITAS</li>
            <li><strong className="text-white">Forme juridique :</strong> EURL (Entreprise Unipersonnelle à Responsabilité Limitée)</li>
            <li><strong className="text-white">Capital social :</strong> 1 000,00 €</li>
            <li><strong className="text-white">SIRET :</strong> 992 115 154 00013</li>
            <li><strong className="text-white">SIREN :</strong> 992 115 154</li>
            <li><strong className="text-white">N° TVA intracommunautaire :</strong> FR93992115154</li>
            <li><strong className="text-white">Adresse :</strong> 20 B Impasse Edgar Quinet, 93120 La Courneuve</li>
            <li><strong className="text-white">Téléphone :</strong> 03 74 47 47 93</li>
            <li><strong className="text-white">Email :</strong> contact@serruritas.fr</li>
          </ul>
        </section>

        {/* Directeur de publication */}
        <section className="navy-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">2. Directeur de la publication</h2>
          <p className="text-slate-300 text-sm">Mohamed Ben Meimoun, en qualité de gérant de la société SERRURITAS.</p>
        </section>

        {/* Hébergeur */}
        <section className="navy-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">3. Hébergeur</h2>
          <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
            <li><strong className="text-white">Nom :</strong> Lovable (via Cloudflare)</li>
            <li><strong className="text-white">Site :</strong> https://lovable.dev</li>
            <li><strong className="text-white">URL du site hébergé :</strong> https://quick-lock-fix.lovable.app</li>
          </ul>
        </section>

        {/* Propriété intellectuelle */}
        <section className="navy-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">4. Propriété intellectuelle</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, logos, vidéos, graphismes, icônes) est la propriété exclusive de SERRURITAS ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de SERRURITAS.
          </p>
        </section>

        {/* RGPD */}
        <section id="rgpd" className="navy-card p-6 md:p-8 mb-8 scroll-mt-8">
          <h2 className="text-xl font-bold text-white mb-4">5. Protection des données personnelles (RGPD)</h2>

          <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
            <div>
              <h3 className="text-white font-semibold mb-2">Responsable du traitement</h3>
              <p>SERRURITAS — 20 B Impasse Edgar Quinet, 93120 La Courneuve — contact@serruritas.fr</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Données collectées</h3>
              <p>Dans le cadre de l'utilisation du site, les données suivantes peuvent être collectées :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Nom et prénom</li>
                <li>Numéro de téléphone</li>
                <li>Adresse email</li>
                <li>Adresse postale (pour les interventions)</li>
                <li>Données de navigation (cookies techniques)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Finalités du traitement</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Traitement des demandes de devis et d'intervention</li>
                <li>Prise de contact par téléphone ou email</li>
                <li>Amélioration de l'expérience utilisateur sur le site</li>
                <li>Gestion de la relation client</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Base légale</h3>
              <p>Le traitement des données est fondé sur le consentement de l'utilisateur (article 6.1.a du RGPD) et/ou l'exécution de mesures précontractuelles (article 6.1.b du RGPD).</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Durée de conservation</h3>
              <p>Les données personnelles sont conservées pour une durée maximale de 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Droits des utilisateurs</h3>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-white">Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                <li><strong className="text-white">Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
                <li><strong className="text-white">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong className="text-white">Droit à la limitation :</strong> demander la limitation du traitement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Exercer vos droits</h3>
              <p>Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : <strong className="text-white">contact@serruritas.fr</strong> ou par courrier à l'adresse : SERRURITAS, 20 B Impasse Edgar Quinet, 93120 La Courneuve.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Réclamation auprès de la CNIL</h3>
              <p>Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gradient-gold hover:underline">www.cnil.fr</a></p>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="navy-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">6. Cookies</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traçage n'est déposé sans votre consentement. Vous pouvez configurer votre navigateur pour refuser les cookies.
          </p>
        </section>

        {/* Limitation de responsabilité */}
        <section className="navy-card p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">7. Limitation de responsabilité</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            SERRURITAS s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, elle ne saurait être tenue responsable des erreurs, omissions ou résultats obtenus suite à l'utilisation de ces informations. SERRURITAS se réserve le droit de modifier le contenu du site à tout moment et sans préavis.
          </p>
        </section>

      </div>
    </div>
  );
};

export default MentionsLegales;
