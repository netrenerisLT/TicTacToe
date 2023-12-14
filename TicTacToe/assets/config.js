function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backdropElement.style.display = "block";

  // form name input same as player name
  if (players[editedPlayer - 1].name) {
    formNameElement.firstElementChild.lastElementChild.value =
      players[editedPlayer - 1].name;
  }
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdropElement.style.display = "none";
  formNameElement.firstElementChild.classList.remove("error");
  errorMessage[0].setAttribute("placeholder", "");

  formNameElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playernamevalue").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorMessage[0].setAttribute("placeholder", "Enter a valid name.");
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName; //deducts -1 and reach start point of array (0) fo the first player
  closePlayerConfig();
}
