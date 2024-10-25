//Function that takes the user choice and returns it.
function getHumanChoice(){
    let choice = (prompt('Write "ROCK" "PAPER" or "SCISSORS" to make your choice')).toUpperCase();
    if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS"){
        return choice;
    }else{
        getHumanChoice()
    }
}

//Function that plays the game five times and declare a winner
let gameDuration = 5;
function playGame(){
    for (let i = 0; i < gameDuration; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("YOU WIN!")        
    }else if (humanScore < computerScore){
        console.log("YOU LOSE :(")
    }else{
        console.log("It's a draw")
    }
}
