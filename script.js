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

//Div for showing results and the score
let result = document.querySelector("#results");
let humanScore = document.querySelector("#humanScore");
let computerScore = document.querySelector("#computerScore");

// Event listeners to trigger "playRound" function for each button
let buttons = document.querySelector("#buttonsDiv")
buttons.addEventListener('click', (event) =>{
    let target = event.target;
    switch(target.id){
        case 'rockButton':
            humanChoice = "ROCK"; 
            playRound(humanChoice, getComputerChoice());
            break;

        case 'paperButton':
            humanChoice = "PAPER"; 
            playRound(humanChoice, getComputerChoice());
            break;

        case 'scissorsButton':
            humanChoice = "SCISSORS"; 
            playRound(humanChoice, getComputerChoice());
            break;
    }
})

document.querySelector

//Score variables
humanScoreValue =  0;
computerScoreValue = 0;

//Trigger after each round is played to let know the player the result
function roundWinned(humanChoice,computerChoice) {
    ++humanScoreValue;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore.textContent = `Your score: ${humanScoreValue}`;
    computerScore.textContent = `Your score: ${computerScoreValue}`;
}

function roundLost(humanChoice,computerChoice){
    ++computerScoreValue;
    result.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    humanScore.textContent = `Your score: ${humanScoreValue}`;
    computerScore.textContent = `Your score: ${computerScoreValue}`;
}

function roundDraw(computerChoice){
    result.textContent = `It's a draw :( The computer also chose ${computerChoice}`;
}

function scoreCheck(){
    if (humanScoreValue === 5){
        result.textContent = "YOU WON!"
        humanScoreValue =  0;
        computerScoreValue = 0;
    } else if(computerScoreValue === 5){
        result.textContent = `YOU LOST!`
        humanScoreValue =  0;
        computerScoreValue = 0;
    }

}

// Logic to play a single round
function playRound(humanChoice, computerChoice){
    if (humanChoice == "ROCK"){
        if (computerChoice == "SCISSORS"){
            roundWinned(humanChoice, computerChoice);
        }else if(computerChoice == "PAPER"){
            roundLost(humanChoice,computerChoice)
        } else{
            roundDraw(computerChoice)
        }
        }
        if (humanChoice == "PAPER"){
            if (computerChoice == "SCISSORS"){
                roundLost(humanChoice,computerChoice);
            }else if(computerChoice == "ROCK"){
                roundWinned(humanChoice, computerChoice);
            } else{
                roundDraw(computerChoice)
            }
        }
        if (humanChoice == "SCISSORS"){
            if (computerChoice == "ROCK"){
                roundLost(humanChoice,computerChoice);
            }else if(computerChoice == "PAPER"){
                roundWinned(humanChoice, computerChoice);
            } else{
                roundDraw(computerChoice)
            }
        }
        scoreCheck();
    }   


