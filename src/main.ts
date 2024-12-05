import "./assets/styles/index.css";
import "./assets/styles/animation.css";
import "./assets/styles/custom.css";
import renderTaskBox from "./components/taskBox";
import renderRegisterPage from "./components/registerForm";
import renderStars from "./components/addStars";

const loading = document.querySelector<HTMLDivElement>("#loading");

window.addEventListener("load", () => {
  renderStars();
  setTimeout(() => {
    if (localStorage.getItem("username")) {
      if (!localStorage.getItem("groups"))
        localStorage.setItem("groups", JSON.stringify([{ وظایفم: [] }]));
      renderTaskBox();
    } else {
      renderRegisterPage();
    }
    console.log("xx");
    loading?.remove();
    setWelcomeMessage();
  }, 10);
});

// change welcome message text
window.addEventListener("resize", () => {
  setWelcomeMessage();
  renderStars();
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

