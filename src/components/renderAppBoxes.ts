import renderGroupBox from "./groupBox";
import renderProfileBox from "./profileBox";
import renderAddTaskBox from "./taskBox";
const container = document.querySelector<HTMLDivElement>(".container");

const renderAppBoxes = () => {
  container?.append(renderGroupBox());
  container?.append(renderAddTaskBox());
  container?.append(renderProfileBox());
};

export default renderAppBoxes;
