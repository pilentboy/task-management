import { v4 as uniqueID } from "uuid";

interface taskInfo {
  id: string;
  title: string;
  status: boolean;
  createdDate: string;
  completedDate: string | boolean;
}

// handle add tasks to localstorage
const handleAddTask = (taskTitle: string, listName: any) => {
  const date = new Date();
  const currentDate = date.toLocaleString("fa-IR", { dateStyle: "medium" });

  const taskList = localStorage.getItem("groups");
  if (taskList) {
    const updatedTaskList = JSON.parse(taskList);
    updatedTaskList.forEach((list: any) => {
      if (Object.keys(list)[0] === listName) {
        const taskObj: taskInfo = {
          id: uniqueID(),
          title: "",
          status: false,
          createdDate: currentDate,
          completedDate: false,
        };
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
