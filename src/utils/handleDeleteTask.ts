import { renderTaskList } from "../components/taskManager";

/**
 * Deletes a task from a specific group in localStorage and updates the UI.
 *
 * @param groupTitle - The title of the group containing the task.
 * @param id - The unique ID of the task to delete.
 */

const handleDeleteTask = (groupTitle: string, id: string): void => {
  // Retrieve stored groups from localStorage
  const groupData = localStorage.getItem("groups");
  if (!groupData) return; // Exit if no groups are stored

  // Parse the group data
  const groupDataObj: Array<Record<string, any[]>> = JSON.parse(groupData);

  // Update the tasks for the specified group
  const updatedGroups = groupDataObj.map((group) => {
    const currentGroupName = Object.keys(group)[0];

    if (currentGroupName === groupTitle) {
      // Filter out the task with the specified ID
      const updatedTasks = group[groupTitle].filter((task) => task.id !== id);
      return { [groupTitle]: updatedTasks };
    }

    // Return the group unchanged if it doesn't match the specified title
    return group;
  });

  // Save the updated group data back to localStorage
  localStorage.setItem("groups", JSON.stringify(updatedGroups));

  // Refresh the task list UI
  document.querySelector("#taskList")?.remove();
  renderTaskList(groupTitle);
};

export default handleDeleteTask;
