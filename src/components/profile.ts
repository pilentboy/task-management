import {
  renderButtonContianer,
  renderCloseBTN,
  renderSubmitBTN,
} from "../components/buttons";

const profile = () => {
  const container = document.createElement("div");
  container.className =
    "w-3/4 h-[250px] sm:w-[400px]  flex justify-center bg-black  border-b border-t  border-slate-900 modal-gr";

  const form = document.createElement("form");
  form.id = "updateProfile";
  const div = document.createElement("div");
  form.append(div);
  div.className =
    "flex flex-col gap-2 items-center justify-center w-full h-full";
  const changeUsernameInput = document.createElement("input");
  changeUsernameInput.id = "changeUsernameInput";
  changeUsernameInput.className = "input input-bordered w-full max-w-xs";
  changeUsernameInput.placeholder = "تغییر نام کاربری";
  div.append(changeUsernameInput);

  div.append(
    renderButtonContianer(
      renderCloseBTN(() => {
        document.querySelector("#modalContainer")?.remove();
      }),
      renderSubmitBTN("updateProfile", "تایید", false)
    )
  );
  form.addEventListener("submit", (e: any) => {
    e.preventDefault();
    if (
      changeUsernameInput &&
      changeUsernameInput.value.length > 1 &&
      changeUsernameInput.value.length <= 30
    ) {
      localStorage.setItem("username", changeUsernameInput.value);
      location.reload();
    } else {
      changeUsernameInput.classList.add("border-red-500");
    }
  });
  container.append(form);
  return container;
};
export default profile;
