/*

Questions 01 -> What is an arrow function in JavaScript and how do you define one?
Answer -> An arrow function is a more concise syntax for writing function expressions in JavaScript. It is defined using the arrow (=>) syntax.

*/

// Basic arrow function without parameters
const greet = ()=>{
    console.log("Have a great day!");  // Function body
}

const addFunction = (a,b) =>{           // Arrow function with parameters
    console.log(`Sum is = ${a+b}`);
}

const multiply = (x,y) => x*y; // Arrow function with implicit return

greet(); // Calling the arrow function to execute its code
addFunction(5,10); // Calling the arrow function with arguments
console.log(multiply(4,5)); // Calling the arrow function with arguments and logging the result

/*

Questions 02 🚨🤔😓😎🤨-> What is the difference between a regular function and an arrow function in JavaScript?
Answer -> The main differences between regular functions and arrow functions are: they do not have their own 'this' context, 
they cannot be used as constructors, and they do not have the 'arguments' object.

for example, in a regular function, 'this' refers to the object that called the function,
while in an arrow function, 'this' refers to the surrounding lexical context.
code example:

*/


const obj = {
    value: 42,
    regularFunction: function() {
        console.log(this.value); // 'this' refers to 'obj', so it prints 42
    },
    arrowFunction: () => {
        console.log(this.value); // 'this' does not refer to 'obj', so it prints undefined
    }
};

obj.regularFunction(); // prints 42
obj.arrowFunction(); // prints undefined
// Note: In the arrowFunction, 'this' refers to the global context (or undefined in strict mode), not to 'obj'.

/*

Questions 03 🚨-> Can arrow functions be used as constructors in JavaScript? Why or why not?
Answer -> No, arrow functions cannot be used as constructors in JavaScript. This is because they do not have their own 'this' context,
and they do not have the internal methods required for constructor functions, such as '[[Construct]]'. Attempting to use an 
arrow function as a constructor will result in a TypeError.

Questions 04 🤔-> What are the advantages of using arrow functions over regular functions in JavaScript?
Answer -> Advantages of using arrow functions include:
1. Concise Syntax: Arrow functions have a shorter syntax, making the code more readable and easier to write.
2. Lexical 'this': Arrow functions do not have their own 'this' context, which can be beneficial in certain scenarios, 
such as when working with callbacks or methods that need to access the surrounding context.
3. Implicit Return: For single-expression functions, arrow functions allow for an implicit return, eliminating the need for the 
'return' keyword and curly braces.
4. No 'arguments' Object: Arrow functions do not have their own 'arguments' object, which can help avoid confusion when dealing 
with nested functions.
5. Better for Callbacks: Arrow functions are often more suitable for callbacks, especially in array methods like map, filter, and 
reduce, due to their concise syntax and lexical 'this'.
6. Improved Readability: The concise syntax and lexical scoping of arrow functions can lead to cleaner and more maintainable code, 
especially in functional programming patterns.


*/

