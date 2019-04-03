//Element nodes
const buttons = document.querySelectorAll('.btn-choice');
const roundResultText = document.querySelector('#roundResultText');
const roundResultPlays = document.querySelector('#roundResultPlays');
const playerScoreText = document.querySelector('#playerScoreText');
const computerScoreText = document.querySelector('#computerScoreText');
const resetBtn = document.querySelector('#resetBtn');

//Event Listeners
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var playerChoice = event.currentTarget.getAttribute('data-option');
        
        console.log(playerChoice);

        playRound(playerChoice);
    });
});

resetBtn.addEventListener('click', function(){
    resetGame();
});


//Variables for the game
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const winningScore = 10;


//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    console.log(computerChoice);

    if (playerChoice === computerChoice) {
        resultText("tie");
        return; 
    }

    if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            //Player chose rock, computer chose scissors
            resultText("won");
        }

        if (computerChoice === "Paper") {
            //Player chose rock, computer chose paper
            resultText("lost");
        }
    }

    if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            resultText("lost");
        }

        if (computerChoice === "Rock") {
            resultText("won");
        }
    }

    if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            resultText("lost");
        }

        if (computerChoice === "Paper") {
            resultText("won");
        }
    }

}


//Update the text between the scores with the result of the round and with what each player played
function resultText(result) {
    if (result === "tie") {
        roundResultText.innerHTML = "It was a tie!";

    } else if (result === "won") {
        roundResultText.innerHTML = "You won!";
        playerScore++;
        playerScoreText.innerHTML = playerScore;

    } else if (result === "lost") {
        roundResultText.innerHTML = "You lost :(";
        computerScore++;
        computerScoreText.innerHTML = computerScore;
    }


    if (playerScore === 10 || computerScore === 10) {
        gameOver();
    }
}


//Reset scores and text elements to 0
function resetGame() {
    playerScore = 0;
    computerScore = 0;

    roundResultText.innerHTML = "";

    playerScoreText.innerHTML = "0";
    computerScoreText.innerHTML = "0";
}


//Alert the player whether they won or not after someone reaches 10 points
function gameOver() {
    if (playerScore > computerScore) {
        alert("Dearest player, thou has bested the technology. Play again?");
    } else {
        alert("Dearest apologies, but it seems you did not win this time. Shall we give it another go?");
    }

    resetGame();
}