import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

const renderEarth = () => {
  const earthContainer = document.createElement("div");
  earthContainer.id = "earthContainer";
  earthContainer.style.position = "absolute";
  earthContainer.style.top = "50%";
  earthContainer.style.left = "50%";
  earthContainer.style.transform = "translate(-50%, -50%)";
  earthContainer.style.width = "100%";
  earthContainer.style.height = "100%";
  earthContainer.style.backgroundColor = "transparaent";
  earthContainer.style.zIndex = "499";
  earthContainer.className = "sm:hidden";
  const scene = new THREE.Scene();
  scene.background = null;
  let camera = new THREE.PerspectiveCamera(
    110,
    window.innerWidth / window.innerHeight,
    1,
    100
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  earthContainer.appendChild(renderer.domElement);

  const light = new THREE.PointLight(0xffffff, 3000);
  light.position.set(10, 30, 90);
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0x404040, 1);
  scene.add(ambientLight);

  const geometry = new THREE.SphereGeometry(5, 64, 64);
  const texture = new THREE.TextureLoader().load(
    "/task-management/images/earth.jpg"
  );

  const material = new THREE.MeshStandardMaterial({ map: texture });
  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  camera.position.z = 15;

  // Create OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Optional: Set damping for smoother rotation
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Optional: Restrict zoom range
  controls.minDistance = 10; // Minimum zoom (distance from Earth)
  controls.maxDistance = 30; // Maximum zoom

  controls.maxPolarAngle = Math.PI / 2;
  controls.minPolarAngle = 0;

  controls.enablePan = false;

  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.01;
    renderer.render(scene, camera);
    // Update controls
    controls.update();
  }
  animate();

  if (window.innerWidth < 500) {
    document.querySelector(".container")?.append(earthContainer);
  } else {
    document.querySelector("#earthContainer")?.remove();
  }
};

export default renderEarth;
