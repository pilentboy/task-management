import {
  renderCloseBTN,
  renderButtonContianer,
  renderSubmitBTN,
} from "../components/buttons";
import handleAddTask from "../utils/handleAddTask";
import addNewGroups from "../modals/addNewGroups";

// create add task form
const renderAddTaskForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "addTaskForm");
  form.className =
    "w-3/4 animate__fadeIn animate__animated  sm:w-full  sm:block ";
  const div = document.createElement("div");
  div.id = "formContainer";
  div.className = "flex flex-col gap-2 add-task-bg ";
  form.append(div);
  const getUsername = localStorage.getItem("username");
  const title = document.createElement("label");
  title.setAttribute("for", "taskInput");
  title.className = "text-white font-2xl animate-type ";
  title.textContent = `سلام ${getUsername}!  هدفت چیه؟`;

  div.append(title);
  const taskInput = document.createElement("input");
  taskInput.className =
    "w-[90%] p-2 outline-none bg-white placeholder:text-gray-600 text-black border-slate-400 hover:border-slate-800 focus:border-slate-800 duration-150 border rounded-md placeholder:text-sm";
  taskInput.placeholder = "هدفم...";
  taskInput.setAttribute("id", "taskInput");
  div.append(taskInput);
  const selectLabel = document.createElement("label");
  selectLabel.textContent = "تو کدوم دسته؟";
  selectLabel.className = "text-white font-2xl";
  selectLabel.setAttribute("for", "tasksList");
  div.append(selectLabel);
  const selectContainer = document.createElement("div");
  selectContainer.className = "flex items-center gap-1";
  const tasksListSelect = document.createElement("select");
  tasksListSelect.name = "taskList";
  tasksListSelect.id = "tasksList";
  tasksListSelect.className =
    "w-1/2 p-1 bg-transparent cursor-pointer text-white border-slate-400 border hover:border-slate-800 focus:border-slate-800 duration-150  outline-none rounded-md";
  const taskListNames = localStorage.getItem("groups") || null;
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
  addListBTN.addEventListener("click", addNewGroups);
  selectContainer.append(addListBTN);
  div.append(selectContainer);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 460) {
      form.remove();
      document.querySelector("#modalContainer")?.remove();
      const taskBoxToggler = document.querySelector("#taskBoxToggler");
      const addTaskBox = document.querySelector("#addTaskBox");

      taskBoxToggler?.classList.remove("animation-remove");

      addTaskBox?.classList.remove(
        "sm:w-[400px]",
        "justify-start",
        "items-start",
        "h-64"
      );
      addTaskBox?.classList.add("sm:w-64", "h-24");
    }
  });

  div.append(
    renderButtonContianer(
      renderCloseBTN(() => {
        document.querySelector("#modalContainer")?.remove();
        form.remove();
        const taskBoxToggler = document.querySelector("#taskBoxToggler");
        const addTaskBox = document.querySelector("#addTaskBox");

        taskBoxToggler?.classList.remove("animation-remove");

        addTaskBox?.classList.remove(
          "sm:w-[400px]",
          "justify-start",
          "items-start",
          "h-64"
        );
        addTaskBox?.classList.add("sm:w-64", "h-24");
      }),
      renderSubmitBTN("submitTaskBTN", "افزودن", false)
    )
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      taskInput.value.trim().length > 0 &&
      taskInput.value.trim().length < 50
    ) {
      handleAddTask(taskInput.value, tasksListSelect.value);
      taskInput.classList.remove("border-2", "border-red-600");
      taskInput.classList.add("border-slate-400");
      taskInput.value = "";
    } else {
      taskInput.classList.remove("border-slate-400");
      taskInput.classList.add("border-2", "border-red-600");
    }
  });
  form.append(div);
  return form;
};
export default renderAddTaskForm;
