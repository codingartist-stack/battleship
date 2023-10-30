const GameBoard = require('./gameboard');

function Player() {
  let playerAttacks = new Set();
  let playerTurn = true;

  const whosTurn = () => {
    return playerTurn;
  };

  const switchTurn = () => {
    if (playerTurn == true) {
      playerTurn = false;
      return playerTurn;
    } else {
      playerTurn = true;
      return playerTurn;
    }
  };

  const randomAttack = (board = GameBoard()) => {
    let coordinateX = Math.floor(Math.random() * 10);
    let coordinateY = Math.floor(Math.random() * 10);

    if (playerAttacks.length === 100) {
      return;
    }

    while (playerAttacks.has(`${coordinateX}.${coordinateY}`)) {
      coordinateX = Math.floor(Math.random() * 10);
      coordinateY = Math.floor(Math.random() * 10);
    }

    playerAttacks.add(`${coordinateX}.${coordinateY}`);
    board.receiveAttack(coordinateX, coordinateY);
  };

  const displayAttacks = () => {
    return playerAttacks;
  };

  return {
    whosTurn,
    switchTurn,
    displayAttacks,
    randomAttack,
  };
}

module.exports = Player;
