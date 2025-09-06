// Create an array with 3 fruits and print the second fruit
let fruits = ['Apple', 'Banana', 'Grapes'];
console.log(fruits[1]);


// Add "Mango at the end and "Pineapple" at the beginning of this array:
fruits.push("Mango");
fruits.unshift("Pineapple");
console.log(fruits);

// Replace "Banana" with "Kiwi" in the array above :
let newArr = fruits.map(function(val){
    if(val === "Banana"){
        return "Kiwi";
    }
    return val;
})
console.log(newArr);

// Remove the last item from this array using a method.
let numbers = [1,2,3,4];
numbers.pop();
console.log(numbers);

// Insert "Red" and "Blue" at index 1 in this array:
let colors = ['Green', 'Yellow'];
colors.splice(1,0,"Red","Blue");
console.log(colors);

// Extract only the middile 3 elements from this array:
let items = [1, 2, 3, 4, 5, 6];
let newArray = items.slice(1,4); // here 1 is starting index and 4 is ending index but not included
console.log(newArray);

// Sort this array alphabetically and then reverse it:
let names = ['John', 'Alice', 'Bob', 'Charlie'];
names.sort().reverse();
console.log(names);

// Use .map() to square each number
let array = [6,7,8,9,10];
let squaredArray = array.map( val => val * val );
console.log(squaredArray);

// Use .filter() to keep numbers greater than 10
let Array1 = [60,7,28,9,17];
let greaterThanTen = Array1.filter( val => val>10 );
console.log(greaterThanTen);

// Use .reduce() to find the sum of this array
let arr = [10,11,12,13,14];
let sum = arr.reduce(function(accumulator,current){
    return accumulator + current;
},0);                          // 0 is the initial value of accumulator
console.log(sum);


// Use .find() to get the first number less than 10
let arr1 = [12,15,3,8,20];
let firstValueLessThanTen = arr1.find( val => val<10);
console.log(firstValueLessThanTen);


// Use .some() to check if any student has scored below 35:
let scores = [ 45, 60, 28, 90];
let hasFailed = scores.some( val => val<35);
console.log(hasFailed);

// Use .every() to check if all numbers are even or not:
let arr2 = [ 2, 4, 6, 8, 10];
let allEven = arr2.every( val => (val%2===0));
console.log(allEven);

// Destrcture this array to get firstName and lastName
let fullName = ["Abhishek","Sharma"];
let [firstName , lastName] = fullName;
console.log(firstName);
console.log(lastName);  

// Merge two arrays using spread operator
let arr3 = [2,4,6];
let arr4 = [1,3,5];
let mergedArray = [...arr4,...arr3];
console.log(mergedArray);

// Add "India" to the start of this array using spread operator
let countries = ["USA","UK","Germany"];
countries = ["India",...countries];
console.log(countries);

// Clone this array properly(not by reference)
let arr5 = [1,2,3,4,5];
let clonedArray = [...arr5];
console.log(clonedArray);