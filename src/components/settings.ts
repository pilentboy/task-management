

const settings = () => {
  const settingsContainer = document.createElement("div");
  settingsContainer.className =
    "rounded-lg w-[600px] h-fit p-4 bg-black border-2  border-slate-800";

  settingsContainer.innerHTML = `<div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border">
  <div class="collapse-title text-xl font-medium">تغییر رابط کاربری</div>
  <div class="collapse-content">
  <div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">ساده</span>
    <input type="radio" name="uiperformance" class="radio checked:bg-blue-600" checked="checked" />
  </label>
</div>
<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">حلقه</span>
    <input type="radio" name="uiperformance" class="radio checked:bg-blue-600" />
  </label>
</div>
  </div>
</div>

`;

  return settingsContainer;
};
export default settings;
