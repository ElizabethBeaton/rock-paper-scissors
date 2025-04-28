document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "80vh";


const results = document.createElement("div");
results.classList.add("results");
results.style.fontSize = "25px";
results.style.marginTop = "20px"; // Space below buttons
results.style.textAlign = "center";
// document.body.appendChild(results);

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

function playRound(humanChoice, computerChoice) {
  // Output the choices for clarity
  results.innerHTML += `<br>Human chose: ${humanChoice} | Computer chose: ${computerChoice}<br>`;

  if (humanChoice === computerChoice) {
    results.innerHTML = `<br>It's a tie!<br>`;
    return "tie"; // No one wins
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    results.innerHTML = `<br>You win! ${humanChoice} beats ${computerChoice}!<br>`;
    return "human";
  } else {
    results.innerHTML = `<br>You lose! ${computerChoice} beats ${humanChoice}!<br>`;
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Add event listeners for buttons here, not inside playRound
  const heading = document.getElementById("heading");
  heading.textContent = "Best of 5!";
  heading.style.color = "green";
  heading.style.fontSize = "55px";

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "row";
  buttonContainer.style.justifyContent = "center";
  document.body.appendChild(buttonContainer);

  document.body.appendChild(results); // Make sure this comes after buttonContainer

  const rock = document.getElementById("rockbtn");
  rock.style.backgroundColor = "lightblue";
  rock.style.border = "none";
  rock.style.fontSize = "25px";
  rock.style.margin = "15px";
  rock.style.padding = "25px";

  const paper = document.getElementById("paperbtn");
  paper.style.backgroundColor = "lightpink";
  paper.style.border = "none";
  paper.style.fontSize = "25px";
  paper.style.padding = "45px";

  const scissors = document.getElementById("scissorsbtn");
  scissors.style.backgroundColor = "lightgrey";
  scissors.style.border = "none";
  scissors.style.fontSize = "25px";
  scissors.style.margin = "15px";
  scissors.style.padding = "45px";

  const reset = document.getElementById("resetbtn");
  reset.style.backgroundColor = "orange";
  reset.style.border = "none";
  reset.style.fontSize = "25px";
  reset.style.padding = "35px";

  buttonContainer.appendChild(rock);
  buttonContainer.appendChild(paper);
  buttonContainer.appendChild(scissors);
  buttonContainer.appendChild(reset);

  rock.addEventListener("click", () => handleClick("rock"));
  paper.addEventListener("click", () => handleClick("paper"));
  scissors.addEventListener("click", () => handleClick("scissors"));
  reset.addEventListener("click", resetGame);

  function resetGame() {
    humanScore = 0;
    computerScore = 0;

    setTimeout(() => {
      // setting a timeout.
      results.innerHTML = "";
    }, 100);
  }

  // Function that handles each button click
  function handleClick(humanChoice) {
    const computerChoice = getComputerChoice();
    const winner = playRound(humanChoice, computerChoice); // Get round winner

    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }

    results.innerHTML += `Current Score - You: ${humanScore}, Computer: ${computerScore}`;

    // Display final winner after 5 rounds
    if (humanScore + computerScore === 5) {
      if (humanScore > computerScore) {
        results.innerHTML += `<br>Congratulations! You won the game!<br>`;
      } else if (computerScore > humanScore) {
        results.innerHTML += `<br>Sorry, the computer won the game!<br>`;
      } else {
        results.innerHTML += `<br>It's a tie game!<br>`;
      }
      humanScore = 0;
      computerScore = 0;

      setTimeout(() => {
        results.innerHTML = "";
      }, 20000);
    }
  }
}

playGame();
