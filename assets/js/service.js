document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.service-card');

    // Entry animation stagger — JS controls delays so exit uses 0s (no linger on scroll-up)
    const ENTRY_DELAYS = [0.05, 0.13, 0.21, 0.29, 0.37, 0.45];

    const cardIndex = new Map();
    cards.forEach((card, i) => cardIndex.set(card, i));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const idx = cardIndex.get(entry.target) ?? 0;
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${ENTRY_DELAYS[idx] ?? 0}s`;
                entry.target.classList.add('visible');
            } else {
                // Exit: no delay so cards disappear immediately when scrolled out
                entry.target.style.transitionDelay = '0s';
                entry.target.classList.remove('visible');
            }
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    cards.forEach(card => observer.observe(card));

    // Cards already in viewport on load
    cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.transitionDelay = `${ENTRY_DELAYS[i] ?? 0}s`;
            card.classList.add('visible');
        }
    });

    window.resetCardAnimation = function () {
        cards.forEach(card => {
            card.style.transitionDelay = '0s';
            card.classList.remove('visible');
        });
        requestAnimationFrame(() => {
            cards.forEach((card, i) => {
                card.style.transitionDelay = `${ENTRY_DELAYS[i] ?? 0}s`;
                card.classList.add('visible');
            });
        });
    };
});
