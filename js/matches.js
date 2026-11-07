import { matches, months } from "./data.js";
import {
  oppenantName,
  dateOfMatche,
  matchTime,
  locationOfMatche,
  newMatchForm,
  matchesLists,
} from "./domelments.js";
import { playerFilter } from "./joueurs.js";
//evenets of module
const days = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
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
  const lieu = document.querySelector("input[name='lieu']:checked");
  const match = {
    id: Date.now().toString(),
    adversaire: oppenantName.value,
    date: dateOfMatche.value,
    heure: matchTime.value,
    lieu: locationOfMatche.value,
    domicile: "domicile",
    butsAtlas: null,
    butsAdversaire: null,
  };
  matches.push(match);
}
//display matche
function displayMatch(match) {
  const matchDate = new Date(`${match.date}T${match.heure}`);
  const played = matchDate.getTime() <= Date.now();
  const hasScore = match.butsAtlas !== null && match.butsAdversaire !== null;
  const monthString = months[match.date.split("-")[1]];
  const dayString = match.date.split("-")[2];
  //creating Elements
  const infoMatch = document.createElement("div");
  const infoTime = document.createElement("div");
  const national = document.createElement("p");
  const day = document.createElement("p");
  const month = document.createElement("p");
  const houre = document.createElement("p");
  const location = document.createElement("div");
  const homeOrOutside = document.createElement("span");
  const teams = document.createElement("h3");
  const stadium = document.createElement("span");
  const pin = document.createElement("i");
  const stadiumName = document.createElement("span");
  const right = document.createElement("div");
  const score = document.createElement("p");
  const btnEnterScore = document.createElement("button");
  const seeReasultBtn = document.createElement("button");
  const modiferAndDelete = document.createElement("div");
  const modifierBtn = document.createElement("button");
  const deletBtn = document.createElement("button");
  const leftSide = document.createElement("div");
  //add style
  infoMatch.classList.add(
    "bg-[#1a2438]",
    "flex",
    "justify-between",
    "items-center",
    "px-4",
    "py-4",
    "gap-3",
    "rounded-2xl",
    "border",
    "border-slate-700",
    "mb-3",
  );
  leftSide.classList.add("flex", "items-center", "gap-4");
  infoTime.classList.add(
    "bg-[#0b1426]",
    "px-3",
    "py-2",
    "rounded-xl",
    "text-white",
    "text-center",
    "w-24",
  );
  national.classList.add("text-slate-400", "text-sm");
  day.classList.add("text-3xl", "font-bold");
  month.classList.add("font-semibold");
  houre.classList.add("text-slate-500", "text-sm");
  location.classList.add("flex", "flex-col", "gap-2");
  homeOrOutside.classList.add(
    "w-fit",
    "p-1",
    "px-2",
    "rounded-lg",
    "text-sm",
    "font-semibold",
  );
  if (match.domicile) {
    homeOrOutside.classList.add("bg-green-500/25", "text-green-500");
  } else {
    homeOrOutside.classList.add("bg-amber-500/25", "text-amber-500");
  }
  teams.classList.add("text-white", "text-xl", "font-bold");
  stadium.classList.add("flex", "gap-2", "text-slate-400", "items-center");
  right.classList.add("flex", "flex-col", "items-end", "gap-2");
  score.classList.add("text-3xl", "font-bold");
  btnEnterScore.classList.add(
    "bg-indigo-600",
    "text-white",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "cursor-pointer",
  );
  seeReasultBtn.classList.add(
    "border",
    "border-slate-600",
    "text-white",
    "px-4",
    "py-2",
    "rounded-lg",
    "cursor-pointer",
  );
  modiferAndDelete.classList.add(
    "flex",
    "items-center",
    "gap-2",
    "text-slate-300",
  );
  modifierBtn.classList.add("cursor-pointer", "w-10", "h-10");
  deletBtn.classList.add("cursor-pointer", "w-10", "h-10");
  const rightSide = document.createElement("div");
  rightSide.classList.add("flex", "items-center", "gap-4");
  //add content
  national.textContent = days[matchDate.getDay()];
  day.textContent = String(matchDate.getDate()).padStart(2, "0");
  month.textContent = months[matchDate.getMonth()];
  houre.textContent = match.heure;
  homeOrOutside.textContent = match.domicile ? "Domicile" : "Extérieur";
  match.domicile
    ? (teams.textContent = `CODANOVA vs ${match.adversaire}`)
    : (teams.textContent = `${match.adversaire} vs CODANOVA`);
  stadium.innerHTML = `<i class="fa-solid fa-location-dot"></i>${match.lieu}`;
  seeReasultBtn.textContent = "Voir la composition";
  btnEnterScore.textContent = "<i class='fa-solid fa-pen'></i>";
  deletBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
  //scor color
  if (hasScore) {
    score.textContent = `${match.butsAtlas} - ${match.butsAdversaire}`;
    if (match.butsAtlas > match.butsAdversaire) {
      score.classList.add("text-green-500");
    } else if (match.butsAtlas < match.butsAdversaire) {
      score.classList.add("text-red-500");
    } else {
      score.classList.add("text-slate-400");
    }
    btnEnterScore.textContent = "Modifier le score";
    btnEnterScore.classList.remove("bg-indigo-600", "px-5", "py-2");
    btnEnterScore.classList.add("text-slate-400", "underline", "text-sm");
  }
  //set attribute
  modifierBtn.dataset.action = "edit";
  deletBtn.dataset.action = "delete";
  btnEnterScore.dataset.action = "score";
  seeReasultBtn.dataset.action = "lineup";
  [modifierBtn, deletBtn, btnEnterScore, seeReasultBtn].forEach((btn) => {
    btn.dataset.id = match.id;
    btn.type = "button";
  });
  modifierBtn.setAttribute("aria-label", "Modifier le match");
  deletBtn.setAttribute("aria-label", "Supprimer le match");
  //
  if (hasScore) right.append(score);
  if (played) right.append(btnEnterScore);
  infoTime.append(national, day, month, houre);
  stadium.append(pin, stadiumName);
  location.append(homeOrOutside, teams, stadium);
  leftSide.append(infoTime, location);
  right.append(seeReasultBtn);
  modiferAndDelete.append(modifierBtn, deletBtn);
  rightSide.append(right, modiferAndDelete);
  infoMatch.append(leftSide, rightSide);
  matchesLists.append(infoMatch);
}

//render matches in cards
function renderMatches(matches) {
  matchesLists.replaceChildren();
  matches.forEach((match) => {
    displayMatch(match);
  });
}
renderMatches(matches);
