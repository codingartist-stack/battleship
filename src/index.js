import _ from 'lodash';
import './style.css';
import { ship } from './ships.js';

//SHIPS
// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

const carrier = ship('Carrier', 5);
const battleship = ship('Battleship', 4);
const cruiser = ship('Cruiser', 3);
const submarine = ship('Submarine', 3);
const destroyer = ship('Destroyer', 2);

console.log(carrier.theShip);
carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();

carrier.hit();

console.log(carrier.theShip);
