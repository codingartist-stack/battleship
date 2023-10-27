const GameBoard = require('./src/gameboard');
const Ship = require('./src/ships');


test('hit target', () => {
  let testBoard = GameBoard();
  testBoard.receiveAttack(3, 5);
  expect(testBoard.displayBoard()).toEqual([
    ['SHIP', 'SHIP', null, null, null, null, null, null, null, null],
    ['SHIP', 'SHIP', 'SHIP', 'SHIP', null, null, null, null, null, null],
    ['SHIP', 'SHIP', 'SHIP', null, null, null, null, null, null, null],
    ['SHIP', 'SHIP', 'SHIP', null, null, 'miss', null, null, null, null],
    ['SHIP', 'SHIP', 'SHIP', 'SHIP', 'SHIP', null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

// let ship = new Ship(2);
// let ships = [ship];
// [[HIT, HIT][(MISS, null)]];

// test('hit ship', () => {
//   let testBoard = GameBoard();
//   testBoard.receiveAttack(0, 0);

//   expect(testBoard.displayBoard()).toEqual(
//     expect.arrayContaining([
//       [['hit'], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//     ])
//   );
// });

// test('hit ship twice', () => {
//   let testBoard = GameBoard();
//   testBoard.receiveAttack(0, 0);
//   testBoard.receiveAttack(0, 0);

//   expect(testBoard.displayBoard()).toEqual(
//     expect.arrayContaining([
//       [['destroyer', 'X'], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], [], []],
//     ])
//   );
// });
