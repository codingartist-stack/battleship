// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

export function Ship(size) {
  let hits = 0;

  const hit = () => {
    if (hits < size) {
      hits++;
    }
    if (shipInfo.hits == shipInfo.size) {
      shipInfo.sunk = true;
      console.log(`the ${shipInfo.name} is sunk`);
    }
  };

  const isSunk = () => {
    return shipInfo.sunk;
  };

  return {
    hit,
    isSunk,
  };
}
