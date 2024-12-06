import handleChangeTaskStatus from "../utils/handleTaskStatus";
import handleDeleteTask from "../utils/handleDeleteTask";

const groupManager = () => {
  const container = document.createElement("div");
  container.id = "groupManager";
  container.className =
    "w-[95%] sm:w-[400px] h-[450px] border-2 border-slate-800 rounded-lg flex flex-col p-2 add-task-bg";

  //  group list
  const groupListContainer = document.createElement("div");
  groupListContainer.className =
    "w-full border-b border-white h-12 flex items-center";
  container.append(groupListContainer);
  groupListContainer.append(renderGroups());
  return container;
};

const renderGroups = () => {
  const groupData = localStorage.getItem("groups");
  const groupDataObj = groupData ? JSON.parse(groupData) : null;
  const groupContainer = document.createElement("ul");
  groupContainer.className =
    "w-full flex items-center gap-4 overflow-hidden px-2";
  groupDataObj.forEach((group: any) => {
    const groupTitle = Object.keys(group)[0];
    const li = document.createElement("li");
    li.id = groupTitle;
    li.className =
      "text-white text-sm hover:scale-105 duration-150 cursor-pointer group-title";
    li.textContent = groupTitle;
    li.addEventListener("click", (e: any) => {
      document.querySelector("#taskList")?.remove();
      renderTaskList(e.srcElement.id);
    });
    groupContainer.append(li);
  });
  return groupContainer;
};

const renderTaskList = (groupTitle: string) => {
  const groupContainer = document.querySelector("#groupManager");

  const ul = document.createElement("ul");
  ul.id = "taskList";
  ul.className = "flex flex-col gap-4 mt-2 p-2 bg-slate-900 h-full ";
  const groupData = localStorage.getItem("groups");
  const groupDataObj = groupData ? JSON.parse(groupData) : null;

  groupDataObj.forEach((list: any) => {
    if (Object.keys(list)[0] === groupTitle) {
      const selectedList = list[groupTitle];
      selectedList.forEach((task: any) => {
        const li = document.createElement("div");
        li.className = "flex items-center justify-between w-full";
        // task status
        const right = document.createElement("div");
        right.className = "flex items-center gap-3";

        // task setting btn
        const taskSettingBTN = document.createElement("button");
        taskSettingBTN.type = "button";
        taskSettingBTN.className = "relative overflow-visible task-setting";

        const taskSettingBox = document.createElement("div");
        taskSettingBox.className =
          "w-10 h-10 rounded-md hidden items-center justify-center bg-gray-900 absolute top-0 left-0 tast-setting-box z-10";
        const deleteBTN = document.createElement("img");
        deleteBTN.className = "w-5";
        deleteBTN.src = "/task-management/svg/garbage-trash-svgrepo-com.svg";
        deleteBTN.addEventListener("click", () =>
          handleDeleteTask(groupTitle, task.id)
        );
        taskSettingBox.append(deleteBTN);

        taskSettingBTN.append(taskSettingBox);
        const icon = document.createElement("img");
        icon.src = "/task-management/svg/dot-menu-more-svgrepo-com.svg";
        icon.className = "w-4";
        taskSettingBTN.append(icon);
        right.append(taskSettingBTN);
        //  end task setting btn

        const taskStatusBTN = document.createElement("button");
        taskStatusBTN.type = "button";
        taskStatusBTN.className = `border rounded-full w-6 h-6 ${
          task.status == true ? "bg-green-600" : "bg-gray-200"
        }`;

        // ///// handle change task status
        taskStatusBTN.addEventListener("click", () => {
          handleChangeTaskStatus(task.id, groupTitle);
        });

        right.append(taskStatusBTN);
        const title = document.createElement("li");
        title.className = "text-white text-sm";
        title.textContent = task.title;
        right.append(title);
        li.append(right);
        // task date
        const date = document.createElement("span");
        date.className = "text-gray-300 text-[12px]";
        date.textContent = task.date;
        li.append(date);
        ul.append(li);
      });
    }
  });
  groupContainer?.append(ul);
};

export { renderTaskList };
export default groupManager;
