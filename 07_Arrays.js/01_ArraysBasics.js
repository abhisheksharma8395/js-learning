/*

Questions 1 -> What is Arrays in JavaScript?
Answer -> In JavaScript, an Array is a special type of object used to store multiple values in a single variable. These values can be 
of any data type—numbers, strings, objects, other arrays, etc.

*/

// Creating Objects in Arrays
let studentMarks = [10,40,52,37,92];
//         index     0  1  2  3  4    
console.log(typeof(studentMarks));    // object

// Another Way of creating arrays
let numbers = new Array(10, 20, 30);

// Accessing Value from array StudentMarks
console.log(`Marks of first Student is : ${studentMarks[0]}`);  //Marks of first Student is : 10

console.log(`The value at third index of array before modification is : ${studentMarks[3]}`);
// To Modify the Value of any element in an array
studentMarks[3] = 73; // Modified the value at third index from 37 to 73
console.log(`The value at third index of array after modification is : ${studentMarks[3]}`);




