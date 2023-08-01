import GameBoard from './gameBoard';

let gameBoard;

beforeEach(() => {
  gameBoard = GameBoard(10, 10);
});

describe('gameboard', () => {
  test('is being created correctly', () => {
    expect(gameBoard.getBoardState().length).toBe(10);
    expect(gameBoard.getBoardState().length).toBe(10);
  });

  test('is placing ships only in valid positions', () => {
    expect(gameBoard.placeShip(0, 0, 4, 'horizontal')).toBe(true);
    expect(gameBoard.placeShip(0, 7, 3, 'vertical')).toBe(true);
    expect(gameBoard.placeShip(0, 7, 3, 'horizontal')).toBe(true);
    expect(gameBoard.placeShip(0, 7, 5, 'horizontal')).toBe(true);

    expect(gameBoard.placeShip(5, 7, 4, 'vertical')).toBe(false);
    expect(gameBoard.placeShip(0, 7, 5, 'vertical')).toBe(false);
    expect(gameBoard.placeShip(7, 2, 4, 'horizontal')).toBe(false);
    expect(gameBoard.placeShip(6, 3, 5, 'horizontal')).toBe(false);
  });
});

describe('gameboard receiving attacks', () => {
  beforeEach(() => {
    gameBoard.placeShip(0, 0, 4, 'horizontal');

    gameBoard.placeShip(5, 5, 5, 'vertical');
  });

  test('is receiving attacks correctly', () => {
    expect(gameBoard.receiveAttack(0, 0)).toEqual([true, 'Succesful hit']);
    expect(gameBoard.receiveAttack(0, 0)).toEqual([false, 'Cell already hit']);

    expect(gameBoard.receiveAttack(1, 0)).toEqual([true, 'Succesful hit']);
    expect(gameBoard.receiveAttack(2, 0)).toEqual([true, 'Succesful hit']);
    expect(gameBoard.receiveAttack(3, 0)).toEqual([true, 'Succesful hit']);

    expect(gameBoard.receiveAttack(4, 0)).toEqual([true, 'Miss']);
    expect(gameBoard.receiveAttack(0, 1)).toEqual([true, 'Miss']);
    expect(gameBoard.receiveAttack(0, 2)).toEqual([true, 'Miss']);

    expect(gameBoard.receiveAttack(5, 5)).toEqual([true, 'Succesful hit']);
    expect(gameBoard.receiveAttack(5, 5)).toEqual([false, 'Cell already hit']);

    expect(gameBoard.receiveAttack(5, 6)).toEqual([true, 'Succesful hit']);
    expect(gameBoard.receiveAttack(5, 7)).toEqual([true, 'Succesful hit']);
    expect(gameBoard.receiveAttack(5, 8)).toEqual([true, 'Succesful hit']);
    expect(gameBoard.receiveAttack(5, 9)).toEqual([true, 'Succesful hit']);

    expect(gameBoard.receiveAttack(5, 4)).toEqual([true, 'Miss']);
  });
});
