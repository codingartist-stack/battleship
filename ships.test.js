const Ship = require('./src/ships');

test('isSunk false at first', () => {
  let carrier = Ship(5);
  expect(carrier.isSunk()).toBe(false);
});

test('isSunk true after being hits 5 times', () => {
  let carrier = Ship(5);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});
