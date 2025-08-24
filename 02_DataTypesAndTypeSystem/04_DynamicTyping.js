// Dynamic Typing in JavaScript -> 
/* In JavaScript there is no static typing like in some other languages. but here is Dynamic Typing
This means that a variable can hold values of different types at different times during the execution of a program.
*/


let variable = 42; // Initially a number
console.log(variable); // 42
console.log(typeof variable); // "number"
variable = "Now I'm a String"; // Now a string
console.log(variable); // "Now I'm a string"
console.log(typeof variable); // "string"
variable = { key: "value" }; // Now an object
console.log(variable); // { key: "value" }
console.log(typeof variable); // "object"