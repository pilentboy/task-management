import { renderTaskList } from "../components/taskManager";

const handleDeleteGroup = (): void => {
  // Retrieve stored groups and the currently selected group
  const groupData = localStorage.getItem("groups");
  const deletedGroup = localStorage.getItem("group_filter");

  if (!groupData || !deletedGroup) return; // Exit if required data is missing

  if (groupData && deletedGroup) {
    const groupDataObj = JSON.parse(groupData);

    // Filter out the group to be deleted
    const updatedGroups = groupDataObj.filter(
      (group: Record<string, any>) => Object.keys(group)[0] !== deletedGroup
    );

    // set the first group as the new active filter
    const firstGroup = Object.keys(updatedGroups[0])[0];
    localStorage.setItem("group_filter", firstGroup);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));

    // Clean up the UI and re-render the task list for the first group
    document.querySelector("#filterBoxContainer")?.remove();
    document.querySelector("#taskList")?.remove();
    renderTaskList(firstGroup);
  }
};

export default handleDeleteGroup;
