import _ from 'lodash';
import './style.css';
const GameBoard = require('./gameboard');
const player = require('./player');

// HTML
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

    container.innerHTML = '';

    boardArray.forEach((row) => {
      row.forEach((item) => {
        let square = document.createElement('div');
        square.classList.add('boardSquare');
        square.dataset.coordinateX = `${i}`;
        square.dataset.coordinateY = `${j}`;
        square.dataset.state = 'water';

        if (board == computerBoard) {
          switch (item) {
            case 'hit':
              square.classList.add('hit');
              square.dataset.state = 'hitShip';
              break;
            case 'miss':
              square.classList.add('miss');
              square.dataset.state = 'miss';
              break;

            default:
              break;
          }
        } else {
          switch (item) {
            case 'SHIP':
              square.classList.add('ship');
              square.dataset.state = 'ship';
              break;
            case 'hit':
              square.classList.add('hit');
              square.dataset.state = 'hitShip';
              break;
            case 'miss':
              square.classList.add('miss');
              square.dataset.state = 'miss';
              break;

            default:
              break;
          }
        }
        j++;
        container.appendChild(square);
        square.addEventListener('click', (e) => {
          console.log(
            `${square.dataset.coordinateX}, ${square.dataset.coordinateY}`
          );

          board.receiveAttack(
            square.dataset.coordinateX,
            square.dataset.coordinateY
          );
          renderBoard(board, container);
          swapTurn();
        });
      });
      i++;
      j = 0;
    });
  };

  const initialize = () => {
    renderBoard(playerOneBoard, boardBox);
    renderBoard(computerBoard, opponentBox);
  };
  initialize();

  let gameStillGoing = true;

  //   const executeTurn = (player, opponentBoard) => {
  //     // do player choice, rendering stuff
  //     const coordinate = player.getAttack();

  //     opponentBoard.receiveAttack(coordinate.x, coordinate.y);

  //     gameStillGoing = !opponentBoard.shipsSunk();
  //   };

  let currentPlayer = playerOne;
  let opponentBoard = computerBoard;

  const swapTurn = () => {
    if (currentPlayer === playerOne) {
      currentPlayer = computer;
      opponentBoard = playerOneBoard;

      let randomCoor = computer.randomAttack();
      console.log(randomCoor);

      opponentBoard.receiveAttack(randomCoor.x, randomCoor.y);
      renderBoard(playerOneBoard, boardBox);

      swapTurn();
    } else {
      currentPlayer = playerOne;
      opponentBoard = computerBoard;
    }
  };

  //   const takeTurn = () => {
  //     // do stuff
  //     executeTurn(currentPlayer, opponentBoard);
  //     swapTurn();
  //   };
  //game loop

  //   while (gameStillGoing) {
  //     takeTurn();
  //   }
}

Game();
// module.exports = Game;
