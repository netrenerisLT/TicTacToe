function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  isGameOver = false;
  gameOverElement.firstElementChild.innerHTML = `You won <span id="winner-name">PLAYER NAME</span>!`;
  gameOverElement.style.display = "none";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
    }
  }
  for (const iterator of gameFieldElements) {
    iterator.textContent = "";
    iterator.classList.remove("disabled");
  }
}

function startNewGame() {
  resetGame();
  activePlayerName.textContent = players[activePlayer].name;
  players[0].name && players[1].name
    ? (gameAreaElement.style.display = "block")
    : alert("Set both players names.");
}

function checkForGameOver() {
  // checking the rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // checking the columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // checking diagonal (top left > bottom right) for equality
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // checking diagonal (bottom left > top right) for equality
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function selectGameField(event) {
  if (isGameOver) {
    return;
  }
  const selectedColumn = event.target.dataset.col - 1;
  const selectedRow = event.target.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field.");
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
}

function switchPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  activePlayerName.textContent = players[activePlayer].name;
}

function endGame(winnerId) {
  isGameOver = true;
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    gameOverElement.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
