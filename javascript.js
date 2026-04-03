function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    } else {
        return "rock";
    }
}

function getHumanChoice() {
    return prompt("Choose 'rock', 'paper', or 'scissors': ");
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 10; 
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 10; 
    }
}
    
let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice().toLowerCase();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice); 