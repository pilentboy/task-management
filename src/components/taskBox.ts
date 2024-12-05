import renderAddTaskForm from "./addTaskForm";

const renderTaskBox = () => {
  const taskBox = document.createElement("div");
  taskBox.id = "addTaskBox";
  taskBox.className =
    "w-[90%] h-48 flex flex-col relative	items-center justify-center  sm:h-64 border-l-[4px] border-r-[4px] p-4 border-slate-900 overflow-hidden sm:w-64 duration-300";
  const taskBoxToggler = document.createElement("button");
  taskBoxToggler.id = "taskBoxToggler";
  taskBoxToggler.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/plus-circle-svgrepo-com.svg";
  taskBoxToggler.className =
    "duration-500 w-28 cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]";
  taskBoxToggler.append(icon);
  taskBoxToggler.addEventListener("click", () => {
    taskBoxToggler.classList.add("animation-remove");
    taskBoxToggler.disabled = true;
    setTimeout(() => {
      taskBox.classList.remove("sm:w-64", "rotate-90","h-48");
      taskBox.classList.add("sm:w-96", "justify-start", "items-start","h-64");
      taskBox.append(renderAddTaskForm());
      taskBoxToggler.disabled = false;
    }, 500);
  });
  taskBox.append(taskBoxToggler);
  return taskBox;
};

export default renderTaskBox;
