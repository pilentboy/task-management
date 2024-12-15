const handleUIDisplay = () => {
  const uiperformanceRadios = document.querySelectorAll(
    'input[name="uiperformance"]'
  );
  
  const uiperformance=localStorage.getItem("ui_performance")

  uiperformanceRadios.forEach((radio) => {
	if(uiperformance && uiperformance === radio.dataset.theme) radio.setAttribute('checked','checked')
	console.log(radio.dataset.theme)
    radio.addEventListener("change", (e: any) => {
      const selectedValue = e.target.dataset.theme;
      localStorage.setItem('ui_performance', selectedValue);
    });
  });
};

export default handleUIDisplay;
