const taskManagerModal = (content: any, contentboxSize: string | null) => {

  const filterBoxContainer = document.createElement("div");
  filterBoxContainer.id = "filterBoxContainer";
  filterBoxContainer.className =
    "w-full h-full backdrop-blur-sm absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center z-[999]";
    
  filterBoxContainer.addEventListener("click", (e: any) => {
    e.target === filterBoxContainer ? filterBoxContainer.remove() : null;
  });

  const filterBoxContent = document.createElement("div");
  filterBoxContent.className = `rounded-md bg-gray-900 flex items-center jusity-center p-2 ${
    !contentboxSize ? "w-4/5 h-[200px]" : contentboxSize
  }`;
  filterBoxContent.append(content);

  filterBoxContainer.append(filterBoxContent);

  document.querySelector("#taskManagerContainer")?.append(filterBoxContainer);
};

export default taskManagerModal;
