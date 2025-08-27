/*

Question 7🤔: What is Higher Order Functions?
Answer: A function that either takes one or more functions as arguments, or returns a function as its result, is called a higher-order function.


so Baiscally , Higher order Function wo Function hota hai jo ki return kare function ya phir accept kare function apne parameter me.

*/

function abcd(val){   //Higher order Function because it takes another function as an argument
    val();
}

abcd(function(){         //Higher order Function because it returns another function
    console.log(`Hello World from first class Function passed as an argument in higher order function abcd`);
})

/*
 
function(){
    console.log(`Hello World`);   // This is function jo humne pass kiya as an argument so this is first class function.
}     

*/


// Another Example of Higher order Function

function xyz(){   
    return function(){         //Higher order Function because it returns another function
        console.log(`Hello World from first class Function which was returned by higher order function xyz`);
    }
}
xyz()();   // Calling the higher order function and then calling the returned function xyz() for calling xyz function and then () for calling the returned function.