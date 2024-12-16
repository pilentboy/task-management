import taskManagerModal from "../modals/taskManagerModal";
import handleDeleteGroup from "../utils/handleDeleteGroup";
import { successAlert } from "./alets";
import renderGroupSelect from "./groupSelect";
import renderStars from "./stars";
import { renderTaskList } from "./taskManager";

const deleteGroupBox = () => {
  const selectedData = localStorage.getItem("group_filter");

  const deleteGroupWrapper = document.createElement("div");
  deleteGroupWrapper.id = "deleteGroup";
  deleteGroupWrapper.className =
    "flex flex-col items-center justify-around w-full h-full";

  const title = document.createElement("span");
  title.className = "text-white text-sm";
  title.innerHTML = `
     آیا از
     <span class='text-red-600'>حذف</span> گروه <span class='text-sm bold border-b border-white'> ${
       selectedData ? selectedData : null
     }</span> مطمئن هستید؟
    `;
  deleteGroupWrapper.append(title);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex items-center w-full justify-center gap-8";

  const cancelBTN = document.createElement("button");
  cancelBTN.type = "button";
  cancelBTN.className = "rounded-md w-14 h-8 bg-gray-800 text-white";
  cancelBTN.textContent = "خیر";
  buttonContainer.append(cancelBTN);
  cancelBTN.addEventListener("click", () => {
    document.querySelector("#filterBoxContainer")?.remove();
  });

  const dlBTN = document.createElement("button");
  dlBTN.type = "button";
  dlBTN.className =
    "rounded-md w-14 h-8 bg-gray-800 text-white hover:text-red-600 duration-300	";
  dlBTN.textContent = "بله";
  buttonContainer.append(dlBTN);
  dlBTN.addEventListener("click", () => {
    const taskSelectGroup = document.querySelector("#taskSelectGroup");
    const taskOptionsContainer = document.querySelector(
      "#taskOptionsContainer"
    );
    handleDeleteGroup();
    renderStars();
    if (taskOptionsContainer)
      taskSelectGroup?.replaceWith(
        renderGroupSelect(
          "w-[90px]",
          "taskSelectGroup",
          (e: any) => {
            document.querySelector("#taskList")?.remove();
            renderTaskList(e.target.value);
          },
          true
        )
      );
    successAlert("با موفقیت حذف شد!");
  });
  deleteGroupWrapper.append(buttonContainer);

  taskManagerModal(deleteGroupWrapper, "w-4/5 h-[120px]");
};

export default deleteGroupBox;
