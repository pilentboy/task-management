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
  console.log("xx");
  button.addEventListener("click", action);
  return button;
};

// submit btn
const renderSubmitBTN = (
  btnID: string,
  title: string | null = "افزودن",
  hoverStyle: boolean | null = true
) => {
  const submitTask = document.createElement("button");
  submitTask.textContent = title;
  submitTask.className = `self-center w-20 h-9  py-1 text-white outline-none border border-white rounded-md duration-150 relative overflow-hidden ${
    hoverStyle ? "animation-btn" : null
  }`;
  submitTask.setAttribute("id", btnID);

  return submitTask;
};

export { renderCloseBTN, renderButtonContianer, renderSubmitBTN };
