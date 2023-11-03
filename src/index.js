import _ from 'lodash';
import './style.css';
const gameBoard = require('./gameboard');
const player = require('./player');
const ships = require('./ships');

const header = document.createElement('header');
const mainContainer = document.createElement('main');

function Game() {
  //create two players
  let playerOne = player();
  let computer = player();
  let gameStillGoing = true;

  const executeTurn = (player) => {
    // do player choice, rendering stuff
    gameStillGoing = !player.hasLost();
  };

  let currentPlayer = playerOne;

  const takeTurn = () => {
    // do stuff
    executeTurn(currentPlayer);
    if (currentPlayer === playerOne) {
      currentPlayer = computer;
    } else {
      currentPlayer = playerOne;
    }
  };
  //game loop

  while (gameStillGoing) {
    takeTurn();
  }
  //how to have the players board?
}

module.exports = Game;
