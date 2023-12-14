function startNewGame() {
  players[0].name && players[1].name
    ? (gameAreaElement.style.display = "block")
    : alert("Set both players names.");
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  switchPlayer();
}

function switchPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}
