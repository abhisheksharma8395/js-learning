// String , number , boolean , null , undefined, symbol, bigint

// null ka matlab apne jaanboojhker koi value nhi di

// Undefined ka matlab h ki apne ek variable banaya tha use value nhi di to jo value by default mili h wo h undefined.

// 🚨 Symbol -> unique immutable value
/* a Symbol is a primitive data type introduced in ES6 (ECMAScript 2015). It is used to create unique and immutable identifiers.*/

let obj = {
    uid : 1,
    name : "Abhishek",
    age : 12,
    email : "test@test.com"
};

let u1 = Symbol("uid");
obj[u1] = "001";
console.log(obj);



// BigInt

console.log(Number.MAX_SAFE_INTEGER);  //Maximum value of number type

let a  = 9007199254740991n;
a = a+9n;
console.log(a);
