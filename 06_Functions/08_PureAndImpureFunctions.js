// Pure vs Impure Functions

/*

⭐ Pure Function: Aisa Function jo ki bahar ki value ko naa badle wo hai pure function.
Definition -> A pure function is a function that does not modify any external state or variables.

⭐ Impure Function: Aisa Function jo ki bahar ki value ko badal de wo hai impure function.
Definition -> An impure function is a function that modifies external state or variables.

*/

let a = 12;

//Pure Function
function abcd(){
    console.log("Ganapati Bappa Morya")  //Because Ye function bahar ki value ko change nahi kar raha hai.
}

// Impure Function 
function xyz(){
    a++;           //Ye function impure function h because Ye function bahar ki value ko change kar raha hai.
    console.log(a);
}

//Calling the function abcd multiple times but it will always give the same output and will not change any external variable. 
abcd();
abcd();
abcd();
abcd();
abcd();


//Calling the function xyz multiple times and it will change the value of external variable 'a' each time it is called.
xyz();
xyz();
xyz();
xyz();
xyz();
