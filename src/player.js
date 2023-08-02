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

  return { getName, getGameBoard, attack };
}
