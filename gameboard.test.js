const GameBoard = require('./src/gameboard');
const Ship = require('./src/ships');

test('create board', () => {
  let testBoard = GameBoard();
  expect(testBoard.displayBoard()).toEqual(
    expect.arrayContaining([
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
    ])
  );
});

test('hit target', () => {
  let testBoard = GameBoard();
  expect(testBoard.receiveAttack(3, 5)).toEqual(
    expect.arrayContaining([
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], ['O'], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
    ])
  );
});

// let ship = new Ship(2);
// let ships = [ship];
// [[HIT, HIT][(MISS, null)]];

test('place Ships', () => {
  //   let carrier = Ship(5);
  //   let battleship = Ship(4);
  //   let cruiser = Ship(3);
  //   let submarine = Ship(3);
  //   let destroyer = Ship(2);
  //   let ships = [carrier, battleship, cruiser, submarine, destroyer];

  let testBoard = GameBoard();

  expect(testBoard.displayBoard()).toEqual(
    expect.arrayContaining([
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
    ])
  );
});
