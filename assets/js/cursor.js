document.addEventListener("DOMContentLoaded", function () {
    const cursorDot = document.getElementById("cursor-dot");
    const cursorOutline = document.getElementById("cursor-outline");
    const hoverTargets = document.querySelectorAll(".hover-target");

    if (!cursorDot || !cursorOutline) {
        console.error("Cursor elements not found.");
        return;
    }

    let mouseX = 0, mouseY = 0;
    // Start outline off-screen so it doesn't flash at (0,0)
    let outlineX = -200, outlineY = -200;
    const LERP = 0.12;

    // Dot follows cursor instantly — only updates transform (compositor-only, no layout)
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // translate(-50%,-50%) baked into the transform string, so `top:0; left:0` stays fixed in CSS
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }, { passive: true });

    // Outline follows with smooth lerp — single RAF loop, no Animation objects created
    (function tick() {
        outlineX += (mouseX - outlineX) * LERP;
        outlineY += (mouseY - outlineY) * LERP;
        cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
        requestAnimationFrame(tick);
    })();

    // Hover target interactions
    hoverTargets.forEach(target => {
        target.addEventListener("mouseenter", () => {
            cursorDot.classList.add("is-hovering");
            cursorOutline.classList.add("is-hovering");
        });

        target.addEventListener("mouseleave", () => {
            cursorDot.classList.remove("is-hovering");
            cursorOutline.classList.remove("is-hovering");
        });

        target.addEventListener("mousedown", () => {
            cursorOutline.classList.add("square");
        });

        target.addEventListener("mouseup", () => {
            cursorOutline.classList.remove("square");
        });
    });
});
