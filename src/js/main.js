import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    once: true,
    offset: 50,
  });

  // Custom Cursor/Glow effect on mousemove
  const body = document.querySelector('body');
  body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // We could add a soft glowing orb following the cursor here
  });

  // Setup Three.js background for pages that have .hero-canvas
  const canvasContainer = document.querySelector('.hero-canvas');
  if (canvasContainer) {
    initThreeJs(canvasContainer);
  }
});

function initThreeJs(container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Particles
  const geometry = new THREE.BufferGeometry();
  const particlesCount = 700;
  const posArray = new Float32Array(particlesCount * 3);

  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const material = new THREE.PointsMaterial({
    size: 0.005,
    color: 0xFF6A00,
    transparent: true,
    opacity: 0.8
  });

  const particlesMesh = new THREE.Points(geometry, material);
  scene.add(particlesMesh);

  camera.position.z = 2;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    particlesMesh.rotation.y = elapsedTime * 0.05;
    particlesMesh.rotation.x = elapsedTime * 0.02;

    if (mouseX > 0) {
      particlesMesh.rotation.x += mouseY * 0.00001;
      particlesMesh.rotation.y += mouseX * 0.00001;
    }

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
