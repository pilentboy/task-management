const container = document.querySelector<HTMLDivElement>(".container");

const modalContainer = (content: any) => {
  const modal = document.createElement("div");
  modal.id = "modalContainer";
  modal.className = `flex items-center justify-center w-screen h-screen fixed top-0 left-0 backdrop-blur-sm	duration-150 z-[100]`;

  modal.append(content);
  modal.addEventListener("click", (e: any) => {
    e.target === modal ? modal.remove() : null;
  });
  container?.append(modal);
};

export default modalContainer;
