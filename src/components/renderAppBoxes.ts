import handleStartup from "../utils/handleStartup";
import renderGroupBox from "./groupBox";
import renderSettingsBox from "./settingsBox";
import renderAddTaskBox from "./taskBox";
const container = document.querySelector<HTMLDivElement>(".container");

const renderAppBoxes = () => {
  container?.append(renderGroupBox());
  container?.append(renderAddTaskBox());
  container?.append(renderSettingsBox());
  handleStartup();
};

export default renderAppBoxes;
