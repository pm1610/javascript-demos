const accountId = 123468
let accountEmail = "parth@gmail.com"
var accountPassword = "12345"
cityName = "Ahmedabad"

// accountId = 1265498    --> Not Allowed because the id which have const that can not be change


accountEmail = "parth123@gmail.com"
accountPassword = "9874656"
cityName = "Nadiad"

console.log(accountId);
console.table([accountEmail,accountPassword,cityName])


// Note : Don't use var in modern javascript use let and const instead
// const is used for variavles that are not going to change
// let is use for variables that can change
// var is used for variables thet can change but it is not recommended in modern javascript