// Arrays, Objects, Functions

let a = { name : "Harsh" };
let b = a;
console.log(a);  // Both a and b point to the same object in memory 
console.log(b);

b.name = "Abhishek";
console.log(a);
console.log(b);

