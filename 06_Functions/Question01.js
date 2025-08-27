/*

Question 01 🚨-> What is the Difference between function declaration and expression in terms of hoisting?
Answer -> Declarations are fully hoisted, expressions are not.


Example of function expression -

sayHi(); //Does not Hoisted

var sayHi = function() {
    console.log("Hello from Expression");
}

Example of function declaration -

abcd();    // Function hoisted and prints "Hello World"
function abcd(){
   console.log("Hello World");
}


*/