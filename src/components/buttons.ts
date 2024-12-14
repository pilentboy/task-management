import { sub } from "three/webgpu";

// button container in forms
const renderButtonContianer = (firstBTN: any, secondBTN: any) => {
  const btnDiv = document.createElement("div");
  btnDiv.className =
    "w-full flex flex-row-reverse items-center justify-center gap-10 mt-4";
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
  const submitBTN = document.createElement("button");
  submitBTN.className = "py-1 duration-150";
  submitBTN.setAttribute("id", btnID);
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/tick-square-svgrepo-com.svg";
  icon.className = "w-10 h-10";
  submitBTN.append(icon);
  return submitBTN;
};

export { renderCloseBTN, renderButtonContianer, renderSubmitBTN };
