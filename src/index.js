import _ from 'lodash';
import './style.css';
const GameBoard = require('./gameboard');
const player = require('./player');

const header = document.createElement('header');
const heading = document.createElement('h1');
heading.innerText = 'BattleShip';

header.appendChild(heading);

const mainContainer = document.createElement('main');
const boardContainer = document.createElement('div');
boardContainer.classList.add('boardContainer');

const boardBox = document.createElement('div');
boardBox.classList.add('board');
const boardTitle = document.createElement('h2');
boardTitle.innerText = 'your board';

const opponentContainer = document.createElement('div');
opponentContainer.classList.add('boardContainer');
const opponentBox = document.createElement('div');
opponentBox.classList.add('board');
const opponentTitle = document.createElement('h2');
opponentTitle.innerText = 'opponent board';

document.body.appendChild(header);
document.body.appendChild(mainContainer);

boardContainer.appendChild(boardBox);
boardContainer.appendChild(boardTitle);
mainContainer.appendChild(boardContainer);

opponentContainer.appendChild(opponentBox);
opponentContainer.appendChild(opponentTitle);
mainContainer.appendChild(opponentContainer);

function Game() {
  //create two players
  let playerOne = player(false);
  let playerOneBoard = GameBoard();

  let computer = player(true);
  let computerBoard = GameBoard();

  const renderBoard = (board, container) => {
    let boardArray = board.displayBoard();
    let i = 0;
    let j = 0;

    boardArray.forEach((row) => {
      row.forEach((item) => {
        let square = document.createElement('div');
        square.classList.add('boardSquare');
        square.dataset.coordinate = `${i}.${j}`;

        if (board == computerBoard) {
          switch (item) {
            case 'hit':
              square.classList.add('hit');
              break;
            case 'miss':
              square.classList.add('miss');
              break;

            default:
              break;
          }
        } else {
          switch (item) {
            case 'SHIP':
              square.classList.add('ship');
              break;
            case 'hit':
              square.classList.add('hit');
              break;
            case 'miss':
              square.classList.add('miss');
              break;

            default:
              break;
          }
        }
        j++;
        container.appendChild(square);
      });
      i++;
      j = 0;
    });
  };

  renderBoard(playerOneBoard, boardBox);
  renderBoard(computerBoard, opponentBox);

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

Game();
module.exports = Game;
