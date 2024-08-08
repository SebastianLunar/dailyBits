import { showNavbar } from "./modules/navbar.js"

const navbarContainer = document.getElementById('navContainer');
const cards = document.getElementsByClassName('progress');

document.addEventListener("DOMContentLoaded", () => {
  showNavbar(navbarContainer);
})

for (let card of cards) {
  card.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
}