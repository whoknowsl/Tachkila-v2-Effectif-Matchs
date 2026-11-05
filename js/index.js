import {
  playersList,
  numberOfPlayerInTheField,
  totalNumberOfPlayers,
} from "./domelments.js";
import { positionColors } from "./joueurs.js";
import { players, positions, refreshLocalStorage } from "./data.js";

//creating card
function displayPlayerEffectef(player) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const select = document.createElement("select");
  //add class style by tailwind;
  const style = positionColors[player.position];
  li.classList.add(
    "border-1",
    "flex",
    "flex-col",
    "py-3",
    "px-4",
    "rounded-2xl",
    "w-auto",
    "gap-4",
  );
  div.classList.add("flex", "justify-between", "items-center");
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
  span.style.borderColor = style.color;
  span.style.color = style.color;
  p.style.background = style.color + "70";
  p.style.color = style.color;
  h3.classList.add("flex");
  select.classList.add("bg-[#1a2438]");

  select.addEventListener("change", (e) => {
    const selecedPosition = removeSpaces(e.target.value);
    console.log(selecedPosition);
    const oldposition = player.selecedPosition;
    console.log(oldposition);
    player.selecedPosition = selecedPosition;
    if (selecedPosition === "Surlebanc") {
      if (oldposition && oldposition !== "Surlebanc") {
        clearSlot(oldposition, style);
      }
    } else {
      if (
        oldposition &&
        oldposition !== "Surlebanc" &&
        oldposition !== selecedPosition
      ) {
        clearSlot(oldposition, style);
      }
      fillSolt(selecedPosition, player, style);
    }
    updateFieldCount();
    refreshLocalStorage();
    renderPlayers(players);
  });
  //
  if (player.position == "ATT") {
    for (let i = 0; i < positions.length; i++) {
      if (
        positions[i] == "Sur le banc" ||
        positions[i] == "BU - Buteur 1" ||
        positions[i] == "BU - Buteur 2"
      ) {
        const option = document.createElement("option");
        option.innerText = positions[i];
        select.append(option);
      }
    }
  } else if (player.position == "MIL") {
    for (let i = 0; i < positions.length; i++) {
      if (
        positions[i] == "Sur le banc" ||
        positions[i] == "MD - Miliue droit" ||
        positions[i] == "MC - Miliue central 2" ||
        positions[i] == "MC - Miliue central 1" ||
        positions[i] == "MG - Milieu gauche"
      ) {
        const option = document.createElement("option");
        option.innerText = positions[i];
        select.append(option);
      }
    }
  } else if (player.position == "DEF") {
    for (let i = 0; i < positions.length; i++) {
      if (
        positions[i] == "Sur le banc" ||
        positions[i] == "DD - Defenseur droit" ||
        positions[i] == "DC - Defenseur central 2" ||
        positions[i] == "DC - Defenseur central 1" ||
        positions[i] == "DG - Defenseur gauche"
      ) {
        const option = document.createElement("option");
        option.innerText = positions[i];
        select.append(option);
      }
    }
  } else if (player.position == "GB") {
    for (let i = 0; i < positions.length; i++) {
      if (positions[i] == "Sur le banc" || positions[i] == "GB - Gardien") {
        const option = document.createElement("option");
        option.innerText = positions[i];
        select.append(option);
      }
    }
  }
  for (let i = 0; i < select.options.length; i++) {
    const option = select.options[i];
    const optionId = removeSpaces(option.value);
    if (optionId == player.selecedPosition) {
      option.selected = true;
    }
    if (optionId != "Surlebanc" && optionId == player.selecedPosition) {
      option.disabled = true;
    }
  }
  //
  span.textContent = player.number;
  h3.textContent = player.name;
  p.textContent = player.position;
  //
  div.append(span, h3, p);
  li.append(div, select);
  playersList.append(li);
}
//displaying card
function renderPlayers(players) {
  playersList.textContent = "";
  totalNumberOfPlayers.textContent = `${players.length} joueur(s)`;
  players.forEach((player) => {
    displayPlayerEffectef(player);
  });
}
export function fillSolt(slotId, player, style) {
  const slot = document.getElementById(slotId);
  if (!slot) return;
  slot.dataset.active = "true";

  const subDiv = document.createElement("div");
  [player.number, player.position, player.name].forEach((value, i) => {
    const p = document.createElement("p");
    p.className = i === 0 ? "text-sm font-bold" : "font-bold";
    p.style.color = style.color;
    p.textContent = value;
    subDiv.append(p);
  });

  const div = document.createElement("div");
  div.className = "flex items-center p-3 gap-3";
  div.append(subDiv);
  slot.replaceChildren(div);
}
export function clearSlot(position, style) {
  const slot = document.getElementById(position);
  if (slot == null) return;
  slot.dataset.active = "false";

  slot.innerHTML = `    <div
          class="flex justify-center items-center"
          id=""
        >
          <span class="bg-[${style.color}] p-2 w-10 h-10 rounded-full flex"></span>
        </div>`;
  slot.dataset.active = "false";
}
export function removeSpaces(text) {
  let res = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      continue;
    } else {
      res += text[i];
    }
  }
  return res;
}
players.forEach((player) => {
  if (player.selecedPosition && player.selecedPosition !== "Surlebanc") {
    const style = positionColors[player.position];
    fillSolt(player.selecedPosition, player, style);
  }
});
renderPlayers(players);
export function updateFieldCount() {
  const count = players.filter(
    (player) =>
      player.selecedPosition && player.selecedPosition !== "Surlebanc",
  ).length;

  numberOfPlayerInTheField.textContent = `the total number of the player is ${count}`;
}
updateFieldCount();
