import Player from './player';
import Computer from './computer';
import { DOMHandler } from './dom';
import Game from './game';

const player = new Player('Luis');

const computer = new Computer('Computer');

const game = Game(player, computer);

const domHandler = DOMHandler(game);
