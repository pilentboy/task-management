import {
  renderButtonContianer,
  renderCloseBTN,
  renderSubmitBTN,
} from "../components/buttons";
import checkUserGroups from "../utils/checkUserGroups";
import modalContainer from "./modalContainer";

const addNewGroups = () => {
  const taskBox = document.querySelector("#addTaskBox");
  const form = document.createElement("form");
  form.className = "z-[5]";
  form.id = "addNewList";
  const div = document.createElement("div");
  form.append(div);
  div.className =
    "absolute top-[10%] sm:top-0 left-0 flex flex-col gap-2 items-center justify-center modal-gr w-full h-3/4 sm:h-full animate__fadeIn animate__animated    sm:border-none";
  const title=document.createElement("h2")
  title.className='mb-5 text-white sm:hidden'
  title.textContent='ساخت لیست جدید'
  div.append(title)
  const addListInput = document.createElement("input");
  addListInput.className =
    "w-3/4 p-2 outline-none placeholder:text-gray-600 bg-white text-black border-slate-400 focus:border-slate-800 duration-150 border rounded-md placeholder:text-sm";
  addListInput.placeholder = "نام دسته ی جدید...";
  addListInput.id = "addListInput";
  div.append(addListInput);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 640) {
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
      addListInput.classList.remove("border-slate-400");
      addListInput.classList.add("border-red-500", "border-2");
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
