import handleChangeTaskStatus from "../utils/handleTaskStatus";
import handleDeleteTask from "../utils/handleDeleteTask";
import renderGroupSelect from "./groupSelect";
import renderTasksDisplayOrder from "./tasksDisplayOrderSelect";
import renderStatusDisplaySelect from "./taskPresentationStatusSelect";

const taskManagerContainer = () => {
  const container = document.createElement("div");
  container.id = "taskManagerContainer";
  container.className =
    "w-[330px] sm:w-[400px] h-[500px] duration-500 absolute bottom-0 left-[50%] translate-y-[100%] translate-x-[-50%]  sm:relative sm:left-0 sm:translate-y-0 sm:translate-x-0  border-2 border-slate-800 rounded-lg flex flex-col-reverse  add-task-bg animate__fadeIn animate__fast	animate__animated ";

  container.append(renderTaskOptions());
  return container;
};

const renderTaskOptions = () => {
  const taskOptionsContainer = document.createElement("div");
  taskOptionsContainer.id = "taskOptionsContainer";
  taskOptionsContainer.className =
    "w-full border-t border-slate-800 h-18 flex items-center gap-2 px-2 py-1";

  taskOptionsContainer.append(
    renderGroupSelect("w-[100px] h-1/2", "taskRenderedGroup", (e: any) => {
      document.querySelector("#taskList")?.remove();
      renderTaskList(e.target.value);
    })
  );

  taskOptionsContainer.append(
    renderTasksDisplayOrder(() => {
      const groupFilter = localStorage.getItem("group_filter");
      document.querySelector("#taskList")?.remove();
      renderTaskList(groupFilter ? groupFilter : "وظایفم");
    })
  );

  taskOptionsContainer.append(
    renderStatusDisplaySelect(() => {
      const groupFilter = localStorage.getItem("group_filter");
      document.querySelector("#taskList")?.remove();
      renderTaskList(groupFilter ? groupFilter : "وظایفم");
    })
  );

  return taskOptionsContainer;
};

const renderTaskList = (groupTitle: string) => {
  const taskFilter = renderTasksDisplayOrder(null);
  const taskStatusPresentation = localStorage.getItem(
    "task_status_presentation_filter"
  );
  console.log(taskStatusPresentation);

  const groupContainer = document.querySelector("#taskManagerContainer");
  const ul = document.createElement("ul");
  ul.id = "taskList";
  ul.className = "flex flex-col gap-2 mt-2 p-2  h-full overflow-y-auto";
  const groupData = localStorage.getItem("groups");

  const groupDataObj = groupData ? JSON.parse(groupData) : null;

  groupDataObj.forEach((list: any) => {
    if (Object.keys(list)[0] === groupTitle) {
      const selectedList =
        taskFilter.value === "قدیم"
          ? list[groupTitle]
          : list[groupTitle].reverse();

      const filteredTaskList = selectedList.filter((task: any) => {
        if (taskStatusPresentation === "انجام شده" && task.status === true) {
          return task;
        } else if (taskStatusPresentation === "انجام نشده" && !task.status) {
          return task;
        } else if (taskStatusPresentation === "همه") {
          return task;
        }
      });

      filteredTaskList.forEach((task: any, index: number) => {
        const li = document.createElement("li");
        li.className = `flex items-center justify-between w-full  rounded-md p-1 ${
          index % 2 === 0 ? "bg-gray-900" : "bg-transparent"
        }`;
        // task status
        const right = document.createElement("div");
        right.className = "flex items-center gap-3";

        // task setting btn
        const taskSettingBTN = document.createElement("button");
        taskSettingBTN.type = "button";
        taskSettingBTN.className = "relative overflow-visible task-setting";
        const icon = document.createElement("img");
        icon.src = "/task-management/svg/dot-menu-more-svgrepo-com.svg";
        icon.className = "w-4";
        taskSettingBTN.append(icon);

        const taskSettingBox = document.createElement("div");
        taskSettingBox.className =
          "w-10 h-10 -top-2 -left-10 rounded-md hidden items-center justify-center bg-black sm:bg-gray-900 absolute  sm:-top-2 sm:-left-10 animate tast-setting-box z-10 animate__jackInTheBox animate__animated";
        const deleteBTN = document.createElement("img");
        deleteBTN.className = "w-5";
        deleteBTN.src = "/task-management/svg/garbage-trash-svgrepo-com.svg";
        deleteBTN.addEventListener("click", () => {
          li.classList.add("animate__flipOutX");
          setTimeout(() => handleDeleteTask(groupTitle, task.id), 600);
        });
        taskSettingBox.append(deleteBTN);

        taskSettingBTN.append(taskSettingBox);

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
        taskDateBTN.className = "w-8 h-8  relative task-date-btn";
        const taskDateBTNIcon = document.createElement("img");
        taskDateBTNIcon.className = "w-fit h-fit";
        taskDateBTNIcon.src =
          "/task-management/svg/date-search-svgrepo-com.svg";
        taskDateBTN.append(taskDateBTNIcon);

        // date box
        const dateBox = document.createElement("div");
        dateBox.className =
          "absolute -top-3 left-0 hidden border border-white sm:border-none w-32 h-12 rounded-md  flex-col items-center  justify-around date-box bg-slate-900 p-1 animate__fadeIn animate__animated sm:-top-2 sm:left-12 ";
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
        li.append(taskDateBTN);
        ul.append(li);
      });
    }
  });
  groupContainer?.append(ul);
};

export { renderTaskList };
export default taskManagerContainer;
