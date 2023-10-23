import Ship from './ships';

//usually 10 x 10
// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

function Gameboard(size) {
  let board = [];
  const initialize = () => {
    for (let i = 0; i < size; i++) {
      board[i] = [];
      for (let j = 0; j < size; j++) {
        board[i][j] = [];
      }
    }
  };

  initialize();

  const placeShip = (i, j, shipLength) => {
    //I will only have to incerment on number.
    Ship(shipLength);

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
    board,
    placeShip,
    receiveAttack,
  };
}

module.exports = Gameboard;
