/*

✅ What are First-Class Functions in JavaScript?

In JavaScript, functions are first-class citizens (or first-class objects). This means functions are treated like any other 
variable — you can:

• Store them in variables
• Pass them as arguments to other functions
• Return them from other functions
• Store them in objects and arrays

📌 Definition:
First-class functions means that functions can be assigned to variables, passed around as values, and returned from other
functions — just like any other data type (e.g., numbers, strings, etc.). 

*/

function abcd(val){              //Function abcd takes another function as an argument
    val();
}

abcd(function(){                 //Calling abcd function and passing another function as an argument
    console.log(`Hello World`);
})   


/*
abcd(function(){})
It reprsents 
    val = function(){
       return `Hello World!`;
    }

*/