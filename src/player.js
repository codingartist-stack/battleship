const GameBoard = require('./gameboard');

function Player() {
  let playerAttacks = new Set();
  const playerBoard = GameBoard();

  const attack = (x, y, board = playerBoard) => {
    if (playerAttacks.has(`${x}.${y}`)) {
      return;
    } else {
      playerAttacks.add(`${x}.${y}`);
      board.receiveAttack(x, y);
    }
  };

  const hasLost = () => {
    return playerBoard.shipsSunk();
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
    displayAttacks,
    randomAttack,
    attack,
    hasLost,
  };
}

module.exports = Player;
