import { v4 as uniqueID } from "uuid";

interface taskInfo {
  id: string;
  title: string;
  status: boolean;
}

// handle add tasks to localstorage
const handleAddTask = (taskTitle: string, listName: string) => {
  const taskList = localStorage.getItem("groups");
  if (taskList) {
    const updatedTaskList = JSON.parse(taskList);
    updatedTaskList.forEach((list: any) => {
      if (Object.keys(list)[0] === listName) {
        const taskObj: taskInfo = { id: uniqueID(), title: "", status: false };
        const selectedList = list[listName];
        taskObj.title = taskTitle.trim();
        selectedList.push(taskObj);
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
