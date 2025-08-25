/*

Question 02 -> Design a Game Name "Rock, Paper, Scissors" using Control Flow Statements (if-else, switch-case)

*/

let userChoice = "Paper"; // Example input, you can change this value to test different cases
console.log(playGame(userChoice));

// Function to play the game
function playGame(userChoice){
    const choice = ["Rock","Paper","Scissor"];
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    console.log("User Choosed: "+userChoice);
    console.log("Computer Choosed: "+computerChoice);
    if(userChoice === computerChoice) return `It's A tie both of you have choosed ${userChoice} 😎`;
    else if((userChoice === "Rock" && computerChoice === "Scissor") || (userChoice === "Scissor" && computerChoice === "Paper") || (userChoice === "Paper" && computerChoice === "Rock")) return `Congratulations! 🎉🎊🍾🎊🎉🍾 You Have Won. 🤯`; 
    else if((userChoice === "Scissor" && computerChoice === "Rock") || (userChoice === "Rock" && computerChoice === "Paper") || (userChoice === "Paper" && computerChoice === "Scissor"))  return `Sad But You Lost The Game.😭😭`;
    else return `😓😓😓😓😓😓You have Entered the Invalid Input`; // If user enter invalid input
}

