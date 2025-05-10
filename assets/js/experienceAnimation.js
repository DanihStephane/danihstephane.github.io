document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".experience");if(!e)return;let t=e.querySelectorAll(".company");function s(e){e.style.opacity="0",e.style.transform="translateY(30px)",e.classList.remove("animated");let t=e.querySelectorAll("h3, .company__date, .company__description, .company__skills-title, li");t.forEach(e=>{e.style.opacity="0","LI"===e.tagName?e.style.transform="translateX(15px) scale(0.95)":e.classList.contains("company__date")?e.style.transform="scale(0.9)":"H3"===e.tagName||e.classList.contains("company__skills-title")?e.style.transform="translateX(-20px)":e.style.transform="translateY(15px)"})}function a(e){e.style.opacity="1",e.style.transform="translateY(0)",e.classList.add("animated");let t=e.querySelectorAll("h3, .company__date, .company__description, .company__skills-title");t.forEach((e,t)=>{setTimeout(()=>{e.style.opacity="1",e.classList.contains("company__date")?e.style.transform="scale(1)":e.style.transform="translateX(0) translateY(0)"},150*(t+1))});let s=e.querySelectorAll("li");s.forEach((e,t)=>{setTimeout(()=>{e.style.opacity="1",e.style.transform="translateX(0) scale(1)"},400+80*t)})}t.forEach(e=>{e.style.opacity="0",e.style.transform="translateY(30px)",e.style.transition="opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)";let t=e.querySelector("h3");t&&(t.style.opacity="0",t.style.transform="translateX(-20px)",t.style.transition="opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)");let a=e.querySelector(".company__date");a&&(a.style.opacity="0",a.style.transform="scale(0.9)",a.style.transition="opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)");let r=e.querySelector(".company__description");r&&(r.style.opacity="0",r.style.transform="translateY(15px)",r.style.transition="opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)");let i=e.querySelector(".company__skills-title");i&&(i.style.opacity="0",i.style.transform="translateX(-15px)",i.style.transition="opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)");let l=e.querySelectorAll("li");l.forEach(e=>{e.style.opacity="0",e.style.transform="translateX(15px) scale(0.95)",e.style.transition="opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",e.classList.add("modern-skill-item")}),s(e)});let r=document.createElement("style");r.textContent=`
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
  `,document.head.appendChild(r);let i=()=>{let e=document.querySelector(".popupImageParent");if(e){document.body.appendChild(e),e.style.position="fixed",e.style.zIndex="9999",e.style.left="0",e.style.top="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="rgba(0, 0, 0, 0.9)",e.style.display="none",e.style.justifyContent="center",e.style.alignItems="center",e.style.display;let t=new MutationObserver(t=>{t.forEach(t=>{"class"===t.attributeName&&(e.classList.contains("active")?e.style.display="flex":e.style.display="none")})});t.observe(e,{attributes:!0})}};setTimeout(i,500);let l=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?e.classList.add("visible"):e.classList.remove("visible")})},{threshold:.1});l.observe(e),t.forEach(e=>{let t=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?a(e):s(e)})},{threshold:.2,rootMargin:"-10% 0px"});t.observe(e)})});