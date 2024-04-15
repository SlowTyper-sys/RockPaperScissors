
const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');

function Play (playerMove) {

    let computerMove = ComputerMove();
    if(playerMove === computerMove) {
        document.getElementById('result').innerHTML = 'Draw';
    }
    else {
        if((playerMove === 'rock' && computerMove === 'scissor') || 
            (playerMove === 'scissor' && computerMove === 'paper') || 
            (playerMove === 'paper' && computerMove === 'rock')) {
            resultElement.innerHTML = 'You Win!';
            playerScoreElement.innerHTML = parseInt(playerScoreElement.innerHTML) + 1;
        } else{
            document.getElementById('result').innerHTML = 'You Lose :(';
            computerScoreElement.innerHTML = parseInt(computerScoreElement.innerHTML) + 1;
        }
    }

}

function ComputerMove () {
    let list = ['rock', 'paper', 'scissor'];
    let compChoice = Math.floor(Math.random() * 3) + 1;
    return list[compChoice -1];
}