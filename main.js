import { positions, players, refreshLocalStorage, refresh } from "./js/data.js";
import { CreatePlayer, renderingCard } from "./js/joueurs.js";
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
  menuBurger,
  menuList,
  playersListEffective,
  nameOfThePlayer,
  numberOfThePlayer,
} from "./js/domelments.js";
import { validationName, validateNumber } from "./js/validation.js";

newPlayerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validationName(nameOfThePlayer.value);
  validateNumber(Number(numberOfThePlayer.value));

  console.log(players);
  let hasError = false;
  errors.forEach((error) => {
    if (error.textContent.trim() !== "") {
      hasError = true;
    }
  });
  if (!hasError) {
    formValidMsg.classList.remove("hidden");
    formNoValidMesg.textContent = "";
  } else {
    formValidMsg.classList.add("hidden");
    formNoValidMesg.textContent = "Faild";
    return;
  }
  CreatePlayer();

  newPlayerForm.classList.add("hidden");
  formValidMsg.classList.add("hidden");
});
removePopUpFormBtn.addEventListener("click", () => {
  newPlayerForm.classList.add("hidden");
  formValidMsg.classList.add("hidden");
  newPlayerForm.reset();
  errors.forEach((error) => {
    error.textContent = "";
  });
});
PopUpFormBtn.addEventListener("click", () => {
  newPlayerForm.classList.remove("hidden");
  newPlayerForm.reset();
  errors.forEach((error) => {
    error.textContent = "";
  });
});
annuleFormBtn.addEventListener("click", (e) => {
  newPlayerForm.reset();
  errors.forEach((error) => {
    error.textContent = "";
  });
  newPlayerForm.classList.add("hidden");
});
// //submit-btn
newPlayerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validationName(nameOfThePlayer.value);
  CreatePlayer();
  console.log(players);
  let hasError = false;
  errors.forEach((error) => {
    if (error.textContent.trim() !== "") {
      hasError = true;
    }
  });
  if (!hasError) {
    formValidMsg.classList.remove("hidden");
    formNoValidMesg.textContent = "";
  } else {
    formValidMsg.classList.add("hidden");
    formNoValidMesg.textContent = "Faild";
    return;
  }

  //   if (state.editingId !== null) {
  //     updateExistingPlayer();
  //   } else {
  //     addNewPlayer();
  //   }

  //   playersList.textContent = "";
  //   players.forEach((p) => playerCard(p));

  newPlayerForm.reset();
  newPlayerForm.classList.add("hidden");
  formValidMsg.classList.add("hidden");
  renderingCard();
});

//annule form
annuleFormBtn.addEventListener("click", (e) => {
  newPlayerForm.reset();
  errors.forEach((error) => {
    error.textContent = "";
  });
  newPlayerForm.classList.add("hidden");
});
refresh();
players.forEach((player) => {
  if (player.isPlaying && player.cuurentPosition !== "Surlebanc") {
    fillSlot(player);
  }
});
renderingCard();
console.log(playersListEffective);
