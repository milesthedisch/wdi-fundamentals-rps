////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
var playerName = getName()
var computerName = getComputerName()

function getName() {
    prompt("Whats your your name?")
    return prompt();
}

function getComputerName() {
    prompt("Whats your computers name?")
    return prompt();
}

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    //That comment is really confusing, therefore my code is confusing.
    move = getInput()
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    //That comment is really confusing, therefore my code is confusing.
    move = randomPlay()
    return move || randomPlay();

}

function getWinner(playerMove,computerMove) {
    var winner = "The winner is ";


    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove === "rock") {
        if(computerMove === "scissor"){
            winner += playerName
        }
        else{
                winner += "your mac"
            }
    }
    if(playerMove === "scissor"){
        if(computerMove = "papper"){
            winner += playerName
        }
        else{
            winner += "your mac"
        }
    }
    if(playerMove = "paper"){
        if(computerMove = "rock"){
            winner += playerName
        }
        else{
            winner += "your mac"
        }
    }
    if(playerMove == computerMove){
        winner = "tie"
    }
    else{
        winner +="somethings wrong"
    }
    //logging the name of player, computer, and who the winner was.
    console.log(playerName + ":" + playerMove + "\n" + computerName + ":" + computerMove)
    console.log("The winner is: " + winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins < 5 && computerWins < 5){
    console.log("round : " + round);
        var winner = getWinner()
        if (winner == playerName) {
            playerWins += 1
        }
        else if (winner == computerName) {
            computerWins += 1
        }
        else {
            console.log(winner);
        }
            round += 1;
    }
    return [playerWins, computerWins];
}

