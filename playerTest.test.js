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
