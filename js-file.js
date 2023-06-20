function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors'];
    let out =  (options[Math.floor(Math.random() * 3)]);
    return out;
}
function round(player, computer){
    if (player.toUpperCase() == computer.toUpperCase()) return 'Tie!';
    else if (player.toUpperCase == 'ROCK' && computer.toUpperCase == 'SCISSORS'){
        return 'ROCK BEATS SCISSORS. Player wins!';
    }
    else if (player.toUpperCase() == 'ROCK' && computer.toUpperCase() == 'PAPER'){
        return  'PAPER BEATS SCISSORS. Computer wins!';
    }
    else if (player.toUpperCase() == 'SCISSORS' && computer.toUpperCase() == 'PAPER'){
        return 'SCISSORS BEATS PAPER. Player wins!';
    }
    else if (player.toUpperCase() == 'SCISSORS' && computer.toUpperCase() == 'ROCK'){
        return 'ROCK BEATS SCISSORS. Computer wins!';
    }
    else if (player.toUpperCase() == 'PAPER' && computer.toUpperCase() == 'ROCK'){
        return 'PAPER BEATS ROCK. Player wins!';
    }
    else if (player.toUpperCase() == 'PAPER' && computer.toUpperCase() == 'SCISSORS'){
        return 'SCISSORS BEATS PAPER. Computer wins!';
    } else return 'INVALID';
}
function game(){
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt('Choice: ');
        let computerChoice = getComputerChoice();
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(round(playerChoice, computerChoice));
    }
}
game();