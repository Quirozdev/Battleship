import GameBoard from './gameBoard';

export default function Player(playerName) {
  const name = playerName;
  const gameBoard = GameBoard();
  // place ships
  // ...
  // play
  // ...

  function getName() {
    return name;
  }

  function getGameBoard() {
    return gameBoard;
  }

  function attack(x, y, enemyGameBoard) {
    enemyGameBoard.receiveAttack(x, y);
  }

  function hasPlacedAllShips() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (gameBoard.allTheShipsHaveBeenPlaced()) {
          resolve(true);
        }
      }, 1000);
    });
  }

  return { getName, getGameBoard, attack, hasPlacedAllShips };
}
