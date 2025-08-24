// Scope ( Global, Block , Functional )

/* 1️⃣ Global Scope : A variable declared outside any function or block is in the global scope and can be accessed from anywhere in the code.
   2️⃣ Block Scope  : A variable declared with let or const inside a block (enclosed in {}) is in the block scope and can only be accessed within that block.
   3️⃣ Functional Scope : A variable declared with var inside a function is in the functional scope and can only be accessed within that function.  
*/


var a = 12;  // Global Scope

{
    let a = 12;  // Block Scope 
}

abcd();

function abcd(){
    if(true){
        var c = 12;   // Function Scoped 🤔
        let n = 14;   // Block Scoped
    }
    console.log(c);
 // console.log(n);
}


// Reassignment and Redeclaration

var num1 = 12;  // Initialization and declaration
console.log(num1);
num1 = 32;        // Reassignment
console.log(num1);


var num1 = 34  // Redeclaration is possible with var
comsole.log(num1);


let num2 = 56;     // Initialization and declaration
console.log(num2);
num2 = 60;         // Reassignment
console.log(num2);

// let num2 = 433 //Redeclaration is not possible with the let