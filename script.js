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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  let roundScore;

  for (let round = 1; round <= 5; round++) {
    playerSelection = prompt('Rock, Paper, Scissors?', '');
    computerSelection = computerPlay();
    roundScore = playRound(playerSelection, computerSelection);
    playerScore += Math.min(roundScore, 1);
    computerScore += Math.abs(roundScore - 1);
    console.log(`
    *** Round ${round} ***
    ${playerSelection} vs ${computerSelection}
    Player Score: ${playerScore}
    Computer Score: ${computerScore}`);
  }

  let gameStatement = (playerScore > computerScore) ? 'Player wins!' : (computerScore > playerScore) ? 'Computer wins!' : `It's a tie!`;
  console.log(gameStatement);
}