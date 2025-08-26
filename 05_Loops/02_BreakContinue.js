/*

Question 01 -> What is the difference between break and continue statements in JavaScript? Provide an 
example of each.
Answer -> Break and continue are both used to control the flow of loops in JavaScript, but they serve 
different purposes. Break is used to exit a loop entirely, while continue is used to skip the current 
iteration and move to the next one.

*/

// Break Statement Example
console.log("Break Statement Example");
console.log("Loop is designed to run from 1 to 10, but will break when i is 5");
for(let i = 1; i<=10; i++){
    if(i === 5){
        console.log("Breaking the loop at i = " + i);
        break; // Exits the loop when i is 5
    }
    console.log("Value of i: " + i);
}

// Continue Statement Example
console.log("Continue Statement Example");
console.log("Loop is designed to run from 1 to 10, but will skip when i is 5 and run usually for other values");
for(let i = 1; i<=10; i++){
    if(i === 5){
        continue; // skip the loop when i is 5
    }
    console.log("Value of i: " + i);
}