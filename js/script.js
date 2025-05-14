let humanScore = 0;
let computerScore = 0;
        
let manScore = document.querySelector(".humanScore");
let robotScore = document.querySelector(".computerScore");
let commentary = document.querySelector(".comment");
let playAgain = document.querySelector(".playagain");

manScore.textContent = humanScore;
robotScore.textContent = computerScore;



function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 10);
    let computerChoice;
    if(randomNumber <= 3){
        computerChoice = "rock"
        return computerChoice
    }else if(randomNumber <= 6 && computerChoice > 3){
        computerChoice = "paper"
        return computerChoice
    }else{
        computerChoice = "scissors"
        return computerChoice
    }
}



function playRound(theHumanChoice, theComputerChoice) {
    let comment;
    if((theComputerChoice === "paper" && theHumanChoice === "rock") || (theComputerChoice === "rock" && theHumanChoice === "scissors") || (theComputerChoice === "scissors" && theHumanChoice === "paper")){
        computerScore += 1;
        return comment = "Computer Wins this round"
    }else if((theComputerChoice === "rock" && theHumanChoice === "paper") || (theComputerChoice === "scissors" && theHumanChoice === "rock") || (theComputerChoice === "paper" && theHumanChoice === "scissors")){
        humanScore += 1;
        return comment = "You Win this round"
    }else{
        return comment = "It's a draw"   
    }
}


    const buttons = document.querySelectorAll(".rps")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            let humanChoice;
            if (i === 0){
                humanChoice = "rock";
            }else if ( i === 1){
                humanChoice = "paper";
            }else{
                humanChoice = "scissors";
            }
            const computerChoice = getComputerChoice();
            let comment = playRound(humanChoice, computerChoice);
            manScore.textContent = humanScore;
            robotScore.textContent = computerScore;        
            if (humanScore === 5){
                humanScore = 0;
                computerScore = 0;
                commentary.textContent = `Congratulations, You Won the tournament`;
            }else if(computerScore === 5){
                humanScore = 0;
                computerScore = 0;
                commentary.textContent = `Oops, Computer won this time. Play again to exact your revenge`;
            }else{
                commentary.textContent = `Your choice is ${humanChoice} and the computer chose ${computerChoice}. ${comment}`;
            }
        })
        
    }

    playAgain.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        manScore.textContent = 0;
        robotScore.textContent = 0;
        commentary.textContent = ""
    })
