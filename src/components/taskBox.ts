import modalContainer from "../modals/modalContainer";
import renderAddTaskForm from "./addTaskForm";

const renderTaskBox = () => {
  const taskBox = document.createElement("div");
  taskBox.id = "addTaskBox";
  taskBox.className =
    "border rounded-xl w-[95px] bg-slate-900 sm:bg-transparent h-24 flex flex-col relative 	items-center  sm:h-64 sm:border-t-0 sm:border-b-0 sm:border-l-2 sm:border-r-2 p-4 border-slate-900 overflow-hidden z-[800] sm:w-64 duration-300 sm:rounded-none";
  const taskBoxToggler = document.createElement("button");
  taskBoxToggler.id = "taskBoxToggler";
  taskBoxToggler.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/plus-circle-svgrepo-com.svg";
  taskBoxToggler.className =
    "duration-500 w-fit cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]";
  taskBoxToggler.append(icon);

  taskBoxToggler.addEventListener("click", () => {
    if (window.innerWidth < 640) {
      modalContainer(renderAddTaskForm());
    } else {
      taskBoxToggler.classList.add("animation-remove");
      taskBoxToggler.disabled = true;
      setTimeout(() => {
        taskBox.classList.remove("sm:w-64", "rotate-90", "h-24");
        taskBox.classList.add(
          "sm:w-[400px]",
          "justify-start",
          "items-start",
          "h-64"
        );
        taskBox.append(renderAddTaskForm());
        taskBoxToggler.disabled = false;
      }, 500);
    }
  });
  taskBox.append(taskBoxToggler);
  return taskBox;
};

export default renderTaskBox;
