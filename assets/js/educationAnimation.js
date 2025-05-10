document.addEventListener('DOMContentLoaded', () => {
    const educationSection = document.querySelector('.education');
    
    if (!educationSection) return;
    
    // Configuration de base pour l'Intersection Observer
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-20px 0px'
    };
    
    // Fonction pour configurer un élément à animer
    function setupAnimatedElement(element, delay = 0, direction = 'up') {
      // Définir la transformation initiale selon la direction
      let initialTransform;
      switch (direction) {
        case 'left':
          initialTransform = 'translateX(-30px)';
          break;
        case 'right':
          initialTransform = 'translateX(30px)';
          break;
        case 'up':
        default:
          initialTransform = 'translateY(30px)';
      }
      
      // Fonction pour réinitialiser l'élément
      function resetElement() {
        element.style.opacity = '0';
        element.style.transform = initialTransform;
      }
      
      // Fonction pour animer l'élément
      function animateElement() {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translate(0)';
        }, delay * 1000);
      }
      
      // Appliquer les styles initiaux
      resetElement();
      element.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
      
      // Créer un observateur pour cet élément
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animer l'élément quand il est visible
            animateElement();
          } else {
            // Réinitialiser l'élément quand il n'est plus visible
            resetElement();
          }
        });
      }, observerOptions);
      
      // Commencer à observer l'élément
      observer.observe(element);
    }
    
    // Animer le texte d'introduction
    const educationText = educationSection.querySelector('.education__text');
    if (educationText) {
      setupAnimatedElement(educationText, 0, 'up');
    }
    
    // Animer la liste d'éducation
    const educationList = educationSection.querySelector('.education__list');
    if (educationList) {
      setupAnimatedElement(educationList, 0.1, 'up');
    }
    
    // Animer chaque item d'éducation individuellement
    const educationItems = educationSection.querySelectorAll('.education__item');
    educationItems.forEach((item, index) => {
      setupAnimatedElement(item, 0.1 * index, 'up');
      
      // Animer les éléments internes de chaque item
      const degree = item.querySelector('.education__degree');
      const courseName = item.querySelector('.education__course-name');
      const institution = item.querySelector('.education__educational-institution');
      
      if (degree) setupAnimatedElement(degree, 0.1 * index + 0.1, 'left');
      if (courseName) setupAnimatedElement(courseName, 0.1 * index + 0.2, 'up');
      if (institution) setupAnimatedElement(institution, 0.1 * index + 0.3, 'right');
    });
    
    // Animer la section des cours
    const educationCourses = educationSection.querySelector('.education__courses');
    if (educationCourses) {
      setupAnimatedElement(educationCourses, 0.2, 'up');
      
      // Animer le titre des cours
      const coursesTitle = educationCourses.querySelector('h3');
      if (coursesTitle) {
        setupAnimatedElement(coursesTitle, 0.3, 'left');
      }
      
      // Animer chaque item de cours individuellement
      const courseItems = educationCourses.querySelectorAll('li');
      courseItems.forEach((item, index) => {
        setupAnimatedElement(item, 0.4 + (0.05 * index), 'left');
      });
    }
    
    // Animer la section des langues
    const educationLanguages = educationSection.querySelector('.education__languages');
    if (educationLanguages) {
      setupAnimatedElement(educationLanguages, 0.2, 'up');
      
      // Animer le titre des langues
      const languagesTitle = educationLanguages.querySelector('h3');
      if (languagesTitle) {
        setupAnimatedElement(languagesTitle, 0.3, 'left');
      }
      
      // Animer chaque item de langue individuellement
      const languageItems = educationLanguages.querySelectorAll('li');
      languageItems.forEach((item, index) => {
        setupAnimatedElement(item, 0.4 + (0.05 * index), 'left');
      });
    }
    
    // Ajouter un peu d'animation au survol pour les items d'éducation
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .education__item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .education__item:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
      
      .education__course-name::before {
        transition: background 0.3s ease, height 0.3s ease;
      }
      
      .education__item:hover .education__course-name::before {
        background: linear-gradient(#00dbde, #fc00ff) !important;
      }
      
      .education__courses li, .education__languages li {
        transition: transform 0.3s ease;
      }
      
      .education__courses li:hover, .education__languages li:hover {
        transform: translateX(5px) !important;
      }
    `;
    document.head.appendChild(styleElement);
  });
  