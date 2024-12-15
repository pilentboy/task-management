import { successAlert } from "../components/alets";

const handleUIDisplay = () => {
  const uiperformanceRadios = document.querySelectorAll(
    'input[name="uipreference"]'
  );

  const uipreference = localStorage.getItem("ui_preference");

  uiperformanceRadios.forEach((radio: any) => {
    if (uipreference && uipreference === radio.dataset.theme)
      radio.setAttribute("checked", "checked");
    radio.addEventListener("change", (e: any) => {
      const selectedValue = e.target.dataset.theme;
      localStorage.setItem("ui_preference", selectedValue);
      successAlert("با موفقیت تنظیم شد!");
    });
  });
};

export default handleUIDisplay;
