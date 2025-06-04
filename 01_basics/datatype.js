////Types of Datatype in javascript ////

//// Primitive: String, Number, Boolean, Undefine, None, Symbol, bigInt

// Number       :       Define Number
// bigint       :       Define Big Number
// string       :       Define String
// Boolean      :       True or False
// null         :       stand alone value (not zero its only empty)
// undefined    :       not assign Value
// symnol       :       unique datatype

"use stricts" // Treat all JS code as newer version

let name = "Parth"; // string
let age = 34 // Number
let logedin = true // Boolean
let companyName; // Undefined
let nullValue = null; // Null   // The datatype of null is "Object"

const id = Symbol("123"); // Symbol
const anotherid = Symbol("123"); // Symbol
const bignumber = 1234567896545464666565n;

// Resultes
console.log(typeof name);
console.log(typeof age);
console.log(typeof logedin);
console.log(typeof companyName);
console.log(typeof nullValue);
console.log(typeof id);
console.log(typeof anotherid);
// console.log(id);
// console.log(anotherid); 
console.log(typeof bignumber);

//Visit This Link https://262.ecma-international.org/5.1/#sec-11.4.3 for typeof Operator Results


//// Non-Primitive (Refrence) : Array, Objects, Function
const cars = ["Tesla", "Fortuner", "Jaguar"];  // Define Array
let carDetails = {
    name : "Tesla",
    Type : "Electric",
    price: "1-caror",
    cubicCapacity : 1200,
} // Define Object
// function () {} // Declare Function
const myFunction = function () {
    console.log("This is function");
} // Declare variable fo function

console.log(typeof cars);
console.log(typeof carDetails);
console.log(typeof myFunction);