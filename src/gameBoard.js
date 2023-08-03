import Ship from './ship';

export default function GameBoard(xLength = 10, yLength = 10) {
  const board = createBoard(xLength, yLength);
  // this is an array that will keep all the placed Ship objects, and its going to be useful
  // for the allTheShipsHaveBeenSunk method (to avoid double looping the board and searching where are the ships)
  let placedShips = [];

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

  function getState() {
    return board;
  }

  function getNumberOfRows() {
    return board.length;
  }

  function getNumberOfColumns() {
    return board[0].length;
  }

  function ensureShipPlaceIsNotOutOfBounds(endingPosition, limit) {
    return endingPosition < limit;
  }

  function isThereAShipHorizontally(x, y, shipLength) {
    for (let i = y; i < y + shipLength; i++) {
      if (typeof board[x][i] === 'object') {
        return true;
      }
    }
    return false;
  }

  function isThereAShipVertically(x, y, shipLength) {
    for (let i = x; i < x + shipLength; i++) {
      if (typeof board[i][y] === 'object') {
        return true;
      }
    }
    return false;
  }

  function isShipPlaceValid(x, y, shipLength, shipOrientation = 'horizontal') {
    const isShipPlacementOutOfBounds =
      shipOrientation === 'horizontal'
        ? ensureShipPlaceIsNotOutOfBounds(
            y + shipLength - 1,
            getNumberOfColumns()
          )
        : ensureShipPlaceIsNotOutOfBounds(
            x + shipLength - 1,
            getNumberOfRows()
          );

    if (!isShipPlacementOutOfBounds) {
      return false;
    }

    const isThereAShipAlready =
      shipOrientation === 'horizontal'
        ? isThereAShipHorizontally(x, y, shipLength)
        : isThereAShipVertically(x, y, shipLength);

    if (isThereAShipAlready) {
      return false;
    }

    return true;
  }

  function placeShip(x, y, shipLength, shipOrientation = 'horizontal') {
    if (shipOrientation === 'horizontal') {
      placeShipHorizontally(x, y, shipLength);
    } else {
      placeShipVertically(x, y, shipLength);
    }
  }

  function placeShipVertically(x, y, shipLength) {
    const ship = Ship(shipLength);
    for (let i = x; i < x + shipLength; i++) {
      board[i][y] = ship;
    }
    placedShips.push(ship);
  }

  function placeShipHorizontally(x, y, shipLength) {
    const ship = Ship(shipLength);
    for (let i = y; i < y + shipLength; i++) {
      board[x][i] = ship;
    }
    placedShips.push(ship);
  }

  function placeShipRandomly(shipLength) {
    const orientations = ['horizontal', 'vertical'];
    while (true) {
      const x = Math.floor(Math.random() * getNumberOfRows());
      const y = Math.floor(Math.random() * getNumberOfColumns());
      const orientation =
        orientations[Math.floor(Math.random() * orientations.length)];
      if (isShipPlaceValid(x, y, shipLength, orientation)) {
        placeShip(x, y, shipLength, orientation);
        break;
      }
    }
  }

  function placeShipsRandomly() {
    const shipLengths = [5, 4, 3, 3, 2];
    while (!allTheShipsHaveBeenPlaced()) {
      shipLengths.forEach((shipLength) => {
        placeShipRandomly(shipLength);
      });
    }
  }

  function receiveAttack(x, y) {
    const objectAtCurrentCordinate = board[x][y];
    // coordinate already hit
    if (
      objectAtCurrentCordinate === 'hit' ||
      objectAtCurrentCordinate === 'miss'
    ) {
      return [false, 'Cell already hit'];
    }
    // miss
    if (objectAtCurrentCordinate === '') {
      board[x][y] = 'miss';
      return [true, 'Miss'];
    }
    // there is a ship
    objectAtCurrentCordinate.hit();
    board[x][y] = 'hit';
    return [true, 'Succesful hit'];
  }

  function allTheShipsHaveBeenPlaced() {
    return placedShips.length === 5;
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

  function clearGameBoard() {
    for (let i = 0; i < xLength; i++) {
      for (let j = 0; j < yLength; j++) {
        board[i][j] = '';
      }
    }
    placedShips = [];
  }

  return {
    getState,
    getNumberOfRows,
    getNumberOfColumns,
    isShipPlaceValid,
    placeShip,
    receiveAttack,
    placeShipsRandomly,
    allTheShipsHaveBeenPlaced,
    allTheShipsHaveBeenSunk,
    clearGameBoard,
  };
}
