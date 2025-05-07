document.addEventListener('DOMContentLoaded', () => {
    // Ajouter une classe au body pour gérer les états de chargement
    document.body.classList.add('loading-active');
    
    const progressPercentage = document.getElementById('progress-percentage');
    const progressBar = document.getElementById('progressBar');
    const progressParticles = document.getElementById('progressParticles');
    const preloader = document.getElementById('preloader');
    const mosaicGrid = document.getElementById('mosaicGrid');
    
    // Créer la grille de particules
    createMosaicGrid();
    
    let loadedCount = 0;
    const totalResources = getResourceCount();
    let progress = 0;
    
    // Fonction pour estimer le nombre de ressources à charger
    function getResourceCount() {
      const images = document.querySelectorAll('img').length;
      const scripts = document.querySelectorAll('script').length;
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]').length;
      return images + scripts + stylesheets + 10;
    }
    
    // Créer la grille de particules inspirées du système dans script.js
    function createMosaicGrid() {
      // Déterminer le nombre de cellules en fonction de la taille de l'écran
      const isMobile = window.innerWidth <= 768;
      const gridSize = isMobile ? 8 : 10;
      const totalCells = gridSize * gridSize;
      
      // Vider la grille existante
      mosaicGrid.innerHTML = '';
      
      // Types de particules disponibles (inspirés de script.js)
      const particleTypes = [
        { name: 'code-block', text: '{...}' },
        { name: 'terminal', text: '$_>' },
        { name: 'tag', text: '</>' },
        { name: 'circuit', text: '' },
        { name: 'ai', text: 'AI' },
        { name: 'data', text: '01' }
      ];
      
      // Créer les cellules avec des particules variées
      for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        
        // Attribuer un type de particule aléatoire à chaque cellule
        const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        cell.className = `mosaic-cell ${randomType.name}`;
        cell.dataset.index = i;
        
        // Ajouter du texte pour certains types de particules
        if (randomType.text) {
          const textSpan = document.createElement('span');
          textSpan.textContent = randomType.text;
          cell.appendChild(textSpan);
        }
        
        // Ajouter une rotation aléatoire
        const rotation = Math.floor(Math.random() * 360);
        cell.style.transform = `rotate(${rotation}deg)`;
        
        mosaicGrid.appendChild(cell);
      }
    }
    
    // Créer des particules pour la barre de progression
    function createProgressParticles() {
      // Vider les particules existantes
      progressParticles.innerHTML = '';
      
      // Créer de nouvelles particules
      const particleCount = 15;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'progress-particle';
        
        // Position aléatoire horizontale
        const position = Math.random() * 100;
        particle.style.left = `${position}%`;
        
        // Délai d'animation aléatoire
        const delay = Math.random() * 2;
        particle.style.animationDelay = `${delay}s`;
        
        // Taille aléatoire
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        progressParticles.appendChild(particle);
      }
    }
    
    // Mettre à jour la mosaïque en fonction du pourcentage
    // Mettre à jour la mosaïque en fonction du pourcentage
    function updateMosaic(percentage) {
        const cells = document.querySelectorAll('.mosaic-cell');
        const totalCells = cells.length;
        const cellsToActivate = Math.floor((percentage / 100) * totalCells);
        
        // Activer les cellules dans un motif du centre vers l'extérieur
        const pattern = generateCenterOutPattern(totalCells);
        
        for (let i = 0; i < cellsToActivate; i++) {
          if (i < pattern.length) {
            const cell = cells[pattern[i]];
            if (!cell.classList.contains('active')) {
              cell.classList.add('active');
              
              // Ajouter un effet de pulsation à quelques cellules aléatoires
              if (Math.random() > 0.7) {
                cell.classList.add('pulse');
              }
              
              // Ajouter un effet de brillance à certaines cellules
              if (Math.random() > 0.8) {
                cell.classList.add('glow');
              }
              
              // Animation d'apparition progressive
              setTimeout(() => {
                cell.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
              }, i * 15);
            }
          }
        }
        
        // Ajouter des connexions entre les cellules actives
        if (percentage > 30) {
          drawConnections(cells, cellsToActivate, pattern);
        }
      }
      
      // Générer un motif du centre vers l'extérieur pour l'activation des cellules
      function generateCenterOutPattern(totalCells) {
        const gridSize = Math.sqrt(totalCells);
        const pattern = [];
        
        // Créer un motif qui se remplit du centre vers l'extérieur
        const center = Math.floor(gridSize / 2);
        
        // Calculer la distance de chaque cellule par rapport au centre
        const distances = [];
        for (let y = 0; y < gridSize; y++) {
          for (let x = 0; x < gridSize; x++) {
            const index = y * gridSize + x;
            const distX = Math.abs(x - center);
            const distY = Math.abs(y - center);
            const distance = Math.sqrt(distX * distX + distY * distY);
            distances.push({ index, distance });
          }
        }
        
        // Trier les cellules par distance (du centre vers l'extérieur)
        distances.sort((a, b) => a.distance - b.distance);
        
        // Extraire les indices dans l'ordre
        for (const item of distances) {
          pattern.push(item.index);
        }
        
        return pattern;
      }
      
      // Dessiner des connexions entre les cellules actives (comme dans script.js)
      function drawConnections(cells, activeCellCount, pattern) {
        // Supprimer les connexions existantes
        const existingConnections = document.querySelectorAll('.cell-connection');
        existingConnections.forEach(conn => conn.remove());
        
        // Créer des connexions entre les cellules actives
        const minDistance = 50; // Distance minimale pour dessiner une connexion
        const maxDistance = 150; // Distance maximale pour dessiner une connexion
        
        for (let i = 0; i < activeCellCount && i < pattern.length; i++) {
          const cell1 = cells[pattern[i]];
          if (!cell1.classList.contains('active')) continue;
          
          const rect1 = cell1.getBoundingClientRect();
          const x1 = rect1.left + rect1.width / 2;
          const y1 = rect1.top + rect1.height / 2;
          
          for (let j = i + 1; j < activeCellCount && j < pattern.length; j++) {
            const cell2 = cells[pattern[j]];
            if (!cell2.classList.contains('active')) continue;
            
            const rect2 = cell2.getBoundingClientRect();
            const x2 = rect2.left + rect2.width / 2;
            const y2 = rect2.top + rect2.height / 2;
            
            const dx = x2 - x1;
            const dy = y2 - y1;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Dessiner une connexion si la distance est dans la plage appropriée
            if (distance > minDistance && distance < maxDistance) {
              const opacity = 1 - (distance - minDistance) / (maxDistance - minDistance);
              
              // Créer un élément SVG pour la connexion
              const svgNS = "http://www.w3.org/2000/svg";
              const svg = document.createElementNS(svgNS, "svg");
              svg.setAttribute("class", "cell-connection");
              svg.style.position = "absolute";
              svg.style.top = "0";
              svg.style.left = "0";
              svg.style.width = "100%";
              svg.style.height = "100%";
              svg.style.pointerEvents = "none";
              svg.style.zIndex = "1";
              
              const line = document.createElementNS(svgNS, "line");
              line.setAttribute("x1", x1);
              line.setAttribute("y1", y1);
              line.setAttribute("x2", x2);
              line.setAttribute("y2", y2);
              line.setAttribute("stroke", `rgba(0, 200, 255, ${opacity * 0.5})`);
              line.setAttribute("stroke-width", "1");
              
              svg.appendChild(line);
              mosaicGrid.appendChild(svg);
            }
          }
        }
      }
      
      // Mettre à jour la barre de progression
      function updateProgressBar(percentage) {
        progressBar.style.width = `${percentage}%`;
        
        // Ajouter un effet de pulsation lorsque la barre atteint certains seuils
        if (percentage % 25 === 0 && percentage > 0) {
          progressBar.classList.add('pulse-effect');
          setTimeout(() => {
            progressBar.classList.remove('pulse-effect');
          }, 700);
        }
      }
      
      // Simuler la progression du chargement
      function simulateProgress() {
        const interval = setInterval(() => {
          if (progress < 90) {
            progress += (90 - progress) * 0.1;
            updateProgress(progress);
          } else {
            clearInterval(interval);
          }
        }, 200);
      }
      
      // Mettre à jour la progression
      function updateProgress(value) {
        const roundedValue = Math.round(value);
        progressPercentage.textContent = `${roundedValue}%`;
        updateProgressBar(roundedValue);
        updateMosaic(roundedValue);
      }
      
      // Créer les particules pour la barre de progression
      createProgressParticles();
      
      // Gérer les événements de chargement des ressources
      window.addEventListener('load', () => {
        // Quand tout est chargé, on passe à 100%
        progress = 100;
        updateProgress(progress);
        
        // Attendre un peu pour montrer le 100% avant de cacher
        setTimeout(() => {
          // Ajouter la classe hidden pour cacher avec animation
          preloader.classList.add('hidden');
          
          // Retirer la classe de chargement du body
          document.body.classList.remove('loading-active');
          
          // Après un court délai, masquer complètement
          setTimeout(() => {
            preloader.style.display = 'none';
            
            // Rendre le header visible
            document.querySelector('.header').style.opacity = '1';
            document.querySelector('.header').style.pointerEvents = 'auto';
          }, 500);
        }, 800);
      });
      
      // Démarrer la simulation de progression
      simulateProgress();
      
      // Écouter les événements de chargement des ressources
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
          loadedCount++;
          const resourceProgress = (loadedCount / totalResources) * 100;
          if (resourceProgress > progress) {
            progress = resourceProgress;
            updateProgress(progress);
          }
        }
      });
      
      // Gérer le redimensionnement de la fenêtre
      window.addEventListener('resize', () => {
        createMosaicGrid();
        updateMosaic(progress);
        createProgressParticles();
      });
    });
    