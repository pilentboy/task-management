const handleUIDisplay = () => {
  const uiperformanceRadios = document.querySelectorAll(
    'input[name="uiperformance"]'
  );

  uiperformanceRadios.forEach((radio) => {
    radio.addEventListener("click", (e: any) => {
      const selectedValue = e.target.previousElementSibling.textContent.trim();
      localStorage.setItem('ui_performance', selectedValue);
    });
  });
};

export default handleUIDisplay;
