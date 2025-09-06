/*
Question -> Why we use deep cloning?
Ans: When we want to copy an object and its nested objects, we use deep cloning.
This is because, in shallow cloning, only the top-level properties are copied, and the nested objects are still 
referenced to the original object. So, if we modify the nested object in the cloned object, it will also affect the original object.
In deep cloning, all the properties and nested objects are copied, so any changes made to the cloned object do not affect the original 
object.
*/

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
}; 

let obj2 = {...obj}; // Shallow Cloning using spread operator
console.log(obj2);
obj2.address.city = "Greater Noida"; // Modifying the nested object in obj2
console.log(obj.address.city);  // Original object also gets changed
console.log(obj2.address.city); 


//---------------------------------------------------------------------------------------------------
// Deep Cloning using JSON methods
let obj3 = JSON.parse(JSON.stringify(obj));
console.log(obj3);

obj3.address.city = "Agra"; // Modifying the nested object in obj2
console.log(obj.address.city); // Original object remains unchanged
console.log(obj3.address.city); // Cloned object reflects the change    