// Operators And Operands
/* 

⭐ Operators -> Operators are special symbols that perform operations on operands (values and variables).
For example, in the expression 5 + 3, + is the operator, and 5 and 3 are the operands.

⭐ Operands -> Operands are the values or variables on which operators perform operations.
*/

/*

🚨 There are different types of operators in JavaScript:
1. Arithmetic Operators -> +, -, *, /, %, ++, --, **
2. Assignment Operators -> =, +=, -=, *=, /=, %=
3. Comparison Operators -> ==, ===, !=, !==, >, <, >=, <=
4. Logical Operators -> &&, ||, !
5. Bitwise Operators -> &, |, ^, ~, <<, >>, >>>
6. String Operators -> +, +=
7. Conditional (Ternary) Operator -> ? :
8. Comma Operator -> ,
9. Unary Operators -> typeof, void, delete, +, -
10. Relational Operators -> in, instanceof
11. Spread Operator -> ...
12. Nullish Coalescing Operator -> ??
13. Optional Chaining Operator -> ?.
14. Exponentiation Operator -> **
15. Destructuring Assignment -> { } , [ ]
16. Others -> new, yield, await
Note -> Some operators can be used in multiple categories, for example, + can be used as an arithmetic operator and a string operator.
*/

/*
😎 Operators precedence -> Operator precedence determines the order in which operators are evaluated in an expression.
For example, in the expression 3 + 5 * 2, the multiplication operator (*) has higher precedence than the addition operator (+), 
so the multiplication is performed first, resulting in 3 + 10 = 13. 
If you want to change the order of operations, you can use parentheses. For example, (3 + 5) * 2 results in 8 * 2 = 16.
*/


// Example of Arithmetic Operators
console.log("Arithmetic Operators Example:");
let a = 10;
let b = 3;
console.log("a =", a); // 10
console.log("b =", b); // 3
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation
console.log("++a =", ++a); // Pre-increment
console.log("b-- =", b--); // Post-decrement

// Example of Assignment Operators
console.log("\nAssignment Operators Example:");
let x = 5; // Assignment
console.log("x =", x);
x += 3; // x = x + 3
console.log("x += 3 ->", x);
x *= 2; // x = x * 2
console.log("x *= 2 ->", x);
x -= 4; // x = x - 4
console.log("x -= 4 ->", x);
x /= 2; // x = x / 2
console.log("x /= 2 ->", x);
x %= 3; // x = x % 3
console.log("x %= 3 ->", x);
x **= 2; // x = x ** 2
console.log("x **= 2 ->", x);

// Example of Comparison Operators
console.log("\nComparison Operators Example:");
x = 5;
console.log("x =", x);
console.log("x == '5' ->", x == '5'); // Equal to

console.log("x === '5' ->", x === '5'); // Strict equal to
console.log("x != '5' ->", x != '5'); // Not equal to
console.log("x !== '5' ->", x !== '5'); // Strict not equal to
console.log("x > 2 ->", x > 2); // Greater than
console.log("x < 10 ->", x < 10); // Less than
console.log("x >= 5 ->", x >= 5); // Greater than or equal to
console.log("x <= 5 ->", x <= 5); // Less than or equal to


/* 
🚨 Question -> What is the difference between == and === ?
Answer -> The == operator compares values for equality after performing type coercion if necessary, 
meaning it converts the operands to a common type before making the comparison. The === operator, on the other 
hand, compares both value and type for strict equality without performing type coercion.
*/

// Example of Logical Operators
console.log("\nLogical Operators Example:");
let p = true;
let q = false;
console.log("p =", p); // true
console.log("q =", q); // false
console.log("p && q ->", p && q); // Logical AND
console.log("p || q ->", p || q); // Logical OR
console.log("!p ->", !p); // Logical NOT
console.log("!q ->", !q); // Logical NOT

// Example of Bitwise Operators
console.log("\nBitwise Operators Example:");
let c = 5; // Binary: 0101
let d = 3; // Binary: 0011
console.log("c =", c); // 5
console.log("d =", d); // 3
console.log("c & d =", c & d); // Bitwise AND (0101 & 0011 = 0001) -> 1
console.log("c | d =", c | d); // Bitwise OR (0101 | 0011 = 0111) -> 7
console.log("c ^ d =", c ^ d); // Bitwise XOR (0101 ^ 0011 = 0110) -> 6
console.log("~c =", ~c); // Bitwise NOT (~0101 = 1010) -> -6
console.log("c << 1 =", c << 1); // Left shift (0101 << 1 = 1010) -> 10
console.log("c >> 1 =", c >> 1); // Right shift (0101 >> 1 = 0010) -> 2
console.log("c >>> 1 =", c >>> 1); // Unsigned right shift (0101 >>> 1 = 0010) -> 2


// Example of String Operators
console.log("\nString Operators Example:");
let str1 = "Hello, ";
let str2 = "World!";
console.log("str1 =", str1); // "Hello, "
console.log("str2 =", str2); // "World!"
console.log("str1 + str2 =", str1 + str2); // Concatenation
str1 += str2; // str1 = str1 + str2
console.log("str1 += str2 ->", str1); // "Hello, World!"

// Example of Conditional (Ternary) Operator
console.log("\nConditional (Ternary) Operator Example:");
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote); // "Yes"

// Example of Comma Operator
console.log("\nComma Operator Example:");
let m = (1, 2, 3); // m will be assigned the value of the last operand
console.log("m =", m); // 3

// Example of Unary Operators
console.log("\nUnary Operators Example:");
let num = 5;
console.log("num =", num); // 5
console.log("typeof num ->", typeof num); // "number"
console.log("+num ->", +num); // Unary plus
console.log("-num ->", -num); // Unary minus
console.log("delete num ->", delete num); // Deletes the variable (not recommended for variables declared with var, let, or const)
console.log("num after delete ->", num); // 5 (delete does not affect variables declared with var, let, or const)
// Note: The delete operator is primarily used to remove properties from objects, not variables.

// Example of Relational Operators
console.log("\nRelational Operators Example:");
let obj = { key: "value" };
console.log("'key' in obj ->", 'key' in obj); // true
console.log("obj instanceof Object ->", obj instanceof Object); // true
console.log("obj instanceof Array ->", obj instanceof Array); // false
// Important Note -> The instanceof operator used with the Objects. 


// Example of Spread Operator
console.log("\nSpread Operator Example:");
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Spread arr1 into arr2
console.log("arr2 =", arr2); // [1, 2, 3, 4, 5]
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // Spread obj1 into obj2
console.log("obj2 =", obj2); // { a: 1, b: 2, c: 3 }

// Example of Nullish Coalescing Operator
console.log("\nNullish Coalescing Operator Example:");
let val1 = null;
let val2 = val1 ?? "Default Value"; // val2 will be "Default Value" because val1 is null
console.log("val2 =", val2); // "Default Value" 
let val3 = 0;
let val4 = val3 ?? "Default Value"; // val4 will be 0 because val3 is not null or undefined
console.log("val4 =", val4); // 0

// Example of Optional Chaining Operator
console.log("\nOptional Chaining Operator Example:");
let user = { name: "Alice", address: { city: "Wonderland"} , contact : {phone : "83XXXXXXX0"} };
console.log("user?.name ->", user?.name); // "Alice"
console.log("user?.address?.city ->", user?.address?.city); // "Wonderland"
console.log("user?.contact?.phone ->", user?.contact?.phone); // 83XXXXXXX0

// Example of Exponentiation Operator
console.log("\nExponentiation Operator Example:");
let base = 2;
let exponent = 3;
console.log("base ** exponent ->", base ** exponent); // 8 (2 raised to the power of 3)
console.log("Math.pow(base, exponent) ->", Math.pow(base, exponent)); // 8 (using Math.pow function)
// Both expressions yield the same result.

// Example of Destructuring Assignment
console.log("\nDestructuring Assignment Example:");
let [x1, y1] = [10, 20]; // Array destructuring
console.log("x1 =", x1); // 10
console.log("y1 =", y1); // 20
let {name, ages} = {name: "Bob", ages: 25}; // Object destructuring
console.log("name =", name); // "Bob"
console.log("age =", ages); // 25

/*

Question1 -> Why !! is used in JavaScript?
Answer -> The !! operator is used to convert a value to its boolean equivalent in JavaScript. to either truthy 
or falsy value. The first ! negates the value, converting it to a boolean and inverting its truthiness and the 
second ! negates it again, resulting in the original truthiness of the value.

*/