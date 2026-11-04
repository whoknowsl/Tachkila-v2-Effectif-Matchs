import { players, refresh } from "./js/data.js";
import {
  createPlayer,
  renderingCard,
  state,
  updatePlayer,
  displayCard,
} from "./js/joueurs.js";
import {
  newPlayerForm,
  PopUpFormBtn,
  removePopUpFormBtn,
  annuleFormBtn,
  formNoValidMesg,
  formValidMsg,
  errors,
  nameOfThePlayer,
  numberOfThePlayer,
  ageOfThePlayer,
  postOfThePlayer,
  playersListEffective,
  playersList,
} from "./js/domelments.js";
import {
  validationName,
  validateNumber,
  validationAge,
  checkPost,
} from "./js/validation.js";

removePopUpFormBtn.addEventListener("click", () => {
  newPlayerForm.classList.add("hidden");
  formValidMsg.classList.add("hidden");
  newPlayerForm.reset();
  errors.forEach((error) => {
    error.textContent = "";
  });
  state.editingId = null;
});
PopUpFormBtn.addEventListener("click", () => {
  newPlayerForm.classList.remove("hidden");
  newPlayerForm.reset();
  errors.forEach((error) => {
    error.textContent = "";
  });
  state.editingId = null;
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
  validateNumber(numberOfThePlayer.value);
  validationAge(ageOfThePlayer.value);
  checkPost(postOfThePlayer.options[postOfThePlayer.selectedIndex].text);

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
  if (state.editingId !== null) {
    updatePlayer();
  } else {
    createPlayer();
  }

  playersListEffective.textContent = "";
  players.forEach((p) => displayCard(p));
  renderingCard();
  newPlayerForm.reset();
  newPlayerForm.classList.add("hidden");
  formValidMsg.classList.add("hidden");
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
renderingCard();
