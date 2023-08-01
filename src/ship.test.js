import Ship from './ship';

let ship;

beforeEach(() => {
  ship = Ship(5);
});

describe('ship', () => {
  test("it's not been sunk", () => {
    expect(ship.isSunk()).toBe(false);
  });

  test("it's been sunk", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
