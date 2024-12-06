import renderGroupBox from "./groupBox";
import renderProfileBox from "./profileBox";
import renderTaskBox from "./taskBox";
const container = document.querySelector<HTMLDivElement>(".container");

const renderAppBoxes = () => {
  container?.append(renderGroupBox());
  container?.append(renderTaskBox());
  container?.append(renderProfileBox());
};

export default renderAppBoxes;
