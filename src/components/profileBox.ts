import modalContainer from "../modals/modalContainer";
import profile from "./profile";

const renderProfileBox = () => {
  const profileBox = document.createElement("div");
  profileBox.id = "profileBox";
  profileBox.className =
    "w-[75px] h-20 z-[800] flex flex-col relative items-center justify-center  sm:h-48 border-2 p-4 rounded-xl border-slate-900 overflow-hidden sm:w-48 duration-300 hover:scale-105 cursor-pointer";
  const profileBoxToggler = document.createElement("button");
  profileBoxToggler.id = "groupBoxToggler";
  profileBoxToggler.type = "button";
  const icon = document.createElement("img");
  icon.src = "/task-management/svg/setting-5-svgrepo-com.svg";
  profileBoxToggler.className =
    "duration-500 w-fit  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center";
  profileBoxToggler.append(icon);
  profileBox.append(profileBoxToggler);
  profileBox.addEventListener("click", () => {
    modalContainer(profile());
  });
  return profileBox;
};
export default renderProfileBox;
