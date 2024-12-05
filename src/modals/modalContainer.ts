const container = document.querySelector<HTMLDivElement>(".container");

const modalContainer = () => {
  const modal = document.createElement("div");
  modal.id = "modalContainer";
  modal.className = `flex items-center justify-center w-screen h-screen fixed top-0 left-0 backdrop-blur-md	duration-150 z-1000`;
  const div = document.createElement("div");
  div.className = "w-1/4 h-1/4 bg-red-500 rounded-full";
  modal.append(div);
  modal.addEventListener("click", (e: any) => {
    e.target === modal ? modal.remove() : null
  });
  container?.append(modal);
};

export default modalContainer;
