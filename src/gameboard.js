// import Ship from './ships';

//usually 10 x 10
// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

function GameBoard() {
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

  // let carrier = Ship(5);
  // let battleship = Ship(4);
  // let cruiser = Ship(3);
  // let submarine = Ship(3);
  // let destroyer = Ship(2);

  // let ships = [carrier, battleship, cruiser, submarine, destroyer];

  const displayBoard = () => {
    return board;
  };

  const receiveAttack = (i, j) => {
    let hit = 'X';
    let miss = 'O';

    if (board[i][j] == 'S') {
      board[i][j].push(hit);
    } else {
      board[i][j].push(miss);
    }
    return board;
  };

  return {
    displayBoard,
    receiveAttack,
  };
}

module.exports = GameBoard;
