import GameBoard from './gameBoard';

export default function Computer(name) {
  const gameBoard = GameBoard();
  // to prevent the ai from hitting the same spot
  const notAttackedCells = createPossibleHits();

  function createPossibleHits() {
    const cells = [];
    for (let i = 0; i < gameBoard.getNumberOfRows(); i++) {
      for (let j = 0; j < gameBoard.getNumberOfColumns(); j++) {
        cells.push({ x: i, y: j });
      }
    }
    return cells;
  }

  function getName() {
    return name;
  }

  function getGameBoard() {
    return gameBoard;
  }

  function attackRandomly(enemyGameBoard) {
    const cellToAttackIndex = Math.floor(
      Math.random() * notAttackedCells.length
    );
    const { x, y } = notAttackedCells[cellToAttackIndex];
    notAttackedCells.splice(cellToAttackIndex, 1);
    return enemyGameBoard.receiveAttack(x, y);
  }

  return { getName, getGameBoard, attackRandomly };
}
