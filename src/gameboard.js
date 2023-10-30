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
    [
      destroyer,
      destroyer,
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      battleship,
      battleship,
      battleship,
      battleship,
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      cruiser,
      cruiser,
      cruiser,
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      submarine,
      submarine,
      submarine,
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      carrier,
      carrier,
      carrier,
      carrier,
      carrier,
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
  ];

  const displayBoard = () => {
    return board.map((row) => {
      return row.map((item) => {
        if (item.hasOwnProperty('hit')) {
          return 'SHIP';
        }
        return item;
      });
    });
  };

  //place ship horizontal and vertical
  //const placeShip = (i, j, isVertical = false) => {}
  //const placeRandom

  const shipsSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isSunk() == false) {
        return false;
      }
    }
    console.log('All ships are Sunk!');
    return true;
  };

  const receiveAttack = (i, j) => {
    if (attackedCoordinates.has(`${i}.${j}`)) {
      let attackedMessage = `This Coordinate has already been attacked.`;
      console.log(attackedMessage);
      return attackedMessage;
    } else if (board[i][j].hasOwnProperty('hit')) {
      attackedCoordinates.add(`${i}.${j}`);
      board[i][j].hit();
      board[i][j] = 'hit';

      shipsSunk();

      return board;
    } else {
      attackedCoordinates.add(`${i}.${j}`);
      board[i][j] = 'miss';

      return board;
    }
  };

  return {
    displayBoard,
    receiveAttack,
    shipsSunk,
  };
}

module.exports = GameBoard;
