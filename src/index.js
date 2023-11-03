import _ from 'lodash';
import './style.css';
const GameBoard = require('./gameboard');
const player = require('./player');

const header = document.createElement('header');
const mainContainer = document.createElement('main');

function Game() {
  //create two players
  let playerOne = player(false);
  let playerOneBoard = GameBoard();

  let computer = player(true);
  let computerBoard = GameBoard();

  let gameStillGoing = true;

  const executeTurn = (player, opponentBoard) => {
    // do player choice, rendering stuff
    coordinate = player.getAttack();

    opponentBoard.receiveAttack(coordinate.x, coordinate.y);

    gameStillGoing = !opponentBoard.shipsSunk();
  };

  let currentPlayer = playerOne;
  let opponentBoard = computerBoard;

  const swapTurn = () => {
    if (currentPlayer === playerOne) {
      currentPlayer = computer;
      opponentBoard = playerOneBoard;
    } else {
      currentPlayer = playerOne;
      opponentBoard = computerBoard;
    }
  };

  const takeTurn = () => {
    // do stuff
    executeTurn(currentPlayer, opponentBoard);
    swapTurn();
  };
  //game loop

  while (gameStillGoing) {
    takeTurn();
  }
  //how to have the players board?
}

module.exports = Game;
