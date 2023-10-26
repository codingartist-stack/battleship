const Ship = require('./ships');

let carrier = Ship(5);
let battleship = Ship(4);
let cruiser = Ship(3);
let submarine = Ship(3);
let destroyer = Ship(2);
let ships = [carrier, battleship, cruiser, submarine, destroyer];

let attackedCoordinates = new Set();

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
    if (attackedCoordinates.has(i, j)) {
      let attackedMessage = `This Coordinate has already been attacked.`;
      return attackedMessage;
    } else if (board[i][j] == []) {
      board[i][j].push('O');
      attackedCoordinates.add(i, j);
    } else {
      board[i][j].hit();
      board[i][j].push('X');
      attackedCoordinates.add(i, j);
    }
  };

  return {
    displayBoard,
    receiveAttack,
  };
}

module.exports = GameBoard;
