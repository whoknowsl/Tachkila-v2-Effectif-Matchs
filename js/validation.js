import { errorName, errorNumber, errorAge, errorPost} from "./domelments.js";
// import { state } from "./joueurs.js";
import { players } from "./data.js";

export function validationName(nom) {
  if (nom === "") {
    errorName.textContent = "Please add Name for the player";
  } else if (nom.length < 3) {
    errorName.textContent = "Enter at leaste three caracter";
  } else if (nom.length > 30) {
    errorName.textContent = "max caracter allowed is 30";
  } else {
    formValidMsg.classList.add("hidden");
    formNoValidMesg.textContent = "";
    errorName.textContent = "";
  }
}
export function validateNumber(number) {
  const numbeRegex = /^[1-9][0-9]?$/;
  if (number === "") {
    errorNumber.textContent = "Please add Number for the player";
  } else if (!numbeRegex.test(number)) {
    errorNumber.textContent = "please enter a number from 1 to 99";
  } else {
    formValidMsg.classList.add("hidden");
    formNoValidMesg.textContent = "";
    errorNumber.textContent = "";
  }
}
export function validationAge(age) {
  const min = 18;
  const max = 39;
  if (age < min) {
    errorAge.textContent = "The minimun age is 18";
  } else if (age > max) {
    errorAge.textContent = "The maximum age is 39";
  } else {
    formValidMsg.classList.add("hidden");
    formNoValidMesg.textContent = "";
    errorAge.textContent = "";
  }
}
export function checkPost(post) {
  if (post == "Choisir un poste") {
    errorPost.textContent = "please select position";
  } else {
    formValidMsg.classList.add("hidden");
    formNoValidMesg.textContent = "";
    errorPost.textContent = "";
  }
}
