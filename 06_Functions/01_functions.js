/*

Questions 01 -> What is a function in JavaScript and how do you define one?
Answer -> Function is a block of code designed to perform a particular task. A function is defined using the function keyword, followed by the function name, parentheses (), and curly braces {}.

*/

function greet() {                              //Function Statement        
    console.log("Have a great day!");  // Function body
}

greet(); // Calling the function to execute its code

let userName = "Alice";

let greetUser = function(userName) {
   // Function expression
    console.log("Hello, " + userName + "!");
}
greetUser(userName); // Calling the function with an argument