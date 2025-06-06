const name = "Parth";
const repoCount = 909;

// Traditional Metod (String Concatinate)
//console.log("May Name Is" + " " + name + " " + "and my repo count is" + " " + repoCount +".");

// Modern Method (String interpolation)
//console.log(`May Name Is ${name} and my repo count is ${repoCount}.`);

const gameName= new String("Parth Mistrya"); // Sec. Metod to declare string (Here string is an object) ==> Rin directly in console of browser 
//then you can find object of string and Prototype and all methods of string.

console.log(gameName[0]);
console.log(gameName.__proto__);// To Know Prototype
console.log(gameName.length); // To Know length
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6)); // To find the charactor on position of the number (Similar function console.log(gameName.at(6));)
console.log(gameName.indexOf('a')); // To find the key position of decalre charactor

const newString = gameName.substring(0,4);
console.log(newString);

const anothernewString = gameName.slice(-6,3);
console.log(anothernewString);

const newstringOne = " Parth Mistry ";
console.log(newstringOne);
console.log(newstringOne.trim()); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim ==> Document for trim

const newstringTwo = "Parth Mistry"
console.log(newstringTwo.replace(' ', '-'));

console.log(newstringTwo.includes('Parth01')); // To find the word which is in include.

console.log(gameName.split('|'));
console.log(gameName.bold());

const filePath = String.raw`C:\Development\profile\about.html`;
console.log(`The file was uploaded from: ${filePath}`);