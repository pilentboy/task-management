const renderGroupSelect = () => {
  const tasksListSelect = document.createElement("select");
  tasksListSelect.name = "tasksListSelect";
  tasksListSelect.id = "tasksListSelect";
  tasksListSelect.className = "select select-bordered w-1/2 max-w-xs";

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
      option.className = "";
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
  return tasksListSelect
};

export default renderGroupSelect;
