import {
  renderCloseBTN,
  renderButtonContianer,
  renderSubmitBTN,
} from "../components/buttons";
import handleAddTask from "../utils/handleAddTask";
import addNewGroups from "../modals/addNewGroups";
import renderGroupSelect from "./groupSelect";

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
  taskInput.className = "input input-bordered w-full max-w-xs";
  taskInput.placeholder = "هدفم...";
  taskInput.setAttribute("id", "taskInput");
  div.append(taskInput);

  const selectLabel = document.createElement("label");
  selectLabel.textContent = "تو کدوم دسته؟";
  selectLabel.className = "text-white font-2xl";
  selectLabel.setAttribute("for", "tasksListSelect");
  div.append(selectLabel);
  const selectContainer = document.createElement("div");
  selectContainer.className = "flex items-center gap-1";

  const groupSelectElement = renderGroupSelect(
    "w-1/2",
    "tasksListSelect",
    null
  );
  selectContainer.append(groupSelectElement);

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
      handleAddTask(taskInput.value, groupSelectElement.value);
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
