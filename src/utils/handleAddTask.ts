// handle add tasks to localstorage
const handleAddTask = (taskTitle: string, listName: string) => {
  const taskList = localStorage.getItem("groups");
  if (taskList) {
    const updatedTaskList = JSON.parse(taskList);
    updatedTaskList.forEach((list: any) => {
      if (Object.keys(list)[0] === listName) {
        const selectedList = list[listName];
        selectedList.push(taskTitle.trim());
        list[listName] = selectedList;
        localStorage.setItem("groups", JSON.stringify(updatedTaskList));
      }
    });
  } else {
    localStorage.setItem(
      "groups",
      JSON.stringify([{ وظایفم: [taskTitle.trim()] }])
    );
  }
};
export default handleAddTask;
