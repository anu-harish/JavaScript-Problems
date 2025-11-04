// implict--JJavaScript automatically converts data types during operations.
// string+number
// (--Addition if both sides are numbers
// --Concatenation (joining text) if one side is a string)
let result = "10" + 5;
console.log(result);

// String - Number(When using -, *, /, or % —
// JavaScript tries to convert the string to a number automatically.
let sub = "10" - 5;
console.log(sub); 

// Number + Boolean
let res1 = 10 + true;
console.log(res1); // 11 (true = 1)

// Number + null
let res2 = 10 + null;
console.log(res2); // 10 (null = 0)

 
let a = "5";
let b = 2;
let c = true;

console.log(a + b); // "52" (string)
console.log(a - b); // 3   (number)
console.log(b + c); // 3   (true = 1)
console.log(a + c); // "5true"
