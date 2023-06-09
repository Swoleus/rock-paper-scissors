const choice = ["rock", "paper", "scissors"];

/*  Math.floor(Math.random() * choice.length);
console.log(getComputerChoice, choice[getComputerChoice]);
*/

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
}

/* console.log(getComputerChoice()); */

// This is to demonstrate 1 round.
/* function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It is a tie, you both picked ${playerSelection}!`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You win! Rock beats scissors!`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win! Paper beats rock!`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! Scissors beats paper!`
    } else {
        return `Loser, ${computerSelection} beats ${playerSelection}`;
    }
} */ 

// Function below is for incrementing score to allow either best of 5 or determined winner.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return lose;
        } else if (computerSelection === "rock") {
            return tie;
        } else {
            userScore++;
            return win;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return lose;
        } else if (computerSelection === "scissors") {
            return tie;
        } else {
            userScore++
            return win;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return lose;
        } else if (computerSelection === "paper") {
            return tie;
        } else {
            userScore++;
            return win;
        }
    }
}

let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win!";
let lose = "You lose!";
let tie = "It's a tie!";

var i = 0; // variable for incrementing method.

// Incrementing score, display it and then play 5 times below.
/* const playMatch = () => {
    const playerSelection = prompt("Pick 'Rock, Paper or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + userScore);
    console.log("Computer's score = " + computerScore);
    i++;
    if (i !==5) {
        playMatch();
    } else {
        alert("Game Over -- User("+userScore+") vs Computer("+computerScore+")");
    }
} */ 

// Playing indefinitely until one score = 5 
const playMatch = () => {
    const playerSelection = prompt("Pick 'Rock, Paper or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + userScore);
    console.log("Computer's score = " + computerScore);
    if (userScore != 5 && computerScore != 5) {
        playMatch();
    } else if (userScore === 5) {
        console.log(`You win! Your score is ${userScore} to the computer's ${computerScore}`);
    } else {
        console.log(`You lose! Your score is ${userScore} to the computer's ${computerScore}`);
    }
} 

playMatch();