const choice = ["rock", "paper", "scissors"];

/*  Math.floor(Math.random() * choice.length);
console.log(getComputerChoice, choice[getComputerChoice]);
*/

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
}

console.log(getComputerChoice());