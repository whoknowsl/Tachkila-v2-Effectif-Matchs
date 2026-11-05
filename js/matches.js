import { matches, months } from "./data.js";
import {
  oppenantName,
  dateOfMatche,
  matchTime,
  locationOfMatche,
  newMatchForm,
  matchesLists,
} from "./domelments.js";
//evenets of module
const removePopUpForm = document.querySelector("#removePopUpForm");
const openUpFormBtn = document.querySelector("#PopUpFormBtn");
const annuleBtn = document.querySelector("#annuleBtn");
//open moudel
openUpFormBtn.addEventListener("click", () => {
  newMatchForm.classList.remove("hidden");
  newMatchForm.reset();
});
//close moduel
removePopUpForm.addEventListener("click", () => {
  newMatchForm.classList.add("hidden");
  newMatchForm.reset();
});
//annulr module
annuleBtn.addEventListener("click", () => {
  newMatchForm.classList.add("hidden");
  newMatchForm.reset();
});
//submit form
newMatchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createMatche();
  renderMatches(matches);
  console.log(matches);
  newMatchForm.classList.add("hidden");
  newMatchForm.reset();
});
//create matche
function createMatche() {
  const match = {
    id: Date.now().toString(),
    adversaire: oppenantName.value, // 3 à 40 caractères, différent de « Atlas FC »
    date: dateOfMatche.value, // format AAAA-MM-JJ (valeur d'un input type="date")
    heure: matchTime.value, // format HH:MM
    lieu: locationOfMatche.value,
    domicile: true, // true = Domicile, false = Extérieur
    butsAtlas: 3, // null tant que le score n'est pas saisi
    butsAdversaire: 1, // null tant que le score n'est pas saisi
  };
  matches.push(match);
}
//display matche
function displayMatch(match) {
  const monthString = months[match.date.split("-")[1]];
  const dayString = match.date.split("-")[2];
  //creating Elements
  const div = document.createElement("div");
  const time = document.createElement("div");
  const national = document.createElement("p");
  const day = document.createElement("p");
  const month = document.createElement("p");
  const houre = document.createElement("p");
  const location = document.createElement("div");
  const score = document.createElement("div");
  const modiferAndDelete = document.createElement("div");
  //add style
  div.classList.add("bg-[#1a1f33]");
  time.classList.add("bg-[#1d253d00]", "flex", "gap-4");
  //add content
  national.textContent = "MAR";
  day.textContent = dayString;
  month.textContent = monthString;
  houre.textContent = match.heure;
  //append elements
  div.append(national, day, month, houre);
  matchesLists.append(div);
}
//render matches in cards
function renderMatches(matches) {
  matches.forEach((match) => {
    displayMatch(match);
  });
}
