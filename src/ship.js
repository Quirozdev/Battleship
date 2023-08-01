export default function Ship(shipLength) {
  const length = shipLength;
  let hits = 0;

  function hit() {
    hits++;
  }

  function isSunk() {
    return length === hits;
  }

  return { hit, isSunk };
}
