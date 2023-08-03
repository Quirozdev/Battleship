export default function Game(player, computer) {
  let currentTurn = player;

  function getPlayer() {
    return player;
  }

  function getComputer() {
    return computer;
  }

  function getCurrentPlayerTurn() {
    return currentTurn;
  }

  function setCurrentPlayerTurn(player) {
    currentTurn = player;
  }

  return {
    getPlayer,
    getComputer,
    getCurrentPlayerTurn,
    setCurrentPlayerTurn,
  };
}
