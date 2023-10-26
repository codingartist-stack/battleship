const Ship = require('./ships');

let carrier = Ship(5);
let battleship = Ship(4);
let cruiser = Ship(3);
let submarine = Ship(3);
let destroyer = Ship(2);
let ships = [carrier, battleship, cruiser, submarine, destroyer];

function GameBoard() {
  let board = [
    [[destroyer], [destroyer], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ];

  const displayBoard = () => {
    return board;
  };

  const receiveAttack = (i, j) => {
    let hit = 'X';
    let miss = 'O';

    if (board[i][j] == []) {
      board[i][j].push(miss);
    } else {
      board[i][j];
      board[i][j].push(hit);
    }
  };

  return {
    displayBoard,
    receiveAttack,
  };
}

module.exports = GameBoard;
