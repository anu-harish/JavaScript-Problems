console.log('\n--- Arithmetic ---');
// addition(concat"" and add+)

console.log(2 + 3); // 5
console.log(10 + 5);        // 15
console.log(-10 + 5);       // -5
console.log(10 + (-5));     // 5
console.log(2.5 + 3.5);     // 6.0
console.log("Hello " + "World"); // "Hello World"
console.log("5" + 5);       // "55" (s when string apperas 1st it becomes string only tring concatenation)
console.log(true + 1);      // 2 (true → 1)
console.log(false + 1);     // 1 (false → 0)
console.log(5 + 5 + "5"); // "105"
console.log("5" + 5 + 5); // "555"(When a string appears first, the rest of the operation becomes string concatenation.)
console.log(5 + "5" + 10); // "5510"
console.log(5 + 5 + "10"); // "1010"
console.log("5" + 5 + 10); // "5510"
console.log(true + "5");  // "true5"
console.log(false + "5"); // "false5"
console.log(true + 5);  // 6  (true → 1)
console.log(false + 5); // 5  (false → 0)
console.log("Value: " + null);      // "Value: null"
console.log("Value: " + undefined); // "Value: undefined"
console.log(null + 5);              // 5  (null → 0)
console.log(undefined + 5);         // NaN (undefined → NaN)
///////////////////////////////////////////////////////////////////////////////////////////////
//substraction(perform only substract)
console.log(5 - 2); // 3
console.log(2 - 5); // -3
console.log("10" - 3); // 7 ("10" -> 10)
console.log("abc" - 3); // NaN
console.log(true - false); // 1
console.log(100 - null); // 100 Subtraction with null (null -> 0)
//////////////////////////////////////////////////////////////////////////////////////////////////
// multiplication
console.log(2 * 3); // 6
console.log(-2 * 3); // -6
console.log(2.5 * 4); // 10
console.log("5" * "2"); // 10 (strings converted to numbers)
console.log("a" * 2); // Multiplication with invalid string -> NaN
console.log(true * 10); // 10 (true -> 1)
console.log([5] * 2); // 10 ([5] -> "5" -> 5)
console.log([1,2] * 2); // NaN ([1,2] -> "1,2" -> not a valid number)
console.log([1,2] * 2); // NaN ([1,2] -> "1,2" -> not a valid number)
console.log({} * 2); // NaN
////////////////////////////////////////////////////////////////////////////////////////
// division
console.log(7 / 2); // 3.5
console.log(10 / 2); // 5
console.log(5 / 0); // Infinity
console.log(-5 / 0); // -Infinity
console.log("10" / "2"); // 5
console.log("a" / 2); // NaN
console.log(0 / 5); // 0

// //////////////////////////////////////////////////////////////////////////////////////////
// modulus
console.log(7 % 2); // 1 (remainder)
console.log(10 % 3); // 1
console.log(9 % 3); // 0
console.log(-9 % 4); // -1 (because -9 = (-3)*4 + -1)
console.log(9 % -4); // 1 (9 = (-2)*(-4) + 1) — remainder sign follows dividend
// Modulus with floats
console.log(10.5 % 3); // 1.5
// Modulus with string numbers (coercion)
console.log("10" % "4"); // 2
// Modulus when dividend < divisor
console.log(2 % 7); // 2
///////////////////////////////////////////////////////////////////////////
// Exponentiation
console.log(2 ** 3); // 8 (exponentiation)
console.log(5 ** 2); // 25
console.log(10 ** 0); // 1
// Fractional exponents (roots)
console.log(4 ** 0.5); // 2 (square root)
console.log(27 ** (1/3)); // 3 (cube root)

//  + is also string concatenation
console.log('\n--- + (concat vs add) ---');
console.log(1 + 2 + '3'); // '33' (left-to-right: (1+2)=3 then '3' -> '33')
console.log('1' + 2 + 3); // '123' (string starts -> all concatenated)


// Unary + is useful to convert strings to numbers (faster than Number() sometimes):
console.log(+"123"); // 123