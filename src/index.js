import _ from 'lodash';
import './style.css';
import { Ship } from './ships.js';

//SHIPS
// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

const carrier = Ship('Carrier', 5);

console.log(carrier.shipInfo);
carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();

carrier.hit();

console.log(carrier.isSunk());
console.log(carrier.shipInfo);
