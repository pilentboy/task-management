const handleUIDisplay = () => {
  const uiperformanceRadios = document.querySelectorAll(
    'input[name="uipreference"]'
  );
  
  const uipreference=localStorage.getItem("ui_preference")

  uiperformanceRadios.forEach((radio) => {
	if(uipreference && uipreference === radio.dataset.theme) radio.setAttribute('checked','checked')
	console.log(radio.dataset.theme)
    radio.addEventListener("change", (e: any) => {
      const selectedValue = e.target.dataset.theme;
      localStorage.setItem('ui_preference', selectedValue);
    });
  });
};

export default handleUIDisplay;
