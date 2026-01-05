// ===================================
// Guide PA:Titans - JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Navigation Mobile
    // ===================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animation du burger
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Fermer le menu au clic sur un lien
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // ===================================
    // Smooth Scroll
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===================================
    // Active Navigation Link
    // ===================================
    function setActiveNavLink() {
        const sections = document.querySelectorAll('.section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // ===================================
    // Animations au scroll (Intersection Observer)
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les cartes
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
    
    // Observer les sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // ===================================
    // Tooltips avancés
    // ===================================
    const tooltips = document.querySelectorAll('.tooltip');
    
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            const tooltipText = this.querySelector('.tooltip-text');
            if (tooltipText) {
                // Vérifier si le tooltip sort de l'écran
                const rect = tooltipText.getBoundingClientRect();
                if (rect.left < 0) {
                    tooltipText.style.left = '0';
                    tooltipText.style.transform = 'none';
                }
                if (rect.right > window.innerWidth) {
                    tooltipText.style.left = 'auto';
                    tooltipText.style.right = '0';
                    tooltipText.style.transform = 'none';
                }
            }
        });
    });
    
    // ===================================
    // Recherche dans le lexique (si présent)
    // ===================================
    const lexiqueSearch = document.getElementById('lexique-search');
    if (lexiqueSearch) {
        lexiqueSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const lexiqueItems = document.querySelectorAll('.lexique-item');
            
            lexiqueItems.forEach(item => {
                const term = item.querySelector('.lexique-term').textContent.toLowerCase();
                const definition = item.querySelector('.lexique-definition').textContent.toLowerCase();
                
                if (term.includes(searchTerm) || definition.includes(searchTerm)) {
                    item.style.display = 'block';
                    // Highlight du terme recherché
                    if (searchTerm.length > 2) {
                        item.style.borderColor = 'var(--primary-orange)';
                        item.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.3)';
                    } else {
                        item.style.borderColor = 'var(--border-color)';
                        item.style.boxShadow = 'none';
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // ===================================
    // Filtre des cartes par catégorie
    // ===================================
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            const cards = document.querySelectorAll('.card[data-category]');
            
            // Activer le bouton
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrer les cartes
            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ===================================
    // Copier le code des raccourcis
    // ===================================
    const keyElements = document.querySelectorAll('.key');
    
    keyElements.forEach(key => {
        key.addEventListener('click', function() {
            const text = this.textContent.trim();
            
            // Copier dans le presse-papier
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    // Feedback visuel
                    const original = this.style.background;
                    this.style.background = 'var(--success-green)';
                    this.style.color = 'var(--dark-bg)';
                    
                    setTimeout(() => {
                        this.style.background = original;
                        this.style.color = 'var(--primary-orange)';
                    }, 300);
                });
            }
        });
    });
    
    // ===================================
    // Statistiques de progression (si présent)
    // ===================================
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
    
    // Observer pour les stats
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber) {
                    const endValue = parseInt(statNumber.getAttribute('data-value'));
                    animateValue(statNumber, 0, endValue, 1500);
                    statsObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // ===================================
    // Comparateur d'unités (si présent)
    // ===================================
    const compareButtons = document.querySelectorAll('.compare-btn');
    const comparePanel = document.querySelector('.compare-panel');
    const compareSlots = document.querySelectorAll('.compare-slot');
    
    if (compareButtons.length > 0) {
        let selectedUnits = [];
        
        compareButtons.forEach(button => {
            button.addEventListener('click', function() {
                const unitData = {
                    name: this.getAttribute('data-unit-name'),
                    tier: this.getAttribute('data-unit-tier'),
                    type: this.getAttribute('data-unit-type'),
                    stats: JSON.parse(this.getAttribute('data-unit-stats'))
                };
                
                if (selectedUnits.length < 3 && !selectedUnits.find(u => u.name === unitData.name)) {
                    selectedUnits.push(unitData);
                    updateComparePanel();
                }
                
                this.classList.add('selected');
            });
        });
        
        function updateComparePanel() {
            if (selectedUnits.length > 0 && comparePanel) {
                comparePanel.classList.add('visible');
                
                compareSlots.forEach((slot, index) => {
                    if (selectedUnits[index]) {
                        slot.innerHTML = `
                            <h4>${selectedUnits[index].name}</h4>
                            <span class="tier-badge">${selectedUnits[index].tier}</span>
                            <p>${selectedUnits[index].type}</p>
                            <button class="remove-compare" data-index="${index}">×</button>
                        `;
                    } else {
                        slot.innerHTML = '<p class="empty-slot">Sélectionnez une unité</p>';
                    }
                });
                
                // Boutons de suppression
                document.querySelectorAll('.remove-compare').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const index = parseInt(this.getAttribute('data-index'));
                        const unitName = selectedUnits[index].name;
                        selectedUnits.splice(index, 1);
                        
                        // Désélectionner le bouton correspondant
                        compareButtons.forEach(button => {
                            if (button.getAttribute('data-unit-name') === unitName) {
                                button.classList.remove('selected');
                            }
                        });
                        
                        updateComparePanel();
                        
                        if (selectedUnits.length === 0) {
                            comparePanel.classList.remove('visible');
                        }
                    });
                });
            }
        }
    }
    
    // ===================================
    // Easter Egg - Konami Code
    // ===================================
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-konamiPattern.length);
        
        if (konamiCode.join(',') === konamiPattern.join(',')) {
            activateEasterEgg();
        }
    });
    
    function activateEasterEgg() {
        // Effet spécial
        document.body.style.animation = 'rainbow 2s infinite';
        
        // Message
        const message = document.createElement('div');
        message.innerHTML = '🎮 COMMANDER MODE ACTIVÉ! 🎮';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, var(--primary-orange), var(--primary-blue));
            color: white;
            padding: 30px 60px;
            font-size: 2rem;
            font-weight: 900;
            border-radius: 20px;
            z-index: 10000;
            animation: pulse 1s ease-in-out 3;
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
            document.body.style.animation = 'none';
        }, 3000);
    }
    
    // Animation rainbow pour l'easter egg
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🎮 Guide PA:Titans chargé avec succès!');
    console.log('💡 Astuce: Essayez le Konami Code pour un easter egg...');
    
    // ===================================
    // Recherche Globale
    // ===================================
    const globalSearch = document.getElementById('global-search');
    const searchResults = document.getElementById('search-results');
    
    // Base de données de recherche
    const searchDatabase = [
        // Pages principales
        { title: 'Guide Débutant', category: 'Page', url: 'pages/debutant.html', keywords: 'débutant nouveau commencer apprendre tutoriel' },
        { title: 'Raccourcis Clavier', category: 'Page', url: 'pages/raccourcis.html', keywords: 'raccourcis clavier touches hotkeys contrôles' },
        { title: 'Guide des Unités', category: 'Page', url: 'pages/unites.html', keywords: 'unités troupes armée combat' },
        { title: 'Structures', category: 'Page', url: 'pages/structures.html', keywords: 'structures bâtiments construction défense' },
        { title: 'Stratégies', category: 'Page', url: 'pages/strategies.html', keywords: 'stratégies tactiques build order composition' },
        { title: 'Lexique', category: 'Page', url: 'pages/lexique.html', keywords: 'lexique termes définitions vocabulaire' },
        
        // Unités importantes
        { title: 'Dox', category: 'Unité Bot T1', url: 'pages/unites.html#bots-t1', keywords: 'dox bot infanterie rush rapide' },
        { title: 'Ant', category: 'Unité Véhicule T1', url: 'pages/unites.html#vehicules-t1', keywords: 'ant tank char véhicule' },
        { title: 'Bumblebee', category: 'Unité Air T1', url: 'pages/unites.html#air-t1', keywords: 'bumblebee bomber bombardier avion' },
        { title: 'Spinner', category: 'Unité Véhicule T1', url: 'pages/unites.html#vehicules-t1', keywords: 'spinner aa anti-air défense' },
        { title: 'Vanguard', category: 'Unité Véhicule T2', url: 'pages/unites.html#vehicules-t2', keywords: 'vanguard tank lourd t2' },
        { title: 'Slammer', category: 'Unité Bot T2', url: 'pages/unites.html#bots-t2', keywords: 'slammer assault bot t2 dps' },
        { title: 'Kestrel', category: 'Unité Air T2', url: 'pages/unites.html#air-t2', keywords: 'kestrel gunship air t2' },
        { title: 'Zeus', category: 'Titan', url: 'pages/unites.html#titans', keywords: 'zeus titan air éclair lightning' },
        { title: 'Atlas', category: 'Titan', url: 'pages/unites.html#titans', keywords: 'atlas titan bot terrestre séisme' },
        
        // Structures importantes
        { title: 'Metal Extractor', category: 'Structure Éco', url: 'pages/structures.html#economie', keywords: 'metal extractor mex économie ressources' },
        { title: 'Energy Plant', category: 'Structure Éco', url: 'pages/structures.html#economie', keywords: 'energy plant pgen énergie power' },
        { title: 'Factory', category: 'Structure Production', url: 'pages/structures.html#production', keywords: 'factory usine production unités' },
        { title: 'Teleporter', category: 'Structure Utilitaire', url: 'pages/structures.html#utilitaires', keywords: 'teleporter téléporteur transport' },
        { title: 'Anti-Nuke', category: 'Structure Défense', url: 'pages/structures.html#defense', keywords: 'anti-nuke défense nucléaire missile' },
        { title: 'Umbrella', category: 'Structure Défense', url: 'pages/structures.html#defense', keywords: 'umbrella anti-orbital défense' },
        
        // Stratégies
        { title: 'Build Order Standard', category: 'Stratégie', url: 'pages/strategies.html#build-orders', keywords: 'build order opening début standard' },
        { title: 'Rush Dox', category: 'Stratégie', url: 'pages/strategies.html#build-orders', keywords: 'rush dox agressif early' },
        { title: 'Compositions d\'armées', category: 'Stratégie', url: 'pages/strategies.html#compositions', keywords: 'composition armée army mix' },
        { title: 'Multi-Planète', category: 'Stratégie', url: 'pages/strategies.html#multi-planete', keywords: 'multi planète orbital invasion' },
        { title: 'Counters', category: 'Stratégie', url: 'pages/strategies.html#counters', keywords: 'counter contre stratégie' },
        
        // Raccourcis importants
        { title: 'Attack Move (A)', category: 'Raccourci', url: 'pages/raccourcis.html', keywords: 'attack move a-move attaque' },
        { title: 'Patrol (P)', category: 'Raccourci', url: 'pages/raccourcis.html', keywords: 'patrol patrouille p' },
        { title: 'Stop (S)', category: 'Raccourci', url: 'pages/raccourcis.html', keywords: 'stop arrêt s' },
        { title: 'Groupes de Contrôle', category: 'Raccourci', url: 'pages/raccourcis.html', keywords: 'groupe contrôle ctrl numéro sélection' },
    ];
    
    if (globalSearch) {
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
            }).slice(0, 8); // Max 8 résultats
            
            if (results.length > 0) {
                searchResults.innerHTML = results.map(item => `
                    <div class="search-result-item" onclick="window.location.href='${item.url}'">
                        <div class="search-result-title">${item.title}</div>
                        <div class="search-result-category">${item.category}</div>
                    </div>
                `).join('');
                searchResults.classList.add('active');
            } else {
                searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-title">Aucun résultat</div></div>';
                searchResults.classList.add('active');
            }
        });
        
        // Fermer les résultats au clic ailleurs
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                searchResults.classList.remove('active');
            }
        });
    }
});
