import { urlQuestion, urlUsers } from "../data/constants.js";
import { getUserData } from "./helpers/getUserData.js";
import { patchUserData } from "./helpers/patchUserData.js";
import { showNavbar } from "./modules/navbar.js";

const navbarContainer = document.getElementById("navContainer");
let selectResp;
let respCorrect;

document.addEventListener("DOMContentLoaded", async () => {
  showNavbar(navbarContainer);

  const gameQ = document.getElementById("gameQ");
  // traer el usuario con la inf
  const userProfile = JSON.parse(localStorage.getItem("profile"));
  const curso = JSON.parse(localStorage.getItem("game"));
  console.log(userProfile, curso.curso.slice(3));

  //-----traer las preguntas---------//

  const result = await getUserData(urlQuestion);
  console.log(result);

  //---- debo saber que filtre solo las preguntas del curso activo
  const resultFind = await result.find(
    (c) => c.category === curso.curso.slice(3)
  );
  console.log(resultFind);
  //-- al tener ya filtrado
  //-- calidar que tipo de pregunta es

  resultFind.question.forEach((element, index) => {
    const { imagen, question, options, answer } = element;
    switch (element.type) {
      case "select":
        respCorrect = answer;
        gameQ.innerHTML = `
    <img src=${imagen} alt="imagen">  
    <h2>${question}</h2>
    <div id="questions">
            <label>
            <input type="radio" name="resp" id="option1" value=${options[0]}>${options[0]}</input>
            </label>
            <label>
            <input type="radio" name="resp" id="option2" value=${options[1]}>${options[1]}</input>
            </label>
            <label>
            <input type="radio" name="resp" id="option3" value=${options[2]}>${options[2]}</input>
            </label>
            <label>
            <input type="radio" name="resp" id="option4" value=${options[3]}>${options[3]}</input>
            </label>
    </div>
    <button id="btnComprobar" type="button" disabled>Comprobar</button>
    `;
        break;
      case "imagen":
         respCorrect = answer;
         gameQ.innerHTML = `
    <img src=${imagen} alt="imagen">  
    <h2>${question}</h2>
    <div id="questions">
            <label>
            <input type="radio" name="resp" id="option1" value=${options[0]}>${options[0]}</input>
            </label>
            <label>
            <input type="radio" name="resp" id="option2" value=${options[1]}>${options[1]}</input>
            </label>
            <label>
            <input type="radio" name="resp" id="option3" value=${options[2]}>${options[2]}</input>
            </label>
            <label>
            <input type="radio" name="resp" id="option4" value=${options[3]}>${options[3]}</input>
            </label>
    </div>
    <button id="btnComprobar" type="button" disabled>Comprobar</button>
    `;
        break;
      case "order":
        break;
      default:
        break;
    }
  });

  //------ eventos del innerHTML---

  document.getElementById("option1")?.addEventListener("click", () => {
    document.getElementById("btnComprobar").disabled = false;
    selectResp = document.getElementById("option1").value;
    console.log(selectResp);
  });

  document.getElementById("option2")?.addEventListener("click", () => {
    document.getElementById("btnComprobar").disabled = false;
    selectResp = document.getElementById("option2").value;
    console.log(selectResp);
  });

  document.getElementById("option3")?.addEventListener("click", () => {
    document.getElementById("btnComprobar").disabled = false;
    selectResp = document.getElementById("option3").value;
    console.log(selectResp);
  });

  document.getElementById("option4")?.addEventListener("click", () => {
    document.getElementById("btnComprobar").disabled = false;
    selectResp = document.getElementById("option4").value;
    console.log(selectResp);
  });

  document.getElementById("btnComprobar")?.addEventListener("click", () => {
    if (respCorrect === selectResp) {
      // modificar localStorages y Data.json sumando repsues correcta

      let user = {
        id: userProfile.id,
        name: userProfile.main,
        email: userProfile.email,
        password: userProfile.password,
        correct: userProfile.correct + 1,
        incorrect: userProfile.incorrect,
        HTML:
          "HTML" === curso.curso.slice(3)
            ? userProfile.HTML + 1
            : userProfile.HTML,
        JS: "JS" === curso.curso.slice(3) ? userProfile.JS + 1 : userProfile.JS,
        CSS:
          "CSS" === curso.curso.slice(3)
            ? userProfile.CSS + 1
            : userProfile.CSS,
        JS:
          "JS" === curso.curso.slice(3)
            ? userProfile.JS + 1
            : userProfile.JS,
        FIG:
          "FIG" === curso.curso.slice(3)
            ? userProfile.FIG + 1
            : userProfile.FIG,
        UX: "UX" === curso.curso.slice(3) ? userProfile.UX + 1 : userProfile.UX,
      };

      patchUserData(urlUsers, userProfile.id, user);
      localStorage.setItem("profile", JSON.stringify(user));
      alert("Respuesta Correcta");
    } else {
      // modificar localStorages y Data.json restandole una vida
      // resùesta incorrecta
      let user = {
        id: userProfile.id,
        name: userProfile.main,
        email: userProfile.email,
        password: userProfile.password,
        correct: userProfile.correct,
        incorrect: userProfile.incorrect + 1,
        HTML: userProfile.HTML,
        JS: userProfile.JS,
        CSS: userProfile.CSS,
        FIG: userProfile.FIG,
        UX: userProfile.UX,
      };

      patchUserData(urlUsers, userProfile.id, user);
      localStorage.setItem("profile", JSON.stringify(user));

      if (curso.vidas > 0) {
        localStorage.setItem(
          "game",
          JSON.stringify({ curso: curso.curso, vidas: curso.vidas - 1 })
        );
      } else {
        alert("Fin del juego");
      }

      alert("Respuesta Correcta");
      alert("Incorrecto");
    }
  });
});
