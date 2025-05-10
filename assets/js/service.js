document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
    
    // Configuration de l'animation au survol
    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    function handleMouseMove(e) {
        // Préserver l'animation d'apparition
        if (!e.currentTarget.classList.contains('visible')) return;
        
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = -(x - centerX) / 10;

        // Utilisation de requestAnimationFrame pour une animation plus fluide
        requestAnimationFrame(() => {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        // Effet de brillance dynamique
        const percentX = x / rect.width;
        const percentY = y / rect.height;
        card.style.setProperty('--mouse-x', `${percentX * 100}%`);
        card.style.setProperty('--mouse-y', `${percentY * 100}%`);
    }

    function handleMouseLeave(e) {
        // Préserver l'animation d'apparition
        if (!e.currentTarget.classList.contains('visible')) return;
        
        const card = e.currentTarget;
        requestAnimationFrame(() => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    }
    
    // Configuration de l'Intersection Observer pour l'animation d'apparition
    // Modifié pour détecter les cartes plus tôt dans le scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Détecte les éléments quand ils sont à 10% du bas du viewport
        threshold: 0.05 // Déclenche quand seulement 5% de l'élément est visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Ajouter un délai progressif plus court pour l'effet de distribution
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 50); // Délai réduit à 50ms entre chaque carte
            } else {
                // Réinitialiser l'animation quand l'élément sort du viewport
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    // Observer chaque carte
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Fonction pour précharger les cartes qui sont déjà visibles au chargement
    function checkInitialVisibility() {
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isVisible = (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
            
            if (isVisible) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 50);
            }
        });
    }
    
    // Vérifier les cartes visibles au chargement initial
    checkInitialVisibility();
    
    // Optimisation pour le défilement fluide
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Rien à faire ici car IntersectionObserver s'en charge
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Fonction pour réinitialiser et rejouer l'animation
    window.resetCardAnimation = function() {
        cards.forEach(card => {
            card.classList.remove('visible');
        });
        
        // Forcer un reflow pour réinitialiser les animations
        void cards[0].offsetWidth;
        
        // Réappliquer les animations après un court délai
        setTimeout(() => {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 50);
            });
        }, 100);
    };
    
    // Amélioration: préchargement des images pour une animation plus fluide
    function preloadBackgroundImages() {
        const imageUrls = [
            '../images/service/6213731.png',
            '../images/service/front.png',
            '../images/service/application-web.png',
            '../images/service/maintenance.png',
            '../images/service/conseil.png',
            '../images/service/otherService.PNG'
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }
    
    // Précharger les images en arrière-plan
    preloadBackgroundImages();
    
    // Amélioration: détection plus agressive pour les appareils mobiles
    if (window.innerWidth <= 768) {
        // Sur mobile, on montre les cartes plus tôt
        observerOptions.rootMargin = '0px 0px -5% 0px';
        observerOptions.threshold = 0.01;
    }
});
