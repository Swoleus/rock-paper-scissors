const choice = ["rock", "paper", "scissors"];

/*  Math.floor(Math.random() * choice.length);
console.log(getComputerChoice, choice[getComputerChoice]);
*/

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
}

/* console.log(getComputerChoice()); */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It is a tie, you both picked ${playerSelection}!`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You win! Rock beats scissors!`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win! Paper beats rock!`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! Scissors beats paper!`
    } else {
        return `Loser! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = prompt("Pick 'Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));