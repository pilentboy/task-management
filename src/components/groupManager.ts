const groupManager = () => {
  const container = document.createElement("div");
  container.id = "groupManager";
  container.className =
    "w-[400px] h-[450px] border-2 border-slate-800 rounded-lg flex flex-col p-2 add-task-bg";

  //  group list
  const groupListContainer = document.createElement("div");
  groupListContainer.className =
    "w-full border-b border-white h-12 flex items-center";
  container.append(groupListContainer);
  groupListContainer.append(renderGroups());
  return container;
};

const renderGroups = () => {
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
      "text-white text-sm hover:scale-105 duration-150 cursor-pointer group-title";
    li.textContent = groupTitle;
    li.addEventListener("click", (e: any) => {
      document.querySelector("#taskList")?.remove();
      renderTaskList(e.srcElement.id);
    });
    groupContainer.append(li);
    
  });
  return groupContainer;
};

const renderTaskList = (groupTitle: string) => {
  const groupContainer = document.querySelector("#groupManager");

  const ul = document.createElement("ul");
  ul.id = "taskList";
  ul.className =
    "flex flex-col gap-4 mt-2 p-2 bg-slate-900 h-full overflow-y-auto";
  const groupData = localStorage.getItem("groups");
  const groupDataObj = groupData ? JSON.parse(groupData) : null;

  groupDataObj.forEach((list: any) => {
    if (Object.keys(list)[0] === groupTitle) {
      const selectedList = list[groupTitle];
      console.log(selectedList);
      selectedList.forEach((task: any) => {
        const li = document.createElement("div");
        li.className = "flex items-center justify-between w-full";
        // task status
        const right = document.createElement("div");
        right.className = "flex items-center gap-3";
        const taskStatusBTN = document.createElement("button");
        taskStatusBTN.type = "button";
        taskStatusBTN.className = `border rounded-full w-6 h-6 ${
          task.status ? "bg-green-600" : "bg-gray-200"
        }`;
        // ///// handle change task status
        taskStatusBTN.addEventListener("click",()=>{

        })
        right.append(taskStatusBTN);
        const title = document.createElement("li");
        title.className = "text-white text-sm";
        title.textContent = task.title;
        right.append(title);
        li.append(right);
        // task date 
        const date=document.createElement("span")
        date.className='text-gray-300 text-[12px]'
        date.textContent='1403/10/25'
        li.append(date)
        ul.append(li);
      });
    }
  });
  groupContainer?.append(ul);
};
export {renderTaskList}
export default groupManager;
