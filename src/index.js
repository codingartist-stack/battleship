import _ from 'lodash';
import './style.css';
const GameBoard = require('./gameboard');
const player = require('./player');

const header = document.createElement('header');
const mainContainer = document.createElement('main');

document.body.appendChild(header);
document.body.appendChild(mainContainer);

function Game() {
  //create two players
  let playerOne = player(false);
  let playerOneBoard = GameBoard();

  let computer = player(true);
  let computerBoard = GameBoard();

  const renderBoard = (board) => {
    const boardContainer = document.createElement('div');
    const boardBox = document.createElement('div');
    boardBox.classList.add('board');
    const boardTitle = document.createElement('h2');

    let boardArray = board.displayBoard();

    boardArray.forEach((row) => {
      row.forEach((item) => {
        let square = document.createElement('div');
        square.classList.add('boardSquare');

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

        boardBox.appendChild(square);
      });
    });

    if (board == computerBoard) {
      boardTitle.innerText = 'opponent board';
    } else {
      boardTitle.innerText = 'your board';
    }

    boardContainer.appendChild(boardBox);
    boardContainer.appendChild(boardTitle);
    mainContainer.appendChild(boardContainer);
  };

  renderBoard(playerOneBoard);

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
