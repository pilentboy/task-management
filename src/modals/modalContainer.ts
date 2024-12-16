const container = document.querySelector<HTMLDivElement>(".container");

const modalContainer = (content: any, title: string) => {
  document.querySelector("#modalContainer")?.remove();
  document.title = title;
  const modal = document.createElement("dialog");
  modal.id = "modalContainer";
  modal.className = `flex items-center bg-transparent justify-center w-screen h-dvh fixed top-0 left-0 backdrop-blur-sm	duration-150 z-[800]`;

  modal.append(content);
  modal.addEventListener("click", (e: any) => {
    e.target === modal ? modal.remove() : null;
    document.title = "خانه";
  });
  container?.append(modal);
};

export default modalContainer;
