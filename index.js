// console.log("Hello world!")
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3)
    if(randNum === 0){
        return "ROCK"
    } else if (randNum === 1) {
        return "PAPER"
    } else {return "SCISSORS"}
}


let playerScore = 0;

let computerScore = 0;

function game() {
    
 for(let i = 1; i <= 5; i++){
        let playerSelection = window.prompt("enter your choice", "").toUpperCase();
        let computerSelection = getComputerChoice();

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

        let roundResult = playRound(playerSelection, computerSelection);
    
        if(roundResult.match("W")){
            playerScore ++;
        
        } else if(roundResult.match("L")) {
            computerScore ++;
            
        }
        console.log(playerSelection);

        console.log(computerSelection);

        console.log(roundResult);

        console.log(`Player Score: ${playerScore};
Computer Score: ${computerScore}`);
    }

    let finalResult = "";
    if(playerScore > computerScore) {
        finalResult = "final result: Congratulations!"
    } else if(playerScore < computerScore) {
        finalResult = "final result: Sorry!"
    }
    else {finalResult = "final result: Draw!"}

    console.log(finalResult);

}


game()