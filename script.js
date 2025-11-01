// 3D Background using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg") });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Red glowing particles
const geometry = new THREE.BufferGeometry();
const particlesCount = 1500;
const posArray = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 10;
}
geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
const material = new THREE.PointsMaterial({ color: 0xff0000, size: 0.02 });
const particlesMesh = new THREE.Points(geometry, material);
scene.add(particlesMesh);

function animate() {
  requestAnimationFrame(animate);
  particlesMesh.rotation.y += 0.001;
  particlesMesh.rotation.x += 0.0005;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Section animation using GSAP
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".content-section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.dataset.target;
    sections.forEach(sec => sec.classList.remove("active"));
    const activeSection = document.getElementById(target);
    activeSection.classList.add("active");
    gsap.fromTo(activeSection, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
