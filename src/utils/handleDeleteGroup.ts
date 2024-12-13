import { renderTaskList } from "../components/taskManager";

const handleDeleteGroup = (name: string): void => {
  const groupData = localStorage.getItem("groups");

  const deletedGroup = localStorage.getItem("group_filter");

  if (groupData) {
    const groupDataObj = JSON.parse(groupData);
    if (deletedGroup) {
      const updatedGroup = groupDataObj.filter(
        (group: any) => Object.keys(group)[0] !== deletedGroup
      );
      
      const firstGroup=Object.keys(updatedGroup[0])[0]
      
      localStorage.setItem("group_filter", firstGroup);
      localStorage.setItem("groups", JSON.stringify(updatedGroup));
      document.querySelector("#filterBoxContainer")?.remove();
      document.querySelector("#taskList")?.remove();
      renderTaskList(firstGroup);
    }
  }

  console.log(`deleting ${name}`);
};

export default handleDeleteGroup;
