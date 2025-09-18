var burger = document.querySelector(".menu-burger");
var menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("is-active");
}

burger.addEventListener("click", toggleMenu);
