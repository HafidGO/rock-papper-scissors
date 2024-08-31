
// Function than randomly returns "ROCK","PAPER","SCISSORS".
function getComputerChoice(){   
    let cpuChoice = Math.round((Math.random()*3));
    if (cpuChoice == 0){
        return "ROCK";
    }else if(cpuChoice == 1){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
}

//Function that takes the user choice and returns it.
function getHumanChoice(){
    let choice = (prompt('Write "ROCK" "PAPER" or "SCISSORS" to make your choice')).toUpperCase();
    if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS"){
        return choice;
    }else{
        getHumanChoice()
    }
}

//Score variables
let humanScore = 0;
let computerScore = 0;

// Logic to play a single round
function playRound(humanChoice, computerChoice){
    console.log("User choice:", humanChoice);
    console.log("Computer choice:",computerChoice);
    if (humanChoice == "ROCK"){
        if (computerChoice == "SCISSORS"){
            alert("You win! Rock beats scissors");
            ++humanScore;
        }else if(computerChoice == "PAPER"){
            alert("You lose! Paper beats rock");
            ++computerScore;
        } else{
            alert("It's a draw");
        }
    }
    if (humanChoice == "PAPER"){
        if (computerChoice == "SCISSORS"){
            alert("You lose! Scissors beats paper");
            ++computerScore;
        }else if(computerChoice == "ROCK"){
            alert("You win! Paper beats rock");
            ++humanScore;
        } else{
            alert("It's a draw");
        }
    }
    if (humanChoice == "SCISSORS"){
        if (computerChoice == "ROCK"){
            alert("You lose! Rock beats scissors");
            ++computerScore;
        }else if(computerChoice == "PAPER"){
            alert("You win! Scissors beats paper");
            ++humanScore;
        } else{
            ("It's a draw");
        }
    }
    console.log("Your score:", humanScore);
    console.log("Computer score:", computerScore);
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

playGame();
