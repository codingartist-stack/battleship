const GameBoard = require('../src/gameboard');

// test('board set up', () => {
//   let testBoard = GameBoard();
//   expect(testBoard.displayBoard()).toEqual([
//     [
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//   ]);
// });

// test('miss hit', () => {
//   let testHit = GameBoard();
//   testHit.receiveAttack(3, 5);
//   expect(testHit.displayBoard()).toEqual([
//     [
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'miss',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//   ]);
// });

// test('hit and sink destroyer', () => {
//   let testDestroyer = GameBoard();
//   testDestroyer.receiveAttack(3, 5);
//   testDestroyer.receiveAttack(0, 0);
//   testDestroyer.receiveAttack(0, 1);
//   expect(testDestroyer.displayBoard()).toEqual([
//     [
//       'hit',
//       'hit',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'miss',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'SHIP',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//     [
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//       'water',
//     ],
//   ]);
// });

test('sink all ships', () => {
  let testAllShips = GameBoard();
  testAllShips.receiveAttack(0, 0);
  testAllShips.receiveAttack(0, 1);
  testAllShips.receiveAttack(0, 2);

  testAllShips.receiveAttack(1, 0);
  testAllShips.receiveAttack(1, 1);
  testAllShips.receiveAttack(1, 2);
  testAllShips.receiveAttack(1, 3);

  testAllShips.receiveAttack(2, 0);
  testAllShips.receiveAttack(2, 1);
  testAllShips.receiveAttack(2, 2);

  testAllShips.receiveAttack(3, 0);
  testAllShips.receiveAttack(3, 1);
  testAllShips.receiveAttack(3, 2);

  testAllShips.receiveAttack(4, 0);
  testAllShips.receiveAttack(4, 1);
  testAllShips.receiveAttack(4, 2);
  testAllShips.receiveAttack(4, 3);
  testAllShips.receiveAttack(4, 4);

  expect(testAllShips.displayBoard()).toEqual([
    [
      'hit',
      'hit',
      'miss',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'hit',
      'hit',
      'hit',
      'hit',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'hit',
      'hit',
      'hit',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'hit',
      'hit',
      'hit',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
      'water',
    ],
    [
      'hit',
      'hit',
      'hit',
      'hit',
      'hit',
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
  ]);
});

test('sink all ships return true', () => {
  let testAllShips = GameBoard();
  testAllShips.receiveAttack(0, 0);
  testAllShips.receiveAttack(0, 1);
  testAllShips.receiveAttack(0, 2);

  testAllShips.receiveAttack(1, 0);
  testAllShips.receiveAttack(1, 1);
  testAllShips.receiveAttack(1, 2);
  testAllShips.receiveAttack(1, 3);

  testAllShips.receiveAttack(2, 0);
  testAllShips.receiveAttack(2, 1);
  testAllShips.receiveAttack(2, 2);

  testAllShips.receiveAttack(3, 0);
  testAllShips.receiveAttack(3, 1);
  testAllShips.receiveAttack(3, 2);

  testAllShips.receiveAttack(4, 0);
  testAllShips.receiveAttack(4, 1);
  testAllShips.receiveAttack(4, 2);
  testAllShips.receiveAttack(4, 3);
  testAllShips.receiveAttack(4, 4);

  expect(testAllShips.shipsSunk()).toEqual(true);
});

test('invalid coordinate', () => {
  let testBoard = GameBoard();

  expect(testBoard.receiveAttack(11, 6)).toMatch(
    'This coordinate is invalid. (values should be 0 to 9)'
  );
});
