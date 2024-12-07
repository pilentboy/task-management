import {
  renderButtonContianer,
  renderCloseBTN,
  renderSubmitBTN,
} from "../components/buttons";

const profile = () => {
  const container = document.createElement("div");
  container.className =
    "w-3/4 h-[250px] sm:w-[400px]  flex justify-center bg-black  border-b-[4px] border-t-[4px]  border-slate-900 modal-gr  animate__fadeIn animate__animated";

  const form = document.createElement("form");
  form.id = "updateProfile";
  const div = document.createElement("div");
  form.append(div);
  div.className =
    "flex flex-col gap-2 items-center justify-center w-full h-full";
  const changeUsernameInput = document.createElement("input");
  changeUsernameInput.id = "changeUsernameInput";
  changeUsernameInput.className =
    "w-full p-2 outline-none placeholder:text-gray-600 bg-white text-black border-slate-400 focus:border-slate-800 duration-150 border rounded-md placeholder:text-sm";
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
    }
  });
  container.append(form);
  return container;
};
export default profile;
