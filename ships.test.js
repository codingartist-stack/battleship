const Ship = require('./src/ships');

test('hit increments', () => {
  let carrier = Ship(5);
  expect(carrier.isSunk()).toBeFalsy;
});
