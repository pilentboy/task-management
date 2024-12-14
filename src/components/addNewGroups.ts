import {
  renderButtonContianer,
  renderCloseBTN,
  renderSubmitBTN,
} from "./buttons";
import {erroAlert} from "./alets";
import checkUserGroups from "../utils/checkUserGroups";
import modalContainer from "../modals/modalContainer";

const addNewGroups = () => {
  const taskBox = document.querySelector("#addTaskBox");
  const form = document.createElement("form");
  form.className = "z-[5]";
  form.id = "addNewList";
  const div = document.createElement("div");
  form.append(div);
  div.className =
    "absolute top-[10%] sm:top-0 left-0 flex flex-col gap-2 items-center justify-center modal-gr w-full h-3/4 sm:h-full animate__bounceInDown animate__fast animate__animated    sm:border-none";
  const title = document.createElement("h2");
  title.className = "mb-2 text-white ";
  title.textContent = "افزودن دسته جدید";
  div.append(title);
  const addListInput = document.createElement("input");
  addListInput.className = "input input-bordered w-full max-w-xs";
  addListInput.placeholder = "نام دسته جدید";
  addListInput.id = "addListInput";
  div.append(addListInput);

  window.addEventListener("resize", () => {
    if (!addListInput.focus && window.innerWidth < 640) {
      document.querySelector("#modalContainer")?.remove();
      form.remove();
    }
  });

  div.append(
    renderButtonContianer(
      renderCloseBTN(() => {
        document.querySelector("#modalContainer")?.remove();
        form.remove();
      }),
      renderSubmitBTN("addNewList")
    )
  );
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      addListInput.value.length > 0 &&
      addListInput.value.length < 50 &&
      checkUserGroups(addListInput.value.trim())
    ) {
      const taskList = localStorage.getItem("groups");
      const updatedTaskList = taskList ? JSON.parse(taskList) : null;
      updatedTaskList.push({ [addListInput?.value.trim()]: [] });
      localStorage.setItem("groups", JSON.stringify(updatedTaskList));
      addListInput.value = "";
    } else {
      addListInput.classList.add("border-red-500", "border-2");
      erroAlert("نام یک دسته نمی تواند خالی باشد!");
    }
  });
  if (window.innerWidth < 640) {
    document.querySelector("#modalContainer")?.remove();
    modalContainer(form);
  } else {
    taskBox?.append(form);
  }
};

export default addNewGroups;
