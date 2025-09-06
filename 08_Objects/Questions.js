// Question -> 01 : Create an object for a student with name, age, and isEnrolled.
let StudentObject = {
    name : "Abhishek Sharma",
    age : 21,
    isEnrolled : true,
};

// Question -> 02 : Can an object key be a number or boolean?
// Ans: Yes, an object key can be a number or boolean. However, when using numbers or booleans as keys, they are converted to strings.

let obj = {
    1 : "one", // number key
    true : "yes", // boolean key
};

console.log(obj[1]);
console.log(obj['true']);

// Question -> 03 : Access the value of "first-name" from this object.
const user = {
    "first-name": "John",
};
console.log(user["first-name"]);

// Question -> 04 : From the object below,print the latitude:
const location = {
    city : "Mathura",
    coordinates : {
        lat : 23.2,
        lng : 77.4,
    },
};
console.log(location?.coordinates?.lat);

// Question -> 05 : Destructure the city and lat from the location object above.
let {city} = location;
let {lat} = location?.coordinates;
console.log(city,lat);

// Question -> 06 : Destructure the key "first-name" as a variable called firstName.
const user1 = {
    "first-name": "John",
};

let{"first-name": firstName} = user1;
console.log(firstName);

// Question -> 07 : Use for-in to log all keys in this object:
const course = {
    title : "JavaScript",
    duration : "4 weeks",
};

for(let key in course){
    console.log(key);
}

// Question -> 08 : Use Object.entries() to print all key-value pairs as:
const product ={
    name : "Laptop",
    price : 50000,
    brand : "Asus",
};
let entriesArray = Object.entries(product).forEach((val)=>{
    console.log(val[0],":",val[1]);
});

// Question -> 09 : Deep Clone the obj2 safely
const obj2 = {info:{score : 80}};
let cloneObj = JSON.parse(JSON.stringify(obj2));
cloneObj.info.score = 100;
console.log(obj2);
console.log(cloneObj);

// Question -> 10 : Use a variable to dynamically assign a property
const key = "role";
let obj3 = {
    name : "Abhishek Sharma",
    [key] : "Admin",
};
console.log(obj3);
