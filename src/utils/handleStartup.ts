const handleStartup = () => {
  const startup = localStorage.getItem("startup_modal");
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

export default handleStartup;
