// to avoid duplicate task groups
const checkUserGroups = (newTaskTitle: string) => {
    const taskList = localStorage.getItem("groups");
    const taskListJson = taskList ? JSON.parse(taskList) : null;
    let taskTitls: Array<string> = [];
    taskListJson.forEach((listTitle: any) => {
      taskTitls.push(Object.keys(listTitle)[0]);
    });
    const existListTitle: Array<string> = taskTitls.filter(
      (title) => title === newTaskTitle
    );
    if (existListTitle.length > 0) {
      return false;
    }
    return true;
  };


export default checkUserGroups