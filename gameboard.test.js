const GameBoard = require('./src/gameboard');

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
      [[], [], [], [], [], ['X'], [], [], [], []],
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
