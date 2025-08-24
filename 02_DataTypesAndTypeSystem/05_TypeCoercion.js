// Type Coercion ( == vs === )
// Truthy vs Falsy values

/* Type Coercion -> type coercion is the automatic or implicit conversion of values from 
one data type to another (such as strings to numbers).
*/

let num = 5; // number
let str = "5"; // string
console.log(num == str); // true, because of type coercion
console.log(num === str); // false, no type coercion, different types


// Falsy values in JavaScript -> false, 0, "", null, undefined, NaN, Document.all

console.log(!!0); // false
console.log(!!1); // true

