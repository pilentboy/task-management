import "./assets/styles/index.css";
import "./assets/styles/animation.css";
import "./assets/styles/custom.css";

const welcomeMessage =
  document.querySelector<HTMLHeadingElement>("#welcomeMessage");

window.addEventListener("load", () => {
  setWelcomeMessage();
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
window.addEventListener("resize", setWelcomeMessage);
