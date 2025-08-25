/*

Question 02 -> Design a Game Name "Rock, Paper, Scissors" using Control Flow Statements (if-else, switch-case)

*/

let userChoice = prompt("Enter Your Input (Rock, Paper, Scissor) : ");
playGame(userChoice);

// Function to play the game
function playGame(userChoice){
    const choice = ["Rock","Paper","Scissor"];
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    if(userChoice === computerChoice){
       console.log(`It's A tie both of you have choosed ${userChoice} 😎`);
    }else if((userChoice === "Rock" && computerChoice === "Scissor") || (userChoice === "Scissor" && computerChoice === "Paper") || (userChoice === "Paper" && computerChoice === "Rock")){
       console.log(`Congratulations! 🎉🎊🍾🎊🎉🍾 You Have Won. 🤯`); 
    }
    else if((userChoice === "Scissor" && computerChoice === "Rock") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Rock" && computerChoice === "Scissor")){
       console.log(`Sad But You Lost The Game.😭😭`);
    }
    else console.log(`😓😓😓😓😓😓You have Entered the Invalid Input`); // If user enter invalid input
}

