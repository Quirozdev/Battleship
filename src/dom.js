import './assets/game.css';

export function DOMHandler(game) {
  const gameBoardsContainer = document.getElementById('gameboards-container');
  const gameMessage = document.getElementById('message');
  const playBtn = document.getElementById('play-btn');

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
  hideComputerGameBoard();

  gameBoardsContainer.appendChild(playerDomGameBoard);
  gameBoardsContainer.appendChild(computerDomGameBoard);

  playBtn.addEventListener('click', () => {
    removeShipsContainer();
    playBtn.remove();
    computer.getGameBoard().placeShipsRandomly();
    showComputerGameBoard();
    updateDisplay(computerGameBoard, computerDomGameBoard);
    setCurrentTurnMessage();
  });

  function hideComputerGameBoard() {
    computerDomGameBoard.style.display = 'none';
  }

  function showComputerGameBoard() {
    computerDomGameBoard.style.display = 'grid';
  }

  function showComputerShips() {
    computerDomGameBoard
      .querySelectorAll('.ship-cell-placed')
      .forEach((ship) => {
        ship.classList.remove('invisible');
      });
  }

  document
    .getElementById('randomize-ships-btn')
    .addEventListener('click', randomizeShips);

  function randomizeShips() {
    resetShips();
    document.querySelectorAll('.ship').forEach((ship) => {
      removeDragFunctionality(ship);
      ship.classList.add('placed-ship');
    });
    playerGameBoard.placeShipsRandomly();
    updateDisplay(playerGameBoard, playerDomGameBoard);
    enablePlayButton();
  }

  function enablePlayButton() {
    playBtn.style.visibility = 'visible';
  }

  function disablePlayButton() {
    playBtn.style.visibility = 'hidden';
  }

  function setCurrentTurnMessage() {
    gameMessage.textContent = `It's ${game
      .getCurrentPlayerTurn()
      .getName()} turn`;
  }

  function setWinner(winner) {
    gameMessage.textContent = `${winner.getName()} won!!`;
    const replayBtn = document.createElement('button');
    replayBtn.textContent = 'Replay';
    replayBtn.setAttribute('id', 'replay-btn');
    replayBtn.addEventListener('click', () => {
      location.reload();
    });
    document
      .getElementById('message-and-play-container')
      .appendChild(replayBtn);
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
        const domGameBoardCell = domGameBoard.querySelector(
          `.cell[data-x-position="${i}"][data-y-position="${j}"]`
        );
        if (objectAtCurrentCell === '') {
          domGameBoardCell.classList.remove('ship-cell-placed');
        } else if (objectAtCurrentCell === 'hit') {
          domGameBoardCell.textContent = '🎯';
        } else if (objectAtCurrentCell === 'miss') {
          domGameBoardCell.textContent = '🌊';
        } else {
          // to avoid computer gameboard ships from being visible
          if (domGameBoard === playerDomGameBoard) {
            domGameBoardCell.classList.add('ship-cell-placed');
          } else {
            domGameBoardCell.classList.add('ship-cell-placed');
            domGameBoardCell.classList.add('invisible');
          }
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

  // this is a simulation of the game loop
  function addAtackFunctionality(cell) {
    cell.addEventListener('click', async () => {
      // to avoid the player from attacking multiple times before the computer
      if (game.getCurrentPlayerTurn() !== player) {
        return;
      }
      const x = Number(cell.getAttribute('data-x-position'));
      const y = Number(cell.getAttribute('data-y-position'));
      const [succesfulAttack, msg] = player.attack(x, y, computerGameBoard);
      if (succesfulAttack) {
        cell.classList.add('already-hit-cell');
        game.setCurrentPlayerTurn(computer);
        setCurrentTurnMessage();
        updateDisplay(computerGameBoard, computerDomGameBoard);
        if (computerGameBoard.allTheShipsHaveBeenSunk()) {
          showComputerShips();
          setWinner(player);
          return;
        }
        setCurrentTurnMessage();
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(computer.attackRandomly(playerGameBoard));
          }, 1500);
        });
        updateDisplay(playerGameBoard, playerDomGameBoard);
        if (playerGameBoard.allTheShipsHaveBeenSunk()) {
          showComputerShips();
          setWinner(computer);
          return;
        }
        game.setCurrentPlayerTurn(player);
        setCurrentTurnMessage();
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
