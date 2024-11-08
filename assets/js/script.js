"use strict";const elemToggleFunc=function(e){e.classList.toggle("active")},header=document.querySelector("[data-header]"),goTopBtn=document.querySelector("[data-go-top]");window.addEventListener("scroll",function(){window.scrollY>=10?(header.classList.add("active"),goTopBtn.classList.add("active")):(header.classList.remove("active"),goTopBtn.classList.remove("active"))});const navToggleBtn=document.querySelector("[data-nav-toggle-btn]"),navbar=document.querySelector("[data-navbar]");navToggleBtn.addEventListener("click",function(){elemToggleFunc(navToggleBtn),elemToggleFunc(navbar),elemToggleFunc(document.body)});const toggleBtnBox=document.querySelector("[data-toggle-box]"),toggleBtns=document.querySelectorAll("[data-toggle-btn]"),skillsBox=document.querySelector("[data-skills-box]");for(let i=0;i<toggleBtns.length;i++)toggleBtns[i].addEventListener("click",function(){elemToggleFunc(toggleBtnBox);for(let e=0;e<toggleBtns.length;e++)elemToggleFunc(toggleBtns[e]);elemToggleFunc(skillsBox)});const themeToggleBtn=document.querySelector("[data-theme-btn]");themeToggleBtn.addEventListener("click",function(){elemToggleFunc(themeToggleBtn);let e=document.getElementById("cursor-dot"),t=document.getElementById("cursor-outline"),l=document.getElementById("slash"),n=document.querySelectorAll(".company__year"),o=document.getElementById("recommandation-section"),s=document.getElementById("contact-section"),a=document.getElementById("lang"),c=document.getElementById("autotext1"),r=document.getElementById("autotext2");themeToggleBtn.classList.contains("active")?(document.body.classList.remove("dark_theme"),document.body.classList.add("light_theme"),e.style.backgroundColor="black",t.style.border="2px solid hsla(0, 0%, 0%, 0.5)",a.style.border="2px solid rgba(0, 0, 0, 0.3)",a.style.backgroundImage="url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e \")",l&&(l.style.color="black"),c.style.color="black",r.style.color="black",n.forEach(e=>{e.style.color="#525252"}),o.style.background="linear-gradient(0deg, #00dbde, hsl(0, 0%, 90%)),linear-gradient(180deg, #00dbde, hsl(0, 0%, 90%))",s.style.background="linear-gradient(180deg, #00dbde, hsl(0, 0%, 90%)),linear-gradient(0deg, #00dbde, hsl(0, 0%, 90%))",localStorage.setItem("theme","light_theme")):(document.body.classList.add("dark_theme"),document.body.classList.remove("light_theme"),e.style.backgroundColor="white",t.style.border="2px solid hsla(0, 0%, 100%, 0.5)",a.style.border="2px solid rgba(255, 255, 255, 0.3)",a.style.backgroundImage="url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e \")",l&&(l.style.color="white"),c.style.color="white",r.style.color="white",n.forEach(e=>{e.style.color="white"}),o.style.background="linear-gradient(0deg, #00dbde, hsl(0, 0%, 12%)),linear-gradient(180deg, #00dbde, hsl(0, 0%, 12%))",s.style.background="linear-gradient(180deg, #00dbde, hsl(0, 0%, 12%)),linear-gradient(0deg, #00dbde, hsl(0, 0%, 12%))",localStorage.setItem("theme","dark_theme"))}),"light_theme"===localStorage.getItem("theme")?(themeToggleBtn.classList.add("active"),document.body.classList.remove("dark_theme"),document.body.classList.add("light_theme")):(themeToggleBtn.classList.remove("active"),document.body.classList.remove("light_theme"),document.body.classList.add("dark_theme"));const canvas=document.getElementById("particleCanvas"),ctx=canvas.getContext("2d");canvas.width=window.innerWidth,canvas.height=window.innerHeight;const particles=[],maxParticles=60,minDistance=140,baseColor="rgba(41, 148, 200, 0.7)";function Particle(){this.x=Math.random()*canvas.width,this.y=Math.random()*canvas.height,this.size=.2>Math.random()?30:18,this.color="rgba(41, 148, 200, 0.7)",this.speedX=(Math.random()-.5)*1.5,this.speedY=(Math.random()-.5)*1.5,this.opacity=0,this.shape=Math.floor(8*Math.random())}function initParticles(){for(let e=0;e<60;e++)particles.push(new Particle)}function drawParticles(){ctx.clearRect(0,0,canvas.width,canvas.height),particles.forEach(e=>{switch(e.opacity=Math.min(1,e.opacity+.02),ctx.globalAlpha=e.opacity,ctx.beginPath(),ctx.strokeStyle=e.color,e.shape){case 0:ctx.rect(e.x-e.size/1.5,e.y-e.size/1.5,1.4*e.size,1.4*e.size),ctx.stroke(),ctx.fillStyle=e.color,ctx.font="12px Arial",ctx.fillText("{...}",e.x-e.size/3,e.y+e.size/4);break;case 1:ctx.moveTo(e.x-e.size/2,e.y),ctx.lineTo(e.x+e.size/2,e.y),ctx.moveTo(e.x,e.y-e.size/2),ctx.lineTo(e.x,e.y+e.size/2),ctx.stroke();break;case 2:ctx.rect(e.x-e.size/2,e.y-e.size/2,e.size,e.size),ctx.stroke(),ctx.fillStyle=e.color,ctx.font="14px Arial",ctx.fillText("$_",e.x-e.size/4,e.y+e.size/4);break;case 3:ctx.font="14px Arial",ctx.fillStyle=e.color,ctx.fillText("</>",e.x-e.size/3,e.y+e.size/4);break;case 4:ctx.moveTo(e.x,e.y-e.size/2),ctx.lineTo(e.x-e.size/2,e.y+e.size/2),ctx.lineTo(e.x+e.size/2,e.y+e.size/2),ctx.closePath(),ctx.stroke();break;case 5:for(let t=0;t<6;t++){let l=Math.PI/3*t,n=e.x+e.size/2*Math.cos(l),o=e.y+e.size/2*Math.sin(l);0===t?ctx.moveTo(n,o):ctx.lineTo(n,o)}ctx.closePath(),ctx.stroke();break;case 6:ctx.rect(e.x,e.y,4,4),ctx.fillStyle=e.color,ctx.fill();break;case 7:ctx.arc(e.x,e.y,e.size/3,0,2*Math.PI),ctx.fillStyle=e.color,ctx.fill()}e.x+=e.speedX,e.y+=e.speedY,(e.x<0||e.x>canvas.width)&&(e.speedX*=-1),(e.y<0||e.y>canvas.height)&&(e.speedY*=-1)}),ctx.globalAlpha=1,drawLines()}function drawLines(){for(let e=0;e<particles.length;e++)for(let t=e+1;t<particles.length;t++){let l=particles[e].x-particles[t].x,n=particles[e].y-particles[t].y,o=Math.sqrt(l*l+n*n);o<140&&(ctx.strokeStyle="rgba(41, 148, 200, 0.3)",ctx.lineWidth=1,ctx.beginPath(),ctx.moveTo(particles[e].x,particles[e].y),ctx.lineTo(particles[t].x,particles[t].y),ctx.stroke())}}function animate(){drawParticles(),requestAnimationFrame(animate)}initParticles(),animate();const popup=document.getElementById("popupImageParent"),closeBtn=document.getElementById("closeBtn"),popupImage=document.getElementById("popupImage"),popupDescription=document.getElementById("popupDescription"),imageTitle=document.getElementById("imageTitle");function showPopupImage(){let e=document.getElementById("popupImageParent");e.style.display="flex",setTimeout(()=>{e.classList.add("active")},10)}function hidePopupImage(){let e=document.getElementById("popupImageParent");e.classList.remove("active"),setTimeout(()=>{e.style.display="none"},300)}document.querySelectorAll(".popup-image").forEach(e=>{e.addEventListener("click",()=>{let t=e.src,l=e.nextElementSibling.textContent,n=e.nextElementSibling?.nextElementSibling.textContent;popup.style.display="flex",popupImage.src=t,popupDescription.textContent=l,imageTitle.textContent=n,showPopupImage()})}),closeBtn.addEventListener("click",()=>{hidePopupImage()}),popup.addEventListener("click",e=>{e.target===popup&&(hidePopupImage(),e.preventDefault())}),document.getElementById("closeBtn").addEventListener("click",hidePopupImage),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".animated-text"),t=document.querySelectorAll(".harilanto"),l=!1,n;function o(){clearTimeout(n),t.forEach(e=>{e.classList.remove("active"),e.style.transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",e.style.display="none"}),l=!1}e.addEventListener("mouseenter",function(){clearTimeout(n),l&&o(),l=!0,t.forEach((e,t)=>{e.style.display="inline-block",e.style.transition=`all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${.05*t}s`,e.offsetHeight,e.classList.add("active")}),n=setTimeout(()=>{l=!1},400+50*t.length)}),e.addEventListener("mouseleave",function(){if(clearTimeout(n),l){o();return}l=!0,t.forEach(e=>{e.classList.remove("active")}),n=setTimeout(()=>{t.forEach(e=>{e.style.display="none"}),l=!1},400)})});const icon=document.getElementById("image3DMessage");let isFlipping=!1;icon.addEventListener("mousemove",e=>{if(!isFlipping){let{left:t,top:l,width:n,height:o}=icon.getBoundingClientRect(),s=(e.clientX-t)/n-.5,a=(e.clientY-l)/o-.5;icon.style.transform=`
      perspective(1000px)
      rotateY(${30*s}deg)
      rotateX(${-(30*a)}deg)
      translateZ(20px)
    `}}),icon.addEventListener("mouseleave",()=>{isFlipping||(icon.style.transform="none")}),icon.addEventListener("click",()=>{isFlipping||(isFlipping=!0,icon.style.animation="multiFlip 1.2s ease-in-out",icon.style.animation=`
      multiFlip 1.2s ease-in-out,
      ripple 1s linear,
      neonPulse 1.2s ease-in-out
    `,setTimeout(()=>{isFlipping=!1,icon.style.animation="floatAdvanced 6s ease-in-out infinite"},1200))});var loader=document.getElementById("preloader");loader.classList.remove("visible"),window.addEventListener("load",function(){setTimeout(()=>{loader.classList.add("hidden"),loader.style.zIndex="0"},0)});const imageHero=document.getElementById("danih-peinture"),containerHero=imageHero.parentElement;containerHero.addEventListener("mousemove",e=>{let{left:t,top:l,width:n,height:o}=containerHero.getBoundingClientRect(),s=e.clientX-t,a=e.clientY-l,c=(s-n/2)*.05,r=(a-o/2)*.05;imageHero.style.transform=`translate(${c}px, ${r}px)`}),containerHero.addEventListener("mouseleave",()=>{imageHero.style.transform="translate(0px, 0px)",imageHero.style.transition="all 0.5s ease-out"}),containerHero.addEventListener("mouseenter",()=>{imageHero.style.transition="none"});