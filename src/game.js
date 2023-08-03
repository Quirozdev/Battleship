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

  function end(player) {
    alert(`${player.getName()} wins!!!!`);
  }

  return {
    getPlayer,
    getComputer,
    getCurrentPlayerTurn,
    setCurrentPlayerTurn,
    end,
  };
}
