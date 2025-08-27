// Temporal Dead Zone -> The TDZ is the area between the start of the scope and the point where the variable is declared and initialized.

console.log(a); // It will give an error "Can't access a before Initialisation."
//In other programming language it will give an error "a is not Defined." 


let c = 8; // Temporal Dead Zone of a is from line 1 to line 7.



let a = 12; // Temporal Dead Zone of a is from line 1 to line 10.


//Notes ->
// The Temporal Dead Zone is the time between entering a block (like a function or if-statement) and the point where a let or const variable is declared.
// During this time, the variable exists but cannot be accessed, and trying to do so results in a ReferenceError.

// Summary ->
// 1️⃣ TDZ applies to let and const, not var.

// 2️⃣ It helps avoid unintentional usage of variables before declaration.

// 3️⃣ Accessing a variable in its TDZ throws a ReferenceError.