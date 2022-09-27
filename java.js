/*planning:
- computer makes a move randomly
- player inputs move (case insensitive) .toLowerCase()
- console determines winner*/

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

    if (playerSelection == "rock") {
        switch(computerSelection)
        {
            case "rock":
                roundEnd = "It's a Draw!";
                break;
            case "paper":
                roundEnd = "You Lose. Paper beats Rock!";
                break;
            case "scissor":
                roundEnd = "You Win! Rock beats Scissors!";
                break;
        }
    }
    else if (playerSelection == "paper") {
        switch(computerSelection)
        {
            case "rock":
                roundEnd = "You Win! Paper beats Rock!";
                break;
            case "paper":
                roundEnd = "It's a Draw!";
                break;
            case "scissor":
                roundEnd = "You Lose. Scissors beats Paper";
                break;
        }
    }
    else if (playerSelection == "scissor") {
        switch(computerSelection)
        {
            case "rock":
                roundEnd = "You Lose. Rock beats Scissor!";
                break;
            case "paper":
                roundEnd = "You Win! Scissor beats Paper!";
                break;
            case "scissor":
                roundEnd = "It's a Draw!";
                break;
        }
    }
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log(roundEnd);
}

playRound("scissor", getComputerChoice());