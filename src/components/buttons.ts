// button container in forms
const renderButtonContianer = (firstBTN: any, secondBTN: any) => {
  const btnDiv = document.createElement("div");
  btnDiv.className = "w-full flex items-center justify-center gap-10 mt-4";
  btnDiv.append(firstBTN);
  btnDiv.append(secondBTN);
  return btnDiv;
};

// close btn
const renderCloseBTN = (action: any) => {
  const button = document.createElement("button");
  button.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/close-square-svgrepo-com.svg";
  icon.className = "w-10 h-10";
  button.append(icon);
  button.addEventListener("click", action);
  return button;
};

// submit btn
const renderSubmitBTN = (btnID: string) => {
  const submitTask = document.createElement("button");
  submitTask.textContent = "افزودن";
  submitTask.className =
    "self-center px-6 py-2 animation-btn text-white outline-none border border-slate-900 rounded-md duration-150 relative overflow-hidden ";
  submitTask.setAttribute("id", btnID);

  return submitTask;
};

export { renderCloseBTN, renderButtonContianer, renderSubmitBTN };
