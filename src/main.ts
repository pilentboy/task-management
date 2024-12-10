import "./assets/styles/index.css";
import "./assets/styles/animation.css";
import "./assets/styles/custom.css";
import "animate.css";
import renderRegisterPage from "./components/registerForm";
import renderStars from "./components/stars";
import renderAppBoxes from "./components/renderAppBoxes";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

const loading = document.querySelector<HTMLDivElement>("#loading");

window.addEventListener("load", () => {
  renderStars();
  setTimeout(() => {
    if (localStorage.getItem("username")) {
      if (!localStorage.getItem("groups"))
        localStorage.setItem("groups", JSON.stringify([{ وظایفم: [] }]));
      renderAppBoxes();
    } else {
      renderRegisterPage();
    }
    loading?.remove();
    setWelcomeMessage();
  }, 10);
});

// change welcome message text
window.addEventListener("resize", () => {
  setWelcomeMessage();
  // renderStars();
});

// change welcome message dynamicly based on user's screen size
const setWelcomeMessage = () => {
  const welcomeMessage =
    document.querySelector<HTMLHeadingElement>("#welcomeMessage");
  if (welcomeMessage) {
    if (window.innerWidth < 640) {
      welcomeMessage.textContent = "به اپ برنامه ریزی خودت خوش اومدی";
    } else {
      welcomeMessage.textContent =
        "با این اپلیکیشن میتونی به سادگی واسه اهدافت برنامه ریزی کنی";
    }
  }
};

// 1. تنظیم صحنه (Scene)، دوربین (Camera) و رندرر (Renderer)

const earthContainer = document.createElement("div");
earthContainer.style.position = "absolute";
earthContainer.style.top = "50%";
earthContainer.style.left = "50%";
earthContainer.style.transform = "translate(-50%, -50%)";
earthContainer.style.width = "100%";
earthContainer.style.height = "100%";
earthContainer.style.backgroundColor = "transparaent";
earthContainer.style.zIndex = "499";
document.querySelector(".container")?.appendChild(earthContainer);

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

// 2. افزودن نور
const light = new THREE.PointLight(0xffffff, 0.7); // کاهش شدت نور
light.position.set(10, 30, 90);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 1); // نور یکنواخت
scene.add(ambientLight);

// 3. ایجاد یک کره
const geometry = new THREE.SphereGeometry(5, 64, 64); // شعاع و جزئیات کره
const texture = new THREE.TextureLoader().load(
  "/task-management/images/earth.jpg",
  () => {
    console.log("Texture loaded successfully");
  }
); // اضافه کردن تکسچر زمین
const material = new THREE.MeshStandardMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// (اختیاری) افزودن ابرها
const cloudsGeometry = new THREE.SphereGeometry(5.1, 64, 64);
const cloudsTexture = new THREE.TextureLoader().load("clouds.jpg");
const cloudsMaterial = new THREE.MeshStandardMaterial({
  map: cloudsTexture,
  transparent: true,
});
const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
scene.add(clouds);

// 4. تنظیم موقعیت دوربین
camera.position.z = 15;

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Optional: Set damping for smoother rotation
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Optional: Restrict zoom range
controls.minDistance = 10; // Minimum zoom (distance from Earth)
controls.maxDistance = 30; // Maximum zoom

// Optional: Limit rotation vertically (e.g., to prevent flipping the Earth upside down)
controls.maxPolarAngle = Math.PI / 2; // Max rotation vertically (90°)
controls.minPolarAngle = 0; // Min rotation vertically

// Optional: Disable pan
controls.enablePan = false;

// 5. حلقه انیمیشن
function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.01; // چرخش کره زمین
  renderer.render(scene, camera);
  // Update controls
  controls.update();
}
animate();
