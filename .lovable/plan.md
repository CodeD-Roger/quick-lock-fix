

# Ajout des Mentions Légales et conformité RGPD

## Informations de l'entreprise (extraites de Pappers)

- **Nom** : SERRURITAS
- **Forme juridique** : EURL (Entreprise Unipersonnelle a Responsabilite Limitee)
- **SIRET** : 992 115 154 00013
- **SIREN** : 992 115 154
- **TVA** : FR93992115154
- **Capital social** : 1 000,00 EUR
- **Adresse** : 20 B Impasse Edgar Quinet, 93120 La Courneuve
- **Dirigeant / Directeur de publication** : Mohamed Ben Meimoun
- **Telephone** : 03 74 47 47 93 (celui du site)

---

## Ce qui sera fait

### 1. Creer une page `/mentions-legales`

Nouveau fichier `src/pages/MentionsLegales.tsx` contenant :

- **Editeur du site** : nom, forme juridique, SIRET, adresse, telephone, email (a confirmer ou placeholder)
- **Directeur de publication** : Mohamed Ben Meimoun
- **Hebergeur** : Lovable / Cloudflare (selon l'hebergement actuel)
- **Propriete intellectuelle** : clause standard
- **Donnees personnelles (RGPD)** :
  - Responsable du traitement
  - Types de donnees collectees (formulaire de contact, telephone)
  - Finalite du traitement
  - Base legale (consentement / interet legitime)
  - Duree de conservation
  - Droits des utilisateurs (acces, rectification, suppression, portabilite, opposition)
  - Contact pour exercer ses droits
  - Droit de reclamation aupres de la CNIL
- **Cookies** : mention sur l'utilisation ou non de cookies
- **Limitation de responsabilite** : clause standard

La page aura un style coherent avec le reste du site (fond sombre, texte clair, design sobre).

### 2. Ajouter la route dans `App.tsx`

Ajouter `<Route path="/mentions-legales" element={<MentionsLegales />} />`.

### 3. Mettre a jour le footer

Dans `src/pages/Index.tsx`, transformer les textes statiques "Mentions legales" et "Politique de confidentialite" en liens cliquables :
- "Mentions legales" --> lien vers `/mentions-legales`
- "Politique de confidentialite" --> lien vers `/mentions-legales#rgpd` (ancre vers la section RGPD de la meme page)

---

## Details techniques

- **Fichiers crees** : `src/pages/MentionsLegales.tsx`
- **Fichiers modifies** : `src/App.tsx` (ajout route), `src/pages/Index.tsx` (liens footer)
- **Email** : un placeholder `contact@serruritas.fr` sera utilise, modifiable ensuite
- **Hebergeur** : mentionne comme "Lovable (Cloudflare)" avec l'URL du site

