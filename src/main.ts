import "./assets/styles/index.css";
import "./assets/styles/animation.css";
import "./assets/styles/custom.css";
const stars = document.querySelectorAll<HTMLElement>(".star");
const loading = document.querySelector<HTMLDivElement>("#loading");
const welcomingForm = document.querySelector<HTMLDivElement>("#welcomingForm");
const usernameInput =
  document.querySelector<HTMLInputElement>("#usernameInput");

const welcomeMessage =
  document.querySelector<HTMLHeadingElement>("#welcomeMessage");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading?.classList.add("hidden");
    welcomingForm?.classList.replace("hidden", "flex");
  }, 3000);
  setWelcomeMessage();
  createStar();
});

window.addEventListener("resize", () => {
  setWelcomeMessage();
  createStar();
});

const setWelcomeMessage = () => {
  if (welcomeMessage) {
    if (window.innerWidth < 640) {
      welcomeMessage.textContent = "به اپ برنامه ریزی خودت خوش اومدی";
    } else {
      welcomeMessage.textContent =
        "با این اپلیکیشن میتونی به سادگی واسه اهدافت برنامه ریزی کنی";
    }
  }
};

const createStar = () => {
  stars.forEach((e,index) => {
    let x: number = Math.floor(Math.random() * window.innerWidth + 50);
    let y: number = Math.floor(Math.random() * window.innerHeight + 50);
    e.style.left = `${x}px`;
    e.style.top = `${y}px`;
    index % 2 === 0 ? e.classList.add("animate-ping") : null;
    console.log(x, y);
  });
};

document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(usernameInput?.value);
  welcomingForm?.classList.add("animation-remove");
  createStar()
});
