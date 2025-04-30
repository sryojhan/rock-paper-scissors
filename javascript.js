

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

function printChoices(human, computer){


    console.log("Human chose: " + tranlateOption(human));
    console.log("Computer chose: " + tranlateOption(computer));

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


function printScore(humanScore, computerScore, result){

    console.log(result);

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

}


function isGameFinished(humanScore, computerScore){

    return humanScore >= 3 || computerScore >= 3;
}

function printGameResult(humanScore, computerScore){

    if(humanScore > computerScore) console.log("Human wins");
    else console.log("Computer wins");
}

function clearConsole(){
    console.clear();
}

function playAgain(){

    let answer = prompt("Do you want to play again? (Yes/No)").toLowerCase();

    if(answer === "yes") return true;
    return false;
}

function play(){

    while(true)
    {

        /*
            Rock = 0
            Paper = 1
            Scissors = 2
        */

        let humanScore = 0;
        let computerScore = 0;


        while(!isGameFinished(humanScore, computerScore)){


            let human = humanChoice();
            let computer = computerChoice();

            clearConsole();

            /*Game logic*/

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


            printChoices(human, computer);
            printScore(humanScore, computerScore, result);
        }

        printGameResult(humanScore, computerScore);

        if(!playAgain())
            break;
    }

}


play();