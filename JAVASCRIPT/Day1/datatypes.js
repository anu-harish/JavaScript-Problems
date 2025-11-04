// number(represents both integer n float)
// --mathematical infinity
console.log( 1 / 0 );

let n = 123;
num = 12.345;
console.log(`This is integer"${n}`);
console.log(`This is float"${num}`);

//Bigint--number is all odd integers greater than (253-1) can’t be stored at all in the “number” type
console.log(9007199254740991 + 1); 
console.log(9007199254740991 + 2);
// the "n" at the end means it's a BigInt
console.log(1234567890123456789012345678901234567890n);

//string
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
// double, single,
//  backtick--They allow us to embed variables and expressions into a string by wrapping them in ${…}
console.log(str);
console.log(str2);
console.log(phrase);

//boolean(logical type)
let isGreater = 4 > 1;

console.log( isGreater );

// null--represents nothing or empty
let age = null;
console.log(age);

//undefined value--is “value is not assigned”.
let ageno;

console.log(ageno); 

