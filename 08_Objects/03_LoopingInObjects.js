let obj = {
    name : "Abhishek Sharma",
    age : 26,
    email : "test@gmail.com",
};

// for in loop in objects
for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
}

// object.keys() : returns an array of keys of the object
let keyArray = Object.keys(obj);
console.log(keyArray);

// object.values() : returns an array of values of the object
let valueArray = Object.values(obj);
console.log(valueArray);

// object.entries() : returns an array of [key,value] pairs of the object
let entriesArray = Object.entries(obj);
console.log(entriesArray);