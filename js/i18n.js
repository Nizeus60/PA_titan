// ===================================
// Système de Traduction (i18n)
// ===================================

const i18n = {
    currentLang: 'fr',
    translations: {},
    
    // Langues disponibles avec drapeaux
    languages: {
        'fr': { name: 'Français', flag: '🇫🇷' },
        'en': { name: 'English', flag: '🇬🇧' },
        'es': { name: 'Español', flag: '🇪🇸' },
        'pt': { name: 'Português', flag: '🇵🇹' },
        'de': { name: 'Deutsch', flag: '🇩🇪' }
    },
    
    // Initialisation
    init: async function() {
        // Récupérer la langue sauvegardée ou utiliser français par défaut
        const savedLang = localStorage.getItem('pa-titans-lang') || 'fr';
        await this.setLanguage(savedLang);
        this.createLanguageSelector();
    },
    
    // Charger un fichier de traduction
    loadTranslation: async function(lang) {
        try {
            // Détecter si on est dans /pages/ ou à la racine
            const isInPages = window.location.pathname.includes('/pages/');
            const basePath = isInPages ? '../' : '';
            
            const response = await fetch(`${basePath}translations/${lang}.json`);
            if (!response.ok) throw new Error('Translation not found');
            return await response.json();
        } catch (error) {
            console.error(`Erreur chargement traduction ${lang}:`, error);
            return null;
        }
    },
    
    // Changer de langue
    setLanguage: async function(lang) {
        const translation = await this.loadTranslation(lang);
        if (!translation) return;
        
        this.currentLang = lang;
        this.translations = translation;
        localStorage.setItem('pa-titans-lang', lang);
        
        // Rediriger vers la bonne version de la page si nécessaire
        this.redirectToLangPage(lang);
        
        this.applyTranslations();
        this.updateLanguageSelector();
    },
    
    // Rediriger vers la page dans la bonne langue
    redirectToLangPage: function(lang) {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop();
        
        // Mapping des pages FR <-> EN (les autres langues utilisent les mêmes noms que EN)
        const frToEn = {
            'debutant.html': 'beginner.html',
            'raccourcis.html': 'shortcuts.html',
            'unites.html': 'units.html',
            'structures.html': 'structures.html',
            'strategies.html': 'strategies.html',
            'lexique.html': 'glossary.html'
        };
        
        const enToFr = {
            'beginner.html': 'debutant.html',
            'shortcuts.html': 'raccourcis.html',
            'units.html': 'unites.html',
            'structures.html': 'structures.html',
            'strategies.html': 'strategies.html',
            'glossary.html': 'lexique.html'
        };
        
        // Détecter où on est
        const isInFrPages = currentPath.includes('/pages/') && 
                           !currentPath.includes('/pages/en/') && 
                           !currentPath.includes('/pages/es/') && 
                           !currentPath.includes('/pages/pt/') && 
                           !currentPath.includes('/pages/de/');
        const isInLangFolder = currentPath.includes('/pages/en/') || 
                               currentPath.includes('/pages/es/') || 
                               currentPath.includes('/pages/pt/') || 
                               currentPath.includes('/pages/de/');
        
        // Si on est sur l'index, pas de redirection
        if (!currentPage || currentPage === 'index.html' || currentPage === '') {
            return;
        }
        
        // Si on est sur une page de contenu
        if (isInFrPages || isInLangFolder) {
            let newPath = currentPath;
            let targetPage = currentPage;
            
            if (lang === 'fr') {
                // Aller vers les pages françaises
                if (isInLangFolder) {
                    // Convertir le nom de page EN -> FR
                    targetPage = enToFr[currentPage] || currentPage;
                    // Retirer /en/, /es/, /pt/, /de/
                    newPath = currentPath.replace(/\/pages\/(en|es|pt|de)\//, '/pages/');
                    newPath = newPath.replace(currentPage, targetPage);
                    window.location.href = newPath;
                }
            } else {
                // Aller vers une page traduite (en, es, pt, de)
                if (isInFrPages) {
                    // Convertir le nom de page FR -> EN
                    targetPage = frToEn[currentPage] || currentPage;
                    newPath = currentPath.replace('/pages/', `/pages/${lang}/`);
                    newPath = newPath.replace(currentPage, targetPage);
                } else if (isInLangFolder) {
                    // Changer de dossier de langue
                    newPath = currentPath.replace(/\/pages\/(en|es|pt|de)\//, `/pages/${lang}/`);
                }
                window.location.href = newPath;
            }
        }
    },
    
    // Appliquer les traductions
    applyTranslations: function() {
        // Traduire tous les éléments avec data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = this.getText(key);
            if (text) {
                element.textContent = text;
            }
        });
        
        // Traduire les placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const text = this.getText(key);
            if (text) {
                element.placeholder = text;
            }
        });
        
        // Mettre à jour l'attribut lang du HTML
        document.documentElement.lang = this.currentLang;
    },
    
    // Récupérer un texte par sa clé (supporte les clés imbriquées: "nav.home")
    getText: function(key) {
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return null;
            }
        }
        
        return value;
    },
    
    // Créer le sélecteur de langue
    createLanguageSelector: function() {
        // Vérifier si le sélecteur existe déjà
        if (document.getElementById('lang-selector')) return;
        
        const nav = document.querySelector('.nav-container');
        if (!nav) return;
        
        // Créer le conteneur du sélecteur
        const selector = document.createElement('div');
        selector.id = 'lang-selector';
        selector.className = 'lang-selector';
        
        // Bouton principal avec drapeau actuel
        const currentFlag = this.languages[this.currentLang].flag;
        selector.innerHTML = `
            <button class="lang-btn" aria-label="Changer de langue">
                <span class="lang-current-flag">${currentFlag}</span>
                <span class="lang-arrow">▼</span>
            </button>
            <div class="lang-dropdown">
                ${Object.entries(this.languages).map(([code, data]) => `
                    <div class="lang-option ${code === this.currentLang ? 'active' : ''}" data-lang="${code}">
                        <span class="lang-flag">${data.flag}</span>
                        <span class="lang-name">${data.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Insérer avant le bouton toggle mobile ou à la fin
        const navToggle = nav.querySelector('.nav-toggle');
        if (navToggle) {
            nav.insertBefore(selector, navToggle);
        } else {
            nav.appendChild(selector);
        }
        
        // Event listeners
        const btn = selector.querySelector('.lang-btn');
        const dropdown = selector.querySelector('.lang-dropdown');
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        
        // Fermer au clic ailleurs
        document.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });
        
        // Changement de langue
        selector.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);
                dropdown.classList.remove('active');
            });
        });
    },
    
    // Mettre à jour l'affichage du sélecteur
    updateLanguageSelector: function() {
        const selector = document.getElementById('lang-selector');
        if (!selector) return;
        
        // Mettre à jour le drapeau actuel
        const currentFlag = selector.querySelector('.lang-current-flag');
        if (currentFlag) {
            currentFlag.textContent = this.languages[this.currentLang].flag;
        }
        
        // Mettre à jour les options actives
        selector.querySelectorAll('.lang-option').forEach(option => {
            const lang = option.getAttribute('data-lang');
            option.classList.toggle('active', lang === this.currentLang);
        });
    }
};

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
