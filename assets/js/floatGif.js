const robot = document.getElementById('floating-robot');
const containerAnimate = document.getElementById('robot-container');
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

document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('.floating-container').style.display = 'none';
});


