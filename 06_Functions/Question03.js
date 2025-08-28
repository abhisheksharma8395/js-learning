// Question 01 -> Write a BMI calculator
//Answer -> 
console.log(`Answer 01`);
function BMI(height,weight){
    return weight/(height*height);
}

console.log(BMI(1.854200000,81.500).toFixed(2));  //🚨.toFixed(num)precision value upto num

// Question 02 -> Write a reusable discount calculator(HOF)
//Answer -> 
console.log(`Answer 02`);
function discountPrice(discountPercentage){
    return function(price){
        return price - (((discountPercentage/100).toFixed(4))*price);
    }
}
let discountPercent = 12;
let totalAmount = 33000;
let discount = discountPrice(discountPercent);  //10% discount
console.log(`Your total Amount is ${totalAmount}💵 and discount on that amount is ${discountPercent}%`);
console.log(`Your final Payable amount after ${discountPercent}% discount is ${discount(totalAmount)}💵`);          // 2000 ruppes per 10 % discount

// Question 03 -> Build a Counter using closure.
// Answer -> 
console.log(`Answer 03`);
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let countingButton = counter();
countingButton();  // 1
countingButton();  // 2
countingButton();  // 3
countingButton();  // 4
countingButton();  // 5
countingButton();  // 6
console.log(`--------------------------------------------------`);
let countingButton1 = counter();
countingButton1();  // 1
countingButton1();  // 2
countingButton1();  // 3
countingButton1();  // 4
countingButton1();  // 5
countingButton1();  // 6



// Question 04 -> Create a pure function to transform a value.
//Answer -> 
console.log(`Answer 04`);
let globalVar = 17;
function pureFunction(){          // Pure Function that transform the value of GlobalVar without actually chnaging it.
    let localVar = globalVar;
    return function(){
        localVar++;
        return localVar;
    }
}

let changedVal = pureFunction();
console.log(`The value of globalVar is ${globalVar}`);
console.log(`The value return by pureFunction is ${changedVal()}`);

//Question 05 -> Use IIFE to isolate variables.
//Answer -> 
console.log(`Answer 05`);
(function(){
    let password = "Do not tell your Password to someone else.";
    console.log(password);
})();