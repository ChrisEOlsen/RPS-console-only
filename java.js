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


