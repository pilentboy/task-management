const settings = () => {
  const settingsContainer = document.createElement("div");
  settingsContainer.className =
    "rounded-lg w-[90%] sm:w-[600px] h-fit p-4 bg-black border space-y-2  border-slate-800 animate__fadeIn animate__animated";

  settingsContainer.innerHTML = `
  <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border">
  <div class="collapse-title text-xl font-medium"> 
 تنظیم برنامه آغازین
  </div>
  <div class="collapse-content">
  <div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">خانه</span>
    <input type="radio" name="startup" class="radio checked:bg-blue-600" data-startup="خانه" />
  </label>
</div>
  <div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">فرم افزودن هدف  </span>
    <input type="radio" name="startup" class="radio checked:bg-blue-600" data-startup="فرم افزودن هدف"/>
  </label>
</div>
<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">مدیریت اهداف</span>
    <input type="radio" name="startup" class="radio checked:bg-blue-600" data-startup="مدیریت اهداف" />
  </label>
</div>

  </div>
</div>
  
  <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border">
  <div class="collapse-title text-xl font-medium">داستان ستاره ها چیه؟</div>
  <div class="collapse-content label-text ">
    <p>بعد از تکمیل هر کدوم از اهدافی که واسه خودت تعیین میکنی، یک ستاره به دنیا اضافه میشه!</p>
  </div>
</div>`;
  return settingsContainer;
};
export default settings;
