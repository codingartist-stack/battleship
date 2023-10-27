// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

function Ship(length) {
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hits++;
    console.log(`hit ship`);

    if (hits >= length) {
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
