import Player from './player';
import Computer from './computer';
import { DOMHandler } from './dom';
import Game from './game';
import './assets/style.css';

const player = new Player('Player');

const computer = new Computer('Computer');

const game = Game(player, computer);

DOMHandler(game);
