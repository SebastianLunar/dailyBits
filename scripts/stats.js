import { showNavbar } from "./modules/navbar.js";

const navbarContainer = document.getElementById("navContainer");

document.addEventListener("DOMContentLoaded", () => {
  showNavbar(navbarContainer);

  const spanT = document.getElementById("t");
  const spanC = document.getElementById("c");
  const spanI = document.getElementById("i");

  // traer el usuario con la inf
  const userProfile = JSON.parse(localStorage.getItem("profile"));

  const total = userProfile.correct + userProfile.incorrect;

  // mostrar la información
  spanT.textContent = total;
  spanC.textContent = userProfile.correct;
  spanI.textContent = userProfile.incorrect;
});
