const settings = () => {
  const settingsContainer = document.createElement("div");
  settingsContainer.className =
    "rounded-lg w-[90%] sm:w-[600px] h-fit p-4 bg-black border space-y-2  border-slate-800";

  settingsContainer.innerHTML = `
  <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border">
  <div class="collapse-title text-xl font-medium"> 
  تغییر رابط کاربری
  </div>
  <div class="collapse-content">
  <div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">ساده</span>
    <input type="radio" name="uipreference" class="radio checked:bg-blue-600" data-theme='ساده'  />
  </label>
</div>
<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">حلقه</span>
    <input type="radio" name="uipreference" class="radio checked:bg-blue-600" data-theme='حلقه' />
  </label>
</div>
  </div>
</div>

  
  <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border">
  <div class="collapse-title text-xl font-medium">داستان ستاره ها چیه؟</div>
  <div class="collapse-content">
    <p>بعد از تکمیل هر کدوم از اهدافی که واسه خودت تعیین میکنی، یک ستاره به دنیا اضافه میشه!</p>
  </div>
</div>`;
  return settingsContainer;
};
export default settings;
