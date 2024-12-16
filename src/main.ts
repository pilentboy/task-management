import "./assets/styles/index.css";
import "./assets/styles/animation.css";
import "./assets/styles/custom.css";
import "animate.css";
import renderStars from "./components/stars";
import renderAppBoxes from "./components/renderAppBoxes";
import renderEarth from "./components/renderEarth";

const loading = document.querySelector<HTMLDivElement>("#loading");

import("./assets/styles/index.css").then(() => {
  // Display body and show loading
  document.body.style.display = "block";
  loading?.classList.remove("hidden");

  window.addEventListener("load", () => {
    initializeLocalStorageDefaults();
    renderStars();
    renderEarth();

    setTimeout(() => {
      renderAppBoxes();
      loading?.remove();
    }, 500);
  });
});

/**
 * Ensures default values exist in localStorage for specific keys.
 */
function initializeLocalStorageDefaults() {
  const defaults = {
    groups: JSON.stringify([{ اهدافم: [] }]),
    order_filter: "جدید",
    group_filter: "اهدافم",
    task_status_presentation_filter: "همه",
    startup_section: "خانه",
  };

  for (const [key, value] of Object.entries(defaults)) {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, value);
    }
  }
}

window.addEventListener("resize", () => {
  renderStars();
  renderEarth();
});
