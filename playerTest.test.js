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

test('display player attacks after random attack', () => {
  let testPlayer = Player();
  testPlayer.randomAttack();
  let arrayAttacks = Array.from(testPlayer.displayAttacks());
  expect(arrayAttacks).toEqual([expect.any(String)]);
});

test('display player attacks after two attacks', () => {
  let testPlayer = Player();
  testPlayer.attack(3, 5);
  testPlayer.attack(6, 2);
  let arrayAttacks = Array.from(testPlayer.displayAttacks());
  expect(arrayAttacks).toEqual(['3.5', '6.2']);
});
