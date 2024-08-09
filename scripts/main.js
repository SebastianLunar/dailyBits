import { urlUsers } from "../data/constants.js";
import { getUserData } from "./helpers/getUserData.js";

const splashContainer = document.getElementById("splash");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    splashContainer.style.display = "none";
  }, 3000);
});

document.getElementById("btnLogin")?.addEventListener("click", async () => {
  const email = document.getElementById("email").value;

  //--------------- traer la data user
  const result = await getUserData(urlUsers);

  // filtro y ver que el correo exista
  const profile = await result.find((user) => user.email === email);

  if (profile) {
    localStorage.setItem("profile", JSON.stringify(profile));
    window.location.href = "../pages/home.html";
  } else {
    alert("Usuario Incorrecto");
  }
});
