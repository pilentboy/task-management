import "./assets/styles/index.css";
import "./assets/styles/animation.css";
import "./assets/styles/custom.css";

const loading = document.querySelector<HTMLDivElement>("#loading");
const container = document.querySelector<HTMLDivElement>(".container");

window.addEventListener("load", () => {
  renderStars();
  setTimeout(() => {
    localStorage.getItem("username")
      ? renderAddTaskBTN()
      : renderRegisterContainer();
    loading?.remove();
    setWelcomeMessage();
  }, 500);
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

// render stars
const renderStars = (): void => {
  if (document.querySelector("#starsContainer")) {
    let currentDiv = document.querySelector("#starsContainer");
    currentDiv?.remove();
  }

  const starsContainer = document.createElement("div");
  starsContainer.setAttribute("id", "starsContainer");
  starsContainer.classList.add(
    "w-screen",
    "h-screen",
    "top-0",
    "left-0",
    "fixed",
    "z-[-1]",
    "px-10"
  );
  const starsCount = 30;
  for (let i = 0; i <= starsCount; i++) {
    const star = document.createElement("span");
    star.classList.add("star", "absolute");
    i % 2 === 0 ? star.classList.add("animate-ping") : null;
    const x: number = Math.floor(Math.random() * window.innerWidth + 50);
    const y: number = Math.floor(Math.random() * window.innerHeight + 50);
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    starsContainer.append(star);
  }
  container?.append(starsContainer);
  console.log("stars rendered");
};

// create h2 elemente
const renderH2Elemenete = (
  classes: string[],
  content: string,
  id: string | null = null
) => {
  const h2 = document.createElement("h2");
  h2.textContent = content;
  id ? h2.setAttribute("id", id) : null;
  classes.forEach((style) => {
    h2.classList.add(style);
  });
  return h2;
};

// create register form
const renderRegisterForm = () => {
  const form = document.createElement("form");
  form.setAttribute("action", "#");
  form.setAttribute("id", "registerForm");

  form.addEventListener("submit", (e) => handleUserRegister(e));

  const formInputContainer = document.createElement("div");
  formInputContainer.classList.add(
    "flex",
    "flex-col",
    "mx-auto",
    "w-full",
    "items-center",
    "justify-center",
    "gap-3",
    "sm:flex-row",
    "mt-5"
  );
  form.append(formInputContainer);
  const usernameInput = document.createElement("input");
  usernameInput.setAttribute("id", "usernameInput");
  usernameInput.setAttribute("name", "username");
  usernameInput.setAttribute("placeholder", "نام کاربری");
  usernameInput.classList.add(
    "outline-none",
    "w-80",
    "px-4",
    "py-4",
    "rounded-md",
    "border-[2px]",
    "duration-200",
    "text-white",
    "bg-transparent",
    "placeholder:text-sm",
    "hover:border-slate-800",
    "focus:border-slate-800"
  );
  formInputContainer.append(usernameInput);
  const formBTN = document.createElement("button");
  formBTN.textContent = "ورود";
  formBTN.classList.add(
    "p-4",
    "text-white",
    "border-[2px]",
    "rounded-md",
    "after:absolute",
    "after:content-['']",
    "after:w-full",
    "after:h-full",
    "after:z-[-1]",
    "after:bg-slate-900",
    "after:top-0",
    "after:left-0",
    "relative",
    "after:translate-x-[100%]",
    "overflow-hidden",
    "hover:after:translate-x-0",
    "after:duration-150"
  );
  formInputContainer.append(formBTN);
  return form;
};

// create register container
const renderRegisterContainer = (): void => {
  const formContainer = document.createElement("div");
  formContainer.setAttribute("id", "welcomingContainer");
  formContainer.classList.add(
    "w-full",
    "px-2",
    "fixed",
    "top-1/2",
    "left-1/2",
    "translate-x-[-50%]",
    "translate-y-[-50%]",
    "flex",
    "items-center",
    "flex-col"
  );
  formContainer.append(
    renderH2Elemenete(
      ["text-3xl", "text-slate-500", "text-center", "px-2", "animate-bounce"],
      "",
      "welcomeMessage"
    )
  );
  formContainer.append(
    renderH2Elemenete(
      [
        "text-white",
        "text-2xl",
        "text-center",
        "shadow-slate-900",
        "shadow-lg",
        "my-10",
      ],
      " برای شروع فقط کافیه یه اسم واسه حسابت وارد کنی"
    )
  );
  formContainer.append(renderRegisterForm());
  container?.append(formContainer);
};

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
    welcomingContainer?.classList.add("animation-remove");
    setTimeout(() => {
      welcomingContainer?.remove();
      renderAddTaskBTN()
    }, 2000);
  } else {
    registerInput?.classList.add("border-red-500");
  }
};

// render add task btn + svg
const renderAddTaskBTN = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.className =
    "absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]";
  // Create the SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 448 512");
  svg.setAttribute("width", "80px");

  // Create the defs element for gradients
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

  // Create the linear gradient
  const linearGradient = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "linearGradient"
  );
  linearGradient.setAttribute("id", "addbtn");
  linearGradient.setAttribute("x1", "0%");
  linearGradient.setAttribute("y1", "0%");
  linearGradient.setAttribute("x2", "100%");
  linearGradient.setAttribute("y2", "100%");

  // Create the stops for the gradient
  const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0%");
  stop1.setAttribute("style", "stop-color: #0f172a; stop-opacity: 1");

  const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "100%");
  stop2.setAttribute("style", "stop-color: #386ce6; stop-opacity: 1");

  // Append stops to the gradient
  linearGradient.appendChild(stop1);
  linearGradient.appendChild(stop2);

  // Append gradient to defs
  defs.appendChild(linearGradient);

  // Create the path element for the SVG
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
  );
  path.setAttribute("fill", "url(#addbtn)");

  // Append elements in order
  svg.appendChild(defs);
  svg.appendChild(path);
  button.appendChild(svg);
  container?.append(button);
};
