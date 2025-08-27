/*

Return And Early Return

⭐ Return -> The return statement is used to exit a function and return a value from that function.
When a return statement is executed, the function stops executing and the specified value is returned to the caller.

⭐ Early Return -> Early return is a programming practice where a function exits early if certain conditions are met.
This helps to avoid deep nesting and makes the code more readable and maintainable.

*/


// Function to calculate the area of a square
function square(sideLength) {         
    return sideLength * sideLength; // Return statement to return the square of the number
}

console.log(square(5)); // Calling the function and logging the returned value


// Function to check if a number is prime
function isPrime(number){
    if(number<=1){
        return "The number should be greater than 1"; // Early return for invalid input
    }
    for(let i = 2;i<=Math.sqrt(number);i++){
        if(number % i === 0){
            return `${number} is a Composite number`; // Early return if the number is not prime
        }
    }
    return `${number} is a prime number`; // Return true if the number is prime
}

console.log(isPrime(108)); // Calling the function and logging the returned value