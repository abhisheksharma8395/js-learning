let role = "Admin";
let obj = {
    name : "Abhishek Sharma",
    age : 21,
    email : "email@gmail.com",
    address : {
        city : "Mathura",
        pin : 281406,
        state : "Uttar Pradesh",
        country : "India",
        locations: {
            lat : 27.4924,
            lng : 77.6737,
        },
    },
    [role] : "Abhishek",
}; 
// Optional Chaining (?.) : It is used to access the nested properties of an object without getting an error if the property does not exist.
console.log(obj?.address?.locations?.lat); // 27.4924