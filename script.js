function getComputerChoice (){
    let rand = '';
    let msg;
    rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) msg = "rock";
    else if (rand == 2) msg = "paper";
    else  msg = "scissors"
    return msg;
}

function playerChoice() {
    let choice = prompt("Choose what to play with: Rock, Paper, or Scissors:").toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let rslt;
    if (playerSelection == "rock" && computerSelection == "scissors") rslt = "You win! Rock beats scissors";
    else if (playerSelection == "rock" && computerSelection == "paper") rslt = "You lose! Paper beats rock";
    else if (playerSelection == "rock" && computerSelection == "rock") rslt = "Draw! You both chose the same thing";
    else if (playerSelection == "paper" && computerSelection == "scissors") rslt = "You lose! Scissors beats paper";
    else if (playerSelection == "paper" && computerSelection == "paper") rslt = "Draw! You both chose the same thing";
    else if (playerSelection == "paper" && computerSelection == "rock") rslt = "You Win! Paper beats rock";
    else if (playerSelection == "scissors" && computerSelection == "scissors") rslt = "Draw! You both chose the same thing";
    else if (playerSelection == "scissors" && computerSelection == "paper") rslt = "You Win! Scissors beats paper";
    else if (playerSelection == "scissors" && computerSelection == "rock") rslt = "You lose! Rock beats scissors";
    else rslt = "some error happened, play again."
    
    return rslt; 
  }

function game(){
    let losses = 0, wins = 0;
    for (let i = 0; i < 5 ; i++) {
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.startsWith("You win")) wins++;
        else if (roundResult.startsWith("You lose")) losses++;
    }
    if (wins > losses) return "You Won Overall!";
    else if (wins < losses) return "You lost overall!";
    else return "It's a tie overall!";
}