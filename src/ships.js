// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

export function Ship(name, size) {
  const shipData = {
    name,
    size,
    hits: 0,
    sunk: false,
  };

  const hit = () => {
    if (shipData.hits < shipData.size) {
      shipData.hits += 1;
    }
    if (shipData.hits == shipData.size) {
      shipData.sunk = true;
      console.log(`the ${shipData.name} is sunk`);
    }
  };

  const isSunk = () => {
    return shipData.sunk;
  };

  return {
    shipData,
    hit,
    isSunk,
  };
}
