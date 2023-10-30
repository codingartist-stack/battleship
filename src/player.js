const GameBoard = require('./src/gameboard');

function Player(name) {
  //player takes turn
  //computer player attacks, can't attack same place twice.
  let playerAttacks = new Set();
  let playerTurn = true;

  const switchTurn = () => {
    if (playerTurn == true) {
      playerTurn = false;
      return playerTurn;
    } else {
      playerTurn = true;
      return playerTurn;
    }
  };

  //random attack
  const randomAttack = (board = GameBoard) => {
    let coordinateX = Math.floor(Math.random() * max);
    let coordinateY = Math.floor(Math.random() * max);

    if (playerAttacks.length === 100) {
      return;
    }

    while (playerAttacks.has(`${coordinateX}.${coordinateY}`)) {
      coordinateX = Math.floor(Math.random() * max);
      coordinateY = Math.floor(Math.random() * max);
    }
  };

  const displayAttacks = () => {
    return playerAttacks;
  };

  return {
    switchTurn,
    displayAttacks,
  };
}

module.exports = Player;
