let obj = {
    name : "Abhishek Sharma",
//   key :   value
    age : 21,
    favFood : "Kadhi Chawal",
};

console.log(obj.age); // Dot Notation of accessing object properties
console.log(obj['favFood']); // Bracket Notation of accessing object properties

// What is the difference between dot and bracket notation of accessing object properties?
// Ans: In dot notation, the property name is directly specified after the dot, while in bracket notation, the property name is 
// specified as a string inside square brackets. Bracket notation is useful when the property name is dynamic or not a valid identifier.

// for example:
let propertyName = "name";
console.log(obj.propertyName); // Using dot notation with a variable (undefined)
console.log(obj[propertyName]); // Using bracket notation with a variable