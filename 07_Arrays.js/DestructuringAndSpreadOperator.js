// Destructuring and Spread Operator in Arrays

// Destructuring
let arr = [10, 20, 30, 40, 50];
let [a, b, c, d, e] = arr; // Here a=10, b=20, c=30, d=40, e=50

console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}`); 


// New Array 
let arr2 = [...arr]; // Here arr2 = [10, 20, 30, 40, 50, 60, 70, 80]
