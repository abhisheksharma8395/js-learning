// Array Methods in js

/*

🧪 Basic Array Methods->

---------------------------------------------------------------------------------------------
Method	       |        Description	                            |      Example              |
---------------|------------------------------------------------|---------------------------|
.push()	       |        Adds item(s) to the end of array	    |      arr.push(4)          |
.pop()	       |        Removes item from the end	            |      arr.pop()            |
.shift()	   |        Removes item from the start	            |      arr.shift()          |
.unshift()	   |        Adds item(s) to the start	            |      arr.unshift(0)       |
.length	       |        Returns number of elements	            |      arr.length           |
---------------------------------------------------------------------------------------------

🔁 Looping & Transforming ->

--------------------------------------------------------------------------------------------------------------------------------
Method	       |       Description	                                          |      Example                                   |
---------------|--------------------------------------------------------------|------------------------------------------------|
.forEach()	   |     Loops through each element                      	      |      arr.forEach(val => console.log(val))      |  
.map()         |     Transforms each element, returns new array               |      arr.map(x => x * 2)                       |
.filter()	   |     Returns new array with elements that pass a test	      |      arr.filter(x => x > 2)                    |
.reduce()	   |     Reduces array to a single value	                      |      arr.reduce((sum, x) => sum + x, 0)        |	       
--------------------------------------------------------------------------------------------------------------------------------

🔎 Searching & Checking ->

------------------------------------------------------------------------------------------------------------------------------------
Method	         |       Description	                                          |      Example                                   |
-----------------|----------------------------------------------------------------|------------------------------------------------|
.includes()	     |     Checks if array contains an item                	          |      arr.includes(3)                           |  
.indexOf()       |     Returns first index of an item	                          |      arr.indexOf(2)                            |
.lastIndexOf()   |     Returns last index of an item                              |      arr.lastIndexOf(2)                        |
.find() 	     |     first element matching a condition                         |      arr.find(x => x > 2)                      |
.findIndex()     |	   Returns index of first match                               |      arr.findIndex(x => x > 2)                 |
------------------------------------------------------------------------------------------------------------------------------------

✂️ Changing Content -> 

------------------------------------------------------------------------------------------------------------------
Method	         |       Description	                                          |      Example                 |
-----------------|----------------------------------------------------------------|------------------------------|
.splice()	     |     Add/remove items at specific index            	          |      arr.splice(1, 2)        |  
.slice()         |     Returns part of array (shallow copy)                       |      arr.slice(1, 3)         |
.concat()        |     Combines arrays                                            |      arr.concat([4, 5])      |
------------------------------------------------------------------------------------------------------------------

🔁 Sorting & Reversing

------------------------------------------------------------------------------------------------------------------
Method	         |       Description	                                          |      Example                 |
-----------------|----------------------------------------------------------------|------------------------------|
.sort()  	     |     Sorts array (as strings by default)           	          |      arr.sort()              |  
.reverse()       |     Reverses the array                                         |      arr.reverse()           |
------------------------------------------------------------------------------------------------------------------



*/


// Example of Basic Array methods.

// Example of push Method 
let array = [1,2,3,4,5];
console.log(`array Before push method : ${array}`);
array.push(18);
console.log(`array after push method : ${array}`);

// Example of pop Method 
console.log(`array Before pop method : ${array}`);
array.pop();
console.log(`array after pop method : ${array}`);

// Example of shift Method 
console.log(`array Before shift method : ${array}`);
array.shift();
console.log(`array after shift method : ${array}`);

// Example of unshift Method 
console.log(`array Before shift method : ${array}`);
array.unshift(18);
console.log(`array after unshift method : ${array}`);

// Example of length Method
console.log(`The current Length of array is : ${array.length}`); 

// Example of forEach Method 
array.forEach(val => console.log(val));
// Another way of writing above one
array.forEach(function(val){
    console.log(val);
})

//Example of map function
console.log(`array Before map method : ${array}`);
array = array.map(val => val = val*2);
/*
the above expression is same as this but in shorter way
array = array.map(function(val){
    console.log(val);
})
*/
console.log(`array after map method : ${array}`);

//Example of filter function 
// if you want an Array from array which is multiple of 4

let multipleArray = array.filter(function(val){
    return (val%4) == 0;
})
console.log(`array : ${array}`);
console.log(`The Value in array that is multiple of 4 is : ${multipleArray}`);

//Example of Reduce Function 

let sum = array.reduce((sum,val) => sum+val , 0);
console.log(`The sum of all elements in array is : ${sum}`);

// Another way of writing above one
let sum2 = array.reduce(function(sum,val){
    return sum+val;
});
console.log(`The sum of all elements in array is : ${sum2}`);

// Example of includes Method 
console.log(`Is 4 is present in array : ${array.includes(4)}`);  // it will return true 
console.log(`Is 9 is present in array : ${array.includes(9)}`);  // it will return false

// Example of indexOf Method
console.log(`The index of 4 in array is : ${array.indexOf(4)}`);
console.log(`The index of 10 in array is : ${array.indexOf(10)}`); // if element is not present it will return -1


// Example of lastIndexOf Method
console.log(`The last index of 36 in array before pushing 36 is : ${array.lastIndexOf(36)}`);
array.push(36);
console.log(`The last index of 36 in array after pushing 36 is : ${array.lastIndexOf(36)}`);

// Example of find Method
let found = array.find(function(val){
    return val > 10;
})
console.log(`The first element in array which is greater than 10 is : ${found}`);

// Example of findIndex Method
let foundIndex = array.findIndex(function(val){
    return val > 10;
})
console.log(`The index of first element in array which is greater than 10 is : ${foundIndex}`);

// Example of splice Method
console.log(`array before splice method : ${array}`);
let spliced = array.splice(1,3);
console.log(`array after splice method : ${array}`);
console.log(`The spliced part of array is : ${spliced}`);
// Note : splice method changes the original array

// Example of slice Method
array = [36,4,6,8,10,36]; // reinitializing the array
console.log(`array before slice method : ${array}`);
let sliced = array.slice(1,3);
console.log(`array after slice method : ${array}`);
console.log(`The sliced part of array is : ${sliced}`);
// Note : slice method does not changes the original array

// Example of concat Method
let newArray = array.concat([12,14,16]);
console.log(`The new array after concatenation is : ${newArray}`);   // [36,4,6,8,10,36,12,14,16]


// Example of sort Method
console.log(`array before sort method : ${array}`);
let sortedArray = array.sort(function(a,b){
    return a-b;
});
console.log(`array after sort method : ${sortedArray}`);  // it will sort as string by default

// Example of reverse Method
console.log(`array before reverse method : ${array}`);
array.reverse();
console.log(`array after reverse method : ${array}`);  // it will reverse the array