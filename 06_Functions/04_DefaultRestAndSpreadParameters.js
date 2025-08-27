//Example of Default Parameters in JavaScript functions
function add(number1 = 0 , number2 = 0){
    console.log(`Addition of ${number1} and ${number2} is ${number1 + number2}`);
}

add(undefined , 5);

//Example of Rest Parameters in JavaScript functions
function print(...numbers){
    console.log("Numbers are: ", numbers);
}
print(1,2,3,4,5,6,7,8,9,10); // you can pass any number of arguments

//Another example of Rest Parameters
function print2(a,b,c, ...numbers){
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
    console.log("Rest of the numbers are: ", numbers);
}
print2(1,2,3,4,5,6,7,8,9,10);

/*

Questions 01 -> What are default parameters in JavaScript functions and how do you use them?
Answer -> Default parameters allow you to initialize named parameters with default values if no value or undefined is passed. 
You can define default parameters by assigning a value to the parameter in the function definition.

Questions 02 -> What are rest parameters in JavaScript functions and how do you use them?
Answer -> Rest parameters allow you to represent an indefinite number of arguments as an array. You can define rest parameters by 
using the ... (three dots) syntax before the parameter name in the function definition.

Questions 03 -> How to distinguish between Spread operator and rest Parameters?
Answer -> The spread operator is used to expand an array or object into individual elements, while rest parameters are used to
collect multiple elements into a single array parameter. The spread operator is used in function calls and array/object literals,
whereas rest parameters are used in function definitions.

*/