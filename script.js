const link = document.querySelector("#palette");
const button = document.querySelector("#theme");
const readbutton = document.querySelector("#type");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
});
