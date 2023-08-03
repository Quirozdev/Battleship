import Player from './player';
import DOMHandler from './dom';

const player = new Player('luis');

const computer = new Player('computer');

// const domHandler = DOMHandler(player.getGameBoard(), computer.getGameBoard());

const playerDomHandler = DOMHandler(player.getGameBoard(), 'player');

// const computerDomHandler = DOMHandler(computer.getGameBoard(), 'computer');

playerDomHandler.displayGameboard();

// await player.hasPlacedAllShips();

// computerDomHandler.displayGameboard();

console.log('xd');

// TODOS
/*
-resolver lo de repetir eventos, talvez cambiar de posicion a .ships
-agregar mas validaciones al posicionamiento de las naves
-rotar nave
-resetear posiciones
*/

// const computerDomHandler = DOMHandler(computer.getGameBoard(), 'computer');

// computerDomHandler.displayGameboard();

// playerGameboard.placeShip(0, 0, 5, 'horizontal');
// playerGameboard.placeShip(9, 3, 4, 'horizontal');
// playerGameboard.placeShip(5, 1, 3, 'vertical');
// playerGameboard.placeShip(6, 5, 3, 'horizontal');
// playerGameboard.placeShip(8, 7, 2, 'horizontal');
