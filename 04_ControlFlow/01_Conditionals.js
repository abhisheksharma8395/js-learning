// if else else if
// switch case
// early return operator



/* 
If else -> The if...else statement is a conditional statement that executes a block of code if a 
specified condition is true. If the condition is false, it can execute an optional else block. You can 
also use else if to specify a new condition to test, if the first condition is false.
*/
let a = 10;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
} else if (a === b) {
    console.log("a is Strictly equal to b");
}
else {
    console.log("b is greater than a");
}


// Switch case -> The switch statement is used to perform different actions based on different conditions.
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

/* 🚨Queestion 01 -> What is the difference between switch case and if else?
Answer -> The main difference between switch case and if else is that switch case is used to check for equality, while if else can 
be used to check for a variety of conditions. Switch case is also more efficient than if else when there are multiple conditions to 
check, as it only evaluates the expression once, while if else evaluates the condition multiple times.
*/


/*
Early return operator -> The early return operator is a programming technique that allows you to exit a function
early if a certain condition is met. This can help to reduce the amount of nested code and make your code more readable.
*/

/*

🚨 Question 02 -> What is Fall Through in Switch Case.
Answer -> Fall through in switch case is a behavior where the execution of code continues from one case to the next case
without a break statement. This means that if a case matches, the code for that case will be executed, and then the code for 
the next case will also be executed, and so on, until a break statement is encountered or the end of the switch statement is reached.
*/