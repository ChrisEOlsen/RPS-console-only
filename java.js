/*planning:
- computer makes a move randomly
- player inputs move (case insensitive) .toLowerCase()
- console determines winner*/

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let choiceMove = "";

    if (choice == 0) { choiceMove = "rock";}
    else if (choice == 1) {choiceMove = "paper";}
    else if (choice == 2) {choiceMove = "scissor";}

    return choiceMove;
}

function playRound (playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    let roundEnd = "";
    console.log("");
    console.log("Computer Chose: " + computerSelection);

    if (playerSelection == "rock") {
        switch(computerSelection)
        {
            case "rock":
                roundEnd = "It's a Draw!";
                break;
            case "paper":
                roundEnd = "You Lose. Paper beats Rock!";
                computerPoints += 1;
                break;
            case "scissor":
                roundEnd = "You Win! Rock beats Scissors!";
                playerPoints += 1;
                break;
        }
    }
    else if (playerSelection == "paper") {
        switch(computerSelection)
        {
            case "rock":
                roundEnd = "You Win! Paper beats Rock!";
                playerPoints += 1;
                break;
            case "paper":
                roundEnd = "It's a Draw!";
                break;
            case "scissor":
                roundEnd = "You Lose. Scissors beats Paper";
                computerPoints += 1;
                break;
        }
    }
    else if (playerSelection == "scissor") {
        switch(computerSelection)
        {
            case "rock":
                roundEnd = "You Lose. Rock beats Scissor!";
                computerPoints += 1;
                break;
            case "paper":
                roundEnd = "You Win! Scissor beats Paper!";
                playerPoints += 1;
                break;
            case "scissor":
                roundEnd = "It's a Draw!";
                break;
        }
    } else {
        console.log("Invalid input. Try again.");
        game();
    }
    return roundEnd;
}

function gameEnd() {
    console.log("");
    console.log("Computer Points: " + computerPoints);
    console.log("Your Points: " + playerPoints);
   
    if (computerPoints > playerPoints) {
        console.log("You Lost the Game!");
    } else if (playerPoints > computerPoints) {
        console.log("You Won the Game!");
    } else if (computerPoints == playerPoints){
        console.log("Its's a Draw!");
    }
}

function game(){
    let userInput = prompt("Make Your Move.");
    console.log(playRound(userInput, getComputerChoice()));
}

for (let i = 0; i < 5; i++) {
    game();
    if (i == 4) {
        gameEnd();
    }
}

