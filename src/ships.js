// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

export function ship(name, size) {
  return {
    name,
    size,
    hits: 0,
    sunk: false,
  };
}
