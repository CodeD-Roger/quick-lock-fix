

# Refonte complète des sections (hors Hero) + FAQ

## Vue d'ensemble

Le Hero reste intact. Toutes les autres sections passent sur fond blanc avec une nouvelle palette claire, des cartes en bleu navy profond, et une section FAQ est ajoutee en bas. Le design sera nettement plus premium et different.

## 1. Nouvelle palette de couleurs (index.css)

Passer d'un theme full dark a un theme hybride :
- Le Hero garde son fond sombre (dark navy)
- Toutes les sections suivantes utilisent un fond blanc (`#FFFFFF`) avec du texte sombre (`#0F172A`)
- Les cartes utilisent un fond bleu navy profond (`#0F172A` / `#1E293B`) avec texte blanc
- Les accents gold/ambre restent pour les elements d'action (boutons CTA, icones)
- Ajout de variables CSS pour le mode "light sections" : `--section-bg`, `--section-fg`, `--card-navy`, etc.

Les classes CSS mises a jour :
- `.glass-card` remplacee par une nouvelle classe `.navy-card` (fond bleu navy, coins arrondis, ombre portee douce)
- `.text-gradient-gold` reste pour les titres accentues
- Nouveau `.section-light` pour les sections a fond blanc
- Nouvelle ombre premium : `shadow-[0_4px_30px_rgba(15,23,42,0.08)]`

## 2. Section Confiance — refonte visuelle

- Fond blanc, texte sombre
- Les 4 cartes passent en fond bleu navy avec texte blanc et icones gold
- Layout : grille 4 colonnes, cartes avec bordure arrondie plus prononcee (`rounded-2xl`)
- Icones dans des cercles gold/ambre au lieu de fond transparent
- Hover : legere elevation + ombre plus prononcee (pas de glow gold)
- Titres en blanc, descriptions en gris clair (`text-slate-300`)

## 3. Section Services — refonte complete

- Fond blanc
- Les 4 services passent en cartes individuelles pleine largeur en 2x2 grid
- Chaque carte : fond navy, icone dans un cercle gradient gold a gauche, texte blanc a droite
- Sous chaque description, un lien "Appeler" avec fleche, en couleur gold
- Hover : translation Y + ombre plus large
- Les icones sont plus grandes (w-10 h-10) dans des cercles de 60px

## 4. Section Process — refonte en timeline

- Fond blanc
- Les numeros dans des cercles gold restent mais sont plus grands (w-20 h-20, texte 3xl)
- Le connecteur entre les etapes devient une ligne pointillee gold
- Sous chaque numero, le titre et la description sont dans une carte navy compacte (`rounded-xl`, padding reduit)
- Texte blanc dans les cartes

## 5. Section Zone d'intervention — refonte

- Fond blanc
- La carte principale passe en fond navy avec texte blanc
- L'icone MapPin passe dans un cercle gradient gold
- Le lien CTA en bas devient un vrai bouton gold arrondi au lieu d'un simple lien texte
- Ajout d'une liste de 3-4 avantages avec des check icons

## 6. Section CTA Final — refonte

- Fond navy plein (`bg-[#0F172A]`) au lieu du fond avec opacite
- Texte blanc, titre en gradient gold
- Le bloc telephone reste en gradient gold avec pulse
- Ajout de 3 badges en dessous (Devis gratuit, Intervention rapide, 24h/24)

## 7. Nouvelle section FAQ (Accordion)

- Positionnee entre la Zone d'intervention et le CTA final
- Fond blanc, titre avec accent gold
- 6-8 questions frequentes pertinentes :
  - "Combien coute une ouverture de porte ?"
  - "En combien de temps intervenez-vous ?"
  - "Intervenez-vous la nuit et le week-end ?"
  - "Faut-il un devis avant l'intervention ?"
  - "Etes-vous agree par les assurances ?"
  - "Quelles marques de serrures installez-vous ?"
  - "Que faire en cas d'effraction ?"
  - "Votre intervention est-elle garantie ?"
- Utilisation du composant Accordion de shadcn/ui deja installe
- Chaque item : fond navy au repos, s'ouvre avec animation douce
- Icone ChevronDown gold pour l'ouverture/fermeture

## 8. Footer — mise a jour

- Fond navy (`bg-[#0F172A]`)
- Texte en gris clair/blanc
- Le numero reste en gold
- Ajout de liens : Mentions legales, Politique de confidentialite (texte seulement, pas de pages)

## 9. Animations GSAP — mises a jour

- Les animations restent identiques dans leur logique (scroll trigger, stagger)
- Ajout d'un ref pour la section FAQ avec animation d'entree
- Les cartes navy auront un hover CSS pur (translate + shadow) sans GSAP pour la performance

## 10. Sticky Bar — mise a jour legere

- Reste en gradient gold
- Aucun changement majeur, fonctionne deja bien

## Fichiers modifies

1. **src/index.css** — Nouvelles variables CSS pour le mode clair des sections, nouvelles classes utilitaires (`.navy-card`, etc.), mise a jour de `.glass-card`
2. **src/pages/Index.tsx** — Refonte complete des sections Trust, Services, Process, Zone, CTA + ajout FAQ + import Accordion
3. **tailwind.config.ts** — Aucun changement necessaire (les couleurs customs suffisent via CSS)

## Resume visuel

```text
+------------------------------------------+
|           HERO (dark navy, inchange)     |
+------------------------------------------+
|     CONFIANCE (fond blanc, cartes navy)  |
+------------------------------------------+
|      SERVICES (fond blanc, cartes navy)  |
+------------------------------------------+
|      PROCESS (fond blanc, cercles gold)  |
+------------------------------------------+
|        ZONE (fond blanc, carte navy)     |
+------------------------------------------+
|          FAQ (fond blanc, accordion)     |
+------------------------------------------+
|         CTA FINAL (fond navy, gold)      |
+------------------------------------------+
|          FOOTER (fond navy)              |
+------------------------------------------+
```

