import { v4 as uniqueID } from "uuid";

interface TaskInfo {
  id: string;
  title: string;
  status: boolean;
  createdDate: string;
  completedDate: string | boolean;
}

// handle add tasks to localstorage
const handleAddTask = (taskTitle: string, listName: string): void => {
  const date = new Date();
  // Get the current date in Persian calendar format
  const currentDate = date.toLocaleString("fa-IR", { dateStyle: "medium" });

  // Retrieve the task groups from localStorage
  const taskList = localStorage.getItem("groups");
  const trimmedTaskTitle = taskTitle.trim();

  if (taskList) {
    // Parse the stored task groups
    const updatedTaskList = JSON.parse(taskList);

    // Check if the specified list exists and update it
    const listFound = updatedTaskList.some((list: any) => {
      if (Object.keys(list)[0] === listName) {
        const taskObj: TaskInfo = {
          id: uniqueID(),
          title: trimmedTaskTitle,
          status: false,
          createdDate: currentDate,
          completedDate: false,
        };

        // Add the new task to the existing list
        list[listName].push(taskObj);
        return true;
      }
      return false;
    });

    if (listFound) {
      localStorage.setItem("groups", JSON.stringify(updatedTaskList));
    } else {
      localStorage.setItem(
        "groups",
        JSON.stringify([
          {
            اهدافم: [
              {
                id: uniqueID(),
                title: taskTitle.trim(),
                status: false,
                createdDate: date,
                completedDate: false,
              },
            ],
          },
        ])
      );
    }
  }
};
export default handleAddTask;
