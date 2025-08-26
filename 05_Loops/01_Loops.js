// Computer me kuch bhi cheez ko baar baar karne ke liye hum loops ka use karte hain. 

/*

 There are Multiple types of loops in JavaScript:
 1. For Loop -> For loop is used when the number of iterations is known.
2. While Loop -> While loop is used when the number of iterations is not known.
3. Do-While Loop -> Do-While loop is similar to while loop but it executes the block of code at 
least once before checking the condition.
4. ForEach Loop -> ForEach loop is used to iterate over an array.
5. for-of Loop -> for-of loop is used to iterate over iterable objects like arrays, strings, etc.
6. for-in Loop -> for-in loop is used to iterate over the properties of an object.
*/

// For Loop Example
console.log("For Loop Example");
for(let i=1; i<=5; i++){
    console.log("Iteration number: "+i);
}


// While Loop Example
console.log("While Loop Example");
let j = 0;
while(j<10){
    console.log("Value of j is:"+j);
    j++;
}


// Do-While Loop Example
console.log("Do-While Loop Example");
let i = 0;
do{
    console.log("Value of i is:"+i);
    i++;
}while(i<5);
