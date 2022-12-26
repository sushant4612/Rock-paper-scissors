function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*15);
    if(randomNumber<5){
        return "rock";
    }else if(randomNumber>=5 && randomNumber<=10){
        return "paper";
    }else{
        return "scissors";
    }
}

function play(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You won! paper beats rock";
        }else if(computerSelection == "paper"){
            return "Tied";
        }else{
            return "You loose! Scissors beats paper"
        }
    }else if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "Tied";
        }else if(computerSelection == "paper"){
            return "You loose! paper beats rock";
        }else{
            return "You won!Rock beats scissors"
        }
    }else{
        if(computerSelection == "rock"){
            return "You loose! rock beats scissors";
        }else if(computerSelection == "paper"){
            return "You won! scissors beats paper";
        }else{
            return "Tied"
        }
    }
 }

let tied = 0;
let won = 0;
let loose = 0;

function game(){
    for(let i = 0;i<5;i++){
        let playerSelection = prompt("Rock paper or scissors");
        let computerSelection = getComputerChoice();
        let ans = play(playerSelection, computerSelection);
        console.log(ans);
    
        if(ans == "Tied"){
            tied++;
        }else if(ans.slice(0,7)=="You won"){
            won++;
        }else{
            loose++;
        }
    }
}

game();
console.log("Won " + won + " times");
console.log("Lost " + loose + " times");
console.log("Tied " + tied + " times");
if(won > loose){
    console.log("You are the winnier");
}else{
    console.log("Computer won the game");
}