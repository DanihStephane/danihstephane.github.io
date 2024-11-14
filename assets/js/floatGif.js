const robot = document.getElementById('floating-robot');
const containerAnimate = document.getElementById('robot-container');
const robotExplosion = document.getElementById('robot-explosion');
let lastScrollTop = 0;
let isAnimating = false;

// Gestion de l'effet de rotation au scroll
let scrollTimeout;
let lastScrollTime = Date.now();
const SCROLL_THRESHOLD = 50;
const TIME_THRESHOLD = 150;

window.addEventListener('scroll', function() {
    var section = document.getElementById("stats");
    var robotContainer = document.getElementById("robot-container");

    var sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    var scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= sectionPosition) {
        robotContainer.classList.add("visible");
    } else {
        robotContainer.classList.remove("visible");
    }


    const now = Date.now();
    if (now - lastScrollTime < TIME_THRESHOLD) return;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(lastScrollTop - st) > SCROLL_THRESHOLD && !isAnimating) {
            isAnimating = true;
            robot.classList.add('scroll-rotate');

            setTimeout(() => {
                robot.classList.remove('scroll-rotate');
                setTimeout(() => {
                    isAnimating = false;
                }, 50);
            }, 700);

            lastScrollTop = st;
            lastScrollTime = now;
        }
    }, 10);
}, { passive: true });




const translationsGame = {
    fr: {
        game: '🤖 Hey ! Bienvenue l\'ami(e) 👋 Trouve mon mini-clone caché sur le site. Si tu y arrives, prépare-toi… ça va faire BOUM ! 💥😁',
        close: "Supprimer le jeu",
    },
    en: {
        game: "🤖 Hey! Welcome, friend 👋 Find my mini-clone hidden on the site. If you manage to spot it, get ready... it's going to go BOOM! 💥😁",
        close: "Delete the game",
    },
    de: {
        game: "🤖 Hey! Willkommen, mein Freund / meine Freundin 👋 Finde meinen Mini-Klon, der auf der Website versteckt ist. Wenn du ihn entdeckst, mach dich bereit… es wird knallen! 💥😁",
        close: "Spiel löschen",
    },
    mg: {
        game: "🤖 Hey! Tonga soa ry namana 👋 Tadiavo ny mini-clone-ako miafina ao amin'ny tranonkala. Raha mahita azy ianao, miomàna tsara… hisy BOUM hitranga! 💥😁",
        close: "Hamafa ny lalao",
    },
};

const closeButton = document.querySelector('.close-button');
const floatingContainer = document.querySelector('.floating-container');

function closeFloatingElements() {
    floatingContainer.style.display = 'none';
    robotExplosion.style.display = 'none';
}

function setCloseButtonTitle() {
    closeButton.setAttribute('title', translationsGame[currentLanguage].close);
}

function changeGameLang() {
    document.querySelector('.dialog-bubble').textContent = translationsGame[currentLanguage].game;
    setCloseButtonTitle();
}

// Ajout des événements
closeButton.addEventListener('click', closeFloatingElements);
setCloseButtonTitle();


// Création de la bulle de dialogue
const dialogBubble = document.createElement('div');
dialogBubble.className = 'dialog-bubble';
dialogBubble.innerHTML = `
    <div class="dialog-content">
        `+translationsGame[currentLanguage].game+`
    </div>
`;
containerAnimate.appendChild(dialogBubble);

// Gestion du clic sur le robot
let isGlitching = false;
robot.addEventListener('click', (e) => {
    e.stopPropagation();

    // Activation de l'effet glitch
    if (!isGlitching) {
        robot.classList.add('glitch');
        isGlitching = true;
    }

    // Affichage de la bulle de dialogue
    dialogBubble.style.display = 'block';
});

// Gestion du clic en dehors
document.addEventListener('click', (e) => {
    if (!container.contains(e.target) && !e.target.closest('.right')) {
        // Désactivation de l'effet glitch
        robot.classList.remove('glitch');
        isGlitching = false;

        // Masquage de la bulle de dialogue
        dialogBubble.style.display = 'none';
    }
});

robotExplosion.addEventListener('click', (e) => {
    robotExplosion.style.display = "none";
    document.body.style.backgroundImage = "url('./assets/images/confetti.gif')";

    const start = 200;
    const end = 400;
    const duration = 1000; // 1 seconde

    let startTime = performance.now();

    function animate() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentWidth = start + (end - start) * progress;
        floatingContainer.style.width = `${currentWidth}px`;

        if (elapsed < duration) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);

    setTimeout(() => {
        robot.src = "./assets/images/boom.gif";
    }, 1000);

    setTimeout(() => {
        document.body.style.backgroundImage = "";
    }, 1800);

    setTimeout(() => {
        document.querySelector('.close-button').click();
    }, 4000);
});

