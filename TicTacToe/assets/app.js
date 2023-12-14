/* ====================== player name box ====================== */
const EditPlayer1NameBtn = document.getElementById("edit-player-1-btn");
const EditPlayer2NameBtn = document.getElementById("edit-player-2-btn");
let editedPlayer = 0;
let activePlayer = 0;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

/* ====================== overlay ====================== */
const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const cancelConfigOverlayBtn = document.getElementById("cancel-config-button");
const formNameElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-error");
const errorMessage = document.getElementsByName("playernamevalue");

/* ====================== game area ====================== */
const startNewGameBtn = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
const gameFieldElements = document.querySelectorAll("#game-board li");

/* ====================== player name box ====================== */
EditPlayer1NameBtn.addEventListener("click", openPlayerConfig);
EditPlayer2NameBtn.addEventListener("click", openPlayerConfig);

/* ====================== overlay  ====================== */
cancelConfigOverlayBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formNameElement.addEventListener("submit", savePlayerConfig);

/* ====================== game area ====================== */
startNewGameBtn.addEventListener("click", startNewGame);
for (const iterator of gameFieldElements) {
  iterator.addEventListener("click", selectGameField);
}
