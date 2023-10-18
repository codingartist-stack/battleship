// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

export function ship(name, size) {
  let hits = 0;
  let sunk = false;
  //hit function that increases

  const hit = () => {
    hits += 1;
  };

  const theShip = {
    name,
    size,
    hits: 0,
    sunk: false,
  };

  return {
    theShip,
    hit,
  };
}

const carrier = ship('Carrier', 5);
carrier.hit();

console.log(carrier.theShip);
