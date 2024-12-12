const renderTasksDisplayOrder = (action: CallableFunction | null) => {
  const orderTaskListSelect = document.createElement("select");
  orderTaskListSelect.name = "taskFilter";
  orderTaskListSelect.id = "taskFilter";
  orderTaskListSelect.className = `select select-bordered w-[100px] h-1/2 max-w-xs`;


  orderTaskListSelect.addEventListener("change", (e: any) => {
    localStorage.setItem("order_filter", e.target.value);
    if (action) action();
  });

  const orderOptions = ["جدید", "قدیم"];
  const orderFilter = localStorage.getItem("order_filter");

  orderOptions.forEach((orderOption: string) => {
    const option = document.createElement("option");
    if (orderOption === orderFilter) {
      option.selected = true;
    }
    option.value = orderOption;
    option.textContent = orderOption;

    orderTaskListSelect.append(option);
  });

  return orderTaskListSelect;
};

export default renderTasksDisplayOrder;
