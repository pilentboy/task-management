import renderAppBoxes from "../components/renderAppBoxes";

const handleUserRegister = (e: any) => {
  e.preventDefault();
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
    localStorage.setItem("username", registerInput.value);
    localStorage.setItem("groups", JSON.stringify([{ وظایفم: [] }]));
    localStorage.setItem("order_filter", "جدید");
    localStorage.setItem("group_filter", "وظایفم");
    welcomingContainer?.classList.add("animation-remove");
    setTimeout(() => {
      welcomingContainer?.remove();
      renderAppBoxes();
    }, 2000);
  } else {
    registerInput?.classList.add("border-red-500");
  }
};

export default handleUserRegister;
