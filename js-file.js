const choices = document.querySelectorAll('button');
let playerScore = 0;    
let compScore = 0;
const result = document.querySelector('#result');
const cScore = document.querySelector('#cScore');
const pScore = document.querySelector('#pScore');
const winner = document.querySelector('#winner');   
function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors'];
    let out =  (options[Math.floor(Math.random() * 3)]);
    return out;
}
function round(player, computer){
    if (player.toUpperCase() == computer.toUpperCase()) return 'Tie!';
    else if (player.toUpperCase() == 'ROCK' && computer.toUpperCase() == 'SCISSORS'){
        playerScore +=1;
        return 'ROCK BEATS SCISSORS. Player wins!';
    }
    else if (player.toUpperCase() == 'ROCK' && computer.toUpperCase() == 'PAPER'){
        compScore +=1;
        return  'PAPER BEATS SCISSORS. Computer wins!';
    }
    else if (player.toUpperCase() == 'SCISSORS' && computer.toUpperCase() == 'PAPER'){
        playerScore +=1;
        return 'SCISSORS BEATS PAPER. Player wins!';
    }
    else if (player.toUpperCase() == 'SCISSORS' && computer.toUpperCase() == 'ROCK'){
        compScore +=1;
        return 'ROCK BEATS SCISSORS. Computer wins!';
    }
    else if (player.toUpperCase() == 'PAPER' && computer.toUpperCase() == 'ROCK'){
        playerScore +=1;
        return 'PAPER BEATS ROCK. Player wins!';
    }
    else if (player.toUpperCase() == 'PAPER' && computer.toUpperCase() == 'SCISSORS'){
        compScore +=1;
        return 'SCISSORS BEATS PAPER. Computer wins!';
    } else return 'INVALID';
}
function game() {
    let gameOver = false;
        choices.forEach((button) => {
            button.addEventListener('click', () => {
                //alert(button.id);
                if (gameOver) return;
                let playerChoice = button.id;
                let computerChoice = getComputerChoice();
                console.log(playerChoice);
                console.log(computerChoice);
                result.textContent = (round(playerChoice, computerChoice));
                pScore.textContent = 'Player Score: ' + playerScore;
                cScore.textContent = 'Computer Score: ' + compScore;
                if (playerScore == 5) {
                    winner.textContent = 'Player Wins';
                    gameOver = true;
                }
                if (compScore == 5) {
                    winner.textContent = 'Computer Wins';
                    gameOver = true;
                }
            });
        });
}
game();