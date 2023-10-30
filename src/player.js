const GameBoard = require('./src/gameboard');

function Player(name) {
  //player takes turn
  //computer player attacks, can't attack same place twice.
  let playerAttacks = new Set();
  let playerTurn = true;

  let playerBoard = GameBoard();

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

  //displayPlayerAttacks

  return {
    switchTurn,
  };
}

module.exports = Player;
