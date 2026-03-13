// Burger Menu _____________________________
var burger = document.querySelector(".menu-burger");
var menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("is-active");
}

burger.addEventListener("click", toggleMenu);

// Light/Dark mode___________________________

// desktop
const toggleDarkModeBtn = document.querySelector("#dark-mode-btn");
const toggleLightModeBtn = document.querySelector("#light-mode-btn");

toggleDarkModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});

// mobile
const toggleDarkModeBtnMobile = document.querySelector("#dark-mode-btn-mobile");
const toggleLightModeBtnMobile = document.querySelector(
  "#light-mode-btn-mobile",
);

toggleDarkModeBtnMobile.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtnMobile.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});

// Filters____________________________________

const cards = document.querySelectorAll(".god-card");
const filters = document.querySelectorAll("input[name='type']");

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    const value = filter.value; // Récupère la valeur du filtre cliqué

    cards.forEach((card) => {
      const type = card.getAttribute("data-type"); // Récupère la catégorie de la carte

      if (type === value) {
        card.classList.remove("hide"); // Montrer
      } else {
        card.classList.add("hide"); // Cacher
      }
    });
  });
});
