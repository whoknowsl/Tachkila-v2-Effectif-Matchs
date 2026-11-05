import { players, refresh } from "./js/data.js";
import {
  createPlayer,
  renderingCard,
  state,
  updatePlayer,
  displayCard,
  etat,
  display,
  maxGardien,
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
  btnPrec,
  btnSuiv,
  searchBar,
  tousBtn,
  gbBtn,
  defBtn,
  milBtn,
  attBtn,
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
  maxGardien(players);

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
//pagination logic
btnPrec.addEventListener("click", () => {
  etat.page--;
  display();
});
btnSuiv.addEventListener("click", () => {
  etat.page++;
  display();
});
searchBar.addEventListener("input", (e) => {
  etat.rechercher = e.target.value;
  etat.page = 1;
  display();
});
tousBtn.addEventListener("click", () => {
  etat.positions = tousBtn.dataset.position;
  etat.page = 1;
  display();
});
gbBtn.addEventListener("click", () => {
  etat.positions = gbBtn.dataset.position;
  etat.page = 1;
  display();
});
defBtn.addEventListener("click", () => {
  etat.positions = defBtn.dataset.position;
  etat.page = 1;
  display();
});
milBtn.addEventListener("click", () => {
  etat.positions = milBtn.dataset.position;
  etat.page = 1;
  display();
});
attBtn.addEventListener("click", () => {
  etat.positions = attBtn.dataset.position;
  etat.page = 1;
  display();
});
refresh();
renderingCard();
