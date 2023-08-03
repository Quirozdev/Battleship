import './assets/gameBoard.css';

export default function DOMHandler(gameBoard, gameBoardId) {
  const gameBoardsContainer = document.getElementById('gameboards-container');
  const domGameBoard = document.createElement('div');
  domGameBoard.setAttribute('id', gameBoardId);
  domGameBoard.classList.add('gameboard');

  const playBtn = document.getElementById('play-btn');

  playBtn.addEventListener('click', () => {
    removeShipsContainer();
    playBtn.remove();
  });

  document
    .getElementById('randomize-ships-btn')
    .addEventListener('click', randomizeShips);

  function randomizeShips() {
    resetShips();
    gameBoard.placeShipsRandomly();
    updateDisplay();
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
    // atack
    cell.addEventListener('click', () => {
      console.log(
        cell.getAttribute('data-x-position'),
        cell.getAttribute('data-y-position')
      );
    });

    addDropFunctionality(cell);

    return cell;
  }

  function updateDisplay() {
    const gameBoardState = gameBoard.getState();
    const domGameBoard = document.querySelector(`.gameboard#${gameBoardId}`);
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
        } else {
          const cell = domGameBoard.querySelector(
            `.cell[data-x-position="${i}"][data-y-position="${j}"]`
          );
          cell.classList.add('ship-cell-placed');
        }
      }
    }
  }

  function removeShipsContainer() {
    document.getElementById('ships-container').remove();
  }

  function displayGameboard() {
    const rows = gameBoard.getNumberOfRows();
    const columns = gameBoard.getNumberOfColumns();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        domGameBoard.appendChild(createCell(i, j));
      }
    }
    domGameBoard.style['grid-template-rows'] = 'repeat(10, 1fr)';
    domGameBoard.style['grid-template-columns'] = 'repeat(10, 1fr)';

    gameBoardsContainer.appendChild(domGameBoard);
  }

  // esta se puede repetir al crear a la computadora CAMBIAR
  document.querySelectorAll(`.ship`).forEach((element) => {
    addDragFunctionality(element);
  });

  function hoverCellAndItsNearCells(x, y, shipLength, orientation) {
    for (let i = 0; i < shipLength; i++) {
      let currentCell;
      if (orientation === 'horizontal') {
        currentCell = document.querySelector(
          `.cell[data-x-position="${x}"][data-y-position="${y + i}"]`
        );
      } else {
        // vertical
        currentCell = document.querySelector(
          `.cell[data-x-position="${x + i}"][data-y-position="${y}"]`
        );
      }
      currentCell.classList.add('hovered-cell');
    }
  }

  function removeHoverCellAndNearCells() {
    domGameBoard
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
    updateDisplay();
  });

  function resetShips() {
    disablePlayButton();
    gameBoard.clearGameBoard();
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
      if (gameBoard.isShipPlaceValid(x, y, shipLength, orientation)) {
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
      if (gameBoard.isShipPlaceValid(x, y, shipLength, orientation)) {
        gameBoard.placeShip(x, y, shipLength, orientation);
        currentDraggingElement.classList.add('placed-ship');
        updateDisplay();
        removeDragFunctionality(currentDraggingElement);
        removeHoverCellAndNearCells();
        if (gameBoard.allTheShipsHaveBeenPlaced()) {
          enablePlayButton();
        }
      }
      currentDraggingElement = null;
    });
  }

  function onDragStart(event) {
    currentDraggingElement = event.currentTarget;
    currentDraggingElement.classList.add('dragging-element');
  }

  function onDragEnd(event) {
    currentDraggingElement = null;
    event.target.classList.remove('dragging-element');
    document
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

  return { displayGameboard, updateDisplay };
}
