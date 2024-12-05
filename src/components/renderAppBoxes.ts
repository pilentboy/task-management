import renderGroupBox from "./groupBox";
import renderProfileBox from "./profileBox";
import renderTaskBox from "./taskBox";
const container = document.querySelector<HTMLDivElement>(".container");

const modalDisplay = localStorage.getItem("modalDisplay") || null;

const renderAppBoxes = () => {
  container?.append(renderGroupBox(modalDisplay));
  container?.append(renderTaskBox());
  container?.append(renderProfileBox(modalDisplay));
};

export default renderAppBoxes;
