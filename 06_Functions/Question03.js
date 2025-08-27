// Question 01 -> Write a BMI calculator
//Answer -> 
function BMI(height,weight){
    return weight/(height*height);
}

console.log(BMI(1.854200000,81.500).toFixed(2));  //🚨.toFixed(num)precision value upto num

// Question 02 -> Write a reusable discount calculator(HOF)
//Answer -> 
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

function counter(){

}