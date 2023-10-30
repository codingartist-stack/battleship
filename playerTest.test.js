const Player = require('./src/player');

test('players turn', () => {
  let testPlayer = Player();
  expect(testPlayer.whosTurn()).toEqual(true);
});

test('switch turn', () => {
  let testPlayer = Player();
  testPlayer.switchTurn();
  expect(testPlayer.whosTurn()).toEqual(false);
});

test('display player attacks', () => {
  let testPlayer = Player();
  let arrayAttacks = Array.from(testPlayer.displayAttacks());
  expect(arrayAttacks).toEqual([]);
});

test('display player attacks', () => {
  let testPlayer = Player();
  testPlayer.randomAttack();
  let arrayAttacks = Array.from(testPlayer.displayAttacks());
  expect(arrayAttacks).toEqual([]);
});
