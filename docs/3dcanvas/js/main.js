// Using ES module imports for Three.js. Edit these paths to point to your character images.
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
const images = [
  'img/character/cycle.png',
  'img/character/zero.png',
  'img/character/lighter.png'
];

let idx = 0;
const label = document.getElementById('label');
label.textContent = String(idx);

const canvas = document.getElementById('glcanvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.set(0, 0, 2.8);
camera.lookAt(0, 0, 0);

const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(1, 2, 2);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.8));

// Load image directly - works fine when served over HTTP (e.g. GitHub Pages)
// For local testing: run a local HTTP server (python -m http.server, or npx http-server)
function loadImageAsTexture(path, onLoad, onError) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const tex = new THREE.Texture(img);
    tex.colorSpace = THREE.SRGBColorSpace; // Proper color space for image textures
    tex.needsUpdate = true;
    onLoad(tex);
  };
  img.onerror = () => onError(path);
  img.src = path;
}

const box = new THREE.Group(); // Use Group instead of Mesh
function makeBox(texture){
  // Create a group containing sides and textured faces
  const group = new THREE.Group();
  
  // Black sides (full box) — make slightly thinner so front/back planes sit clearly outside
  const sideGeom = new THREE.BoxGeometry(1.6, 1.6, 0.14);
  const sideMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
  // push the box faces slightly back in the depth buffer to avoid occluding the planes
  sideMat.polygonOffset = true;
  sideMat.polygonOffsetFactor = 1;
  sideMat.polygonOffsetUnits = 1;
  const sides = new THREE.Mesh(sideGeom, sideMat);
  group.add(sides);
  
  // Textured front and back planes
  const planeGeom = new THREE.PlaneGeometry(1.6, 1.6);
  // Front: single-sided facing +Z (use MeshPhongMaterial for better color fidelity)
  const texMatFront = new THREE.MeshPhongMaterial({ map: texture, side: THREE.FrontSide, shininess: 0 });
  const front = new THREE.Mesh(planeGeom, texMatFront);
  front.position.z = 0.075; // slightly outside the box thickness (0.14/2 = 0.07)
  front.renderOrder = 2;
  group.add(front);

  // Back: single-sided facing -Z (rotate)
  const texMatBack = new THREE.MeshPhongMaterial({ map: texture, side: THREE.FrontSide, shininess: 0 });
  const back = new THREE.Mesh(planeGeom, texMatBack);
  back.position.z = -0.075;
  back.rotation.y = Math.PI;
  back.renderOrder = 2;
  group.add(back);
  return group;
}

function setTextureFromIndex(i){
  // Dispose old materials/geometries
  box.children.forEach(child => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach(m => m.dispose());
      } else {
        child.material.dispose();
      }
    }
  });
  box.clear();

  const path = images[i % images.length];
  loadImageAsTexture(path, (tex)=>{
    // Create and add new meshes
    const newBox = makeBox(tex);
    // copy children array because reparenting a child removes it from newBox.children
    const children = newBox.children.slice();
    children.forEach((child, idx) => {
      child.frustumCulled = false;
      box.add(child);
    });
  }, (path)=>{
    console.warn('Texture failed to load:', path);
  });
}

// initial placeholder box
scene.add(box);
setTextureFromIndex(idx);

// UI
document.getElementById('prev').addEventListener('click', ()=>{
  idx = (idx - 1 + images.length) % images.length;
  label.textContent = String(idx);
  setTextureFromIndex(idx);
});
document.getElementById('next').addEventListener('click', ()=>{
  idx = (idx + 1) % images.length;
  label.textContent = String(idx);
  setTextureFromIndex(idx);
});

// Drag to rotate
let dragging = false, lastX = 0, lastY = 0;
canvas.addEventListener('pointerdown', (e)=>{ dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); });
window.addEventListener('pointerup', (e)=>{ dragging = false; });
window.addEventListener('pointermove', (e)=>{
  if (!dragging) return;
  const dx = (e.clientX - lastX) * 0.01;
  const dy = (e.clientY - lastY) * 0.01;
  if (box) {
    box.rotation.y += dx;
    box.rotation.x += dy;
  }
  lastX = e.clientX; lastY = e.clientY;
});

function resize(){
  const w = canvas.clientWidth || canvas.width;
  const h = canvas.clientHeight || canvas.height;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

function animate(){
  resize();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
