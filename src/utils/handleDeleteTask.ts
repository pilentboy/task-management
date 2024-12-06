import { renderTaskList } from "../components/groupManager";

const handleDeleteTask = (groupTitle: string, id: string) => {
  const groupData = localStorage.getItem("groups");
  const groupDataObj = groupData ? JSON.parse(groupData) : null;

  groupDataObj.forEach((group: any, index: number) => {
    if (Object.keys(group)[0] === groupTitle) {
      const updatedTask = group[groupTitle].filter(
        (task: any) => task.id !== id
      );
      groupDataObj[index][groupTitle] = updatedTask;
    }
  });
  localStorage.setItem("groups", JSON.stringify(groupDataObj));
  document.querySelector("#taskList")?.remove();
  renderTaskList(groupTitle);
};

export default handleDeleteTask;
