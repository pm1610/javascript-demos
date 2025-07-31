"use strict"

let name = 16014; // Number
// let name = "Parth"; // string
// let name = true; // Boolean
// let name = undefined; // undefined
// let name = null; // Null  // The datatype of null is "object"
// let name = Symbol("123") // Symbol for just unique identifier
// let name = BigInt(1234567896545456789); // BigInt
// let name = 1234567896545456789n; // BigInt
// let name = {}; // Object
// let name = []; // Array
// let name = "16014abc"; // String with Letters

console.log(typeof name);

let valueInString = Number(name); // Convert value of "name"
console.log(typeof valueInString);
console.log(valueInString);

/*------------------------------- Convert Value of name -------------------------------*/
//  16014  // Result is Number
//  Parth  // NaN (Not a Number) because "Parth" is not a number
//  true   // 1 // false // 0
//  undefined // NaN (Not a Number) because "undefined" is not a number
//  null // 0
//  Symbol("123") // Error : cannot convert Symbol to Number
//  BigInt(1234567896545456789) // 1234567896545456789
//  1234567896545456789n // 1234567896545456789n 
//  {} // NaN {Not a Number} because empty object cannot be converted to number
//  [] // 0 because empty array is convetred to number
//  "16014abc" // NaN (Not a Number) because "16014abc" is not a number