import {
  renderButtonContianer,
  renderCloseBTN,
  renderSubmitBTN,
} from "./buttons";
import { erroAlert, successAlert } from "./alets";
import checkUserGroups from "../utils/checkUserGroups";
import modalContainer from "../modals/modalContainer";
import renderGroupSelect from "./groupSelect";
import FormInput from "../interfaces/formInput.interface";

const addNewGroups = () => {
  const taskBox = document.querySelector("#addTaskBox");
  const form = document.createElement("form");
  form.className = "z-[5]";
  form.id = "addNewList";
  const div = document.createElement("div");
  form.append(div);
  div.className =
    "absolute top-[30%] sm:top-0 left-0 flex flex-col gap-2 items-center justify-center modal-gr w-full h-3/4 sm:h-full animate__flipInX animate__fast animate__animated    sm:border-none";
  const title = document.createElement("h2");
  title.className = "mb-2 text-white ";
  title.textContent = "افزودن گروه جدید";
  div.append(title);
  const addListInput = document.createElement("input");
  addListInput.className = "input input-bordered w-full max-w-xs";
  addListInput.placeholder = "نام گروه جدید";
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
        div.classList.add("animate__flipOutX");
        setTimeout(() => {
          document.querySelector("#modalContainer")?.remove();
          form.remove();
        }, 600);
      }),
      renderSubmitBTN("addNewList")
    )
  );
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newGroupName: string = addListInput.value.trim();

    const error: FormInput = {
      minLength: newGroupName.length > 0,
      maxLengh: newGroupName.length < 30,
    };

    if (error.minLength && error.maxLengh) {
      if (checkUserGroups(newGroupName)) {
        const taskList = localStorage.getItem("groups");
        const updatedTaskList = taskList ? JSON.parse(taskList) : null;
        updatedTaskList.push({ [newGroupName]: [] });
        localStorage.setItem("groups", JSON.stringify(updatedTaskList));
        addListInput.value = "";
        addListInput.classList.remove("border-red-500", "border-2");
        successAlert("با موفقیت افزوده شد!");

        document
          .querySelector("#tasksListSelect")
          ?.replaceWith(
            renderGroupSelect("w-1/2", "tasksListSelect", null, false)
          );
      } else {
        erroAlert("گروهی با چنین نامی وجود دارد!");
        addListInput.classList.add("border-red-500", "border-2");
      }
    } else {
      addListInput.classList.add("border-red-500", "border-2");
      erroAlert(
        !error.minLength
          ? "نام یک گروه نمی تواند خالی باشد!"
          : "تعداد کلمات نام یک گروه نمی تواند بیش از 30 باشد!"
      );
    }
  });
  if (window.innerWidth < 640) {
    document.querySelector("#modalContainer")?.remove();
    modalContainer(form, "خانه");
  } else {
    taskBox?.append(form);
  }
};

export default addNewGroups;
