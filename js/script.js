function Play (playerMove) {

    let computerMove = ComputerMove();
    if(playerMove === computerMove) {
        document.getElementById('result').innerHTML = 'Draw';
    }
    else {
        if((playerMove === 'rock' && computerMove === 'scissor') || (playerMove === 'scissor' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')) {
            document.getElementById('result').innerHTML = 'You Win!';
            document.getElementById('playerScore').innerHTML = parseInt(document.getElementById('playerScore').innerHTML) + 1;
    } else{
        document.getElementById('result').innerHTML = 'You Lose :(';
        document.getElementById('computerScore').innerHTML = parseInt(document.getElementById('computerScore').innerHTML) + 1;
    }
}


}

function ComputerMove () {
    let computerChoice = '';
    let compChoice = Math.floor(Math.random() * 3) + 1;
    switch (compChoice) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissor';
            break;
    
        default:
            break;
    }
    return computerChoice;
}