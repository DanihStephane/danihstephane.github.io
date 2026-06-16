const track = document.querySelector('.track');
const carousel = document.querySelector('.carousel');

const left = document.querySelector('.left');
const right = document.querySelector('.right');
let babaWidth = document.querySelector('.baba').offsetWidth;
let carouselWidth = carousel.offsetWidth;

const cards = document.querySelectorAll('.carousel .track .card');

let index = 0;
let sumOfRight = 0;
let sumOfLeft = 0;

// Adapte la hauteur du carousel exactement au contenu du card courant
const updateCarouselHeight = () => {
    const card = cards[index];
    if (!card) return;
    const h = card.scrollHeight;
    if (h > 0) carousel.style.height = h + 'px';
};

const syncCardWidths = () => {
    carouselWidth = carousel.offsetWidth;
    cards.forEach(card => {
        card.style.width = carouselWidth + 'px';
    });
    track.style.transform = 'translate(0px)';
    sumOfRight = 0;
    index = 0;
    left.classList.remove('show');
    right.classList.remove('lock');
    updateCarouselHeight();
};

syncCardWidths();

// Recalcul après window.onload (traduction.js injecte les textes là)
window.addEventListener('load', () => {
    updateCarouselHeight();
    setTimeout(updateCarouselHeight, 200);
});

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncCardWidths, 150);
});

let initialPosition = null;
let moving = false;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;

right.addEventListener('click', function () {
    track.classList.add('smooth-transition');
    index++;
    left.classList.add('show');
    sumOfRight += carouselWidth;

    // position:absolute + flex → offsetWidth = N × carouselWidth (contenu réel)
    if ((sumOfRight + carouselWidth) >= track.offsetWidth) {
        track.style.transform = `translate(0px)`;
        sumOfRight = 0;
        index = 0;
    } else {
        track.style.transform = `translateX(-${sumOfRight}px)`;
    }

    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        right.classList.add('lock');
    }

    updateCarouselHeight();
});

left.addEventListener('click', function () {
    track.classList.add('smooth-transition');
    sumOfLeft = sumOfRight - carouselWidth;

    if (sumOfLeft < 0) {
        sumOfRight = track.offsetWidth - carouselWidth;
        track.style.transform = `translateX(-${sumOfRight}px)`;
        index = Math.floor(track.offsetWidth / carouselWidth) - 1;
    } else {
        track.style.transform = `translateX(-${sumOfLeft}px)`;
        sumOfRight -= carouselWidth;
        index--;
    }

    right.classList.remove('lock');

    if (index === 0) {
        left.classList.remove('show');
    }

    updateCarouselHeight();
    stopAutoScroll();
});

const gestureStart = (e) => {
    initialPosition = e.pageX;
    moving = true;
    const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
    if (transformMatrix !== 'none') {
        transform = parseInt(transformMatrix.split(',')[4].trim());
    }
};

const gestureMove = (e) => {
    track.classList.remove('smooth-transition');
    if (moving) {
        const diff = e.pageX - initialPosition;
        if (e.pageX - lastPageX > 0) {
            if (transformValue > 0) {
                return;
            }
        } else {
            if (Math.abs(transformValue) > track.offsetWidth - carousel.offsetWidth) {
                return;
            }
        }
        transformValue = parseInt(transform) + diff;
        track.style.transform = `translateX(${transformValue}px)`;
    }
    lastPageX = e.pageX;
};

const gestureEnd = (e) => {
    moving = false;
};

if (window.PointerEvent) {
    carousel.addEventListener('pointerdown', gestureStart);
    carousel.addEventListener('pointermove', gestureMove);
    carousel.addEventListener('pointerup', gestureEnd);
} else {
    carousel.addEventListener('touchdown', gestureStart);
    carousel.addEventListener('touchmove', gestureMove);
    carousel.addEventListener('touchup', gestureEnd);
    carousel.addEventListener('mousedown', gestureStart);
    carousel.addEventListener('mousemove', gestureMove);
    carousel.addEventListener('mouseup', gestureEnd);
}

let autoScrollInterval;

const autoScrollNext = () => {
    autoScrollInterval = setInterval(() => {
        // Pause si l'utilisateur interagit avec le sélecteur de pays du
        // téléphone (intl-tel-input) : le clic simulé sur "next" bulle jusqu'à
        // document et serait interprété par iti comme un clic extérieur, ce qui
        // refermerait son déroulant. Le champ de recherche d'iti a le focus
        // tant que le déroulant est ouvert.
        const active = document.activeElement;
        if (active && active.closest && active.closest('.iti, .iti__country-selector')) {
            return;
        }
        right.click(); // Simuler un clic sur le bouton "next"
    }, 2000); // Toutes les 2 secondes
};

const stopAutoScroll = () => {
    clearInterval(autoScrollInterval); // Stopper le défilement
};

// Initialiser le défilement automatique au chargement
autoScrollNext();
