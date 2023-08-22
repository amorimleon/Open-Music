const button = document.querySelector(".mode");
const html = document.querySelector("html");
const iconTheme = document.querySelector(".icon-theme");
let darkMode = false;


const themeChange = () => {
  darkMode = !darkMode;
  html.classList.toggle("dark-mode");
  if (darkMode) {
    iconTheme.src = "src/img/light_mode_FILL0_wght400_GRAD0_opsz24.png";
  } else {
    iconTheme.src = "src/img/dark_mode_FILL0_wght400_GRAD0_opsz24.png";
  }
  localStorage.setItem("theme", JSON.stringify(darkMode));
};

button.addEventListener("click", themeChange);

export const themeAnalysis = () => {
  darkMode = JSON.parse(localStorage.getItem("theme"));

  if (darkMode) {
    html.classList.add("dark-mode");
  }
};
