// Hoisting imapct per type
/* Hoisting -> ek varivble ko jab javaScript me banate hai to wo variable do hisso me tut jata h ans uska declare part upar chala jaata
hai or uska Initialisation part neeche reh jaata hai.*/

// Upper part of var a
var a = undefined;
console.log(a); // That's why it will not give any error if you want to access the var in TDZ(Temporal Dead Zone) and it print "Undefined"



var a = 12;


// Lower part of var a
a = 12;


/* 
Item	               Hoisted?	         Initialized?	     Accessible Before Declaration?
var	                    ✅ Yes	       ✅ undefined	        ✅ Yes
let / const	            ✅ Yes	       ❌ No	                ❌ No (TDZ error)
function decl.	        ✅ Yes	       ✅ Yes	            ✅ Yes
class decl.	            ✅ Yes	       ❌ No	                ❌ No (TDZ error)
*/