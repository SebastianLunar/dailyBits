import { showNavbar } from "./modules/navbar.js"

const navbarContainer = document.getElementById('navContainer');
const cards = document.getElementsByClassName('progress');

document.addEventListener("DOMContentLoaded", () => {
  showNavbar(navbarContainer);
})

for (let card of cards) {
  card.addEventListener("click", (e) => {
    console.log(e.target.id);
    localStorage.setItem("game", JSON.stringify({curso: e.target.id, vidas: 4}));
    window.location.href ="../pages/game.html"
  });
  // traer el usuario con la inf
  const userProfile = JSON.parse(localStorage.getItem("profile"));

  // entrar a la categorías  y pintar el progreso
switch (card.id) {
  case "divHTML":
    if (userProfile.HTML >= 5) {
      card.classList.remove("less");
    } else {
      card.classList.add("less");
    }
    card.setAttribute("style", `--i:${userProfile.HTML * 16.6}`);

    break;
  case "divCSS":
    if (userProfile.CSS >= 5) {
      card.classList.remove("less");
    } else {
      card.classList.add("less");
    }
    card.setAttribute("style", `--i:${userProfile.CSS * 16.6}`);

    break;
  case "divJS":
    if (userProfile.JS >= 5) {
      card.classList.remove("less");
    } else {
      card.classList.add("less");
    }
    card.setAttribute("style", `--i:${userProfile.JS * 16.6}`);

    break;
  case "divFIG":
    if (userProfile.FIG >= 5) {
      card.classList.remove("less");
    } else {
      card.classList.add("less");
    }
    card.setAttribute("style", `--i:${userProfile.FIG * 16.6}`);

    break;

  case "divUX":
    if (userProfile.UX >= 5) {
      card.classList.remove("less");
    } else {
      card.classList.add("less");
    }
    card.setAttribute("style", `--i:${userProfile.UX * 16.6}`);

    break;
  default:
    break;
}
}