let humanScore = 0;
let computerScore = 0;



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

function getHumanChoice() {
    const promptHuman = prompt("Enter Your Choice. (Rock, Paper, or Scissors)");
    const humanChoice = promptHuman.toLowerCase();
    return humanChoice ;
}



function playRound(theHumanChoice, theComputerChoice) {
    if(theComputerChoice === "paper" && theHumanChoice === "rock"){
        computerScore += 1;
    }else if(theComputerChoice === "rock" && theHumanChoice === "scissors"){
        computerScore += 1;
    }else if(theComputerChoice === "scissors" && theHumanChoice === "paper"){
        computerScore += 1;
    }else if(theComputerChoice === "rock" && theHumanChoice === "paper"){
        humanScore += 1;
    }else if(theComputerChoice === "scissors" && theHumanChoice === "rock"){
        humanScore += 1;
    }else if(theComputerChoice === "paper" && theHumanChoice === "scissors"){
        humanScore += 1;
    }else{
        return
    }
}

for (let i = 0; i < 5; i++) {
    const compChoice = getComputerChoice();
    const humChoice = getHumanChoice();

    playRound(humChoice, compChoice); 
    
    console.log(humanScore);
    console.log(computerScore);
    console.log(humChoice)
    console.log(compChoice)
}

