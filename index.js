// console.log("Hello world!")
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3)
    if(randNum === 0){
        return "ROCK"
    } else if (randNum === 1) {
        return "PAPER"
    } else {return "SCISSOR"}
}
console.log(getComputerChoice())