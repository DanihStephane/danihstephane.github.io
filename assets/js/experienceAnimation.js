document.addEventListener('DOMContentLoaded', () => {
  const experienceSection = document.querySelector('.experience');
  
  if (!experienceSection) return;
  
  // Préparation des éléments pour l'animation
  const companies = experienceSection.querySelectorAll('.company');
  
  // Fonction pour réinitialiser une entreprise
  function resetCompany(company) {
    company.style.opacity = '0';
    company.style.transform = 'translateY(30px)';
    company.classList.remove('animated');
    
    // Réinitialiser tous les éléments internes
    const allElements = company.querySelectorAll('h3, .company__date, .company__description, .company__skills-title, li');
    allElements.forEach(element => {
      element.style.opacity = '0';
      
      if (element.tagName === 'LI') {
        element.style.transform = 'translateX(15px) scale(0.95)';
      } else if (element.classList.contains('company__date')) {
        element.style.transform = 'scale(0.9)';
      } else if (element.tagName === 'H3' || element.classList.contains('company__skills-title')) {
        element.style.transform = 'translateX(-20px)';
      } else {
        element.style.transform = 'translateY(15px)';
      }
    });
  }
  
  // Fonction pour animer une entreprise
  function animateCompany(company) {
    // Animer l'entreprise
    company.style.opacity = '1';
    company.style.transform = 'translateY(0)';
    company.classList.add('animated');
    
    // Animer les éléments principaux
    const mainElements = company.querySelectorAll('h3, .company__date, .company__description, .company__skills-title');
    mainElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1';
        
        if (element.classList.contains('company__date')) {
          element.style.transform = 'scale(1)';
        } else {
          element.style.transform = 'translateX(0) translateY(0)';
        }
      }, 150 * (index + 1));
    });
    
    // Animer toutes les compétences, y compris celles dans des sous-listes
    const allSkillItems = company.querySelectorAll('li');
    allSkillItems.forEach((item, skillIndex) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0) scale(1)';
      }, 400 + (skillIndex * 80));
    });
  }
  
  // Configurer les styles initiaux pour tous les éléments
  companies.forEach((company) => {
    // Animation de l'entreprise elle-même
    company.style.opacity = '0';
    company.style.transform = 'translateY(30px)';
    company.style.transition = 'opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)';
    
    // Configurer tous les éléments internes
    const title = company.querySelector('h3');
    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateX(-20px)';
      title.style.transition = 'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
    
    const date = company.querySelector('.company__date');
    if (date) {
      date.style.opacity = '0';
      date.style.transform = 'scale(0.9)';
      date.style.transition = 'opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
    
    const description = company.querySelector('.company__description');
    if (description) {
      description.style.opacity = '0';
      description.style.transform = 'translateY(15px)';
      description.style.transition = 'opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)';
    }
    
    const skillsTitle = company.querySelector('.company__skills-title');
    if (skillsTitle) {
      skillsTitle.style.opacity = '0';
      skillsTitle.style.transform = 'translateX(-15px)';
      skillsTitle.style.transition = 'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
    
    // Configurer TOUTES les compétences, y compris celles dans des sous-listes
    const allSkillItems = company.querySelectorAll('li');
    allSkillItems.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(15px) scale(0.95)';
      item.style.transition = 'opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      item.classList.add('modern-skill-item');
    });
    
    // Réinitialiser l'entreprise au début
    resetCompany(company);
  });
  
  // Ajouter des styles CSS pour les effets de survol
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .experience .modern-skill-item {
      position: relative;
      padding: 3px 8px;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    
    .experience .modern-skill-item:hover {
      background-color: rgba(var(--raw-seinna-rgb, 255, 127, 80), 0.1);
      transform: translateX(5px) !important;
    }
    
    .experience .modern-skill-item::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 50%;
      width: 0;
      height: 2px;
      background-color: var(--raw-seinna, #ff7f50);
      transform: translateY(-50%);
      transition: width 0.3s ease;
      opacity: 0;
    }
    
    .experience .modern-skill-item:hover::before {
      width: 8px;
      opacity: 1;
    }
    
    .experience .company {
      position: relative;
      overflow: hidden;
    }
    
    .experience .company::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--raw-seinna, #ff7f50), transparent);
      transition: width 0.8s ease;
    }
    
    .experience .company.animated::after {
      width: 100%;
    }
  `;
  document.head.appendChild(styleElement);
  
  // Assurez-vous que le popup d'image est correctement positionné
  // Cette partie est cruciale pour corriger le problème
  const fixPopupStyles = () => {
    const popupParent = document.querySelector('.popupImageParent');
    if (popupParent) {
      // Déplacer le popup au niveau du body pour éviter les problèmes de portée
      document.body.appendChild(popupParent);
      
      // Appliquer des styles pour s'assurer que le popup remplit tout l'écran
      popupParent.style.position = 'fixed';
      popupParent.style.zIndex = '9999';
      popupParent.style.left = '0';
      popupParent.style.top = '0';
      popupParent.style.width = '100%';
      popupParent.style.height = '100%';
      popupParent.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      popupParent.style.display = 'none';
      popupParent.style.justifyContent = 'center';
      popupParent.style.alignItems = 'center';
      
      // S'assurer que la classe active fonctionne correctement
      const originalDisplay = popupParent.style.display;
      
      // Surveiller les changements de classe pour ajuster le style display
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            if (popupParent.classList.contains('active')) {
              popupParent.style.display = 'flex';
            } else {
              popupParent.style.display = 'none';
            }
          }
        });
      });
      
      observer.observe(popupParent, { attributes: true });
    }
  };
  
  // Exécuter la correction après un court délai pour s'assurer que tous les éléments sont chargés
  setTimeout(fixPopupStyles, 500);
  
  // Observer pour la section d'expérience globale
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        experienceSection.classList.add('visible');
      } else {
        experienceSection.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  sectionObserver.observe(experienceSection);
  
  // Observer individuel pour chaque entreprise
  companies.forEach((company) => {
    const companyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animer cette entreprise spécifique
          animateCompany(company);
        } else {
          // Réinitialiser cette entreprise spécifique quand elle n'est plus visible
          resetCompany(company);
        }
      });
    }, {
      threshold: 0.2,  // Déclencher quand 20% de l'entreprise est visible
      rootMargin: '-10% 0px' // Petit décalage pour déclencher l'animation un peu avant
    });
    
    companyObserver.observe(company);
  });
});
