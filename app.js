const navLinks = document.getElementById("nav-links");
const closeMenuBtn = document.getElementById("close-menu-btn");
const showMenuBtn = document.getElementById("show-menu-btn");

closeMenuBtn.addEventListener("click", e => {
  navLinks.style.width = "0";
});

showMenuBtn.addEventListener("click", e => {
  navLinks.style.width = "200px";
});
