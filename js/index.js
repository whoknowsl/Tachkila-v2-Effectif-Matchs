import { validationName, validateNumber } from "./validation.js";
import { playersList } from "./domelments.js";
import { CreatePlayer, positionColors } from "./joueurs.js";
import { players } from "./data.js";

//creating card
function displayPlayerEffectef(player) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const select = document.createElement("select");
  const hr = document.createElement("hr");
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
  hr.classList.add("border-2");
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
