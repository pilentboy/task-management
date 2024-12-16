//  Checks if a new task title already exists in the saved task groups.
const checkUserGroups = (newTaskTitle: string): boolean => {
  // Retrieve the stored task groups from localStorage
  const taskList = localStorage.getItem("groups");

  // Parse the task groups or initialize as an empty array if null
  const taskListJson: Array<Record<string, any>> = taskList
    ? JSON.parse(taskList)
    : [];

  // Extract all group titles from the task list
  const taskTitles = taskListJson.map((listItem) => Object.keys(listItem)[0]);

  // Check if the new task title already exists in the list
  const titleExists = taskTitles.includes(newTaskTitle);

  // Return false if the title exists, otherwise true
  return !titleExists;
};

export default checkUserGroups;
