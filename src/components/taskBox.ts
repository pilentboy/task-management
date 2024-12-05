import renderAddTaskForm from "./addTaskForm";

const container = document.querySelector<HTMLDivElement>(".container");
const renderTaskBox = () => {
  const taskBox = document.createElement("div");
  taskBox.id = "addTaskBox";
  taskBox.className =
    "w-[90%] flex flex-col	items-center justify-center fixed top-1/2 left-1/2 duration-300	 translate-x-[-50%] translate-y-[-50%]  h-48 border-2 p-4 rounded-md border-slate-900 overflow-hidden sm:w-48";
  const taskBoxToggler = document.createElement("button");
  taskBoxToggler.id = "taskBoxToggler";
  taskBoxToggler.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/setting-svgrepo-com.svg";
  taskBoxToggler.className =
    "duration-500  shadow-xl  animate-pulse cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]";
  taskBoxToggler.append(icon);
  taskBoxToggler.addEventListener("click", () => {
    taskBoxToggler.classList.add("rotate-90", "animation-remove");
    taskBoxToggler.disabled = true;
    setTimeout(() => {
      taskBox.classList.remove("w-48", "h-48");
      taskBox.classList.add("sm:w-96", "h-64", "justify-start", "items-start");
      taskBox.append(renderAddTaskForm());
      taskBoxToggler.disabled = false;
    }, 950);
  });
  taskBox.append(taskBoxToggler);
  container?.append(taskBox);
};

export default renderTaskBox;
