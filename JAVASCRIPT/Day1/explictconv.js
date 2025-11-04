// manually convertin one data type to another
// string conversion
let num = 123;
let str = String(num);
console.log(str); //"123"
console.log(typeof str); 

// number conversion
let str1 = "123";
let num1 = Number(str1);

console.log(num1);          // 123
console.log(typeof num1);   // number


// with parseInt() and parseFloat()
let value1 = "25.85";
let value2 = "25.75";

console.log(parseInt(value1));   // 25--removes decimal
console.log(parseFloat(value2)); // 25.75-keeps decimals

// another
let val1 = "25.45";
let val2 = "25.75";

let n1 = parseInt(val1);
let n2 = parseFloat(val2);

console.log(n1);              // 25
console.log(n2);              // 25.75

console.log(typeof val1);     // string
console.log(typeof val2);     // string

console.log(typeof n1);       // number
console.log(typeof n2);       // number

