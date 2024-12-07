import { renderTaskList } from "../components/groupManager";

const handleChangeTaskStatus = (id: string, groupTitle: string) => {
  const groupData = localStorage.getItem("groups");
  const groupDataObj = groupData ? JSON.parse(groupData) : null;
  groupDataObj.forEach((group: any) => {
    if (Object.keys(group)[0] === groupTitle) {
      group[groupTitle].forEach((task: any) => {
        if (task.id === id) {
          task.status ? (task.status = false) : (task.status = true);
        }
      });
    }
  });
  localStorage.setItem("groups", JSON.stringify(groupDataObj));
  document.querySelector("#taskList")?.remove();
  renderTaskList(groupTitle);
};

export default handleChangeTaskStatus;