import "./assets/styles/index.css";
import "./assets/styles/animation.css";
import "./assets/styles/custom.css";
// ---------------- create default list for tasks on load event if there's no list

const loading = document.querySelector<HTMLDivElement>("#loading");
const container = document.querySelector<HTMLDivElement>(".container");

window.addEventListener("load", () => {
  renderStars();
  setTimeout(() => {
    localStorage.getItem("username")
      ? renderAddTaskBox()
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
  const starsCount = 10;
  for (let i = 0; i <= starsCount; i++) {
    const star = document.createElement("span");
    star.classList.add("star", "absolute");
    // i % 2 === 0 ? star.classList.add("animate-ping") : null;
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
      renderAddTaskBox();
    }, 2000);
  } else {
    registerInput?.classList.add("border-red-500");
  }
};

const addListModal = () => {
  const taskBox = document.querySelector("#addTaskBox");
  const form = document.createElement("form");
  form.className = "z-[999]";
  form.id = "addNewList";
  const div = document.createElement("div");
  form.append(div);
  div.className =
    "absolute top-0 left-0 flex flex-col gap-2 items-center justify-center backdrop-blur-lg	 w-full h-full ";
  const addListInput = document.createElement("input");
  addListInput.className =
    "w-3/4 p-2 outline-none bg-transparent text-white border-slate-400 focus:border-slate-800 duration-150 border rounded-md placeholder:text-sm";
  addListInput.placeholder = "نام دسته ی جدید...";
  addListInput.id = "addListInput";
  div.append(addListInput);
  div.append(
    renderButtonContianer(
      renderCloseBTN(() => {
        form.remove();
      }),
      renderSubmitBNT("addNewList")
    )
  );
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (addListInput.value.length > 0) {
      const taskList = localStorage.getItem("tasks");
      const updatedTaskList = taskList ? JSON.parse(taskList) : null;
      updatedTaskList.push({ [addListInput?.value]: [] });
      localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
      console.log("done");
    } else {
      addListInput.classList.remove("border-slate-400");
      addListInput.classList.add("border-red-500");
    }
  });
  taskBox?.append(form);
};

const renderAddTaskBox = () => {
  const taskBox = document.createElement("div");
  taskBox.id = "addTaskBox";
  taskBox.className =
    "w-[90%] flex flex-col	items-center justify-center fixed top-1/2 left-1/2 duration-300	 translate-x-[-50%] translate-y-[-50%]  h-48 border-2 p-4 rounded-md border-slate-900 overflow-hidden sm:w-48";
  const taskBoxToggler = document.createElement("img");
  taskBoxToggler.id = "taskBoxToggler";
  taskBoxToggler.src = "/task-management/svg/setting-svgrepo-com.svg";
  taskBoxToggler.className =
    "duration-500  shadow-xl  animate-pulse cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]";
  taskBoxToggler.addEventListener("click", () => {
    taskBoxToggler.classList.add("rotate-90", "animation-remove");
    setTimeout(() => {
      taskBox.classList.remove("w-48", "h-48");
      taskBox.classList.add("sm:w-96", "h-64", "justify-start", "items-start");
      taskBox.append(renderAddTaskForm());
    }, 950);
  });
  taskBox.append(taskBoxToggler);
  container?.append(taskBox);
};

// create add task form
const renderAddTaskForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "addTaskForm");
  form.className = "w-full";
  const div = document.createElement("div");
  div.id = "formContainer";
  div.className = "flex flex-col gap-2";
  form.append(div);
  const getUsername = localStorage.getItem("username");
  const username = getUsername ? JSON.parse(getUsername) : null;
  const title = document.createElement("label");
  title.setAttribute("for", "taskInput");
  title.className = "text-white font-2xl animate-type ";
  title.textContent = `سلام ${username}!  هدفت چیه؟`;

  div.append(title);
  const taskInput = document.createElement("input");
  taskInput.className =
    "w-[90%] p-2 outline-none bg-transparent text-white border-slate-400 hover:border-slate-800 focus:border-slate-800 duration-150 border rounded-md placeholder:text-sm";
  taskInput.placeholder = "هدفم...";
  taskInput.setAttribute("id", "taskInput");
  div.append(taskInput);
  const selectLabel = document.createElement("label");
  selectLabel.textContent = "تو کدوم دسته؟";
  selectLabel.className = "text-white text-sm";
  selectLabel.setAttribute("for", "tasksList");
  div.append(selectLabel);
  const selectContainer = document.createElement("div");
  selectContainer.className = "flex items-center gap-1";
  const tasksListSelect = document.createElement("select");
  tasksListSelect.name = "taskList";
  tasksListSelect.id = "tasksList";
  tasksListSelect.className =
    "w-1/2 p-1 bg-transparent cursor-pointer text-white border-slate-400 border hover:border-slate-800 focus:border-slate-800 duration-150  outline-none rounded-md";
  const taskListNames = localStorage.getItem("tasks") || null;
  if (taskListNames) {
    const taskList = JSON.parse(taskListNames);
    let taskNames: Array<string> = [];
    taskList.forEach((listName: string) => {
      taskNames.push(Object.keys(listName)[0]);
    });
    taskNames.forEach((currentListName) => {
      const option = document.createElement("option");
      option.value = currentListName;
      option.textContent = currentListName;
      option.className =
        "border-slate-400 bg-transparent  text-black hover:border-slate-800 focus:border-slate-800 duration-150 ";
      tasksListSelect.append(option);
    });
  } else {
    const option = document.createElement("option");
    option.value = "وظایفم";
    option.textContent = "وظایفم";
    option.className =
      "border-slate-400 bg-transparent  hover:border-slate-800 focus:border-slate-800 duration-150 ";
    tasksListSelect.append(option);
  }

  selectContainer.append(tasksListSelect);
  const addListBTN = document.createElement("button");
  addListBTN.setAttribute("type", "button");
  addListBTN.className = "py-1 px-3 border-none text-white text-lg";
  addListBTN.textContent = "+";
  addListBTN.addEventListener("click", addListModal);
  selectContainer.append(addListBTN);
  div.append(selectContainer);

  div.append(
    renderButtonContianer(
      renderCloseBTN(() => {
        form.remove();
        const taskBoxToggler = document.querySelector("#taskBoxToggler");
        const addTaskBox = document.querySelector("#addTaskBox");

        taskBoxToggler?.classList.remove("animation-remove");

        addTaskBox?.classList.remove(
          "sm:w-96",
          "h-64",
          "justify-start",
          "items-start"
        );
        addTaskBox?.classList.add("w-48", "h-48");
      }),
      renderSubmitBNT("submitTaskBTN")
    )
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAddTask(taskInput.value, tasksListSelect.value);
    taskInput.value = "";
  });
  form.append(div);
  return form;
};

// handle add goals to localstorage
const handleAddTask = (taskTitle: string, listName: string) => {
  const taskList = localStorage.getItem("tasks");
  if (taskList) {
    const updatedTaskList = JSON.parse(taskList);
    updatedTaskList.forEach((list: any) => {
      if (Object.keys(list)[0] === listName) {
        const selectedList = list[listName];
        selectedList.push(taskTitle.trim());
        list[listName] = selectedList;
        localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
      }
    });
  } else {
    localStorage.setItem(
      "tasks",
      JSON.stringify([{ وظایفم: [taskTitle.trim()] }])
    );
  }
};

// submit btn
const renderSubmitBNT = (btnID: string) => {
  const submitTask = document.createElement("button");
  submitTask.textContent = "افزودن";
  submitTask.className =
    "self-center px-6 py-2 animation-btn text-white outline-none border border-slate-900 rounded-md duration-150 relative overflow-hidden ";
  submitTask.setAttribute("id", btnID);

  return submitTask;
};

// button container in forms
const renderButtonContianer = (firstBTN: any, secondBTN: any) => {
  const btnDiv = document.createElement("div");
  btnDiv.className = "w-full flex items-center justify-center gap-10 mt-4";
  btnDiv.append(firstBTN);
  btnDiv.append(secondBTN);
  return btnDiv;
};

// close btn
const renderCloseBTN = (action: any) => {
  const button = document.createElement("button");
  button.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/close-square-svgrepo-com.svg";
  icon.className = "w-10 h-10";
  button.append(icon);
  button.addEventListener("click", action);
  return button;
};
