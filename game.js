 const choices = ["rock","paper","scissors"];
 const winners = [];

 function game(){

   for(let i = 1; i <= 5; i++){
      playRound(i);
   } 
   document.querySelector('button').textContent = "New Game"; 
    logWins();
 }


 function playRound(round){
    const playerSelection = playerChoice();
    const compSelection  = compChoice();
    const winner = checkWinner(playerSelection, compSelection);
    winners.push(winner);
    logRound(playerSelection,compSelection,winner,round);

 }


 function playerChoice(){
       let input = prompt("Choose Rock,Paper or Scissors");

       while ( input == null){
        input = prompt("Choose Rock,Paper or Scissors");
       }
       input = input.toLowerCase();
       let check = validateInput(input);

       while (check == false){
        input = prompt("Choose Rock,Paper or Scissors");
    
        while ( input == null){
        input = prompt("Choose Rock,Paper or Scissors");
       }

    input = input.toLowerCase();
    check = validateInput(input);
   
   }

   return input;
 }


 function compChoice(){
    return choices[Math.floor(Math.random() * choices.length)];

 }

 function validateInput(input){
    return choices.includes(input);
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

console.log("Results of the Game");
console.log("Player: ", playerWins);
console.log("Computer: ", compWins);
console.log("Ties: ", tieWins);
}  


function logRound(playerChoice,compChoice,winner,round){
   console.log("Round: " ,round);
   console.log("Player chose: " ,playerChoice);
   console.log("Computer chose: " ,compChoice);
   console.log(winner,"Won that round");
}
