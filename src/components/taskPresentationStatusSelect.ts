const renderTaskPresentationStatusSelect = (
  acation: CallableFunction | null
) => {
  const taskPresentationStatusSelect = document.createElement("select");
  taskPresentationStatusSelect.name = "taskPresentationStatus";
  taskPresentationStatusSelect.id = "taskPresentationStatus";
  taskPresentationStatusSelect.className = `select select-bordered max-w-xs`;

  taskPresentationStatusSelect.addEventListener("change", (e: any) => {
    localStorage.setItem("task_status_presentation_filter", e.target.value);
    if (acation) acation();
  });

  const taskStatusOptions = ["همه", "انجام شده", "انجام نشده"];
  const selectedStatusOption = localStorage.getItem(
    "task_status_presentation_filter"
  );

  taskStatusOptions.forEach((statusOption: string) => {
    const option = document.createElement("option");
    option.value = statusOption;
    option.textContent = statusOption;
    if (statusOption === selectedStatusOption) option.selected = true;
    taskPresentationStatusSelect.append(option);
  });

  return taskPresentationStatusSelect;
};

export default renderTaskPresentationStatusSelect;
