/* primitives -> aisi saari values jinko copy krne par tumhe ek real copy mil jaye.
ex - String , number , boolean , null , undefined, symbol, bigint etc.
*/


/* Reference -> inko copy karne par real copy nahi milegi but apko reference milega parent ka.
ex - arrays, objects, functions.
        [] ,   {}  ,  ()
*/


// Primitive Example
let a = 12;
let b = a;
console.log(a);  // prints 12
console.log(b);  // prints 12 

a = a+8;
console.log(a);   // pritns 20
console.log(b);   // prints 12   because b is of primitive type and it only copies the value of a not the reference so the change in a can't reflect in b.

// Reference Example

let arr1 = [1,2,3,4];  
let arr2 = arr1;     // arr2 do not holds the real copy of arr1 but only the reference of arr1 means any change in a reflects in b or any change in b reflects in a.
console.log(arr1);
console.log(arr2);

arr2.pop();                 // Removing the last value from arr2 this change also reflects in arr1 
console.log(arr1);
console.log(arr2);




// 🚨 Question1 -> Why the type of NaN is number?
console.log(typeof NaN);  // number

/* Answer -> NaN stands for "Not-a-Number," but in JavaScript, it is actually a special numeric value that represents an undefined or 
unrepresentable value in mathematical operations.
for example, when you try to perform a mathematical operation that doesn't yield a valid number, such as dividing zero by zero or
taking the square root of a negative number, JavaScript returns NaN.
*/

// 🚨 Question2 -> What is the difference between null vs undefined?
/* Answer -> null is an assignment value. It can be assigned to a variable as a representation of no value.undefined means a variable 
has been declared but has not yet been assigned a value.
*/

let x; // variable declared but not assigned
console.log(x); // undefined
let y = null; // variable assigned with null
console.log(y); // null


// 🚨 Question3 -> Why the console.log("5" + 3) prints 53 but console.log("5" - 3) prints 2?
/* Answer -> In JavaScript, the + operator is used for both addition and string concatenation. When one of the operands is a string,
JavaScript converts the other operand to a string and concatenates them. In the case of "5" + 3, the number 3 is converted to the string "3", 
and the result is the concatenated string "53" but in the case of "5" - 3, the - operator is only used for subtraction. JavaScript converts the 
string "5" to the number 5 nd then performs the subtraction, resulting in the number 2.
*/

console.log("5" + 3); // prints 53
console.log("5" - 3); // prints 2
console.log("5" * 3); // prints 15
console.log("5" / 3); // prints 1.6666666666666667