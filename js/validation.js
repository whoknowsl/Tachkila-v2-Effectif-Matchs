import {
  errorName,
  errorNumber,
  errorAge,
  errorPost,
  errorNameAdversies,
  errorDate,
  errorTime,
  errorLocation,
  matchErrors,
} from "./domelments.js";

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
//
export const checkOpponent = (value) => {
  const name = value.trim();
  if (name === "") return "Veuillez saisir l'adversaire";
  if (name.toLowerCase() === "atlas fc")
    return "L'adversaire doit être différent de « Atlas FC »";
  if (!/^[A-Za-zÀ-ÿ0-9 '.-]{3,40}$/.test(name))
    return "3 à 40 caractères (lettres, chiffres, espace, ' . -)";
  return "";
};
export const checkDate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return "Choisissez une date valide";
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  // rejects 2026-02-31 and similar
  if (
    date.getFullYear() !== y ||
    date.getMonth() !== m - 1 ||
    date.getDate() !== d
  ) {
    return "Cette date n'existe pas";
  }
  return "";
};
export const checkTime = (value) =>
  /^([01]\d|2[0-3]):[0-5]\d$/.test(value) ? "" : "Heure invalide (HH:MM)";

export const checkLocation = (value) => {
  const place = value.trim();
  if (place === "") return "Veuillez saisir le lieu";
  if (place.length < 3 || place.length > 60)
    return "Le lieu : 3 à 60 caractères";
  return "";
};
export const checkVenue = (radio) => (radio ? "" : "Choisissez Domicile ou Extérieur");