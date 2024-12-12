const container = document.querySelector<HTMLDivElement>(".container");

// render stars
const renderStars = (): void => {
  let stars = document.querySelector("#starsContainer");
  if (stars) stars.remove();

  const starsContainer = document.createElement("div");
  starsContainer.setAttribute("id", "starsContainer");
  starsContainer.classList.add(
    "w-screen",
    "h-screen",
    "top-0",
    "left-0",
    "fixed",
    "z-[500]",
    "px-10"
  );

  const tasks = localStorage.getItem("groups");
  const tasksObj = tasks ? JSON.parse(tasks) : null;
  let starsCount: number = 0;

  tasksObj.forEach((tasks: any) => {
    // check taskInfo type later------------
    const tasksInfo: any = Object.values(tasks)[0];
    tasksInfo.forEach((task: any) => {
      task.status ? starsCount++ : null;
    });
  });
  console.log(starsCount)
  for (let i = 0; i < starsCount; i++) {
    console.log("x")
    const star = document.createElement("span");
    star.classList.add("star", "absolute");
    i % 2 === 0 ? star.classList.add("animate-ping") : null;
    const x: number = Math.floor(Math.random() * window.innerWidth + 50);
    const y: number = Math.floor(Math.random() * window.innerHeight + 50);
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    starsContainer.append(star);
  }
  container?.append(starsContainer);
};

export default renderStars;
