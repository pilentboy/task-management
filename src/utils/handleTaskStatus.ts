import renderStars from "../components/stars";
import { renderTaskList } from "../components/taskManager";

const handleChangeTaskStatus = (id: string, groupTitle: string) => {
  const groupData = localStorage.getItem("groups");
  const groupDataObj = groupData ? JSON.parse(groupData) : null;
  
  groupDataObj.forEach((group: any) => {
    if (Object.keys(group)[0] === groupTitle) {
      group[groupTitle].forEach((task: any) => {
        if (task.id === id) {
          if (task.status) {
            task.status = false;
            task.completedDate = false;
          } else {
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

  localStorage.setItem("groups", JSON.stringify(groupDataObj));
  document.querySelector("#taskList")?.remove();
  renderTaskList(groupTitle);
  renderStars()
};

export default handleChangeTaskStatus;
