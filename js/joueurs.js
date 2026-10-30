import {
  positions,
  players,
  playersKey,
  refresh,
  refreshLocalStorage,
} from "./data.js";
import {
  newPlayerForm,
  PopUpFormBtn,
  removePopUpFormBtn,
  annuleFormBtn,
  playersList,
  errorName,
  nameOfPlayerInput,
  numberOfPlayerInput,
  errorNumber,
  formNoValidMesg,
  formValidMsg,
  errors,
  totalNumberOfPlayers,
  positionFealde,
  numberOfPlayerInTheField,
  playersListEffective,
  nameOfThePlayer,
  ageOfThePlayer,
  numberOfThePlayer,
  postOfThePlayer,
  statusOfThePlayer,
  submitBtn,
} from "./domelments.js";
import { validationName, validateNumber } from "./validation.js";

//create a player
export function CreatePlayer() {
  const newPlayer = {
    id: Date.now().toString(),
    name: nameOfThePlayer.value,
    number: Number(numberOfThePlayer.value),
    position: postOfThePlayer.options[postOfThePlayer.selectedIndex].text,
    age: ageOfThePlayer.value,
    statut: statusOfThePlayer.options[statusOfThePlayer.selectedIndex].text,
    capitaine: false,
  };
  players.unshift(newPlayer);
  refreshLocalStorage();
  renderingCard();
}
export function renderingCard() {
  playersListEffective.replaceChildren();
  if (players.length === 0) return;
  players.forEach((player) => {
    displayCard(player);
  });
}
export function displayCard(player) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const h1 = document.createElement("h1");
  const position = document.createElement("p");
  const age = document.createElement("p");
  const thireddiv = document.createElement("div");
  const status = document.createElement("p");
  const isCaptine = document.createElement("p");
  const modifierBtn = document.createElement("button");
  const deletBtn = document.createElement("button");
  //

  li.classList.add("list-none", "text-white");
  div.classList.add("flex", "flex-col", "align-center");
  span.classList.add(
    "border-1",
    "row-span-2",
    "p-1",
    "flex",
    "justify-center",
    "w-15",
    "h-15",
    "items-center",
    "rounded-full",
  );
  li.classList.add("bg-[#1a2438]");
  modifierBtn.classList.add("cursor-pointer");
  deletBtn.classList.add("cursor-pointer");
  //
  span.textContent = player.number;
  h1.textContent = player.name;
  position.textContent = player.position;
  age.textContent = `Age: ${player.age}ans`;
  status.textContent = player.statut;
  isCaptine.textContent = player.capitaine;
  modifierBtn.innerHTML = "<i class='fa-solid fa-pen'></i>";
  deletBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
  //
  //set attribute
  modifierBtn.setAttribute("data-id", player.id);
  deletBtn.setAttribute("data-id", player.id);
  //
  thireddiv.append(status, isCaptine, modifierBtn, deletBtn);
  div.append(h1, position);
  li.append(span, div, age, thireddiv);
  playersListEffective.append(li);
}

console.log(players);
console.log(playersList);
// function displayPlayerEffectef(player) {
//   const li = document.createElement("li");
//   const div = document.createElement("div");
//   const span = document.createElement("span");
//   const h3 = document.createElement("h3");
//   const p = document.createElement("p");
//   const select = document.createElement("select");
//   const hr = document.createElement("hr");
//   //add class style by tailwind;
//   li.classList.add(
//     "border-1",
//     "flex",
//     "flex-col",
//     "py-3",
//     "px-4",
//     "rounded-2xl",
//     "w-auto",
//     "gap-4",
//   );
//   hr.classList.add("border-2");
//   span.classList.add(
//     "border-1",
//     "row-span-2",
//     "p-1",
//     "flex",
//     "justify-center",
//     "w-15",
//     "h-15",
//     "items-center",
//     "rounded-full",
//   );
//   h3.classList.add("flex");
//   //
//   span.textContent = player.number;
//   h3.textContent = player.nom;
//   p.textContent = player.positions;
//   //
//   div.append(span, h3, p);
//   li.append(div, select);
//   playersList.append(li);
// }
