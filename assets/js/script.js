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

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const maxParticles = 60;
const minDistance = 140;
const baseColor = 'rgba(41, 148, 200, 0.7)'; // Couleur légèrement plus claire pour toutes les particules

function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() < 0.2 ? 30 : 18; // Agrandissement aléatoire de certains rectangles
  this.color = baseColor;
  this.speedX = (Math.random() - 0.5) * 1.5;
  this.speedY = (Math.random() - 0.5) * 1.5;
  this.opacity = 0;
  this.shape = Math.floor(Math.random() * 8); // Ajout de nouvelles formes (6 au total)
}

function initParticles() {
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.opacity = Math.min(1, particle.opacity + 0.02); // Augmenter l'opacité graduellement
    ctx.globalAlpha = particle.opacity;

    ctx.beginPath();
    ctx.strokeStyle = particle.color;

    switch (particle.shape) {
      case 0: // Bloc de code { ... } avec cadre plus grand et ajusté
        ctx.rect(particle.x - particle.size / 1.5, particle.y - particle.size / 1.5, particle.size * 1.4, particle.size * 1.4);
        ctx.stroke();
        ctx.fillStyle = particle.color;
        ctx.font = "12px Arial";
        ctx.fillText('{...}', particle.x - particle.size / 3, particle.y + particle.size / 4);
        break;
      case 1: // Circuit
        ctx.moveTo(particle.x - particle.size / 2, particle.y);
        ctx.lineTo(particle.x + particle.size / 2, particle.y);
        ctx.moveTo(particle.x, particle.y - particle.size / 2);
        ctx.lineTo(particle.x, particle.y + particle.size / 2);
        ctx.stroke();
        break;
      case 2: // Terminal $
        ctx.rect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
        ctx.stroke();
        ctx.fillStyle = particle.color;
        ctx.font = "14px Arial";
        ctx.fillText('$_', particle.x - particle.size / 4, particle.y + particle.size / 4);
        break;
      case 3: // Balise de code </>
        ctx.font = "14px Arial";
        ctx.fillStyle = particle.color;
        ctx.fillText('</>', particle.x - particle.size / 3, particle.y + particle.size / 4);
        break;
      case 4: // Triangle
        ctx.moveTo(particle.x, particle.y - particle.size / 2);
        ctx.lineTo(particle.x - particle.size / 2, particle.y + particle.size / 2);
        ctx.lineTo(particle.x + particle.size / 2, particle.y + particle.size / 2);
        ctx.closePath();
        ctx.stroke();
        break;
      case 5: // Hexagone
        for (let j = 0; j < 6; j++) {
          const angle = (Math.PI / 3) * j;
          const px = particle.x + (particle.size / 2) * Math.cos(angle);
          const py = particle.y + (particle.size / 2) * Math.sin(angle);
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        break;
      case 6: // Pixel (petit carré)
        ctx.rect(particle.x, particle.y, 4, 4); // Petit carré pour effet pixel
        ctx.fillStyle = particle.color;
        ctx.fill();
        break;
      case 7: // Forme brosse (cercle flou)
        ctx.arc(particle.x, particle.y, particle.size / 3, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        break;
    }

    // Déplacement des particules
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Inverser la direction si on atteint le bord
    if (particle.x < 0 || particle.x > canvas.width) {
      particle.speedX *= -1;
    }
    if (particle.y < 0 || particle.y > canvas.height) {
      particle.speedY *= -1;
    }
  });

  ctx.globalAlpha = 1;
  drawLines();
}

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < minDistance) {
        //ctx.strokeStyle = 'white'; // Couleur bleue plus claire avec transparence pour les lignes
        ctx.strokeStyle = 'rgba(41, 148, 200, 0.3)'; 
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  drawParticles();
  requestAnimationFrame(animate);
}

initParticles();
animate();









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