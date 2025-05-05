'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});

// Sélectionner tous les liens de navigation
const navLinks = document.querySelectorAll(".navbar-link");

// Ajouter un écouteur d'événements à chaque lien
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Déclencher artificiellement un clic sur le bouton toggle
    navToggleBtn.click();
  });
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  const cursorDot = document.getElementById("cursor-dot");
  const cursorOutline = document.getElementById("cursor-outline");

  const slashElement = document.getElementById("slash");
  const companyYear = document.querySelectorAll('.company__year');
  const recommandationSection = document.getElementById('recommandation-section');
  const contactSection = document.getElementById('contact-section');
  const lang = document.getElementById('lang');
  const autotext1 = document.getElementById('autotext1');
  const autotext2 = document.getElementById('autotext2');

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    cursorDot.style.backgroundColor = "black";
    cursorOutline.style.border = "2px solid hsla(0, 0%, 0%, 0.5)";

    lang.style.border = "2px solid rgba(0, 0, 0, 0.3)";
    lang.style.backgroundImage = "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e \")";

    slashElement ? slashElement.style.color = "black" : '';
    autotext1.style.color = "black";
    autotext2.style.color = "black";

    companyYear.forEach(element => {
      element.style.color = "#525252"; // Remplace 'red' par la couleur souhaitée
    });
    recommandationSection.style.background = "linear-gradient(0deg, #00dbde, hsl(0, 0%, 90%)),linear-gradient(180deg, #00dbde, hsl(0, 0%, 90%))";
    contactSection.style.background = "linear-gradient(180deg, #00dbde, hsl(0, 0%, 90%)),linear-gradient(0deg, #00dbde, hsl(0, 0%, 90%))";

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    cursorDot.style.backgroundColor = "white";
    cursorOutline.style.border = "2px solid hsla(0, 0%, 100%, 0.5)";

    lang.style.border = "2px solid rgba(255, 255, 255, 0.3)";
    lang.style.backgroundImage = "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e \")";

    slashElement ? slashElement.style.color = "white" : '';
    autotext1.style.color = "white";
    autotext2.style.color = "white";

    companyYear.forEach(element => {
      element.style.color = "white"; // Remplace 'red' par la couleur souhaitée
    });
    
    recommandationSection.style.background = "linear-gradient(0deg, #00dbde, hsl(0, 0%, 12%)),linear-gradient(180deg, #00dbde, hsl(0, 0%, 12%))";
    contactSection.style.background = "linear-gradient(180deg, #00dbde, hsl(0, 0%, 12%)),linear-gradient(0deg, #00dbde, hsl(0, 0%, 12%))";
    

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~VERSION 0~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// window.onload = function(){
//   Particles.init({
//     selector: '.background',
//     maxParticles: 150,
//     connectParticles: 'true',
//     speed:2,
//     minDistance: 140,
//     sizeVariations: 4,
//     color: '#ffffff'
//   });
// }

// //ajout de nouvelle forme d'aniamtion

// const canvas = document.getElementById('particleCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const particles = [];
// const maxParticles = 150;
// const minDistance = 140; // Distance minimale pour dessiner les lignes

// function Particle(x, y) {
//   this.x = x;
//   this.y = y;
//   this.size = Math.random() * 10 + 5; // Taille aléatoire pour le texte                      origin 20 et 10
//   this.color = '#ffffff'; // Couleur du texte
//   this.speedX = (Math.random() - 0.5) * 4; // Vitesse aléatoire sur l'axe X
//   this.speedY = (Math.random() - 0.5) * 4; // Vitesse aléatoire sur l'axe Y
// }

// function initParticles() {
//   for (let i = 0; i < maxParticles; i++) {
//     const x = Math.random() * canvas.width;
//     const y = Math.random() * canvas.height;
//     particles.push(new Particle(x, y));
//   }
// }

// function drawLines() {
//   for (let i = 0; i < particles.length; i++) {
//     for (let j = i + 1; j < particles.length; j++) {
//       const dx = particles[i].x - particles[j].x;
//       const dy = particles[i].y - particles[j].y;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       // Dessiner une ligne si la distance est inférieure à la distance minimale
//       if (distance < minDistance) {
//         ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'; // Couleur des lignes
//         ctx.lineWidth = 1; // Épaisseur des lignes
//         ctx.beginPath();
//         ctx.moveTo(particles[i].x, particles[i].y);
//         ctx.lineTo(particles[j].x, particles[j].y);
//         ctx.stroke();
//       }
//     }
//   }
// }

// function drawSymbols() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//   // Dessiner le symbole "</>"
//   particles.forEach(particle => {
//     ctx.font = `${particle.size}px Arial`; // Définir la police et la taille
//     ctx.fillStyle = particle.color; // Couleur du texte
//     ctx.fillText('</>', particle.x - particle.size / 4, particle.y + particle.size / 3); // Centrer le texte
//     // Mettre à jour la position de la particule
//     particle.x += particle.speedX;
//     particle.y += particle.speedY;

//     // Vérifier les bords et rebondir
//     if (particle.x < 0 || particle.x > canvas.width) {
//       particle.speedX *= -1; // Inverser la direction sur l'axe X
//     }
//     if (particle.y < 0 || particle.y > canvas.height) {
//       particle.speedY *= -1; // Inverser la direction sur l'axe Y
//     }
//   });

//   // Dessiner les lignes entre les particules
//   drawLines();
// }

// function animate() {
//   drawSymbols();
//   requestAnimationFrame(animate);
// }





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~VERSION 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// const canvas = document.getElementById('particleCanvas');
//   const ctx = canvas.getContext('2d');

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   const particles = [];
//   const maxParticles = 60;
//   const minDistance = 140;

//   function Particle() {
//     this.x = Math.random() * canvas.width;
//     this.y = Math.random() * canvas.height;
//     this.size = 18;
//     this.color = '#2980b9'; // Couleur bleue pour le thème développeur
//     this.speedX = (Math.random() - 0.5) * 3;
//     this.speedY = (Math.random() - 0.5) * 3;
//     this.shape = Math.floor(Math.random() * 3); // 0 = code bloc, 1 = circuit, 2 = terminal
//   }

//   function initParticles() {
//     for (let i = 0; i < maxParticles; i++) {
//       particles.push(new Particle());
//     }
//   }

//   function drawParticles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     particles.forEach(particle => {
//       ctx.beginPath();
//       switch (particle.shape) {
//         case 0: // Code bloc
//           ctx.rect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
//           ctx.fillText('{...}', particle.x - particle.size / 3, particle.y + particle.size / 4);
//           break;
//         case 1: // Circuit
//           ctx.moveTo(particle.x - particle.size / 2, particle.y);
//           ctx.lineTo(particle.x + particle.size / 2, particle.y);
//           ctx.moveTo(particle.x, particle.y - particle.size / 2);
//           ctx.lineTo(particle.x, particle.y + particle.size / 2);
//           break;
//         case 2: // Terminal
//           ctx.rect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
//           ctx.fillText('$', particle.x - particle.size / 4, particle.y + particle.size / 4);
//           break;
//       }
//       ctx.strokeStyle = particle.color;
//       ctx.stroke();

//       particle.x += particle.speedX;
//       particle.y += particle.speedY;

//       if (particle.x < 0 || particle.x > canvas.width) {
//         particle.speedX *= -1;
//       }
//       if (particle.y < 0 || particle.y > canvas.height) {
//         particle.speedY *= -1;
//       }
//     });

//     drawLines();
//   }

//   function drawLines() {
//     for (let i = 0; i < particles.length; i++) {
//       for (let j = i + 1; j < particles.length; j++) {
//         const dx = particles[i].x - particles[j].x;
//         const dy = particles[i].y - particles[j].y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < minDistance) {
//           ctx.strokeStyle = 'rgba(41, 128, 185, 0.4)'; // Couleur bleue avec transparence
//           ctx.lineWidth = 1;
//           ctx.beginPath();
//           ctx.moveTo(particles[i].x, particles[i].y);
//           ctx.lineTo(particles[j].x, particles[j].y);
//           ctx.stroke();
//         }
//       }
//     }
//   }

//   function animate() {
//     drawParticles();
//     requestAnimationFrame(animate);
//   }

//   initParticles();
//   animate();







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~VERSION 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const canvas = document.getElementById('particleCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const particles = [];
// const maxParticles = 60;
// const minDistance = 140;

// function Particle() {
//   this.x = Math.random() * canvas.width;
//   this.y = Math.random() * canvas.height;
//   this.size = Math.random() < 0.2 ? 30 : 18; // 20% de probabilité d'être agrandi
//   this.color = 'rgba(41, 128, 185, 0.8)'; // Couleur bleue avec opacité
//   this.speedX = (Math.random() - 0.5) * 1.5;
//   this.speedY = (Math.random() - 0.5) * 1.5;
//   this.opacity = 0;
//   this.shape = Math.floor(Math.random() * 6); // 0 = bloc de code, 1 = circuit, 2 = terminal, 3 = balise de code, 4 = triangle, 5 = hexagone
// }

// function initParticles() {
//   for (let i = 0; i < maxParticles; i++) {
//     particles.push(new Particle());
//   }
// }

// function drawParticles() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   particles.forEach((particle) => {
//     particle.opacity = Math.min(1, particle.opacity + 0.02); // Augmenter l'opacité graduellement
//     ctx.globalAlpha = particle.opacity;

//     ctx.beginPath();
//     switch (particle.shape) {
//       case 0: // Bloc de code (grand rectangle pour certains)
//         ctx.rect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
//         ctx.fillText('{...}', particle.x - particle.size / 3, particle.y + particle.size / 4);
//         break;
//       case 1: // Circuit
//         ctx.moveTo(particle.x - particle.size / 2, particle.y);
//         ctx.lineTo(particle.x + particle.size / 2, particle.y);
//         ctx.moveTo(particle.x, particle.y - particle.size / 2);
//         ctx.lineTo(particle.x, particle.y + particle.size / 2);
//         break;
//       case 2: // Terminal
//         ctx.rect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
//         ctx.fillText('$_>', particle.x - particle.size / 4, particle.y + particle.size / 4);
//         break;
//       case 3: // Balise de code
//         ctx.font = "18px Arial";
//         ctx.fillText('</>', particle.x - particle.size / 3, particle.y + particle.size / 4);
//         break;
//       case 4: // Triangle
//         ctx.moveTo(particle.x, particle.y - particle.size / 2);
//         ctx.lineTo(particle.x - particle.size / 2, particle.y + particle.size / 2);
//         ctx.lineTo(particle.x + particle.size / 2, particle.y + particle.size / 2);
//         ctx.closePath();
//         break;
//       case 5: // Hexagone
//         for (let j = 0; j < 6; j++) {
//           const angle = (Math.PI / 3) * j;
//           const px = particle.x + particle.size * Math.cos(angle) / 2;
//           const py = particle.y + particle.size * Math.sin(angle) / 2;
//           if (j === 0) ctx.moveTo(px, py);
//           else ctx.lineTo(px, py);
//         }
//         ctx.closePath();
//         break;
//     }
//     ctx.strokeStyle = particle.color;
//     ctx.stroke();

//     // Déplacement des particules
//     particle.x += particle.speedX;
//     particle.y += particle.speedY;

//     // Inverser la direction si on atteint le bord
//     if (particle.x < 0 || particle.x > canvas.width) {
//       particle.speedX *= -1;
//     }
//     if (particle.y < 0 || particle.y > canvas.height) {
//       particle.speedY *= -1;
//     }
//   });

//   ctx.globalAlpha = 1;
//   drawLines();
// }

// function drawLines() {
//   for (let i = 0; i < particles.length; i++) {
//     for (let j = i + 1; j < particles.length; j++) {
//       const dx = particles[i].x - particles[j].x;
//       const dy = particles[i].y - particles[j].y;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       if (distance < minDistance) {
//         ctx.strokeStyle = 'rgba(41, 128, 185, 0.3)'; // Couleur bleue avec transparence pour les lignes
//         ctx.lineWidth = 1;
//         ctx.beginPath();
//         ctx.moveTo(particles[i].x, particles[i].y);
//         ctx.lineTo(particles[j].x, particles[j].y);
//         ctx.stroke();
//       }
//     }
//   }
// }

// function animate() {
//   drawParticles();
//   requestAnimationFrame(animate);
// }

// initParticles();
// animate();






//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Configuration de base
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Définition du système de particules
const particleSystem = {
  particles: [],
  maxParticles: 50, // Réduit de 75 à 50
  colorSchemes: [
    { // Thème Initial Éclairci
      main: 'rgba(41, 183, 255, 0.6)',
      accent: 'rgba(0, 255, 221, 0.7)',
      highlight: 'rgba(255, 255, 255, 0.9)',
      lines: 'rgba(41, 183, 255, 0.2)'
    },
    { // Thème Sky-Neon
      main: 'rgba(0, 200, 255, 0.8)',
      accent: 'rgba(0, 255, 200, 0.9)',
      highlight: 'rgba(255, 255, 255, 1.0)',
      lines: 'rgba(0, 200, 255, 0.25)'
    },
    { // Thème Pastel Dynamique
      main: 'rgba(153, 229, 255, 0.8)',
      accent: 'rgba(153, 255, 230, 0.9)',
      highlight: 'rgba(255, 250, 240, 0.9)',
      lines: 'rgba(153, 229, 255, 0.3)'
    },
  ],

  activeColorScheme: 0,
  minDistance: 150,
  interactionRadius: 250,
  mouseX: undefined,
  mouseY: undefined,
  mouseActive: false,
  lastClickTime: 0,
  specialEffects: [],
  techTexts: ['JS', 'CSS', 'HTML', 'API', 'NODE', 'REACT', 'VUE', 'NEXT', 'UI/UX', 'CODE', 'DEV', '</>', 'AI', 'WEB3', 'CLOUD', 'SQL', 'DATA', 'DESIGN'],

  // Initialiser le système
  init() {
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle());
    }

    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.mouseActive = true;
      if (Math.random() < 0.05) { // Réduit de 0.1 à 0.05
        this.createMouseTrail(e.clientX, e.clientY);
      }
    });

    window.addEventListener('mouseout', () => {
      this.mouseActive = false;
    });

    window.addEventListener('click', (e) => {
      const now = Date.now();
      if (now - this.lastClickTime > 1000) {
        this.lastClickTime = now;
        this.createSpecialEffect(e.clientX, e.clientY);
      }
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    setInterval(() => {
      this.activeColorScheme = (this.activeColorScheme + 1) % this.colorSchemes.length;
      this.particles.forEach(p => {
        p.targetColor = this.getColors().main;
      });
    }, 30000);
  },

  getColors() {
    return this.colorSchemes[this.activeColorScheme];
  },

  createParticle(x, y, isSpecial = false) {
    const colors = this.getColors();
    const particle = {
      x: x || Math.random() * canvas.width,
      y: y || Math.random() * canvas.height,
      size: isSpecial ? 35 : Math.random() < 0.2 ? 30 : 18,
      originalSize: 0,
      color: colors.main,
      targetColor: colors.main,
      speedX: (Math.random() - 0.5) * (isSpecial ? 3 : 1.5),
      speedY: (Math.random() - 0.5) * (isSpecial ? 3 : 1.5),
      opacity: isSpecial ? 1 : 0,
      targetOpacity: 1,
      shape: Math.floor(Math.random() * 12),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      hovered: false,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.03 + Math.random() * 0.05,
      text: this.techTexts[Math.floor(Math.random() * this.techTexts.length)],
      textOpacity: 0,
      lifespan: isSpecial ? 5000 + Math.random() * 3000 : Infinity,
      birth: Date.now(),
      glowRadius: 0,
      glowIntensity: 0,
      connected: []
    };
    particle.originalSize = particle.size;
    return particle;
  },

  createSpecialEffect(x, y) {
    this.createExplosion(x, y);
    const additionalEffectType = Math.floor(Math.random() * 2);
    switch(additionalEffectType) {
      case 0: this.createGridEffect(x, y); break;
      case 1: this.createDataWave(x, y); break;
    }
  },

  createMouseTrail(x, y) {
    if (Math.random() < 0.5) return;
    const colors = this.getColors();
    const trail = {
      x: x,
      y: y,
      size: 5 + Math.random() * 10,
      color: colors.accent,
      opacity: 0.7,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      type: Math.floor(Math.random() * 3),
      lifespan: 1000 + Math.random() * 1000,
      birth: Date.now()
    };
    this.specialEffects.push(trail);
  },

  createExplosion(x, y) {
    const colors = this.getColors();
    const particleCount = 8 + Math.floor(Math.random() * 4); // Réduit de 12-20 à 8-12
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 / particleCount) * i;
      const speed = 2 + Math.random() * 3;
      const particle = this.createParticle(x, y, true);
      particle.speedX = Math.cos(angle) * speed;
      particle.speedY = Math.sin(angle) * speed;
      particle.color = colors.highlight;
      particle.targetColor = colors.highlight;
      particle.size = 15 + Math.random() * 15;
      particle.originalSize = particle.size;
      this.particles.push(particle);
    }
    for (let i = 0; i < 2; i++) { // Réduit de 3 à 2
      const wave = {
        x: x,
        y: y,
        radius: 10,
        maxRadius: 200 + Math.random() * 100,
        color: colors.highlight,
        opacity: 0.9,
        width: 3,
        type: 'wave',
        birth: Date.now(),
        lifespan: 1500 + i * 300
      };
      this.specialEffects.push(wave);
    }
  },

  createGridEffect(x, y) {
    const colors = this.getColors();
    const gridSize = 40;
    const gridExtent = 3; // Réduit de 5 à 3
    const extraWave = {
      x: x,
      y: y,
      radius: 5,
      maxRadius: 150 + Math.random() * 80,
      color: colors.accent,
      opacity: 0.7,
      width: 2,
      type: 'wave',
      birth: Date.now(),
      lifespan: 1200
    };
    this.specialEffects.push(extraWave);
    for (let i = -gridExtent; i <= gridExtent; i++) {
      for (let j = -gridExtent; j <= gridExtent; j++) {
        if (Math.random() < 0.4) {
          const cell = {
            x: x + i * gridSize,
            y: y + j * gridSize,
            size: gridSize * 0.8,
            type: 'grid',
            color: colors.accent,
            birth: Date.now(),
            lifespan: 1000 + Math.random() * 1500,
            opacity: 0.1 + Math.random() * 0.5,
            distance: Math.sqrt(i*i + j*j),
            speedX: i * (0.5 + Math.random() * 0.5),
            speedY: j * (0.5 + Math.random() * 0.5)
          };
          this.specialEffects.push(cell);
        }
      }
    }
    for (let i = 0; i < 5; i++) { // Réduit de 10 à 5
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 150;
      const endX = x + Math.cos(angle) * distance;
      const endY = y + Math.sin(angle) * distance;
      const line = {
        x1: x,
        y1: y,
        x2: endX,
        y2: endY,
        color: colors.highlight,
        type: 'line',
        width: 1 + Math.random() * 2,
        birth: Date.now(),
        lifespan: 800 + Math.random() * 1200,
        opacity: 0.7 + Math.random() * 0.3
      };
      this.specialEffects.push(line);
    }
  },

  createDataWave(x, y) {
    const colors = this.getColors();
    const extraWave = {
      x: x,
      y: y,
      radius: 10,
      maxRadius: 180 + Math.random() * 100,
      color: colors.main,
      opacity: 0.8,
      width: 2.5,
      type: 'wave',
      birth: Date.now(),
      lifespan: 1800
    };
    this.specialEffects.push(extraWave);
    const wave = {
      x: x,
      y: y,
      radius: 20,
      maxRadius: 300,
      type: 'dataWave',
      color: colors.highlight,
      birth: Date.now(),
      lifespan: 3000,
      opacity: 1,
      texts: []
    };
    const textCount = 15; // Réduit de 30 à 15
    for (let i = 0; i < textCount; i++) {
      const angle = (Math.PI * 2 / textCount) * i;
      const dist = 50 + Math.random() * 200;
      const speed = 0.5 + Math.random() * 1;
      wave.texts.push({
        x: Math.cos(angle) * (dist * 0.3),
        y: Math.sin(angle) * (dist * 0.3),
        targetX: Math.cos(angle) * dist,
        targetY: Math.sin(angle) * dist,
        value: Math.random() < 0.5 ? '0' : '1',
        size: 12 + Math.floor(Math.random() * 10),
        opacity: 0.7 + Math.random() * 0.3,
        speed: speed
      });
    }
    this.specialEffects.push(wave);
    for (let i = 0; i < 3; i++) { // Réduit de 5 à 3
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 2;
      const dataParticle = {
        x: x,
        y: y,
        size: 10 + Math.random() * 15,
        color: colors.accent,
        opacity: 0.8,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        type: Math.floor(Math.random() * 3),
        lifespan: 1500 + Math.random() * 1000,
        birth: Date.now()
      };
      this.specialEffects.push(dataParticle);
    }
  },

  update() {
    const now = Date.now();
    const colors = this.getColors();
    this.particles = this.particles.filter(p => now - p.birth < p.lifespan);
    this.particles.forEach(p => {
      const pulse = Math.sin(p.pulsePhase) * 0.1;
      p.pulsePhase += p.pulseSpeed;
      if (p.color !== p.targetColor) {
        p.color = this.lerpColor(p.color, p.targetColor, 0.05);
      }
      if (p.opacity !== p.targetOpacity) {
        p.opacity = this.lerp(p.opacity, p.targetOpacity, 0.05);
      }
      if (this.mouseActive && this.mouseX && this.mouseY) {
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.interactionRadius) {
          const force = (this.interactionRadius - distance) / this.interactionRadius;
          p.x += dx * 0.01 * force;
          p.y += dy * 0.01 * force;
          p.size = p.originalSize * (1 + force * 0.7 + pulse);
          p.color = colors.accent;
          p.textOpacity = Math.min(1, p.textOpacity + 0.1);
          p.hovered = true;
          p.rotationSpeed = (Math.random() - 0.5) * 0.1;
          p.glowRadius = 15 * force;
          p.glowIntensity = force;
        } else {
          p.size = p.originalSize * (1 + pulse);
          p.textOpacity = Math.max(0, p.textOpacity - 0.05);
          p.hovered = false;
          p.rotationSpeed = (Math.random() - 0.5) * 0.02;
          p.glowRadius = Math.max(0, p.glowRadius - 1);
          p.glowIntensity = Math.max(0, p.glowIntensity - 0.05);
        }
      } else {
        p.size = p.originalSize * (1 + pulse);
      }
      p.rotation += p.rotationSpeed;
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > canvas.width) {
        p.speedX *= -1;
        if (Math.random() < 0.1) { // Réduit de 0.3 à 0.1
          this.createSmallPulse(p.x, p.y);
        }
      }
      if (p.y < 0 || p.y > canvas.height) {
        p.speedY *= -1;
        if (Math.random() < 0.1) { // Réduit de 0.3 à 0.1
          this.createSmallPulse(p.x, p.y);
        }
      }
      p.connected = [];
      let connectionCount = 0;
      for (let other of this.particles) {
        if (p === other || connectionCount >= 5) continue; // Limité à 5 connexions
        const dx = p.x - other.x;
        const dy = p.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.minDistance) {
          p.connected.push({ particle: other, distance: distance });
          connectionCount++;
        }
      }
    });
    this.specialEffects = this.specialEffects.filter(effect => now - effect.birth < effect.lifespan);
    this.specialEffects.forEach(effect => {
      const lifePercent = (now - effect.birth) / effect.lifespan;
      if (effect.type === 'wave') {
        effect.radius = effect.maxRadius * lifePercent;
        effect.opacity = 1 - lifePercent;
      } else if (effect.type === 'grid') {
        effect.opacity = effect.opacity * (1 - lifePercent);
        if (effect.speedX && effect.speedY) {
          effect.x += effect.speedX * (1 - lifePercent * 0.7);
          effect.y += effect.speedY * (1 - lifePercent * 0.7);
        }
      } else if (effect.type === 'line') {
        effect.opacity = effect.opacity * (1 - lifePercent);
      } else if (effect.type === 'dataWave') {
        effect.radius = effect.maxRadius * lifePercent;
        effect.opacity = 1 - lifePercent;
        if (effect.texts) {
          effect.texts.forEach(text => {
            if (text.targetX && text.targetY) {
              text.x = this.lerp(text.x, text.targetX, text.speed * 0.05);
              text.y = this.lerp(text.y, text.targetY, text.speed * 0.05);
            }
          });
        }
      } else {
        effect.x += effect.speedX;
        effect.y += effect.speedY;
        effect.opacity = effect.opacity * (1 - lifePercent);
      }
    });
    while (this.particles.length < this.maxParticles) {
      this.particles.push(this.createParticle());
    }
  },

  createSmallPulse(x, y) {
    const colors = this.getColors();
    const pulse = {
      x: x,
      y: y,
      radius: 5,
      maxRadius: 30 + Math.random() * 20,
      color: colors.main,
      opacity: 0.7,
      width: 2,
      type: 'wave',
      birth: Date.now(),
      lifespan: 500 + Math.random() * 300
    };
    this.specialEffects.push(pulse);
  },

  lerp(a, b, t) {
    return a + (b - a) * t;
  },

  lerpColor(color1, color2, t) {
    const getRGBA = (color) => {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
      if (!match) return [0, 0, 0, 1];
      return [
        parseInt(match[1]),
        parseInt(match[2]),
        parseInt(match[3]),
        match[4] ? parseFloat(match[4]) : 1
      ];
    };
    const rgba1 = getRGBA(color1);
    const rgba2 = getRGBA(color2);
    const r = Math.round(this.lerp(rgba1[0], rgba2[0], t));
    const g = Math.round(this.lerp(rgba1[1], rgba2[1], t));
    const b = Math.round(this.lerp(rgba1[2], rgba2[2], t));
    const a = this.lerp(rgba1[3], rgba2[3], t);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  },

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawConnections();
    this.drawSpecialEffects();
    this.particles.forEach(p => this.drawParticle(p));
  },

  drawConnections() {
    const colors = this.getColors();
    this.particles.forEach(p => {
      p.connected.forEach(connection => {
        const other = connection.particle;
        const distance = connection.distance;
        const opacity = 1 - (distance / this.minDistance);
        if (p.hovered || other.hovered) {
          ctx.strokeStyle = colors.accent.replace(/[^,]+\)/, `${opacity * 0.5})`);
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = colors.lines.replace(/[^,]+\)/, `${opacity * 0.3})`);
          ctx.lineWidth = 1;
        }
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      });
    });
  },

  drawSpecialEffects() {
    this.specialEffects.forEach(effect => {
      ctx.globalAlpha = effect.opacity;
      if (effect.type === 'wave') {
        ctx.strokeStyle = effect.color;
        ctx.lineWidth = effect.width;
        const radius = Math.max(0.1, effect.radius);
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, radius, 0, Math.PI * 2);
        ctx.stroke();
      } else if (effect.type === 'grid') {
        const fadeDistance = 1 - Math.min(1, effect.distance / 10);
        ctx.fillStyle = effect.color.replace(/[^,]+\)/, `${effect.opacity * fadeDistance})`);
        ctx.fillRect(effect.x - effect.size / 2, effect.y - effect.size / 2, effect.size, effect.size);
        ctx.strokeStyle = effect.color.replace(/[^,]+\)/, `${effect.opacity * fadeDistance * 1.5})`);
        ctx.strokeRect(effect.x - effect.size / 2, effect.y - effect.size / 2, effect.size, effect.size);
      } else if (effect.type === 'line') {
        ctx.strokeStyle = effect.color;
        ctx.lineWidth = effect.width;
        ctx.beginPath();
        ctx.moveTo(effect.x1, effect.y1);
        ctx.lineTo(effect.x2, effect.y2);
        ctx.stroke();
      } else if (effect.type === 'dataWave') {
        ctx.save();
        ctx.translate(effect.x, effect.y);
        ctx.strokeStyle = effect.color.replace(/[^,]+\)/, `${effect.opacity * 0.7})`);
        ctx.lineWidth = 2;
        const radius = Math.max(0.1, effect.radius);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = effect.color;
        effect.texts.forEach(text => {
          ctx.font = `${text.size}px "Courier New", monospace`;
          ctx.globalAlpha = text.opacity * effect.opacity;
          ctx.fillText(text.value, text.x, text.y);
        });
        ctx.restore();
      } else {
        ctx.fillStyle = effect.color;
        ctx.beginPath();
        switch (effect.type) {
          case 0: ctx.rect(effect.x - effect.size / 2, effect.y - effect.size / 2, effect.size, effect.size); break;
          case 1: ctx.arc(effect.x, effect.y, Math.max(0.1, effect.size), 0, Math.PI * 2); break;
          case 2:
            ctx.moveTo(effect.x, effect.y - effect.size);
            ctx.lineTo(effect.x - effect.size, effect.y + effect.size);
            ctx.lineTo(effect.x + effect.size, effect.y + effect.size);
            ctx.closePath();
            break;
        }
        ctx.fill();
      }
    });
    ctx.globalAlpha = 1;
  },

  drawParticle(p) {
    ctx.globalAlpha = p.opacity;
    if (p.glowRadius > 0) {
      const glowRadius = Math.max(0.1, p.glowRadius);
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
      gradient.addColorStop(0, p.color.replace(/[^,]+\)/, `${p.glowIntensity * 0.5})`));
      gradient.addColorStop(1, p.color.replace(/[^,]+\)/, '0)'));
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.strokeStyle = p.color;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    const size = Math.max(0.1, p.size);
    switch (p.shape) {
      case 0:
        ctx.rect(-size / 1.5, -size / 1.5, size * 1.4, size * 1.4);
        ctx.stroke();
        ctx.font = `${Math.max(1, 12 * (size / p.originalSize))}px "Courier New", monospace`;
        ctx.fillText('{...}', -size / 3, size / 4);
        break;
      case 1:
        ctx.moveTo(-size / 2, 0);
        ctx.lineTo(size / 2, 0);
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(0, size / 2);
        ctx.moveTo(-size / 3, -size / 3);
        ctx.lineTo(-size / 3, -size / 2);
        ctx.moveTo(size / 3, size / 3);
        ctx.lineTo(size / 3, size / 2);
        ctx.stroke();
        break;
      case 2:
        ctx.rect(-size / 2, -size / 2, size, size);
        ctx.stroke();
        ctx.font = `${Math.max(1, 14 * (size / p.originalSize))}px "Courier New", monospace`;
        ctx.fillText('$_', -size / 4, size / 4);
        break;
      case 3:
        ctx.font = `${Math.max(1, 14 * (size / p.originalSize))}px "Courier New", monospace`;
        ctx.fillText('</>', -size / 3, size / 4);
        break;
      case 4:
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(-size / 2, size / 2);
        ctx.lineTo(size / 2, size / 2);
        ctx.closePath();
        ctx.stroke();
        break;
      case 5:
        for (let j = 0; j < 6; j++) {
          const angle = (Math.PI / 3) * j;
          const px = (size / 2) * Math.cos(angle);
          const py = (size / 2) * Math.sin(angle);
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        break;
      case 6:
        ctx.rect(-size / 4, -size / 4, size / 2, size / 2);
        ctx.fill();
        break;
      case 7:
        ctx.arc(0, 0, Math.max(0.1, size / 2), 0, Math.PI * 2);
        ctx.stroke();
        break;
      case 8:
        const gridSize = Math.max(0.1, size / 4);
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if ((i + j) % 2 === 0) {
              ctx.fillRect(i * gridSize, j * gridSize, gridSize, gridSize);
            }
          }
        }
        break;
      case 9:
        ctx.lineWidth = 2;
        ctx.moveTo(-size / 2, -size / 2);
        ctx.lineTo(size / 2, size / 2);
        ctx.moveTo(size / 2, -size / 2);
        ctx.lineTo(-size / 2, size / 2);
        ctx.stroke();
        break;
      case 10:
        for (let i = 0; i < 5; i++) {
          const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
          const px = Math.cos(angle) * (size / 2);
          const py = Math.sin(angle) * (size / 2);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        break;
      case 11:
        ctx.font = `bold ${Math.max(1, 14 * (size / p.originalSize))}px "Courier New", monospace`;
        ctx.fillText('AI', -size / 4, size / 4);
        break;
    }
    if (p.textOpacity > 0) {
      ctx.globalAlpha = p.textOpacity;
      ctx.fillStyle = this.getColors().highlight;
      ctx.font = `bold ${Math.max(1, size / 1.5)}px "Courier New", monospace`;
      const textWidth = ctx.measureText(p.text).width;
      ctx.fillText(p.text, -textWidth / 2, -size);
    }
    ctx.restore();
  },

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
};

particleSystem.init();
particleSystem.animate();











//Gestion popup image
const popup = document.getElementById('popupImageParent');
const closeBtn = document.getElementById('closeBtn');
const popupImage = document.getElementById('popupImage');
const popupDescription = document.getElementById('popupDescription');
const imageTitle = document.getElementById('imageTitle');


// Ouvrir le popup pour chaque image
// Ouvrir le popup pour chaque image
document.querySelectorAll('.popup-image').forEach((image) => {
  image.addEventListener('click', () => {
      const imageSrc = image.src;
      const description = image.nextElementSibling.textContent; // Récupérer le texte du prochain élément (la description)
    const deuxiemeElement = image.nextElementSibling?.nextElementSibling.textContent;
    popup.style.display = 'flex';
      popupImage.src = imageSrc; // Mettre à jour l'image du popup
      popupDescription.textContent = description; // Mettre à jour la description
    imageTitle.textContent = deuxiemeElement; // Mettre à jour la description

    showPopupImage();
  });
});


// Fermer le popup
closeBtn.addEventListener('click', () => {
    //popup.style.display = 'none';
  hidePopupImage();
});

// Fermer le popup si on clique en dehors de l'image
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
      //popup.style.display = 'none'; // Masquer le popup
      hidePopupImage();
      e.preventDefault(); // Empêche le rechargement de la page
  }
});


function showPopupImage() {
  const popup = document.getElementById('popupImageParent');
  popup.style.display = 'flex';
  setTimeout(() => {
    popup.classList.add('active');
  }, 10);
}

function hidePopupImage() {
  const popup = document.getElementById('popupImageParent');
  popup.classList.remove('active');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300);
}

document.getElementById('closeBtn').addEventListener('click', hidePopupImage);















/*Animation text logo*/
document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.querySelector('.animated-text');
  const letters = document.querySelectorAll(".harilanto");
  let isAnimating = false;
  let animationTimeout;

  function resetAnimation() {
    // Annule tout timeout en cours
    clearTimeout(animationTimeout);

    // Réinitialise toutes les lettres
    letters.forEach((element) => {
      element.classList.remove('active');
      element.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.display = 'none';
    });

    isAnimating = false;
  }

  animatedText.addEventListener('mouseenter', function() {
    // Annule toute animation précédente
    clearTimeout(animationTimeout);

    if (isAnimating) {
      resetAnimation();
    }

    isAnimating = true;

    letters.forEach((element, index) => {
      element.style.display = 'inline-block';
      element.style.transition = `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
      element.offsetHeight; // Force reflow
      element.classList.add('active');
    });

    animationTimeout = setTimeout(() => {
      isAnimating = false;
    }, 400 + (letters.length * 50));
  });

  animatedText.addEventListener('mouseleave', function() {
    // Annule toute animation précédente
    clearTimeout(animationTimeout);

    if (isAnimating) {
      resetAnimation();
      return;
    }

    isAnimating = true;

    letters.forEach((element) => {
      element.classList.remove('active');
    });

    animationTimeout = setTimeout(() => {
      letters.forEach((element) => {
        element.style.display = 'none';
      });
      isAnimating = false;
    }, 400);
  });
});

// Messagerie
const icon = document.getElementById('image3DMessage');
let isFlipping = false;

// Effet 3D au mouvement de la souris
icon.addEventListener('mousemove', (e) => {
  if (!isFlipping) {
    const { left, top, width, height } = icon.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    icon.style.transform = `
      perspective(1000px)
      rotateY(${x * 30}deg)
      rotateX(${-y * 30}deg)
      translateZ(20px)
    `;
  }
});

// Réinitialisation quand la souris sort
icon.addEventListener('mouseleave', () => {
  if (!isFlipping) {
    icon.style.transform = 'none';
  }
});

// Animation de flip au click
icon.addEventListener('click', () => {
  if (!isFlipping) {
    isFlipping = true;
    icon.style.animation = 'multiFlip 1.2s ease-in-out';
    
    // Ajouter l'effet d'ondulation
    icon.style.animation = `
      multiFlip 1.2s ease-in-out,
      ripple 1s linear,
      neonPulse 1.2s ease-in-out
    `;
    
    // Réinitialiser après l'animation
    setTimeout(() => {
      isFlipping = false;
      icon.style.animation = 'floatAdvanced 6s ease-in-out infinite';
    }, 1200);
  }
})

var loader = document.getElementById("preloader");
loader.classList.remove('visible');
window.addEventListener("load", function(){
  setTimeout(() =>  {
    loader.classList.add('hidden');
    loader.style.zIndex = "0";
  },0);
});


/*animation image*/
const imageHero = document.getElementById('danih-peinture');
const containerHero = imageHero.parentElement;

containerHero.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = containerHero.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;

  // Calcul du mouvement (plus la valeur est petite, plus le mouvement est subtil)
  const moveX = (x - width/2) * 0.05;
  const moveY = (y - height/2) * 0.05;

  // Application de la transformation
  imageHero.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Réinitialisation quand la souris quitte l'image
containerHero.addEventListener('mouseleave', () => {
  imageHero.style.transform = 'translate(0px, 0px)';
  imageHero.style.transition = 'all 0.5s ease-out';
});

// Désactive la transition pendant le mouvement pour plus de fluidité
containerHero.addEventListener('mouseenter', () => {
  imageHero.style.transition = 'none';
});