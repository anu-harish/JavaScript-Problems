// An assignment operator = is used to store (assign) a value to a variable.
let x = 5; // assigns 5 to x

// //////
let name = "Anusha";
let age = 22;
console.log(name, age); // Anusha 22

// Compound Assignment Operators

// chaining assignment (right to left)
let a, b, c;
a = b = c = 10;
console.log(a, b, c); // 10 10 10

// Addition Assignment (+=) ---');
let num = 10;
num += 5; // same as num = num + 5
console.log(num); // 15

// Subtraction Assignment (-=) ---');
let count = 20;
count -= 7; // same as count = count - 7
console.log(count); // 13

// Multiplication Assignment (*=) ---');
let price = 100;
price *= 1.2; // price = price * 1.2
console.log(price); // 120

// Division Assignment (/=) ---');
let distance = 500;
distance /= 5; // distance = distance / 5
console.log(distance); // 100

// Modulus Assignment (%=) ---');
let remainder = 29;
remainder %= 5; // remainder = remainder % 5
console.log(remainder); // 4

// Exponentiation Assignment (**=) ---');
let base = 3;
base **= 4; // base = base ** 4 (3^4)
console.log(base); // 81

// Combining with Other Operators ---');
let n = 10;
n += 5 * 2; // n = n + (5*2)
console.log(n); // 20

// Assignment Returns Value ---');
let p, q;
p = (q = 8); // q assigned first, then p = q’s value
console.log(p, q); // 8 8

// String Concatenation with += ---');
let greeting = "Hello";
greeting += " World!";
console.log(greeting); // Hello World!

// Boolean with += ---');
let truth = true;
truth += 2; // true -> 1, so 1 + 2 = 3
console.log(truth); // 3

// Using assignment in expressions ---');
let y = 2;
let result = (y += 3) * 2; // y becomes 5, then multiplied by 2
console.log(result); // 10
console.log(y); // 5

