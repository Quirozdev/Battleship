import GameBoard from './gameBoard';

export default function Player(name) {
  const gameBoard = GameBoard();

  function getName() {
    return name;
  }

  function getGameBoard() {
    return gameBoard;
  }

  function attack(x, y, enemyGameBoard) {
    return enemyGameBoard.receiveAttack(x, y);
  }

  return { getName, getGameBoard, attack };
}
