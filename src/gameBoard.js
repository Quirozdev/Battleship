import Ship from './ship';

export default function GameBoard(xLength = 10, yLength = 10) {
  const board = createBoard(xLength, yLength);
  // this is an array that will keep all the placed Ship objects, and its going to be useful
  // for the allTheShipsHaveBeenSunk method (to avoid double looping the board and searching where are the ships)
  const placedShips = [];

  function createBoard(xLength, yLength) {
    const newBoard = [];
    for (let i = 0; i < xLength; i++) {
      const row = [];
      for (let j = 0; j < yLength; j++) {
        row[j] = '';
      }
      newBoard.push(row);
    }
    return newBoard;
  }

  function getBoardState() {
    return board;
  }

  function isShipPlaceValid(x, y, shipLength, shipOrientation) {
    if (shipOrientation === 'horizontal') {
      return x + shipLength - 1 < board.length;
    }
    // vertical
    return y + shipLength - 1 < board[0].length;
  }

  function placeShip(x, y, shipLength, shipOrientation = 'horizontal') {
    if (!isShipPlaceValid(x, y, shipLength, shipOrientation)) {
      return false;
    }
    if (shipOrientation === 'horizontal') {
      placeShipHorizontally(x, y, shipLength);
    } else {
      placeShipVertically(x, y, shipLength);
    }
    return true;
  }

  function placeShipHorizontally(x, y, shipLength) {
    const ship = Ship(shipLength);
    for (let i = x; i < x + shipLength; i++) {
      board[i][y] = ship;
    }
    placedShips.push(ship);
  }

  function placeShipVertically(x, y, shipLength) {
    const ship = Ship(shipLength);
    for (let i = y; i < y + shipLength; i++) {
      board[x][i] = ship;
    }
    placedShips.push(ship);
  }

  function receiveAttack(x, y) {
    const objectAtCurrentCordinate = board[x][y];
    // coordinate already hit
    if (objectAtCurrentCordinate === 'hit') {
      return [false, 'Cell already hit'];
    }
    // miss
    if (objectAtCurrentCordinate === '') {
      board[x][y] = 'hit';
      return [true, 'Miss'];
    }
    // there is a ship
    objectAtCurrentCordinate.hit();
    board[x][y] = 'hit';
    return [true, 'Succesful hit'];
  }

  function allTheShipsHaveBeenSunk() {
    // if atleast one ship hasn't been sunk, then return false
    for (let i = 0; i < placedShips.length; i++) {
      if (!placedShips[i].isSunk()) {
        return false;
      }
    }
    return true;
  }

  return { getBoardState, placeShip, receiveAttack, allTheShipsHaveBeenSunk };
}
