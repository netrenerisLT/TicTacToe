/* ====================== player name box ====================== */
const EditPlayer1NameBtn = document.getElementById("edit-player-1-btn");
const EditPlayer2NameBtn = document.getElementById("edit-player-2-btn");

/* ====================== overlay ====================== */
const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const cancelConfigOverlayBtn = document.getElementById("cancel-config-button");
const formNameElement = document.querySelector("form");

/* ====================== player name box ====================== */
EditPlayer1NameBtn.addEventListener("click", openPlayerConfig);
EditPlayer2NameBtn.addEventListener("click", openPlayerConfig);

/* ====================== overlay  ====================== */
cancelConfigOverlayBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formNameElement.addEventListener("submit", savePlayerConfig);
