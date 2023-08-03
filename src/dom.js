import './assets/gameBoard.css';

const gameBoardsContainer = document.getElementById('gameboards-container');
const playBtn = document.getElementById('play-btn');

export function DOMHandler(game) {
  const player = game.getPlayer();
  const computer = game.getComputer();

  const playerGameBoard = player.getGameBoard();
  const computerGameBoard = computer.getGameBoard();

  const playerDomGameBoard = createDOMGameBoard(
    playerGameBoard,
    'player-gameboard'
  );
  const computerDomGameBoard = createDOMGameBoard(
    computerGameBoard,
    'computer-gameboard'
  );

  gameBoardsContainer.appendChild(playerDomGameBoard);
  gameBoardsContainer.appendChild(computerDomGameBoard);

  playBtn.addEventListener('click', () => {
    removeShipsContainer();
    playBtn.remove();
    computer.getGameBoard().placeShipsRandomly();
    updateDisplay(computerGameBoard, computerDomGameBoard);
  });

  document
    .getElementById('randomize-ships-btn')
    .addEventListener('click', randomizeShips);

  function randomizeShips() {
    resetShips();
    playerGameBoard.placeShipsRandomly();
    updateDisplay(playerGameBoard, playerDomGameBoard);
    enablePlayButton();
  }

  function enablePlayButton() {
    playBtn.removeAttribute('disabled');
  }

  function disablePlayButton() {
    playBtn.setAttribute('disabled', '');
  }

  function createCell(row, column) {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    cell.setAttribute('data-x-position', row);
    cell.setAttribute('data-y-position', column);

    return cell;
  }

  function updateDisplay(gameBoard, domGameBoard) {
    const gameBoardState = gameBoard.getState();

    const rows = gameBoard.getNumberOfRows();
    const columns = gameBoard.getNumberOfColumns();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const objectAtCurrentCell = gameBoardState[i][j];
        if (objectAtCurrentCell === '') {
          domGameBoard
            .querySelector(
              `.cell[data-x-position="${i}"][data-y-position="${j}"]`
            )
            .classList.remove('ship-cell-placed');
        } else if (objectAtCurrentCell === 'hit') {
          domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          ).textContent = 'hit';
        } else if (objectAtCurrentCell === 'miss') {
          domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          ).textContent = 'miss';
        } else {
          const cell = domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          );
          // to avoid computer gameboard ships from being visible
          /*





            COMMENTED FOR DEBUGGING




          */
          // if (domGameBoard === playerDomGameBoard) {
          cell.classList.add('ship-cell-placed');
          // }
        }
      }
    }
  }

  function removeShipsContainer() {
    document.getElementById('ships-container').remove();
  }

  function createDOMGameBoard(gameBoard, id) {
    const domGameBoard = document.createElement('div');
    domGameBoard.classList.add('gameboard');
    domGameBoard.setAttribute('id', id);
    const rows = gameBoard.getNumberOfRows();
    const columns = gameBoard.getNumberOfColumns();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell = createCell(i, j);
        if (id === 'player-gameboard') {
          addDropFunctionality(cell);
        } else {
          addAtackFunctionality(cell);
        }
        domGameBoard.appendChild(cell);
      }
    }
    domGameBoard.style[
      'grid-template-rows'
    ] = `repeat(${gameBoard.getNumberOfRows()}, 1fr)`;
    domGameBoard.style[
      'grid-template-columns'
    ] = `repeat(${gameBoard.getNumberOfColumns()}, 1fr)`;

    return domGameBoard;
  }

  document.querySelectorAll(`.ship`).forEach((element) => {
    addDragFunctionality(element);
  });

  function hoverCellAndItsNearCells(x, y, shipLength, orientation) {
    for (let i = 0; i < shipLength; i++) {
      let currentCell;
      if (orientation === 'horizontal') {
        currentCell = playerDomGameBoard.querySelector(
          `.cell[data-x-position="${x}"][data-y-position="${y + i}"]`
        );
      } else {
        // vertical
        currentCell = playerDomGameBoard.querySelector(
          `.cell[data-x-position="${x + i}"][data-y-position="${y}"]`
        );
      }
      currentCell.classList.add('hovered-cell');
    }
  }

  function removeHoverCellAndNearCells() {
    playerDomGameBoard
      .querySelectorAll('.hovered-cell')
      .forEach((cell) => cell.classList.remove('hovered-cell'));
  }

  document
    .getElementById('rotate-ships-btn')
    .addEventListener('click', rotateShips);

  function rotateShips() {
    document.querySelectorAll('.ship').forEach((ship) => {
      const currentOrientation = ship.getAttribute('data-ship-orientation');
      const rotatedOrientation =
        currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
      ship.setAttribute('data-ship-orientation', rotatedOrientation);
    });
  }

  document.getElementById('reset-ships-btn').addEventListener('click', () => {
    resetShips();
    updateDisplay(playerGameBoard, playerDomGameBoard);
  });

  function resetShips() {
    disablePlayButton();
    playerGameBoard.clearGameBoard();
    document.querySelectorAll('.placed-ship').forEach((placedShip) => {
      placedShip.classList.remove('placed-ship');
      placedShip.classList.remove('dragging-element');
      addDragFunctionality(placedShip);
    });
  }

  let currentDraggingElement;

  function addDropFunctionality(element) {
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (!currentDraggingElement) return;
      removeHoverCellAndNearCells();
      const x = Number(element.getAttribute('data-x-position'));
      const y = Number(element.getAttribute('data-y-position'));
      const shipLength = Number(
        currentDraggingElement.getAttribute('data-ship-length')
      );
      const orientation = currentDraggingElement.getAttribute(
        'data-ship-orientation'
      );
      if (playerGameBoard.isShipPlaceValid(x, y, shipLength, orientation)) {
        console.log('valid');
        hoverCellAndItsNearCells(x, y, shipLength, orientation);
      } else {
        console.log('invalid');
      }
    });

    element.addEventListener('drop', (e) => {
      e.preventDefault();
      if (!currentDraggingElement) return;
      const cellToPlaceShip = e.target;
      const x = Number(cellToPlaceShip.getAttribute('data-x-position'));
      const y = Number(cellToPlaceShip.getAttribute('data-y-position'));
      const shipLength = Number(
        currentDraggingElement.getAttribute('data-ship-length')
      );
      const orientation = currentDraggingElement.getAttribute(
        'data-ship-orientation'
      );
      if (playerGameBoard.isShipPlaceValid(x, y, shipLength, orientation)) {
        playerGameBoard.placeShip(x, y, shipLength, orientation);
        currentDraggingElement.classList.add('placed-ship');
        updateDisplay(playerGameBoard, playerDomGameBoard);
        removeDragFunctionality(currentDraggingElement);
        removeHoverCellAndNearCells();
        if (playerGameBoard.allTheShipsHaveBeenPlaced()) {
          enablePlayButton();
        }
      }
      currentDraggingElement = null;
    });
  }

  function addAtackFunctionality(cell) {
    cell.addEventListener('click', () => {
      if (game.getCurrentPlayerTurn() !== player) {
        return;
      }
      const x = Number(cell.getAttribute('data-x-position'));
      const y = Number(cell.getAttribute('data-y-position'));
      const [succesfulAttack, msg] = player.attack(x, y, computerGameBoard);
      if (succesfulAttack) {
        game.setCurrentPlayerTurn(computer);
        updateDisplay(computerGameBoard, computerDomGameBoard);
        if (computerGameBoard.allTheShipsHaveBeenSunk()) {
          game.end(player);
          return;
        }
        computer.attackRandomly(playerGameBoard);
        updateDisplay(playerGameBoard, playerDomGameBoard);
        if (playerGameBoard.allTheShipsHaveBeenSunk()) {
          game.end(computer);
          return;
        }
        game.setCurrentPlayerTurn(player);
      }
    });
  }

  function onDragStart(event) {
    currentDraggingElement = event.currentTarget;
    currentDraggingElement.classList.add('dragging-element');
  }

  function onDragEnd(event) {
    currentDraggingElement = null;
    event.target.classList.remove('dragging-element');
    playerDomGameBoard
      .querySelectorAll('.hovered-cell')
      .forEach((cell) => cell.classList.remove('hovered-cell'));
  }

  function addDragFunctionality(element) {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', onDragStart);
    element.addEventListener('dragend', onDragEnd);
  }

  function removeDragFunctionality(element) {
    console.log(element);
    element.removeAttribute('draggable');
    element.removeEventListener('dragstart', onDragStart);
    element.removeEventListener('dragend', onDragEnd);
  }

  return { updateDisplay };
}
