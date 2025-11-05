// The ? : Ternary Operator

// The ternary operator is a shortcut for if...else.
// It has three parts:

// condition ? valueIfTrue : valueIfFalse----syntax
let age = 20;
console.log(age >= 18 ? 'adult' : 'minor');//adult
// Condition: age >= 18---(20>=18)true

// If condition is true: 'adult'---returns

// If condition is false: 'minor'

////////////////////////////////////////////////////////////

let marks = 85;
console.log(marks >= 35 ? 'Pass' : 'Fail');//pass


let num = 10;
let type = (num % 2 === 0) ? 'Even' : 'Odd';
console.log(type);//even

let isLoggedIn = true;
console.log(isLoggedIn ? 'Welcome!' : 'Please log in');//welcome


let isLogIn = false;
console.log(isLogIn ? 'Welcome!' : 'Please log in');//please log in

// condition	Expression to test (must return true or false)
// ?	“Then” part (executes if condition is true)
// :	“Else” part (executes if condition is false)