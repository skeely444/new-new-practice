const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
function darkMode() {
  const clickedElement  = document.getElementById("toggler");
  const styleSheet = document.getElementById("styler");
  const backgroundImage = document.getElementById("background");
  const mainHeader = document.getElementById("mainHeader");
  const mainText = document.getElementById("mainText");
  styleSheet.href = "homeDark.css";
  clickedElement.innerHTML = ("Light mode?");
  backgroundImage.src = "https://i.postimg.cc/DZk7nHsT/images.jpg";
  mainHeader.style.color = "white";
  mainText.style.color = "white";
  clickedElement.onclick = lightMode;
};
function lightMode () {
  const clickedElement  = document.getElementById("toggler");
  const styleSheet = document.getElementById("styler");
  styleSheet.href = "homeLight.css";
  const backgroundImage = document.getElementById("background");
  const mainHeader = document.getElementById("mainHeader");
  const mainText = document.getElementById("mainText");
  clickedElement.innerHTML = ("Dark mode?");
  backgroundImage.src = "https://i.postimg.cc/fT2x2fvJ/f0203874-800px-wm.jpg";
  mainHeader.style.color = "black";
  mainText.style.color = "black";
  clickedElement.onclick = darkMode;
}