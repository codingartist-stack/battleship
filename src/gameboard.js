const Ship = require('./ships');

function GameBoard() {
  let carrier = Ship(5);
  let battleship = Ship(4);
  let cruiser = Ship(3);
  let submarine = Ship(3);
  let destroyer = Ship(2);
  let ships = [carrier, battleship, cruiser, submarine, destroyer];

  let attackedCoordinates = new Set();

  let board = [
    [[], [], [], [], [], [], [], [], [], []],
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

  board[0][0].push('destroyer');

  const displayBoard = () => {
    return board;
  };

  const receiveAttack = (i, j) => {
    if (attackedCoordinates.has((i, j))) {
      let attackedMessage = `This Coordinate has already been attacked.`;
      console.log(attackedMessage);
      return attackedMessage;
    } else if (board[i][j] == 'destroyer') {
      board[i][j].push('X');
      destroyer.hit();
      attackedCoordinates.add((i, j));
      return board;
    } else {
      board[i][j].push('O');
      attackedCoordinates.add((i, j));
      return board;
    }
  };

  return {
    displayBoard,
    receiveAttack,
  };
}

module.exports = GameBoard;
