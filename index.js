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

let finalResult = "";

let displayChoiceVar = document.querySelector


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


function displayChoice() {
    console.log(getComputerChoice())
}


function updateScore(roundResult) {
    
        if(roundResult.match("W")){
            playerScore ++;
        
        } else if(roundResult.match("L")) {
            computerScore ++;}

}

function change_color(computerSelection) {
    // Change the color of the visual element based on the choice
    if (computerSelection === 'ROCK') {
        // Change the color of visual element 1
        rock_C.style.backgroundColor = 'yellow';
        paper_C.style.backgroundColor = '';
        scissors_C.style.backgroundColor = '';
    } else if (computerSelection === 'PAPER') {
        // Change the color of visual element 2
        rock_C.style.backgroundColor = '';
        paper_C.style.backgroundColor = 'yellow';
        scissors_C.style.backgroundColor = '';
    } else if (computerSelection === 'SCISSORS') {
        // Change the color of visual element 3
        rock_C.style.backgroundColor = '';
        paper_C.style.backgroundColor = '';
        scissors_C.style.backgroundColor = 'yellow';
    }
}

    function decideWinner(){
        if(playerScore === 5) {
            finalResult = "Congratulations! You won the game"
            winner.textContent = finalResult;
          
        } else if(computerScore === 5) {
            finalResult = "Sorry! You lost the game"
            winner.textContent = finalResult;
           
        }

    }

    function gameEnd() {
        if(finalResult.length > 0){
            game.style.display = "none";
            resultDiv.classList.remove("resultGame");
            resultDiv.classList.add("resultDisplay")
            // resultDiv.style.d;
           
        }
    }

    function restart() {
        restartBtn.addEventListener("click", () =>
        window.location.reload())
    }

        const rock = document.querySelector("#rock");
        const paper = document.querySelector("#paper");
        const scissors = document.querySelector("#scissors");
        const rock_C = document.querySelector("#rock_C");
        const paper_C = document.querySelector("#paper_C");
        const scissors_C = document.querySelector("#scissors_C");
        const yourScore = document.querySelector("#your-score");
        const machineScore = document.querySelector("#computer-score")
        const winner = document.querySelector("h3");
        const resultDiv = document.querySelector("#result");
        yourScore.textContent = playerScore;
        machineScore.textContent = computerScore;
        winner.textContent= finalResult;
        const playerChoiceBtn = [rock,paper,scissors]
        const restartBtn = document.querySelector("#reload");
        let selectedButtons = null;
        const info = document.querySelector("#info")
        const game = document.querySelector("#game")
       
        
        
        
        playerChoiceBtn.forEach(btn => {
         btn.addEventListener("click",function(event) {
            
            let playerSelection = this.innerText.toUpperCase();

            let computerSelection = getComputerChoice();

            let roundResult = playRound(playerSelection, computerSelection);

            if(selectedButtons){
                selectedButtons.style.backgroundColor = "aliceblue"
            }
            this.style.backgroundColor = "red";
            selectedButtons = this;

            info.textContent = roundResult;
        
            updateScore(roundResult);

            change_color(computerSelection)

            yourScore.textContent = playerScore;
            machineScore.textContent = computerScore;

            decideWinner();

            gameEnd();

            restart();
        
            
            console.log(computerSelection);
            console.log(playerSelection)
         

           console.log(`Player Score: ${playerScore};
Computer Score: ${computerScore}`);
        });
    })

    



