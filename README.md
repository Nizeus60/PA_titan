# Guide Complet PA:Titans - Documentation

## 📁 Structure du Projet

```
guide-pa-titans/
├── index.html              # Page d'accueil
├── css/
│   └── styles.css          # Styles CSS professionnels (tooltips, animations)
├── js/
│   └── main.js             # JavaScript (navigation, recherche, interactions)
└── pages/
    ├── raccourcis.html     # Guide complet raccourcis clavier
    ├── unites.html         # Analyses détaillées des unités (À créer)
    ├── structures.html     # Guide structures & économie (À créer)
    ├── strategies.html     # Stratégies & tactiques avancées (À créer)
    └── lexique.html        # Lexique complet avec recherche
```

## ✨ Fonctionnalités

### 🎨 Design Professionnel
- **Thème futuriste militaire** : Dégradés orange/bleu, typographies Orbitron + Rajdhani
- **Animations fluides** : Hover effects, transitions, scroll reveal
- **Responsive** : Optimisé mobile, tablette, desktop
- **Effets visuels** : Background animé, scan effects, glows

### 💡 Tooltips Informatifs
- Survolez les termes techniques pour info contextuelle
- Exemples : APM, Kiting, Stalling, Muscle Memory...
- Positioned intelligently (s'adaptent aux bords d'écran)

### 🔍 Recherche dans le Lexique
- Filtre en temps réel
- Minimum 2 caractères
- Highlight des résultats
- 100+ termes expliqués

### 📱 Navigation Intuitive
- Menu sticky toujours accessible
- Smooth scroll entre sections
- Active link highlighting
- Bouton retour en haut

### ⌨️ Raccourcis Détaillés
- **50+ raccourcis** classés par priorité
- Exemples tactiques concrets
- Tableaux comparatifs
- Workflows optimisés
- Plan d'apprentissage 4 semaines

## 🎯 Pages Complétées

### ✅ index.html
- Vue d'ensemble du guide
- Cartes navigables
- Progression par niveaux
- Stats du contenu
- Conseils rapides & erreurs à éviter

### ✅ pages/raccourcis.html
- **8 raccourcis critiques** détaillés
- **20+ raccourcis importants**
- Sélection, caméra, commandes spéciales
- Tooltips sur chaque terme technique
- Exemples tactiques avec combos
- Tables comparatives
- Boxes info/warning/success
- Plan d'apprentissage complet

### ✅ pages/lexique.html
- **100+ termes** expliqués
- Recherche en temps réel
- Abréviations courantes
- Contexte d'utilisation
- Exemples pratiques

### ✅ css/styles.css
- **1500+ lignes** de CSS professionnel
- Variables CSS (couleurs, transitions)
- Composants réutilisables
- Animations keyframes
- Responsive breakpoints
- Tooltips système
- Cards avec hover effects

### ✅ js/main.js
- Navigation mobile (burger menu)
- Smooth scroll
- Scroll-to-top button
- Active nav highlighting
- Intersection Observer (scroll animations)
- Recherche lexique
- Tooltips positioning
- Easter egg (Konami code)

## 🚀 Pages à Créer

### 📋 pages/unites.html
**Contenu suggéré :**
- Unités terrestres T1/T2 (30+ unités)
- Unités aériennes (10+ unités)
- Unités navales (8+ unités)
- Unités orbitales (6+ unités)
- Titans (4 types)
- Pour chaque unité :
  - Stats détaillées
  - Rôle tactique
  - Fort contre / Faible contre
  - Compteurs spécifiques
  - Synergies
  - Coût/efficacité
  - Tooltips sur concepts avancés

### 🏗️ pages/structures.html
**Contenu suggéré :**
- Économie (extracteurs, générateurs T1/T2)
- Défenses (tours, AA, artillerie, umbrella, anti-nuke)
- Production (usines T1/T2, orbital launcher, titan foundry)
- Super-armes (nuke, halleys)
- Utilités (radar, téléporteur)
- Guides de placement optimal
- Ratio économique optimal
- Timing de construction

### 🎯 pages/strategies.html
**Contenu suggéré :**
- Ouvertures classiques (Vehicle Rush, Bot Raid, Air First, Fast T2)
- Build orders détaillés
- Compositions d'armées optimales
- Tactiques avancées (Commander Snipe, Teleport Drop, Eco Denial)
- Timings critiques (0-5min, 5-10min, 10-20min, 20min+)
- Erreurs fatales à éviter
- Mind games & psychologie
- Adaptation selon map

## 🎨 Éléments de Design Utilisés

### Couleurs
- **Orange primaire** : `#ff6b35` (action, priorité)
- **Bleu primaire** : `#00d4ff` (info, technologie)
- **Background sombre** : `#0a0e1a` (immersion)
- **Cartes** : `#151923` (contraste)
- **Texte** : `#e8edf4` (lisibilité)
- **Succès** : `#3bff6b` (positif)
- **Danger** : `#ff3b3b` (warning)

### Typographies
- **Orbitron** : Titres (sci-fi, militaire)
- **Rajdhani** : Corps de texte (moderne, lisible)

### Composants
- Cards avec hover effects
- Badges de priorité (Critical, High, Medium, Low)
- Badges de tier (T1, T2, Orbital, Titan)
- Info boxes (tips, warnings, success)
- Tables responsives
- Tooltips contextuels
- Touches de clavier stylisées

## 🔧 Utilisation

### Ouvrir le Guide
1. Ouvrez `index.html` dans n'importe quel navigateur moderne
2. Navigation via menu ou cartes cliquables
3. Utilisez recherche dans lexique si besoin

### Raccourcis Clavier du Site
- **Espace** : Scroll vers le bas
- **Home** : Retour en haut
- **Konami Code** : Easter egg (↑↑↓↓←→←→BA)

### Fonctionnalités Interactives
- **Hover** sur termes techniques → Tooltip
- **Clic** sur touches clavier → Copie dans presse-papier
- **Recherche** lexique → Filtre instantané
- **Smooth scroll** entre sections

## 📝 Notes de Développement

### Technologies
- HTML5 sémantique
- CSS3 moderne (Grid, Flexbox, animations)
- JavaScript vanilla (pas de dépendances)
- Google Fonts (Orbitron, Rajdhani)

### Compatibilité
- Chrome, Firefox, Safari, Edge (dernières versions)
- Mobile responsive (breakpoints 480px, 768px, 1200px)
- Touch-friendly sur tablettes/mobiles

### Performance
- CSS minifié possible (actuellement en format lisible)
- Images non requises (design basé sur CSS pur)
- Lazy loading sections (Intersection Observer)
- Pas de librairies externes lourdes

## 🎯 Prochaines Améliorations Possibles

1. **Comparateur d'unités** : Sélectionner 2-3 unités pour comparaison côte à côte
2. **Calculateur économique** : Estimer production selon nombre extracteurs/générateurs
3. **Mode sombre/clair** : Toggle de thème
4. **Système de favoris** : Marquer sections préférées
5. **Progression utilisateur** : Tracker ce qui est maîtrisé
6. **Version PDF** : Export pour lecture offline
7. **Vidéos intégrées** : Tutoriels visuels
8. **Section replays** : Analyses de parties commentées

## 📚 Ressources Supplémentaires

- **Forums PA** : https://forums.uberent.com/forums/planetary-annihilation/
- **Discord Officiel** : Communauté active
- **PA Stats** : Statistiques de parties
- **Mod DB** : Mods communautaires

## 👨‍💻 Crédits

- **Développement** : Guide créé avec attention aux détails
- **Design** : Thème futuriste militaire custom
- **Contenu** : Analyse approfondie méchaniques PA:Titans
- **Communauté** : Merci aux joueurs pour stratégies partagées

## 📄 Licence

Guide éducatif créé pour la communauté PA:Titans.
Planetary Annihilation: Titans © Uber Entertainment.

---

**Version** : 1.0 (Janvier 2026)
**Statut** : Pages Accueil, Raccourcis, Lexique complètes
**À venir** : Unités, Structures, Stratégies (pages détaillées)

🎮 **Bon jeu, Commandant !**
