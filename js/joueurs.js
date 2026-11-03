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
//delete card
export function deletPlayer(p) {
  p = Number(p);
  const playerIndx = players.findIndex((player) => {
    return player.id == p;
  });
  if (playerIndx == -1) return;
  if (players[playerIndx].isPlaying) {
    clearSlot(players[playerIndx].cuurentPosition);
  }
  players.splice(playerIndx, 1);
  refreshLocalStorage();
  // updateFieldCount();
  renderingCard();
  // totalNumberOfPlayers.textContent = `${players.length} joueur(s)`;
  playersList.textContent = "";
  players.forEach((player) => {
    playerCard(player);
  });
}
//readCard
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
  //

  //
  const style = positionColors[player.position];
  if (!style) return;
  console.log(player.position);
  console.log(style.color);
  li.classList.add(
    "border-2",
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
  isCaptine.classList.add("cursor-pointer");
  //

  span.textContent = player.number;
  h1.textContent = player.name;
  position.textContent = player.position;
  age.textContent = `Age: ${player.age} ans`;
  status.textContent = player.statut;
  modifierBtn.innerHTML = "<i class='fa-solid fa-pen'></i>";
  deletBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
  isCaptine.innerHTML = "<i class='fa-regular fa-copyright'></i>";
  //
  //set attribute
  modifierBtn.setAttribute("data-id", player.id);
  deletBtn.setAttribute("data-id", player.id);
  //
  isCaptine.dataset.id = player.id;
  deletBtn.dataset.id = player.id;
  //
  isCaptine.addEventListener("click", () => {
    let captinePlayer = players.find((player) => {
      return player.id == isCaptine.dataset.id;
    });
    if (captinePlayer.capitaine) {
      captinePlayer.capitaine = false;
    } else {
      players.forEach((player) => {
        player.capitaine = false;
      });
      captinePlayer.capitaine = true;
    }
    console.log(captinePlayer);
    renderingCard();
  });
  status.textContent == "Blesse"
    ? status.classList.add("bg-red-500")
    : status.classList.add("bg-green-500");
  deletBtn.addEventListener("click", () => {
    deletPlayer(deletBtn.dataset.id);
  });
  //
  if (player.capitaine) {
    li.classList.add("border-purple-500");
    isCaptine.classList.add("bg-purple-500");
  } else {
    li.classList.remove("border-purple-500");
    isCaptine.classList.remove("bg-purple-500");
  }

  secDiv.append(span, div);
  thireddiv.append(status, isCaptine, modifierBtn, deletBtn);
  div.append(h1, position);
  li.append(secDiv, age, thireddiv);
  playersListEffective.append(li);
}
