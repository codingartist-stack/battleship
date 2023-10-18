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

  const hit = () => {
    if (theShip.hits < theShip.size) {
      theShip.hits += 1;
    }
    if (theShip.hits == theShip.size) {
      theShip.sunk = true;
      console.log(`the ${theShip.name} is sunk`);
    }
  };

  return {
    theShip,
    hit,
  };
}
