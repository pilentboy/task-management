import { successAlert } from "../components/alets";
import modalContainer from "../modals/modalContainer";

/**
 * Handles the data formatting process by showing a confirmation modal,
 * clearing localStorage, and refreshing the page on confirmation.
 */
const handleFormatData = (): void => {
  const deleteDataBTN = document.querySelector("#deleteDataBTN");

  // Attach event listener to the delete data button
  deleteDataBTN?.addEventListener("click", () => {
    // Create and style the confirmation alert modal
    const formatAlert = createConfirmationAlert();
    modalContainer(formatAlert, "خانه");

    // Attach event listener to the cancel button
    document
      .querySelector("#cancelFormatBTN")
      ?.addEventListener("click", closeModal);

    // Attach event listener to the confirm (format) button
    document.querySelector("#formatDataBTN")?.addEventListener("click", () => {
      clearData();
      closeModal();
      successAlert("اطلاعات با موفقیت حذف شدند!"); // Success message
      setTimeout(() => location.reload(), 1500); // Refresh the page after 1.5 seconds
    });
  });
};

/**
 * Creates the confirmation alert modal with necessary buttons and styles.
 * @returns The HTML element for the confirmation modal.
 */
const createConfirmationAlert = (): HTMLDivElement => {
  const formatAlert = document.createElement("div");
  formatAlert.className =
    "absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]";
  formatAlert.innerHTML = `
    <div role="alert" class="alert">
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
      <span>آیا از حذف اطلاعات مطمئن هستید؟</span>
      <div>
        <button id='cancelFormatBTN' class="btn btn-sm mx-4">خیر</button>
        <button id='formatDataBTN' class="btn btn-sm btn-error">بله</button>
      </div>
    </div>`;
  return formatAlert;
};

/**
 * Clears all localStorage data.
 */
const clearData = (): void => {
  localStorage.clear();
};

/**
 * Closes the modal by removing it from the DOM.
 */
const closeModal = (): void => {
  document.querySelector("#modalContainer")?.remove();
};

export default handleFormatData;
