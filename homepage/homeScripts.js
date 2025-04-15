const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
function darkMode() {
  const clickedElement  = document.getElementById("toggler");
  const styleSheet = document.getElementById("styler");
  styleSheet.href = "homeDark.css";
  clickedElement.innerHTML = ("Light mode?");
  clickedElement.onclick = lightMode;
};
function lightMode () {
  const clickedElement  = document.getElementById("toggler");
  const styleSheet = document.getElementById("styler");
  styleSheet.href = "homeLight.css";
  clickedElement.innerHTML = ("Dark mode?");
  clickedElement.onclick = darkMode;
}