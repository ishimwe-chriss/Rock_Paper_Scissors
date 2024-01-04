const choices = ["rock","paper","scissors"];
 let winners = [];

 function resetGame(){
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";

 }

 function game(){
    let images = document.querySelectorAll("img");
    images.forEach((img) => 
       img.addEventListener("click", () => {
         if(img.id){
            playRound(img.id);
         }
    })
    );
 }


 function playRound(playerChoice){
    let wins = checkWins();

    if (wins >= 5){
        return
    }

    const compSelection  = compChoice();
    const winner = checkWinner(playerChoice, compSelection);
    winners.push(winner);
    tallyWns();
    displayRound(playerChoice,compSelection,winner);

    wins = checkWins();

    if (wins == 5){
        displayEnd();
    }

 }

 function displayEnd() {
     let playerWns = winners.filter((item) => item == "Player").length;
     if (playerWns == 5){
        document.querySelector('.winner').textContent = 'You Won 5 Games, Congrats!';
     }else {
        document.querySelector('.winner').textContent = 'Sorry Computer Won 5 times';           
     }
    document.querySelector(".reset").style.display = "flex";
     }
 


function displayRound(playerChoice,compSelection,winner){
   document.querySelector('.playerChoice').textContent =
   `You chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;

   document.querySelector('.computerChoice').textContent =
   `You chose: ${compSelection.charAt(0).toUpperCase() + compSelection.slice(1)}`;

   document.querySelector('.winner').textContent = `Round winner: ${winner}`;
   displayRoundWinner(winner);

}

function displayRoundWinner(winner){
    if (winner == "Player"){
        document.querySelector('.winner').textContent = "You Won the Round";    
    }else if (winner == "Computer"){
        document.querySelector('.winner').textContent = "Computer Won That Round";  
    } else {
        document.querySelector('.winner').textContent = "Round was a tie"; 
    }
}

 function tallyWns(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let compWins = winners.filter((item) => item == "Computer").length;
    let tieWins = winners.filter((item) => item == "Tie").length;

    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${compWins}`;
    document.querySelector('.ties').textContent = `Ties: ${tieWins}`;
 }

 function compChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];

    document.querySelector(`.${choice}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove("active");
    }, 700);
      return choice;

 }

 

 function checkWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let compWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins,compWins);
 }

 function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Tie";
    }else if ((choiceP === "rock" && choiceC === "scissors")
            || (choiceP === "paper" && choiceC === "rock")
            || (choiceP === "scissors" && choiceC === "paper")){
        return 'Player'
    } else{
        return 'Computer';
    }
 }

function logWins(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let compWins = winners.filter((item) => item == "Computer").length;
  let tieWins = winners.filter((item) => item == "Tie").length;

}  
game();
