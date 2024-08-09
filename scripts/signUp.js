import { serverUrl } from "../data/constants.js";
import { postUserData } from "./helpers/postUserData.js";

const signUpForm = document.getElementById('signUpForm');
console.log("Conected")

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let user = {
    id: crypto.randomUUID(),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    correct: 0,
    incorrect: 0,
    HTML: 0,
    JS: 0,
    CSS: 0,
    FIG: 0,
    UX: 0,
  };

  postUserData(serverUrl, user);
})