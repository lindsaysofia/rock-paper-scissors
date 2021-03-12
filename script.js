function computerPlay() {
  let moves = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * moves.length);
  let randomMove = moves[randomIndex];
  return randomMove;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  switch(true) {
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
    case (playerSelection === 'paper' && computerSelection === 'rock'):
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
      return 1;
    case (playerSelection === 'rock' && computerSelection === 'paper'):
    case (playerSelection === 'paper' && computerSelection === 'scissors'):
    case (playerSelection === 'scissors' && computerSelection === 'rock'):
      return 0;
    default:
      return 2;      
  }
}