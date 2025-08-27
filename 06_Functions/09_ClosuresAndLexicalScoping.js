// Closures And Lexical Scoping

/*

💡Closures -> Ek function jo return kare ek aur function aur return hone wala function hamesha use karega parent function ka koi variable.
 
🔎 Lexical Scoping -> Lexical scoping (also called static scoping) means that a variable's scope is determined by its position 
in the source code — i.e., where it is written, not where it is called.
In JavaScript, functions are lexically scoped. This means:

A function remembers the variables from the place where it was defined, not where it is called.
*/

// Example of Closures
function abcd(){  // So abcd is returning an function which and returned function uses the variable which is declared in abcd.
    let a = 12;
    return function(){
        console.log(a);
    }
}

abcd()();   // Calling function abcd()

// Example of Lexical Scoping

function xyz(){
    let a = 20;
    function def(){
        let b = 30;
        function jkl(){
            let c = 40;
            function defg(){
                let e = 50;
                console.log(e);
            }
            defg();
            console.log(c);
        }
        jkl();
        console.log(b);
    }
    def();
    console.log(a);
}
xyz();