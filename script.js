const name = prompt('Enter your name:');

const rock = document.querySelector('#Rock');
rock.addEventListener('click',() => game('rock'));

const paper = document.querySelector('#Paper');
paper.addEventListener('click',() => game('paper'));

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click',() => game('scissors'));


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
            return "You loose! Scissors beats paper";
        }
    }else if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "Tied";
        }else if(computerSelection == "paper"){
            return "You loose! paper beats rock";
        }else{
            return "You won!Rock beats scissors";
        }
    }else{
        if(computerSelection == "rock"){
            return "You loose! rock beats scissors";
        }else if(computerSelection == "paper"){
            return "You won! scissors beats paper";
        }else{
            return "Tied";
        }
    }
 }

//  function game(playerSelection){
//     let computerSelection = getComputerChoice();
//     let ans = play(playerSelection,computerSelection);
//     console.log(ans);
//  }

let tied = 0;
let won = 0;
let loose = 0;

const computer = document.querySelector('#computer');
const you = document.querySelector('#you');

const p = document.querySelector('p');
const container = document.querySelector('div');

function game(playerSelection){
    let computerSelection = getComputerChoice();
        let ans = play(playerSelection, computerSelection);
        // const p = document.createElement('p');
        p.textContent = ans;


        if(ans == "Tied"){
            tied++;
        }else if(ans.slice(0,7)=="You won"){
            won++;
        }else{
            loose++;
        }

        let computerWin = loose;
        let computerLost = won;
        // console.log(loose);
        // console.log(computerWin);

        computer.textContent = 'Computer :- ' + computerWin;
        you.textContent = name + ' :- ' + computerLost; 

        const p2 = document.querySelector('#result')
        const p3 = document.createElement('p');

        if(computerLost == 5){
            p.remove();
            computer.remove();
            you.remove();
            p2.textContent = 'You won!';
            p3.textContent = 'Refresh the page to play again'
            container.appendChild(p3);
        }

        if(computerWin == 5){
            p.remove();
            computer.remove();
            you.remove();
            p2.textContent = 'You lost!';
            p3.textContent = 'Refresh the page to play again';
            container.appendChild(p3);
        }
}


