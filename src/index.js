import _ from 'lodash';
import './style.css';
const gameBoard = require('./gameboard');
const player = require('./player');
const ships = require('./ships');

const header = document.createElement('header');
const mainDiv = document.createElement('main');

function Game() {
  //create two players
  let person = player();
  let computer = player();

  //game loop

  //how to have the players board?
  const renderBoard = () => {};
}
