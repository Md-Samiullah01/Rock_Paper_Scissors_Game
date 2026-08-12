let choices = document.querySelectorAll(".choice");

let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
let userPoint = document.querySelector("#user-score");
let compPoint = document.querySelector("#comp-score");

let resetBtn = document.querySelector("#reset-btn");

// Getting user selection 
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
});

// Generating Computer Selection 

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const opIdx = Math.floor(Math.random() * 3);
  return option[opIdx];
}

// Draw Game
const drawGame = () => {
  msg.innerText = "Draw! Play again.";
  msg.style.backgroundColor = "magenta";
}

// Showing winner 
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userPoint.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compPoint.innerText = compScore;
    msg.innerText = `You Loss! Computer's ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
  }
}
// Playing Game

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  //Draw Game
  if (userChoice === compChoice) {
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper, scissors 
      userWin = (compChoice === "paper") ? false : true;
    }
    else if (userChoice === "paper") { // rock ,scissors 
      userWin = (compChoice === "rock") ? true : false;
    }
    else {
      // rock, paper
      userWin = (compChoice === "rock") ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
  
}

// Resetting the Game
resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userPoint.innerText = "0";
  compPoint.innerText = "0";
  msg.innerText = "Play your move.";
  msg.style.backgroundColor = "navy"
});
