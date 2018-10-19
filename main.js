let playerChoice = 0;
let playerScore = 0;
let computerChoice = 0;
let computerScore = 0;
let winner = 0;

function play(choice) {
    playerChoice = choice;

    computerChoice = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    // 1 - Stone
    // 2 - Paper
    // 3 - Scissors

    if ((playerChoice == 1) && (computerChoice == 1)) {
        winner = 0;
    }
    else if ((playerChoice == 1) && (computerChoice == 2)) {
        winner = 2;
    }
    else if ((playerChoice == 1) && (computerChoice == 3)) {
        winner = 1;
    }
    else if ((playerChoice == 2) && (computerChoice == 1)) {
        winner = 1;
    }
    else if ((playerChoice == 2) && (computerChoice == 2)) {
        winner = 0;
    }
    else if ((playerChoice == 2) && (computerChoice == 3)) {
        winner = 2;
    }
    else if ((playerChoice == 3) && (computerChoice == 1)) {
        winner = 2;
    }
    else if ((playerChoice == 3) && (computerChoice == 2)) {
        winner = 1;
    }
    else if ((playerChoice == 3) && (computerChoice == 3)) {
        winner = 0;
    }

    document.getElementById("player-choice-1").classList.remove('selected');
    document.getElementById("player-choice-2").classList.remove('selected');
    document.getElementById("player-choice-3").classList.remove('selected');

    document.getElementById("computer-choice-1").classList.remove('selected');
    document.getElementById("computer-choice-2").classList.remove('selected');
    document.getElementById("computer-choice-3").classList.remove('selected');

    document.getElementById("player-choice-" + playerChoice).classList.add('selected');
    document.getElementById("computer-choice-" + computerChoice).classList.add('selected');

    if (winner === 0) {
        document.getElementById('message').innerHTML = 'DRAW!!!';
    }
    else if (winner === 1) {
        document.getElementById('message').innerHTML = 'PLAYER WON!!! :D';
        playerScore++;
    }
    else if (winner === 2) {
        document.getElementById('message').innerHTML = 'COMPUTER WON! :(';
        computerScore++;
    }

    document.getElementById('player-points').innerHTML = playerScore;
    document.getElementById('computer-points').innerHTML = computerScore;
}