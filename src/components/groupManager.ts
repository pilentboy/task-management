const groupManager = () => {
  const container = document.createElement("div");
  container.id = "groupManager";
  container.className =
    "w-[400px] h-[450px] border-2 border-slate-800 rounded-lg flex flex-col p-2 add-task-bg";

  //   planets
  const planetsContainer = document.createElement("div");
  planetsContainer.className =
    "w-full border-b border-white h-12 flex items-center";
  container.append(planetsContainer);
  planetsContainer.append(createPlanets());
  return container;
};

const createPlanets = () => {
  const groupData = localStorage.getItem("groups");
  const groupDataObj = groupData ? JSON.parse(groupData) : null;
  const groupContainer = document.createElement("ul");
  groupContainer.className =
    "w-full flex items-center gap-4 overflow-hidden px-2";
  groupDataObj.forEach((group: any) => {
    const groupTitle = Object.keys(group)[0];
    const li = document.createElement("li");
    li.id = groupTitle;
    li.className =
      "text-white text-sm hover:scale-105 duration-150 cursor-pointer";
    li.textContent = groupTitle;
    li.addEventListener("click", (e: any) => {});
    groupContainer.append(li);
  });
  return groupContainer;
};

export default groupManager;
