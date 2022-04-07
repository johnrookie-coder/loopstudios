const navEl = document.querySelector(".navigation");
const navMenus = document.querySelectorAll(".menu");

const linksEl = document.querySelectorAll(".navigation__link");

// Open and Close Menu
navMenus.forEach((btn) => {
  btn.addEventListener("click", () => {
    navEl.classList.toggle("active");
  });
});

// Clear the background
linksEl.forEach((link) => {
  link.addEventListener("click", () => {
    navEl.classList.remove("active");
  });
});
