const container = document.querySelector<HTMLDivElement>(".container");

// render stars
const renderStars = (): void => {
  if (document.querySelector("#starsContainer")) {
    let currentDiv = document.querySelector("#starsContainer");
    currentDiv?.remove();
  }

  const starsContainer = document.createElement("div");
  starsContainer.setAttribute("id", "starsContainer");
  starsContainer.classList.add(
    "w-screen",
    "h-screen",
    "top-0",
    "left-0",
    "fixed",
    "z-[-1]",
    "px-10"
  );
  const starsCount = 10;
  for (let i = 0; i <= starsCount; i++) {
    const star = document.createElement("span");
    star.classList.add("star", "absolute");
    // i % 2 === 0 ? star.classList.add("animate-ping") : null;
    const x: number = Math.floor(Math.random() * window.innerWidth + 50);
    const y: number = Math.floor(Math.random() * window.innerHeight + 50);
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    starsContainer.append(star);
  }
  container?.append(starsContainer);
};

export default renderStars;
