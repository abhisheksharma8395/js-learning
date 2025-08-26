// Question 01 -> Print Numbers from 1 to 10 using a for loop.
// Answer ->
console.log("Answer 1");
for(let i = 1;i<=10;i++){
    console.log(" i = "+i);
}

// Question 02 -> Print Numbers from 10 to 1 using a While loop.
// Answer ->
console.log("Answer 2");
let j = 10;
while(j>0){
    console.log(" j = "+j);
    j--;
}

// Question 03 -> Print Even Numbers from 1 to 20 using a for loop.
// Answer ->
console.log("Answer 3");
for(let i = 1;i<=20;i++){
    if(i%2===0){
        console.log(`${i} is Even`);
    }
}

// Question 04 -> Print Odd Numbers from 1 to 15 using a while loop.
// Answer ->
console.log("Answer 4");
let k = 1;
while(k<=15){
    if(k%2!==0){
        console.log(`${k} is Odd`);
    }
    k++;
}

// Question 05 -> Print the multiplication table of 5 (i.e., 5 x 1 = 5...5 x 10 =50)
// Answer ->
console.log("Answer 5");
for(let i = 1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

// Question 06 -> Calculate the sum of numbers from 1 to 100 using a loop.
console.log("Answer 6");
let sum = 0;
for(let i = 1;i<=100;i++){
    sum += i;
}
console.log(`Sum from 1 to 100 is = ${sum}`);

// Question 07 -> Print all the numbers between between 1 to 50 that are divisible by 3.
console.log("Answer 7");
for(let i = 1;i<=50;i++){
    if(i%3 === 0){
        console.log(`${i} is divisible by 3`);
    }
}

// Question 08 -> Ask the user for a number and print whether each number from 1 to that number is even or odd.
// (e.g., "1 is odd", "2 is even", ...)
console.log("Answer 8");
let userNumber = 37; // You can change this value to test with different numbers
for(let i = 1;i<=userNumber;i++){
    if(i%2===0){
        console.log(`${i} is Even`);
    } else {
        console.log(`${i} is Odd`);
    }
}

// Question 09 -> Count how many numbers between 1 to 100 are divisible by both 3 and 5.
console.log("Answer 9");
let count = 0;
for(let i = 1;i<=100;i++){
    if(i%3===0 && i%5===0){
        count++;
    }
}
console.log(`Count of the numbers between 1 to 100 that are divisible by both 3 and 5 is = ${count}`);

/*

Question 10 -> Write a loop from 1 to 100 that :
        • Prints each number
        • Stops completely when it finds the first number divisible by 7
*/

console.log("Answer 10");
for(let i = 1;i<=100;i++){
    if(i%7 === 0){
        break;  // program will stop when it finds the first number divisible by 7.
    }
    console.log(`i = ${i}`);
}

/*

Question 11 -> Write a loop from 1 to 20 that :
        • Skips numbers divisible by 3
        • Prints all other numbers
*/

console.log("Answer 11");
for(let i = 1;i<=20;i++){
    if(i%3 === 0){
        continue;  // program will skip when it finds the numbers divisible by 3.
    }
    console.log(`i = ${i}`);
}


/*

Question 12 -> Write a loop from 1 to 100 that :
        • Prints only 5 odd numbers
        • Then stops the loop

*/

console.log("Answer 12");
let oddCount = 0;
for(let i = 1;i<=100;i++){
    if(i%2 !== 0 && oddCount < 5){
        console.log(`i = $ {i}`);  
        oddCount++;
    }
    else if(oddCount === 5){
        break;
    }
}
