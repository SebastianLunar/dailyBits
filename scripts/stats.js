import { showNavbar } from "./modules/navbar.js"

const navbarContainer = document.getElementById('navContainer');
document.addEventListener("DOMContentLoaded", () => {
  showNavbar(navbarContainer);
})