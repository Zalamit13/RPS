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