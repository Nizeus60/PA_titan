# Guide de Traduction - PA:Titans Guide

## 📁 Structure des Traductions

```
PA_titan/
├── translations/
│   ├── fr.json       ✅ Complet (langue par défaut)
│   ├── en.json       ✅ Complet
│   ├── es.json       ✅ Complet
│   ├── pt.json       ✅ Complet
│   └── de.json       ✅ Complet
│
└── pages/
    ├── *.html        (Pages françaises)
    ├── en/*.html     (Pages anglaises)
    ├── es/*.html     (Pages espagnoles)
    ├── pt/*.html     (Pages portugaises)
    └── de/*.html     (Pages allemandes)
```

## 🔧 Système de Traduction

Le site utilise un **système hybride** :
- **Navigation, footer, métadonnées** : Gérées par `i18n.js` + fichiers JSON (`translations/*.json`)
- **Contenu des pages** : Pages HTML complètes traduites dans `/pages/{lang}/`

## ✨ Améliorations Récentes

### 1. Indicateur de statut des langues
- Le sélecteur de langue affiche maintenant visuellement quelles langues sont complètes
- Les langues incomplètes affichent une icône 🚧 et le texte "(WIP)"
- Possibilité de désactiver les clics sur les langues incomplètes

### 2. Configuration dans `js/i18n.js`

Pour marquer une langue comme **incomplète** :

```javascript
languages: {
    'fr': { name: 'Français', flag: '🇫🇷', complete: true },
    'en': { name: 'English', flag: '🇬🇧', complete: true },
    'es': { name: 'Español', flag: '🇪🇸', complete: false },  // ← Mettre false
    'pt': { name: 'Português', flag: '🇵🇹', complete: false },
    'de': { name: 'Deutsch', flag: '🇩🇪', complete: false }
}
```

### 3. Styles CSS ajoutés

Nouveaux styles dans `css/styles.css` :
- `.lang-option.incomplete` : Opacité réduite, curseur désactivé
- `.lang-status` : Affichage de l'icône WIP
- `.lang-name::after` : Ajout automatique du texte "(WIP)"

## 📝 Comment Ajouter/Compléter une Traduction

### Option 1 : Traduction complète (Recommandé)

1. **Créer le dossier de langue** (s'il n'existe pas)
   ```bash
   mkdir pages/xx/
   ```

2. **Traduire toutes les pages HTML**
   - Copier les pages depuis `pages/en/` vers `pages/xx/`
   - Traduire tout le contenu HTML
   - Mettre à jour l'attribut `lang` : `<html lang="xx">`
   - Vérifier les chemins relatifs (favicon, CSS, etc.)

3. **Compléter le fichier JSON**
   - Copier `translations/en.json` vers `translations/xx.json`
   - Traduire toutes les clés (nav, footer, home, etc.)

4. **Activer la langue**
   ```javascript
   // Dans js/i18n.js
   'xx': { name: 'Nom de la langue', flag: '🏴', complete: true }
   ```

### Option 2 : Traduction partielle (Déconseillé)

Si vous voulez montrer une langue en cours :
1. Créer les fichiers de base
2. Marquer `complete: false` dans `i18n.js`
3. L'utilisateur verra la langue grisée avec 🚧

## 🎯 Pages à Traduire

Pour chaque langue, traduire ces fichiers :

### Pages principales (`/pages/xx/`)
- `beginner.html` - Guide débutant
- `shortcuts.html` - Raccourcis clavier
- `units.html` - Guide des unités
- `structures.html` - Structures et bâtiments
- `strategies.html` - Stratégies avancées
- `glossary.html` - Lexique/Glossaire

### Fichier JSON (`/translations/xx.json`)
Sections à traduire :
- `nav` - Navigation
- `search` - Barre de recherche
- `footer` - Pied de page
- `home` - Page d'accueil
- `beginner` - Guide débutant (métadonnées)
- `shortcuts` - Raccourcis (métadonnées)
- `units` - Unités (métadonnées)
- `structures` - Structures (métadonnées)
- `strategies` - Stratégies (métadonnées)
- `lexicon` - Lexique (métadonnées)

## 🧪 Tester une Traduction

1. Ouvrir le site (index.html)
2. Cliquer sur le sélecteur de langue (drapeau)
3. Sélectionner la langue
4. Le système redirige automatiquement :
   - Index reste sur `/index.html`
   - Pages françaises → `/pages/xx/{page}.html`
   - Navigation devrait fonctionner

5. Vérifier :
   - ✅ Navigation traduite
   - ✅ Footer traduit
   - ✅ Contenu de la page traduit
   - ✅ Liens fonctionnels
   - ✅ Images/ressources chargées

## 🐛 Problèmes Connus

### La recherche n'est pas traduite
La base de données de recherche dans `js/main.js` (ligne 69-111) est codée en français.

**Solution future** : Créer des fichiers `search-xx.json` ou intégrer dans les JSON de traduction.

### Chemins relatifs
Les pages dans `/pages/xx/` ont des chemins différents :
- CSS : `../../css/styles.css` (2 niveaux)
- Favicon : `../../favicon.svg` (2 niveaux)
- Index : `../../index.html` (2 niveaux)

## 🚀 Améliorations Futures Possibles

1. **Recherche multilingue**
   - Créer `searchDatabase` dynamique basé sur la langue
   - Charger depuis JSON de traduction

2. **Détection automatique de langue**
   - Utiliser `navigator.language` pour détecter la langue du navigateur
   - Rediriger automatiquement au premier chargement

3. **Progression de traduction**
   - Ajouter un pourcentage de complétion
   - Afficher dans le sélecteur : "Español (75%)"

4. **SEO multilingue**
   - Balises `<link rel="alternate" hreflang="xx">`
   - Sitemaps par langue

## 📊 Statut Actuel (Janvier 2026)

| Langue | Code | Pages HTML | Fichier JSON | Statut |
|--------|------|-----------|--------------|--------|
| Français | fr | ✅ 6/6 | ✅ Complet | ✅ **Complet** |
| English | en | ✅ 6/6 | ✅ Complet | ✅ **Complet** |
| Español | es | ✅ 6/6 | ✅ Complet | ✅ **Complet** |
| Português | pt | ✅ 6/6 | ✅ Complet | ✅ **Complet** |
| Deutsch | de | ✅ 6/6 | ✅ Complet | ✅ **Complet** |

## 💡 Conseils

- **Testez toujours** sur un serveur local (pas en ouvrant directement le fichier HTML)
- **Gardez la cohérence** : utilisez les mêmes termes techniques dans toute la traduction
- **Respectez le style** : PA:Titans a un ton direct et accessible
- **Ancres (#)** : Gardez les mêmes IDs dans les pages traduites pour les liens

## 🔗 Liens Utiles

- Termes officiels du jeu : [PA:Titans Wiki](https://planetaryannihilation.fandom.com)
- Communauté FR : Discord PA:Titans
- Outils de traduction : DeepL, ChatGPT (pour révision)

---

**Dernière mise à jour** : Janvier 2026
**Maintenu par** : Équipe PA:Titans Guide
