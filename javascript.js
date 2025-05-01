

function humanChoice(){


    let choice = prompt("What will you choose? (Rock, Paper or Scissors)").toLowerCase();

    let numericChoice = 0;

    if(choice === "rock")
    {
        numericChoice = 0;
    } else if (choice === "paper"){

        numericChoice = 1;
    }
    else{

        numericChoice = 2;
    }

    return numericChoice;
}


function computerChoice(){

    let choice = Math.floor(Math.random() * 3);

    return choice;
}

function tranlateOption(option){

    if(option === 0) return "Rock";
    if(option === 1) return "Paper";
    return "Scissors";
}

function isDraw(humanChoice, computerChoice){

    return humanChoice === computerChoice;
}


function humanWins(humanChoice, computerChoice){

    /*
        Rock = 0
        Paper = 1
        Scissors = 2
    */

    if(computerChoice === 2 && humanChoice === 0)
        return true;

    if(computerChoice === 0 && humanChoice === 2)
        return false;

    if(computerChoice > humanChoice){

        return false;
    }

    return true;
}


function isGameFinished(humanScore, computerScore){

    return humanScore >= 3 || computerScore >= 3;
}


let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

let output = document.querySelector('#output');

let humanScore = 0;
let computerScore = 0;

function clearOutput(){

    output.textContent = "";
}

function print(mssg = ""){

    output.textContent += mssg + "\n";
}

function play(human){

    let computer = computerChoice();
    
    let result = "";

    if(isDraw(human, computer)){

        result = "is a draw";
    }
    else {

        if(humanWins(human, computer)){

            result = "human wins";
            humanScore += 1;
        }
        else{

            result = "computer wins";
            computerScore += 1;
        }
    }

    clearOutput();

    print("Human chose: " + tranlateOption( human));
    print("Computer chose: " + tranlateOption(computer));

    print();

    print("Human Score: " + humanScore);
    print("Computer Score: " + computerScore);

    print();

    print(result);

    if(isGameFinished(humanScore, computerScore)){

        print("\n");

        if(humanScore > computerScore) print("Human wins the game");
        else print("Computer wins the game");

        print("select to start again");

        humanScore = 0;
        computerScore = 0;
    }
}

rockBtn.addEventListener('click', () =>{
    play(0);
});


paperBtn.addEventListener('click', () =>{
    play(1);
});

scissorsBtn.addEventListener('click', () =>{
    play(2);
});