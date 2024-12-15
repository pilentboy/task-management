import modalContainer from "../modals/modalContainer";
import taskManagerContainer, { renderTaskList } from "./taskManager";

const renderGroupBox = () => {
  const groupBox = document.createElement("div");

  groupBox.id = "groupBox";
  groupBox.className =
    "w-[75px] z-[800] h-20 flex  flex-col relative items-center justify-center  sm:h-48 border-2 p-4 rounded-xl border-slate-900 overflow-hidden sm:w-48 duration-300 hover:scale-105 cursor-pointer";
  const groupBoxToggler = document.createElement("button");
  groupBoxToggler.id = "groupBoxToggler";
  groupBoxToggler.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/files-svgrepo-com.svg";
  groupBoxToggler.className =
    "duration-500 w-fit absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center";

  groupBoxToggler.append(icon);
  groupBox.append(groupBoxToggler);

  groupBox.addEventListener("click", () => {
    modalContainer(taskManagerContainer(),"مدیریت برنامه");

    const groupManager = document.querySelector("#taskManagerContainer");

    if (window.innerWidth < 640) {
      setTimeout(() => {
        groupManager?.classList.remove("translate-y-[100%]");
      }, 50);
    }

    const groupFilter = localStorage.getItem("group_filter");
    renderTaskList(groupFilter ? groupFilter : "وظایفم");
  });
  return groupBox;
};

export default renderGroupBox;
