function getComputerChoice (){
    let rand = '';
    let msg;
    rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) msg = "Rock";
    else if (rand == 2) msg = "Paper";
    else  msg = "Scissors"
    return msg;
}

function playerSelection() {
    let choice = prompt("Choose what to play with: Rock, Paper, or Scissors:").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
        return null;
    }
}

