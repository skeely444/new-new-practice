const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
function showMeYourPassword() {
  const toggler = document.getElementById("theEye");
  const inputField = document.getElementById("input");
  toggler.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
  inputField.type = "text";
}
function sendLogin() {
  const inputtedPassword = document.getElementById("input").value
  const inputtedUsername = document.getElementById("username").value
  console.log(`The user his name is: ${inputtedUsername} and his password is: ${inputtedPassword}`)
}