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
export const positionColors = {
  GB: { color: "#f59e0b" },
  DEF: { color: "#3b82f6" },
  MIL: { color: "#22c55e" },
  ATT: { color: "#ef4444" },
};
console.log(positionColors.GB.circle);
export function displayCard(player) {
  const li = document.createElement("li");
  const secDiv = document.createElement("div");
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
  const captineBtn = document.createElement("button");
  //
  const style = positionColors[player.position];
  console.log(style);
  li.classList.add(
    "list-none",
    "text-white",
    "p-4",
    "flex",
    "flex-col",
    "gap-2",
    "rounded-xl",
  );
  div.classList.add("flex", "flex-col", "align-center");
  span.classList.add(
    "border-2",
    "flex",
    "justify-center",
    "w-12",
    "h-12",
    "items-center",
    "rounded-full",
  );
  span.style.borderColor = style.color;
  span.style.color = style.color;
  position.style.color = style.color;
  position.style.background = style.color + "26";
  secDiv.classList.add("flex", "gap-2");
  thireddiv.classList.add("flex", "items-center", "gap-3");
  age.classList.add("text-gray-500");
  li.classList.add("bg-");
  modifierBtn.classList.add("cursor-pointer");
  deletBtn.classList.add("cursor-pointer");
  status.classList.add("bg-green-500");
  //
  captineBtn.innerHTML = "<i class='fa-regular fa-copyright'></i>";
  span.textContent = player.number;
  h1.textContent = player.name;
  position.textContent = player.position;
  age.textContent = `Age: ${player.age} ans`;
  status.textContent = player.statut;
  modifierBtn.innerHTML = "<i class='fa-solid fa-pen'></i>";
  deletBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
  //
  //set attribute
  modifierBtn.setAttribute("data-id", player.id);
  deletBtn.setAttribute("data-id", player.id);
  //
  secDiv.append(span, div);
  thireddiv.append(status, isCaptine, modifierBtn, deletBtn);
  div.append(h1, position);
  li.append(secDiv, age, thireddiv);
  playersListEffective.append(li);
}
console.log(players);
