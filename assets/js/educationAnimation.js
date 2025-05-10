document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".education");if(!e)return;let t={threshold:.2,rootMargin:"-20px 0px"};function r(e,r=0,a="up"){let o;switch(a){case"left":o="translateX(-30px)";break;case"right":o="translateX(30px)";break;default:o="translateY(30px)"}function n(){e.style.opacity="0",e.style.transform=o}n(),e.style.transition="opacity 0.8s ease, transform 0.8s ease";let l=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?setTimeout(()=>{e.style.opacity="1",e.style.transform="translate(0)"},1e3*r):n()})},t);l.observe(e)}let a=e.querySelector(".education__text");a&&r(a,0,"up");let o=e.querySelector(".education__list");o&&r(o,.1,"up");let n=e.querySelectorAll(".education__item");n.forEach((e,t)=>{r(e,.1*t,"up");let a=e.querySelector(".education__degree"),o=e.querySelector(".education__course-name"),n=e.querySelector(".education__educational-institution");a&&r(a,.1*t+.1,"left"),o&&r(o,.1*t+.2,"up"),n&&r(n,.1*t+.3,"right")});let l=e.querySelector(".education__courses");if(l){r(l,.2,"up");let i=l.querySelector("h3");i&&r(i,.3,"left");let s=l.querySelectorAll("li");s.forEach((e,t)=>{r(e,.4+.05*t,"left")})}let c=e.querySelector(".education__languages");if(c){r(c,.2,"up");let u=c.querySelector("h3");u&&r(u,.3,"left");let $=c.querySelectorAll("li");$.forEach((e,t)=>{r(e,.4+.05*t,"left")})}let d=document.createElement("style");d.textContent=`
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
    `,document.head.appendChild(d)});