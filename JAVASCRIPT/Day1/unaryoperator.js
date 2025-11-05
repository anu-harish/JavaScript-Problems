// Basic operators

// unary negation--converts to number
// unary plus(+) --Converts its operand to a number.Does not change the sign (just type conversion).
// and unary negation(-)--Converts its operand to a number,Then negates it (changes the sign(-)).
console.log(+"42"); // 42 (string -> number)
console.log(-"42"); // -42
console.log(+true);  // 1
console.log(+false); // 0
console.log(-false); // -0
console.log(-true); // -1 (true -> 1, then negated)
console.log(+null);      // 0
console.log(-null);      // -0
console.log(+undefined); // NaN
console.log(-undefined); // NaN
console.log(-(5 > 2));   // -1
console.log(+(5 < 2));   // 0
console.log(-"23");  //-23 
console.log(+[10, 20]);  // NaN(+[10,20] → "10,20" → invalid → NaN)
console.log(+[]);//0(mpty array converts to empty string → " " → number 0)
////////////////////////////////////////////////////////////
let x = 1;
console.log(-x ); // -1, unary negation was applied
let a = "10";
let b = "5";
console.log(+a + +b);  // 15
////////////////////////////////////////////////////////////////////////////

// Unary logical NOT: turns value to boolean then negates
// !true → false
// !false → true
console.log(!null);//true(null-falsy , negates false to true)
console.log(!0); // true(0--false, convert to boolean--false,then negates-true)
console.log(!undefined);//true(undefined-false, negates-false to true)
console.log(!!'text'); // true ('text'-non empty string so truth-,!'text'-1st negation-false, negation of false--true)
console.log(!'');//true('' empty str-false, negates false--true)
console.log(!!0); // false(0-false, !-false to true , !-true to false)
console.log(![]);//false([]-array true , negates-false)
console.log(!{});//false
console.log(!!0n);//false


// falsy and truth values are here:
console.log(Boolean(false));        // false
console.log(Boolean(0));            // false
console.log(Boolean(-0));           // false
console.log(Boolean(0n));           // false (BigInt zero)
console.log(Boolean(""));           // false (empty string)
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // falseconsole.log(Boolean(true));
/=====================// 
console.log(Boolean(1));            // true
console.log(Boolean(-1));           // true
console.log(Boolean("hello"));      // true
console.log(Boolean(" "));          // true (space is not empty)
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true
console.log(Boolean(function(){})); // true
console.log(Boolean(Infinity));     // true
console.log(Boolean(BigInt(1)));    // true