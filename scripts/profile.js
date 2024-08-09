import { urlUsers } from "../data/constants.js";
import { patchUserData } from "./helpers/patchUserData.js";
import { showNavbar } from "./modules/navbar.js";

const navbarContainer = document.getElementById("navContainer");

document.addEventListener("DOMContentLoaded", () => {
  showNavbar(navbarContainer);
  const btnEditar = document.getElementById("btnEditar");
  // traer el usuario con la inf
  const userProfile = JSON.parse(localStorage.getItem("profile"));
  console.log(userProfile);

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  // asignar el valor
  name.value = userProfile.name;
  email.value = userProfile.email;
  password.value = userProfile.password;

  // Cuando click en editar
  btnEditar?.addEventListener("click", () => {
    const btnGuardar = document.getElementById("btnGuardar");
    name.disabled = false;
    email.disabled = false;
    password.disabled = false;
    btnGuardar.disabled = false;
    btnEditar.disabled = true;

    btnGuardar?.addEventListener("click", () => {
      name = document.getElementById("name").value;
      email = document.getElementById("email").value;
      password = document.getElementById("password").value;

      console.log(name, email, password);

      let user = {
        id: userProfile.id,
        name,
        email,
        password,
        correct: userProfile.correct,
        incorrect: userProfile.incorrect,
        HTML: userProfile.HTML,
        JS: userProfile.JS,
        CSS: userProfile.CSS,
        FIG: userProfile.FIG,
        UX: userProfile.UX,
      };

      // actualizar en el localsStorage
      localStorage.setItem("profile", JSON.stringify(user));
      //actualizar en la data.json
      patchUserData(urlUsers, userProfile.id, user);
    });
  });
});
