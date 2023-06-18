const menuEmial = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmial.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}