import { nameOfPlayerInput, numberOfPlayerInput } from "./domelments.js";
// import { state } from "./joueurs.js";
import { players } from "./data.js";

export function validationName(nom) {
  if (nom === "") {
    errorName.textContent = "Please add Name for the player";
  } else if (nom.length < 3) { 
    errorName.textContent = "Enter at leaste three caracter";
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
