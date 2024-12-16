import { successAlert } from "../components/alets";

const STARTUP_SECTION_KEY = "startup_section";

/**
 * Handles the startup logic based on the value stored in localStorage.
 */
const handleStartup = (): void => {
  const startupSection = localStorage.getItem(STARTUP_SECTION_KEY);

  if (!startupSection) return;

  // Perform actions based on the startup section value
  const togglerSelectorMap: Record<string, string> = {
    "فرم افزودن هدف": "#taskBoxToggler",
    "مدیریت اهداف": "#groupBoxToggler",
  };

  const togglerSelector = togglerSelectorMap[startupSection];
  if (togglerSelector) {
    const togglerButton = document.querySelector(
      togglerSelector
    ) as HTMLButtonElement;
    togglerButton?.click();
  }
};

/**
 * Handles the setup and behavior of startup options radio buttons.
 */
const handleStartupOptions = (): void => {
  const startupRadios = document.querySelectorAll<HTMLInputElement>(
    'input[name="startup"]'
  );

  const startupSection = localStorage.getItem(STARTUP_SECTION_KEY);

  // Pre-select the radio button based on the saved startup section
  startupRadios.forEach((radio) => {
    if (startupSection === radio.dataset.startup) {
      radio.checked = true;
    }

    // Add a change event listener to update localStorage on selection
    radio.addEventListener("change", (event: Event) => {
      const selectedValue = (event.target as HTMLInputElement).dataset.startup;
      if (selectedValue) {
        localStorage.setItem(STARTUP_SECTION_KEY, selectedValue);
        successAlert("با موفقیت تنظیم شد!");
      }
    });
  });
};

export { handleStartupOptions };
export default handleStartup;
