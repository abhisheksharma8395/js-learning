let obj = {
    name : "Abhishek Sharma",
    age : 21,
    email : "test@test.com",
};

let obj2 = {...obj}; // Cloning obj to obj2 using spread operator
console.log(obj2);

let obj3 = Object.assign({phone : 1234567890},obj);
console.log(obj3);