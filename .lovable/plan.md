

# Suppression de la section "Nos marques partenaires"

## Changement
- **`src/pages/Index.tsx`** : Supprimer la section `PARTNERS MARQUEE` (lignes ~295-342) ainsi que tous les imports de logos partenaires inutilisés en haut du fichier.

## Script Google Ads
Le script gtag.js **reste en place** — il ne pose pas de problème car il est chargé dynamiquement par `CookieBanner.tsx` uniquement après consentement utilisateur (RGPD conforme). Le problème initial venait du chargement statique dans le HTML, qui a déjà été corrigé.

