// Création des particules
function createParticles() {
    const particlesContainer = document.querySelector('.footer-particles');
    const numberOfParticles = 15; // Réduit pour un effet plus subtil

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';

        particlesContainer.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', createParticles);