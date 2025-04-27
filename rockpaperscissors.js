function getComputerChoice() {
  const guess = Math.floor(Math.random() * 3);
  if (guess === 0) {
    return "rock";
  } else if (guess === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Choose Rock, Paper, or Scissors!"); // opens a dialog box where the user types their choise
  return userChoice.toLowerCase(); // Normalize to lowercase
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie"; // No one wins
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    return "computer";
  }
}

// This is a test commit to practice Git



function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const winner = playRound(humanSelection, computerSelection); // Get round winner

    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }

    console.log(
      `Current Score - You: ${humanScore}, Computer: ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, the computer won the game!");
  } else {
    console.log("It's a tie game!");
  }
}


playGame();
