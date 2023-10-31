import _ from 'lodash';
import './style.css';
const gameBoard = require('./gameboard');
const player = require('./player');
const ships = require('./ships');

const header = document.createElement('header');
const mainContainer = document.createElement('main');

function Game() {
  //create two players
  let person = player();
  let computer = player();

  //game loop

  //how to have the players board?
  const renderBoard = () => {
    const board = document.createElement('div');
    board.classList.add('board');
    mainContainer.appendChild(board);
  };
}

module.exports = Game;
