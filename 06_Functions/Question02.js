// Question 01 -> Convert a given function into arrow function
/*
function multiply(d,e){  // Simpler function
    return d*e;
}
*/
// Answer ->
let multiplyNumbers = (c,b) => c*b;
console.log(multiplyNumbers(5,4))


//Question 02 -> Use rest parameter to accept any number of scores and return the total.
//Answer ->
function getScores(...val){
    let total = 0;
    for(let i = 0;i<val.length;i++){
        total += val[i];
    }
    console.log(total);
}
getScores(34,56,45,89,56,78,67,75,55,39,12);

//Question 03 -> Convert this normal function into an IIFE.
/*
function init(){
    console.log("Initialized");
}
*/
// Answer ->
(function(){
    console.log("Initilized");
})()