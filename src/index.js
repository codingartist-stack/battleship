import _ from 'lodash';
import './style.css';
import { Ship } from './ships.js';

//SHIPS
// Carrier = 5
// Battleship = 4
// Cruiser = 3
// Submarine = 3
// Destroyer = 2

const carrier = Ship(5);

carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();
