const button = document.getElementById('particleButton');
const container = document.getElementById('particlesContainer');

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random size between 3 and 6 pixels
    const size = Math.random() * 3 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Position at mouse point
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Random direction
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 100 + 50;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;

    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);

    particle.style.animation = 'particle-animation 1s ease-out forwards';

    container.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

function createParticles(e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create multiple particles
    for (let i = 0; i < 8; i++) {
        createParticle(x, y);
    }
}

button.addEventListener('mousemove', createParticles);