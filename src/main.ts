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
  }, 1);
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
    "relative",
    "animation-btn",
    "overflow-hidden"
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
      renderAddTaskBTN();
    }, 2000);
  } else {
    registerInput?.classList.add("border-red-500");
  }
};

const renderAddTaskBTN = () => {
  const taskBox = document.createElement("div");
  taskBox.setAttribute("id", "addTaskBox");
  taskBox.className =
    "flex flex-col	items-center justify-center fixed top-1/2 left-1/2 duration-300	 translate-x-[-50%] translate-y-[-50%] w-48 h-48 border-2 p-4 rounded-md border-slate-900 overflow-hidden";
  const wheel = document.createElement("img");
  wheel.src = "/task-management/svg/setting-svgrepo-com.svg";
  wheel.className =
    "duration-300  shadow-xl  cursor-pointer bg-transparent absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]";
  wheel.addEventListener("click", () => {
    wheel.classList.add("animate-wheel");
    setTimeout(() => {
      taskBox.classList.remove("w-48", "h-48");
      taskBox.classList.add("w-96", "h-56", "justify-start", "items-start");
      wheel.classList.add("w-10", "h-10");
      wheel.src = "/task-management/svg/close-square-svgrepo-com.svg";
      taskBox.append(renderAddTaskForm());
    }, 1000);
  });
  taskBox.append(wheel);
  container?.append(taskBox);
};

// create add taskk form
const renderAddTaskForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "addTaskForm");
  form.className = "w-full";
  const div = document.createElement("div");
  div.className = "flex flex-col gap-1";
  form.append(div);
  const getUsername = localStorage.getItem("username");
  const username = getUsername ? JSON.parse(getUsername) : null;
  const title = document.createElement("label");
  title.setAttribute("for", "taskInput");
  title.className = "text-white font-2xl animate-type mb-3";
  title.textContent = `سلام ${username}!  هدفت چیه؟`;

  div.append(title);
  const taskInput = document.createElement("input");
  taskInput.className =
    "w-[90%] p-2 outline-none bg-transparent text-white border-slate-400 border rounded-md placeholder:text-sm";
  taskInput.placeholder = "هدفم...";
  taskInput.setAttribute("id", "taskInput");
  div.append(taskInput);
  const submitTask = document.createElement("button");
  submitTask.textContent = "افزودن";
  submitTask.className =
    "self-center px-6 py-2 animation-btn text-white outline-none border border-slate-900 rounded-md duration-150 mt-5 relative overflow-hidden ";
  submitTask.setAttribute("id", "submitTaskBTN");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAddTask(taskInput.value);
    taskInput.value = "";
  });
  div.append(submitTask);
  form.append(div);
  return form;
};

// handle add goals to localstorage
const handleAddTask = (value: string) => {
  const taskList = localStorage.getItem("tasks");
  if (taskList) {
    const currentTaskList = JSON.parse(taskList);
    currentTaskList.push(value);
    localStorage.setItem("tasks", JSON.stringify(currentTaskList));
  } else {
    localStorage.setItem("tasks", JSON.stringify([value]));
  }
};
