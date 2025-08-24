// Type Coercion ( == vs === )
// Truthy vs Falsy values

/* type coercion -> type coercion is the automatic or implicit conversion of values from 
one data type to another (such as strings to numbers).
*/

let num = 5; // number
let str = "5"; // string
console.log(num == str); // true, because of type coercion
console.log(num === str); // false, no type coercion, different types