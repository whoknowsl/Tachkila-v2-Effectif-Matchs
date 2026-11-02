import { playersList, positionFealde } from "./domelments.js";
import { CreatePlayer, positionColors } from "./joueurs.js";
import { players, positions } from "./data.js";

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
  players.forEach((player) => {
    displayPlayerEffectef(player);
  });
}
renderPlayers(players);

function fillSolt(slotId, player, style) {
  const slot = document.getElementById(slotId);
  if (!slot) return;
  player.positionInTheFielde = slotId;
  slot.dataset.active = "true";

  const subDiv = document.createElement("div");
  [player.number, player.position, player.name].forEach((value, i) => {
    const p = document.createElement("p");
    p.className = i === 0 ? "text-sm font-bold" : "font-bold";
    p.style.color = style.color; // inline: Tailwind can't generate text-[${...}]
    p.textContent = value;
    subDiv.append(p);
  });

  const div = document.createElement("div");
  div.className = "flex items-center p-3 gap-3";
  div.append(subDiv);
  slot.replaceChildren(div);
}