const accountId = 144553
let accountEmail = "abhishek79@gmail.com" 
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2   // Not Allowed to update value of variable defined with const
accountEmail = "as34@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);
/*
Preferred Not to use var
beacause of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

