// console.log("Hello world!")
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3)
    if(randNum === 0){
        return "ROCK"
    } else if (randNum === 1) {
        return "PAPER"
    } else {return "SCISSORS"}
}

const computerSelection = getComputerChoice();

const playerSelection = "rock".toUpperCase();


console.log(playerSelection)


console.log(computerSelection)

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You Lose! Rock beats Scissors"
    } else return "Draw"
  }

  console.log(playRound(playerSelection, computerSelection))