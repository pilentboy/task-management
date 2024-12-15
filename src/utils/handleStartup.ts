import { successAlert } from "../components/alets";

const startup = localStorage.getItem("startup_section");

const handleStartup = () => {
  if (startup) {
    switch (startup) {
      case "فرم افزودن هدف":
        const taskBoxToggler = document.querySelector(
          "#taskBoxToggler"
        ) as HTMLButtonElement;
        taskBoxToggler?.click();
        break;
      case "مدیریت اهداف":
        const groupBoxToggler = document.querySelector(
          "#groupBoxToggler"
        ) as HTMLButtonElement;
        groupBoxToggler?.click();
        break;
    }
  }
};

const handleStartupOptions = () => {
  const startupRadios = document.querySelectorAll('input[name="startup"]');
  startupRadios.forEach((radio: any) => {
    if (startup && startup === radio.dataset.startup)
      radio.setAttribute("checked", "checked");

    radio.addEventListener("change", (e: any) => {
      const selectedValue = e.target.dataset.startup;
      localStorage.setItem("startup_section", selectedValue);
      successAlert("با موفقیت تنظیم شد!");
    });
  });
};
export { handleStartupOptions };
export default handleStartup;
