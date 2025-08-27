// Hoisting in functions
/*

Hoisting is JavaScript's behavior of moving declarations to the top of their scope (before code execution).
But how hoisting behaves depends on whether it's a function or variable, and what keyword is used (var, let, const).

*/

abcd();    // Function declarations are fully hoisted: both the name and body are moved to the top of their scope. prints "Hello World"
console.log(Bharat); // Var is hoisted and initialized to undefined, so accessing it before the declaration doesn’t cause an error — just gives undefined.



function abcd(){
    console.log(`Hello World`);
}

var Bharat = function(){
    return `Namaste Vishwa`;
}

/*

let a = function(){
    console.log("Ye Error Dega Kyuki let or const me hoisting nhi hoti");
}

let me hoisting hoti h but let is not initialised on the other hand var initialised with undefined.

*/