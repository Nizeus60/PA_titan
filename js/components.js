// ===================================
// Composants Dynamiques - PA:Titans
// ===================================

(function() {
    // Détecter si on est dans /pages/ ou à la racine
    const isInPages = window.location.pathname.includes('/pages/');
    const BASE = isInPages ? '../' : '';
    
    // Détecter la page actuelle pour le menu actif
    const currentPath = window.location.pathname;
    let currentPage = 'index';
    
    if (currentPath.includes('debutant')) currentPage = 'debutant';
    else if (currentPath.includes('raccourcis')) currentPage = 'raccourcis';
    else if (currentPath.includes('unites')) currentPage = 'unites';
    else if (currentPath.includes('structures')) currentPage = 'structures';
    else if (currentPath.includes('strategies')) currentPage = 'strategies';
    else if (currentPath.includes('lexique')) currentPage = 'lexique';
    
    // ===================================
    // Charger la Navigation
    // ===================================
    function loadNav() {
        const navPlaceholder = document.getElementById('nav-placeholder');
        if (!navPlaceholder) return;
        
        fetch(BASE + 'components/nav.html')
            .then(response => response.text())
            .then(html => {
                // Remplacer {BASE} par le bon chemin
                html = html.replace(/{BASE}/g, BASE);
                navPlaceholder.innerHTML = html;
                
                // Marquer la page active
                const activeLink = document.querySelector(`[data-page="${currentPage}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
                
                // Initialiser le menu mobile
                initMobileNav();
            })
            .catch(err => console.error('Erreur chargement nav:', err));
    }
    
    // ===================================
    // Charger le Footer
    // ===================================
    function loadFooter() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (!footerPlaceholder) return;
        
        fetch(BASE + 'components/footer.html')
            .then(response => response.text())
            .then(html => {
                html = html.replace(/{BASE}/g, BASE);
                footerPlaceholder.innerHTML = html;
            })
            .catch(err => console.error('Erreur chargement footer:', err));
    }
    
    // ===================================
    // Initialiser le Menu Mobile
    // ===================================
    function initMobileNav() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                
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
            
            // Fermer au clic sur un lien
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
        }
    }
    
    // ===================================
    // Initialisation au chargement
    // ===================================
    document.addEventListener('DOMContentLoaded', function() {
        loadNav();
        loadFooter();
    });
})();
