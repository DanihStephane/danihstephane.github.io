/**
 * Three.js background scene for the Services section.
 * Runs only when the section is in the viewport (IntersectionObserver).
 * Uses alpha renderer so CSS section bg shows through particles + meshes.
 */
(function initServiceScene() {
    if (typeof THREE === 'undefined') return;

    const canvas  = document.getElementById('services-canvas');
    const section = document.getElementById('services');
    if (!canvas || !section) return;

    // ─── Renderer ────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0); // fully transparent clear

    let W = section.offsetWidth;
    let H = section.offsetHeight || 700;
    renderer.setSize(W, H);

    // ─── Scene & Camera ───────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(62, W / H, 0.1, 300);
    camera.position.z = 30;

    // ─── Palette ─────────────────────────────────────────────────────────────
    const C_CYAN   = 0x00e5ff;
    const C_TEAL   = 0x00b4d8;
    const C_BLUE   = 0x0077b6;
    const C_INDIGO = 0x023e8a;

    // ─── Floating Particles ───────────────────────────────────────────────────
    const N_PARTICLES = 340;
    const pPos  = new Float32Array(N_PARTICLES * 3);
    const pSize = new Float32Array(N_PARTICLES);

    for (let i = 0; i < N_PARTICLES; i++) {
        pPos[i * 3]     = (Math.random() - 0.5) * 100;
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 80;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 55;
        pSize[i]        = Math.random() * 1.8 + 0.5;
    }

    const pgeo = new THREE.BufferGeometry();
    pgeo.setAttribute('position', new THREE.BufferAttribute(pPos,  3));
    pgeo.setAttribute('size',     new THREE.BufferAttribute(pSize, 1));

    const pmat = new THREE.PointsMaterial({
        color:          C_CYAN,
        size:           0.13,
        transparent:    true,
        opacity:        0.55,
        sizeAttenuation: true,
    });

    const particles = new THREE.Points(pgeo, pmat);
    scene.add(particles);

    // ─── Wireframe Geometries ─────────────────────────────────────────────────
    function addWireframe(geo, color, x, y, z, scale) {
        const mat  = new THREE.MeshBasicMaterial({
            color, wireframe: true, transparent: true, opacity: 0.13,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        mesh.scale.setScalar(scale);
        scene.add(mesh);
        return mesh;
    }

    // ─── 3 paires miroir symmétriques (X négatif / X positif) ────────────────
    // Chaque paire partage la même géométrie, taille et Y, mais avec ry inversé
    // → les deux éléments d'une paire tournent en sens opposé de façon synchronisée.
    const meshes = [
        // Paire 1 — haut : tétraèdres (pyramides triangulaires, 4 faces)
        { m: addWireframe(new THREE.TetrahedronGeometry(1, 0), C_CYAN,  -19,  10, -16, 6.0), rx:  0.0028, ry:  0.0042 },
        { m: addWireframe(new THREE.TetrahedronGeometry(1, 0), C_CYAN,   19,  10, -16, 6.0), rx:  0.0028, ry: -0.0042 },

        // Paire 2 — milieu : cubes (arêtes angulaires franches)
        { m: addWireframe(new THREE.BoxGeometry(1, 1, 1),      C_TEAL, -26,   0, -20, 5.5), rx: -0.0038, ry:  0.0050 },
        { m: addWireframe(new THREE.BoxGeometry(1, 1, 1),      C_TEAL,  26,   0, -20, 5.5), rx: -0.0038, ry: -0.0050 },

        // Paire 3 — bas : octaèdres (diamants, 8 faces triangulaires)
        { m: addWireframe(new THREE.OctahedronGeometry(1, 0),  C_BLUE, -17, -11, -12, 4.8), rx:  0.0045, ry:  0.0032 },
        { m: addWireframe(new THREE.OctahedronGeometry(1, 0),  C_BLUE,  17, -11, -12, 4.8), rx:  0.0045, ry: -0.0032 },
    ];

    // ─── Subtle connecting lines between random nearby particles ─────────────
    const linePairs = [];
    const LINE_COUNT = 40;
    const lineGeo    = new THREE.BufferGeometry();
    const lineVerts  = new Float32Array(LINE_COUNT * 6); // 2 points × 3 coords

    for (let i = 0; i < LINE_COUNT; i++) {
        const a = Math.floor(Math.random() * N_PARTICLES) * 3;
        const b = Math.floor(Math.random() * N_PARTICLES) * 3;
        lineVerts[i * 6]     = pPos[a];
        lineVerts[i * 6 + 1] = pPos[a + 1];
        lineVerts[i * 6 + 2] = pPos[a + 2];
        lineVerts[i * 6 + 3] = pPos[b];
        lineVerts[i * 6 + 4] = pPos[b + 1];
        lineVerts[i * 6 + 5] = pPos[b + 2];
        linePairs.push(a, b);
    }

    lineGeo.setAttribute('position', new THREE.BufferAttribute(lineVerts, 3));
    const lineMat  = new THREE.LineBasicMaterial({ color: C_CYAN, transparent: true, opacity: 0.07 });
    const lineSegs = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSegs);

    // ─── Mouse Parallax ───────────────────────────────────────────────────────
    let mx = 0, my = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', (e) => {
        mx = (e.clientX / window.innerWidth  - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    // ─── Render Loop ──────────────────────────────────────────────────────────
    let raf    = null;
    let active = false;

    function animate() {
        if (!active) return;
        raf = requestAnimationFrame(animate);

        const t = performance.now() * 0.001;

        // Smooth mouse follow
        tx += (mx - tx) * 0.035;
        ty += (my - ty) * 0.035;
        scene.rotation.y = tx * 0.09;
        scene.rotation.x = -ty * 0.045;

        // Spin individual meshes
        meshes.forEach(({ m, rx, ry }) => {
            m.rotation.x += rx;
            m.rotation.y += ry;
        });

        // Slowly drift particle cloud
        particles.rotation.y = t * 0.016;
        particles.rotation.x = t * 0.007;

        // Pulse opacity
        pmat.opacity      = 0.38 + 0.18 * Math.sin(t * 0.48);
        lineMat.opacity   = 0.04 + 0.04 * Math.sin(t * 0.3);

        renderer.render(scene, camera);
    }

    // ─── Only render when the section is visible ──────────────────────────────
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !active) {
                active = true;
                animate();
            } else if (!entry.isIntersecting && active) {
                active = false;
                if (raf) { cancelAnimationFrame(raf); raf = null; }
            }
        });
    }, { threshold: 0.05 }).observe(section);

    // ─── Resize ───────────────────────────────────────────────────────────────
    window.addEventListener('resize', () => {
        W = section.offsetWidth;
        H = section.offsetHeight || 700;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        renderer.setSize(W, H);
    });
})();
