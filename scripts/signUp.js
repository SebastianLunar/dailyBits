import { serverUrl } from "../data/constants.js";
import { postUserData } from "./helpers/postUserData.js";

const signUpForm = document.getElementById('signUpForm');
console.log("Conected")

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let user =  {
    "id": crypto.randomUUID(),
    "name": document.getElementById('name').value,
    "email": document.getElementById('email').value,
    "password": document.getElementById('password').value,
  }

  postUserData(serverUrl, user);
})