const renderGroupBox = () => {
  const groupBox = document.createElement("div");
  groupBox.id = "groupBox";
  groupBox.className =
    "w-[90%] h-48 flex flex-col relative items-center justify-center  sm:h-64 border-[4px] p-4 rounded-xl border-slate-900 overflow-hidden sm:w-64 duration-300";
  const groupBoxToggler = document.createElement("button");
  groupBoxToggler.id = "groupBoxToggler";
  groupBoxToggler.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/files-svgrepo-com.svg";
  groupBoxToggler.className =
    "duration-500 w-28 cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]";
  groupBoxToggler.append(icon);
  groupBox.append(groupBoxToggler)
  return groupBox
};

export default renderGroupBox;
