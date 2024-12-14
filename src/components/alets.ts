const erroAlert = (title: string) => {
  const errorAlert = document.createElement("div");
  errorAlert.className =
    "alert alert-error animate__fadeIn z-[1000] animate__animated fixed top-8 left-1/2 translate-x-[-50%] w-[280px] h-10 flex items-center justify-around text-center py-2";
  errorAlert.innerHTML = `
   <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
    <span class='text-sm block font-medium'>${title}</span>
  `;

  document.querySelector(".container")?.append(errorAlert);
  setTimeout(() => {
    errorAlert.classList.add("animate__fadeOut");
  }, 2500);
};

const successAlert = (title: string) => {
  const errorAlert = document.createElement("div");
  errorAlert.className =
    "alert alert-success animate__fadeIn z-[1000] animate__animated fixed top-8 left-1/2 translate-x-[-50%] w-[200px] h-10 flex items-center justify-around text-center py-2";
  errorAlert.innerHTML = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
    <span class='text-sm block font-medium'>${title}</span>
  `;

  document.querySelector(".container")?.append(errorAlert);
  setTimeout(() => {
    errorAlert.classList.add("animate__fadeOut");
  }, 2500);
};

export { erroAlert, successAlert };
