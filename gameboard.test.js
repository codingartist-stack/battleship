// create a 10 by 10 board
const Gameboard = require('./src/gameboard');

test('create board', () => {
  expect(Gameboard(1)).toContain();
});
