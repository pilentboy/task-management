import renderTaskBox from "../components/taskBox";

const handleUserRegister = (e: any) => {
  e.preventDefault();
  // welcomingContainer
  const registerInput =
    document.querySelector<HTMLInputElement>("#usernameInput");
  if (
    registerInput &&
    registerInput.value.length > 1 &&
    registerInput.value.length <= 30
  ) {
    const welcomingContainer = document.querySelector<HTMLDivElement>(
      "#welcomingContainer"
    );
    localStorage.setItem("username", JSON.stringify(registerInput.value));
    localStorage.setItem("groups", JSON.stringify([{ وظایفم: [] }]));
    welcomingContainer?.classList.add("animation-remove");
    setTimeout(() => {
      welcomingContainer?.remove();
      renderTaskBox();
    }, 2000);
  } else {
    registerInput?.classList.add("border-red-500");
  }
};

export default handleUserRegister;
