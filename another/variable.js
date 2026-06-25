const accountId = 66538
let accountEmail = "vaishnavivaishu477@gmail.com"
var accountPassword = "123456"
accountCity = "Bangalore"
accountEmail = "vaishu@gmail.com"
accountPassword = "654321"
accountCity = "Jaipur"
let accountNumber;
// accountId = 2 cannot change a constant variable
// Recommendation is not to use a "var" because it has issue in block scopr and functional scope
// any variable just declared in javascript gets the value "undefined"
// any variable can be defined in javascript without its datatype name but it's highly not recommened to do that
console.log(accountCity)
console.table([accountId, accountEmail, accountPassword, accountCity, accountNumber]);