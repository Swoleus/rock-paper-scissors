const choice = ["rock", "paper", "scissors"];

const getComputerChoice = Math.floor(Math.random() * choice.length);
console.log(getComputerChoice, choice[getComputerChoice]);