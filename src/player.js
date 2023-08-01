import GameBoard from './gameBoard';

export default function Player() {
  const gameBoard = GameBoard();
  // place ships
  // ...
  // play
  // ...

  function attack(x, y, enemyGameBoard) {
    enemyGameBoard.receiveAttack(x, y);
  }
}
