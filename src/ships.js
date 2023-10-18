// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

export function ship(name, size) {
  const theShip = {
    name,
    size,
    hits: 0,
    sunk: false,
  };

  return {
    theShip,
    hit: () => (theShip.hits += 1),
    sink: () => (theShip.sunk = true),
  };
}
