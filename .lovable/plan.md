

# 🔐 Landing Page Serrurier d'Urgence — Plan de Réalisation

## Direction Artistique
- **Palette** : Bleu nuit profond (#0F172A) + blanc pur + accents dorés/ambrés pour évoquer sécurité et premium
- **Ambiance** : Dark mode élégant, contrastes forts, typographie bold et moderne
- **Bouton d'appel** : Gradient subtil ambre/doré, lumineux sans être agressif, avec micro-animation pulse
- **Icônes** : Lucide React avec style cohérent, taille généreuse, encadrées dans des cercles avec fond subtil

## Animations (GSAP)
- Apparition progressive des sections au scroll (fade-in + léger slide up)
- Cartes services avec hover lift + glow subtil
- Bouton d'appel avec animation pulse douce permanente
- Compteur animé pour les étapes du process
- Transitions fluides entre blocs, parallax léger sur le hero

## Structure des Sections

### 1. 🎯 Hero Section — Plein écran, impact maximal
- Fond sombre avec motif géométrique subtil (CSS)
- Titre XXL : **"Serrurier d'Urgence — Intervention Rapide"**
- Sous-titre : "24h/24 • 7j/7 • Intervention en 30 min"
- Numéro **03 74 47 47 93** affiché en très grand
- Bouton CTA "📞 Appeler Maintenant" proéminent avec lien `tel:`
- Badge "Devis gratuit • Sans surprise"

### 2. 📌 Barre Sticky (mobile-first)
- Fixée en bas sur mobile, en haut sur desktop
- Numéro cliquable toujours visible
- Design compact et élégant

### 3. ✅ Bloc de Confiance — 4 piliers
- **Intervention < 30 min** — icône chronomètre
- **Tarifs transparents** — icône devis
- **Agréé assurance** — icône bouclier
- **Disponible 24/7** — icône horloge
- Cartes avec fond glass-morphism, icônes premium

### 4. 🔧 Services Principaux — 4 cartes animées
- Ouverture de porte claquée/fermée
- Changement & installation de serrure
- Sécurisation après effraction
- Porte blindée & serrure renforcée
- Chaque carte : icône, titre, description courte, bouton appel
- Animation hover avec élévation et glow

### 5. 📋 Process en 3 Étapes
- **1.** Vous appelez → **2.** On intervient rapidement → **3.** Problème résolu
- Design en timeline horizontale (verticale sur mobile)
- Numéros animés, lignes de connexion entre étapes
- Simple, rassurant, visuel

### 6. 📍 Zone d'Intervention
- Mise en avant de la disponibilité géographique
- Mention "Nous intervenons près de chez vous"
- Texte rassurant sur la proximité et la réactivité

### 7. 🚀 CTA Final Fort
- Fond contrasté, section pleine largeur
- "Une urgence ? Appelez maintenant."
- Numéro en très grand + bouton d'appel
- Rappel : intervention rapide, devis gratuit

### 8. Footer Minimaliste
- Mentions légales, horaires, numéro
- Design sobre et professionnel

## Exigences Techniques
- **Mobile-first** : tout est optimisé pour le clic téléphone sur mobile
- **Performance** : pas d'images lourdes, CSS/SVG pour les visuels
- **GSAP** : animations au scroll, micro-interactions
- **Accessibilité** : contrastes AAA, liens `tel:` partout
- **One-page** : navigation fluide par ancres

