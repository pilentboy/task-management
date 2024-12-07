import handleChangeTaskStatus from "../utils/handleTaskStatus";
import handleDeleteTask from "../utils/handleDeleteTask";

const groupManager = () => {
  const container = document.createElement("div");
  container.id = "groupManager";
  container.className =
    "w-[95%] sm:w-[400px] h-[450px] border-2 border-slate-800 rounded-lg flex flex-col p-2 add-task-bg animate__fadeIn animate__animated";

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
    "w-full flex items-center gap-2 overflow-hidden px-2";
  groupDataObj.forEach((group: any) => {
    const groupTitle = Object.keys(group)[0];
    const li = document.createElement("li");
    li.id = groupTitle;
    li.className =
      "text-white text-sm cursor-pointer group-title border border-white p-1 rounded-md";
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
  ul.className = "flex flex-col gap-4 mt-2 p-2  h-full ";
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
          "w-10 h-10 -top-2 -left-10 rounded-md hidden items-center justify-center bg-black sm:bg-gray-900 absolute  sm:-top-2 sm:left-8 animate tast-setting-box z-10 animate__jackInTheBox animate__animated";
        const deleteBTN = document.createElement("img");
        deleteBTN.className = "w-5";
        deleteBTN.src = "/task-management/svg/garbage-trash-svgrepo-com.svg";
        deleteBTN.addEventListener("click", () => {
          li.classList.add("animate__flipOutX");
          setTimeout(() => handleDeleteTask(groupTitle, task.id), 600);
        });
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
        taskStatusBTN.className = "w-6 h-6 bg-trasnparent";

        const taskStatusIcon = document.createElement("img");
        taskStatusIcon.className = "w-fit h-fit  animate__animated";
        task.status
          ? (taskStatusIcon.src =
              "/task-management/svg/tick-circle-svgrepo-com.svg")
          : (taskStatusIcon.src =
              "/task-management/svg/circle-svgrepo-com.svg");
        taskStatusBTN.append(taskStatusIcon);
        // ///// handle change task status
        let taskStatusChangeDetector: boolean = false; // remove hover event when changing status
        taskStatusBTN.addEventListener("click", () => {
          taskStatusChangeDetector = true;
          if (!task.status) {
            taskStatusIcon.src =
              "/task-management/svg/tick-circle-svgrepo-com.svg";
            taskStatusIcon.classList.add("animate__rubberBand");

            setTimeout(() => {
              handleChangeTaskStatus(task.id, groupTitle);
            }, 900);
          } else {
            handleChangeTaskStatus(task.id, groupTitle);
          }
        });
        taskStatusBTN.addEventListener("mouseenter", () => {
          if (!task.status && !taskStatusChangeDetector) {
            taskStatusIcon.src =
              "/task-management/svg/tick-circle-svgrepo-com.svg";
          }
        });
        taskStatusBTN.addEventListener("mouseleave", () => {
          if (!task.status && !taskStatusChangeDetector) {
            taskStatusIcon.src = taskStatusIcon.src =
              "/task-management/svg/circle-svgrepo-com.svg";
          }
        });

        right.append(taskStatusBTN);
        const title = document.createElement("li");
        title.className = "text-white text-sm";
        title.textContent = task.title;
        right.append(title);
        li.append(right);

        // task date
        // left options
        const taskDateBTN = document.createElement("button");
        taskDateBTN.type = "button";
        taskDateBTN.className = "w-8 h-8 relative task-date-btn";
        const taskDateBTNIcon = document.createElement("img");
        taskDateBTNIcon.className = "w-fit h-fit";
        taskDateBTNIcon.src =
          "/task-management/svg/date-search-svgrepo-com.svg";
        taskDateBTN.append(taskDateBTNIcon);

        // date box
        const dateBox = document.createElement("div");
        dateBox.className =
          "absolute left-10 -top-3 border border-white sm:border-none w-32 h-12 rounded-md hidden flex-col items-center justify-around date-box bg-slate-900 p-1 animate__fadeIn animate__animated sm:-left-36";
        for (let i = 0; i < 2; i++) {
          const date = document.createElement("span");
          date.className = "text-white text-[12px]";
          if (i === 0) {
            date.textContent = `شروع:  ${task.createdDate}`;
          } else {
            if (!task.completedDate) {
              date.className = "w-2 h-2 rounded-full bg-white animate-ping";
            } else {
              date.textContent = `پایان:  ${task.completedDate}`;
            }
          }
          dateBox.append(date);
        }
        taskDateBTN.append(dateBox);
        console.log(taskDateBTN);
        li.append(taskDateBTN);
        ul.append(li);
      });
    }
  });
  groupContainer?.append(ul);
};

export { renderTaskList };
export default groupManager;
