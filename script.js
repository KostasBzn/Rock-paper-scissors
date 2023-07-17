let score = JSON.parse(localStorage.getItem("score"));

console.log(localStorage.getItem("score"));

function allZero() {
  document.getElementById("my_wins").innerHTML = 0;
  document.getElementById("my_looses").innerHTML = 0;
  document.getElementById("my_ties").innerHTML = 0;
}

function resetScore() {
  score.wins = 0;
  score.looses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
}

function playGame(playerMove) {
  let computerMove = pickComputerMove();

  if (score === null) {
    score = {
      wins: 0,
      looses: 0,
      ties: 0,
    };
  }

  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You lose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissors") {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.looses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById("my_wins").innerHTML = score.wins;
  document.getElementById("my_looses").innerHTML = score.looses;
  document.getElementById("my_ties").innerHTML = score.ties;

  alert(
    `You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins} Looses: ${score.looses} Ties: ${score.ties}`
  );
}

function pickComputerMove() {
  let randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
