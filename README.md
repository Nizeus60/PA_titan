# 🎮 Guide PA:Titans

Guide complet en français pour **Planetary Annihilation: Titans**.

## 📁 Structure du Projet

```
pa-titans-guide/
├── index.html              # Page d'accueil
├── favicon.svg             # Icône du site
├── css/
│   └── styles.css          # Styles globaux
├── js/
│   ├── main.js             # JavaScript principal
│   └── components.js       # Chargement nav/footer dynamique
├── components/
│   ├── nav.html            # Menu de navigation (MODIFIER ICI)
│   └── footer.html         # Pied de page (MODIFIER ICI)
└── pages/
    ├── debutant.html       # Guide débutant
    ├── raccourcis.html     # Raccourcis clavier
    ├── unites.html         # Guide des unités
    ├── structures.html     # Guide des structures
    ├── strategies.html     # Stratégies
    └── lexique.html        # Lexique des termes
```

## 🚀 Installation

1. Téléchargez/clonez ce repository
2. Uploadez sur GitHub
3. Activez GitHub Pages (Settings → Pages → Source: main)
4. Votre site est en ligne !

## ➕ Ajouter une Nouvelle Page

### 1. Créer la page HTML
Copiez ce template dans `/pages/nouvelle-page.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre - PA:Titans</title>
    <link rel="icon" type="image/svg+xml" href="../favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1 class="site-title">Titre de la Page</h1>
            <p class="site-subtitle">Sous-titre</p>
        </div>
    </header>

    <div id="nav-placeholder"></div>

    <main>
        <section class="section">
            <div class="container">
                <!-- VOTRE CONTENU ICI -->
            </div>
        </section>
    </main>

    <div id="footer-placeholder"></div>

    <button class="scroll-top" aria-label="Retour en haut">↑</button>
    <script src="../js/components.js"></script>
    <script src="../js/main.js"></script>
</body>
</html>
```

### 2. Ajouter au menu
Éditez `components/nav.html` et ajoutez :
```html
<li><a href="{BASE}pages/nouvelle-page.html" data-page="nouvelle-page">Nouvelle Page</a></li>
```

### 3. Ajouter au footer (optionnel)
Éditez `components/footer.html` et ajoutez le lien.

**C'est tout !** La nouvelle page apparaîtra automatiquement sur toutes les pages.

## 🔧 Personnalisation

### Modifier le Menu
Éditez **uniquement** `components/nav.html`

### Modifier le Footer
Éditez **uniquement** `components/footer.html`

### Modifier les Styles
Éditez `css/styles.css`

## 📊 Contenu

- **58 unités** documentées
- **38 structures** détaillées
- **50+ raccourcis** clavier
- **100+ termes** dans le lexique
- **Guide débutant** complet
- **Stratégies** et compositions d'armées

## 🌐 Déploiement

Le site est conçu pour GitHub Pages mais fonctionne sur :
- GitHub Pages (gratuit)
- Netlify (gratuit)
- Vercel (gratuit)
- Tout hébergement statique

## 📝 Licence

Guide créé par la communauté pour la communauté PA:Titans.

---

**Bon jeu, Commandant !** 🎮
