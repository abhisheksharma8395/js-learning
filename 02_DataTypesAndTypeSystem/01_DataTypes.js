/* primitives -> aisi saari values jinko copy krne par tumhe ek real copy mil jaye.
ex - String , number , boolean , null , undefined, symbol, bigint etc.
*/


/* Reference -> inko copy karne par real copy nahi milegi but apko reference milega parent ka.
ex - arrays, objects, functions.
        [] ,   {}  ,  ()
*/


// Primitive Example
let a = 12;
let b = a;
console.log(a);  // prints 12
console.log(b);  // prints 12 

a = a+8;
console.log(a);   // pritns 20
console.log(b);   // prints 12   because b is of primitive type and it only copies the value of a not the reference so the change in a can't reflect in b.

// Reference Example

let arr1 = [1,2,3,4];  
let arr2 = arr1;     // arr2 do not holds the real copy of arr1 but only the reference of arr1 means any change in a reflects in b or any change in b reflects in a.
console.log(arr1);
console.log(arr2);

arr2.pop();                 // Removing the last value from arr2 this change also reflects in arr1 
console.log(arr1);
console.log(arr2);