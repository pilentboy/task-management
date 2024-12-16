import renderStars from "../components/stars";
import { renderTaskList } from "../components/taskManager";

/**
 * Handles the status change of a task.
 * When a task is clicked, it toggles its status between completed and not completed,
 * and updates the task's completion date if necessary.
 *
 * @param id - The ID of the task whose status is being toggled.
 * @param groupTitle - The title of the group to which the task belongs.
 */

const handleChangeTaskStatus = (id: string, groupTitle: string) => {
  // Retrieve the task groups stored in localStorage.
  const groupData = localStorage.getItem("groups");

  // If group data exists, parse it into an object.
  const groupDataObj = groupData ? JSON.parse(groupData) : null;

  // Iterate through each group to find the one matching the provided group title.
  groupDataObj.forEach((group: any) => {
    if (Object.keys(group)[0] === groupTitle) {
      // Iterate through the tasks in the found group to find the task with the matching ID.
      group[groupTitle].forEach((task: any) => {
        if (task.id === id) {
          // Toggle the task's status and update the completion date accordingly.
          if (task.status) {
            // If the task is already marked as completed, set it back to incomplete.
            task.status = false;
            task.completedDate = false;
          } else {
            // If the task is not completed, mark it as completed and set the completion date.
            const date = new Date();
            const currentDate = date.toLocaleString("fa-IR", {
              dateStyle: "medium",
            });
            task.status = true;
            task.completedDate = currentDate;
          }
        }
      });
    }
  });

  // Save the updated group data back to localStorage.
  localStorage.setItem("groups", JSON.stringify(groupDataObj));

  // Remove the current task list from the DOM to re-render it.
  document.querySelector("#taskList")?.remove();

  // Re-render the task list for the updated group.
  renderTaskList(groupTitle);

  // Re-render the stars component (if relevant) to update any visual indicators.
  renderStars();
};

export default handleChangeTaskStatus;
