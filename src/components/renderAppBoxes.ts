import renderGroupBox from "./groupBox";
import renderTaskBox from "./taskBox";
const container = document.querySelector<HTMLDivElement>(".container");

const renderAppBoxes = () => {
  container?.append(renderGroupBox());
  container?.append(renderTaskBox());
  container?.append(renderGroupBox());
};

export default renderAppBoxes;
