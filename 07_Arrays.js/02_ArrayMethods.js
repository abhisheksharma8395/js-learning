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
console.log(`array after amp method : ${array}`);

//Example of filter function 
// if you want an Array from array which is multiple of 4

let multipleArray = array.filter(function(val){
    return (val%4) == 0;
})
console.log(`array : ${array}`);
console.log(`The Value in array that is multiple of 4 is : ${multipleArray}`);