// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

export function Ship(size) {
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hits++;
    if (hits >= size) {
      sunk = true;
      console.log(`ship is sunk`);
    }
  };

  const isSunk = () => {
    return sunk;
  };

  return {
    hit,
    isSunk,
  };
}

module.exports = Ship;
