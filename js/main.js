// ===================================
// Guide PA:Titans - JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Navigation Mobile
    // ===================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fermer au clic sur un lien
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    navMenu.classList.remove('active');
                    const spans = navToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }
    
    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ===================================
    // Recherche Globale
    // ===================================
    const globalSearch = document.getElementById('global-search');
    const searchResults = document.getElementById('search-results');
    
    // Base de données de recherche
    const searchDatabase = [
        // Pages
        { title: 'Guide Débutant', category: 'Page', url: 'pages/debutant.html', keywords: 'débutant nouveau commencer apprendre tutoriel' },
        { title: 'Raccourcis Clavier', category: 'Page', url: 'pages/raccourcis.html', keywords: 'raccourcis clavier touches hotkeys contrôles' },
        { title: 'Guide des Unités', category: 'Page', url: 'pages/unites.html', keywords: 'unités troupes armée combat' },
        { title: 'Structures', category: 'Page', url: 'pages/structures.html', keywords: 'structures bâtiments construction défense' },
        { title: 'Stratégies', category: 'Page', url: 'pages/strategies.html', keywords: 'stratégies tactiques build order composition' },
        { title: 'Lexique', category: 'Page', url: 'pages/lexique.html', keywords: 'lexique termes définitions vocabulaire' },
        
        // Unités
        { title: 'Dox', category: 'Unité Bot T1', url: 'pages/unites.html#bots-t1', keywords: 'dox bot infanterie rush rapide raid' },
        { title: 'Ant', category: 'Unité Véhicule T1', url: 'pages/unites.html#vehicules-t1', keywords: 'ant tank char véhicule' },
        { title: 'Bumblebee', category: 'Unité Air T1', url: 'pages/unites.html#air-t1', keywords: 'bumblebee bomber bombardier avion' },
        { title: 'Spinner', category: 'Unité Véhicule T1', url: 'pages/unites.html#vehicules-t1', keywords: 'spinner aa anti-air défense' },
        { title: 'Vanguard', category: 'Unité Véhicule T2', url: 'pages/unites.html#vehicules-t2', keywords: 'vanguard tank lourd t2' },
        { title: 'Slammer', category: 'Unité Bot T2', url: 'pages/unites.html#bots-t2', keywords: 'slammer assault bot t2 dps' },
        { title: 'Kestrel', category: 'Unité Air T2', url: 'pages/unites.html#air-t2', keywords: 'kestrel gunship air t2' },
        { title: 'Zeus', category: 'Titan', url: 'pages/unites.html#titans', keywords: 'zeus titan air éclair lightning' },
        { title: 'Atlas', category: 'Titan', url: 'pages/unites.html#titans', keywords: 'atlas titan bot terrestre' },
        { title: 'Ares', category: 'Titan', url: 'pages/unites.html#titans', keywords: 'ares titan véhicule artillerie' },
        
        // Structures
        { title: 'Metal Extractor', category: 'Structure Éco', url: 'pages/structures.html#economie', keywords: 'metal extractor mex économie ressources' },
        { title: 'Energy Plant', category: 'Structure Éco', url: 'pages/structures.html#economie', keywords: 'energy plant pgen énergie power' },
        { title: 'Factory', category: 'Structure Production', url: 'pages/structures.html#production', keywords: 'factory usine production unités' },
        { title: 'Teleporter', category: 'Structure Utilitaire', url: 'pages/structures.html#utilitaires', keywords: 'teleporter téléporteur transport' },
        { title: 'Anti-Nuke', category: 'Structure Défense', url: 'pages/structures.html#defense', keywords: 'anti-nuke défense nucléaire missile' },
        { title: 'Umbrella', category: 'Structure Défense', url: 'pages/structures.html#defense', keywords: 'umbrella anti-orbital défense laser' },
        { title: 'Halley', category: 'Super-Arme', url: 'pages/structures.html#superarmes', keywords: 'halley planet smash lune' },
        
        // Stratégies
        { title: 'Build Order Standard', category: 'Stratégie', url: 'pages/strategies.html#build-orders', keywords: 'build order opening début standard' },
        { title: 'Rush Dox', category: 'Stratégie', url: 'pages/strategies.html#build-orders', keywords: 'rush dox agressif early' },
        { title: 'Compositions d\'armées', category: 'Stratégie', url: 'pages/strategies.html#compositions', keywords: 'composition armée army mix' },
        { title: 'Multi-Planète', category: 'Stratégie', url: 'pages/strategies.html#multi-planete', keywords: 'multi planète orbital invasion' },
        { title: 'Counters', category: 'Stratégie', url: 'pages/strategies.html#counters', keywords: 'counter contre stratégie' },
        
        // Raccourcis
        { title: 'Attack Move (A)', category: 'Raccourci', url: 'pages/raccourcis.html', keywords: 'attack move a-move attaque' },
        { title: 'Patrol (P)', category: 'Raccourci', url: 'pages/raccourcis.html', keywords: 'patrol patrouille' },
        { title: 'Stop (S)', category: 'Raccourci', url: 'pages/raccourcis.html', keywords: 'stop arrêt' },
        { title: 'Groupes de Contrôle', category: 'Raccourci', url: 'pages/raccourcis.html', keywords: 'groupe contrôle ctrl numéro sélection' },
    ];
    
    if (globalSearch && searchResults) {
        // Détecter si on est dans /pages/
        const isInPages = window.location.pathname.includes('/pages/');
        const basePath = isInPages ? '../' : '';
        
        globalSearch.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.classList.remove('active');
                return;
            }
            
            const results = searchDatabase.filter(item => {
                return item.title.toLowerCase().includes(query) ||
                       item.keywords.toLowerCase().includes(query) ||
                       item.category.toLowerCase().includes(query);
            }).slice(0, 8);
            
            if (results.length > 0) {
                searchResults.innerHTML = results.map(item => {
                    const url = basePath + item.url;
                    return `
                        <div class="search-result-item" onclick="window.location.href='${url}'">
                            <div class="search-result-title">${item.title}</div>
                            <div class="search-result-category">${item.category}</div>
                        </div>
                    `;
                }).join('');
                searchResults.classList.add('active');
            } else {
                searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-title">Aucun résultat</div></div>';
                searchResults.classList.add('active');
            }
        });
        
        // Fermer au clic ailleurs
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-wrapper')) {
                searchResults.classList.remove('active');
            }
        });
    }
    
    // ===================================
    // Animations au scroll
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card, .guide-section, .unit-card, .structure-card').forEach(el => {
        observer.observe(el);
    });
    
    // ===================================
    // Filtres (pour pages unités/structures)
    // ===================================
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            const items = document.querySelectorAll('[data-category]');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // ===================================
    // Stats Animation
    // ===================================
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    const endValue = parseInt(statNumber.getAttribute('data-value'));
                    animateValue(statNumber, 0, endValue, 1500);
                    statNumber.classList.add('animated');
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });
    
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.round(current);
        }, 16);
    }
    
    console.log('🎮 Guide PA:Titans chargé!');
});
