const accountId = 144553
let accountEmail = "white@example.com"
var accountPassword = "supersecret"
accountCity = "Jaipur"
let accountState;

accountEmail = "bear@example.com"
accountPassword = "noneofyourbusiness"
accountCity = "varansi"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
prefer not to use var because of 
issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])