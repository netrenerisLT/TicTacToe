function startNewGame() {
  activePlayerName.textContent = players[activePlayer].name;
  players[0].name && players[1].name
    ? (gameAreaElement.style.display = "block")
    : alert("Set both players names.");
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  const selectedColumn = event.target.dataset.col - 1;
  const selectedRow = event.target.dataset.row - 1;
  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  switchPlayer();
}

function switchPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  activePlayerName.textContent = players[activePlayer].name;
}
