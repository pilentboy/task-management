import modalContainer from "../modals/modalContainer";

const renderGroupBox = () => {
  const groupBox = document.createElement("div");
  groupBox.id = "groupBox";
  groupBox.className =
    "w-[70%] h-36 flex flex-col relative items-center justify-center  sm:h-48 border-[4px] p-4 rounded-xl border-slate-900 overflow-hidden sm:w-48 duration-300 hover:scale-110 cursor-pointer";
  const groupBoxToggler = document.createElement("button");
  groupBoxToggler.id = "groupBoxToggler";
  groupBoxToggler.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/files-svgrepo-com.svg";
  groupBoxToggler.className =
    "duration-500 w-28 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center";
  groupBoxToggler.append(icon);
  groupBox.append(groupBoxToggler);

  groupBox.addEventListener("click", () => {
    modalContainer();
  });
  return groupBox;
};

export default renderGroupBox;
