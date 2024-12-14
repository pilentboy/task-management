const renderGroupSelect = (
  size: string,
  id: string,
  action: CallableFunction | null,
  displayLastSelected: boolean
) => {
  const tasksListSelect = document.createElement("select");
  tasksListSelect.name = id;
  tasksListSelect.id = id;
  tasksListSelect.className = `select select-bordered max-w-xs ${size}`;

  if (action) {
    tasksListSelect.addEventListener("change", (e) => {
      action(e);
    });
  }

  tasksListSelect.addEventListener("change", (e: any) => {
    localStorage.setItem("group_filter", e.target.value);
  });

  const taskListNames = localStorage.getItem("groups") || null;
  const groupFilter = localStorage.getItem("group_filter");

  if (taskListNames) {
    const taskList = JSON.parse(taskListNames);
    let taskNames: Array<string> = [];
    taskList.forEach((listName: string) => {
      taskNames.push(Object.keys(listName)[0]);
    });
    taskNames.forEach((groupTitle) => {
      const option = document.createElement("option");
      if (displayLastSelected && groupTitle === groupFilter) option.selected = true;
      option.value = groupTitle;
      option.textContent = groupTitle;
      tasksListSelect.append(option);
    });
  } else {
    // create default group if theere is no group in local storage
    const option = document.createElement("option");
    option.value = "وظایفم";
    option.textContent = "وظایفم";
    option.className =
      "border-slate-400 bg-transparent  hover:border-slate-800 focus:border-slate-800 duration-150 ";
    tasksListSelect.append(option);
  }
  return tasksListSelect;
};

export default renderGroupSelect;
