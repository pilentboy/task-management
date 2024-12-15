import { successAlert } from "../components/alets";

const startup = localStorage.getItem("startup_modal");

const handleStartup = () => {
  handleStartupOptions();
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
  console.log(startupRadios);
  startupRadios.forEach((radio: any) => {
    console.log(radio);
    if (startup && startup === radio.dataset.startup)
      radio.setAttribute("checked", "checked");

    radio.addEventListener("change", (e: any) => {
      const selectedValue = e.target.dataset.startup;
      localStorage.setItem("startup_modal", selectedValue);
      successAlert("با موفقیت تنظیم شد!");
    });
  });
};
export { handleStartupOptions };
export default handleStartup;
