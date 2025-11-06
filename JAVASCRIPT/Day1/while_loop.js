// while-loop.js
// ================================
// The while loop repeats as long as the condition is true.

/*Syntax:
while (condition) {
   code
   update must be inside to avoid infinite loop


// Be careful: condition must eventually become false,
// otherwise → Infinite Loop 


// ========================================
// 1️ Basic Example
// ========================================
let count = 0;
while (count < 3) {
  console.log("Count is:", count);
  count++; // important: increments each iteration
}
/*
Iteration 1: count = 0 → true → prints "Count is: 0"
Iteration 2: count = 1 → true → prints "Count is: 1"
Iteration 3: count = 2 → true → prints "Count is: 2"
Iteration 4: count = 3 → false → loop stops
*/


// ========================================
//  Example: Countdown
// ========================================
console.log('\n--- Countdown Example ---');
let num = 5;
while (num > 0) {
  console.log("Countdown:", num);
  num--; // decrement until reaches 0
}


// ========================================
// 3️ Example: Waiting for Condition (Dynamic)
// ========================================
console.log('\n--- Waiting for random number === 3 ---');
let n = 0;
while (n !== 3) {
  n = Math.floor(Math.random() * 5); // generates 0–4
  console.log("Random:", n);
}


// ========================================
// 4️ Example: Sum of First N Natural Numbers
// ========================================
console.log('\n--- Sum of first 5 numbers ---');
let i = 1;
let sum = 0;
while (i <= 5) {
  sum += i; // add current number
  i++;
}
console.log("Sum =", sum); // 15


// ========================================
// 5️ Example: User Simulation (Break Condition)
// ========================================
console.log('\n--- Break Example ---');
let x = 1;
while (true) {
  console.log("Looping:", x);
  if (x === 3) break; // stop loop manually
  x++;
}



// ========================================
// 6️ Example: Skip even numbers (Continue)
// ========================================
console.log('\n--- Continue Example (odd numbers only) ---');
let y = 0;
while (y < 10) {
  y++;
  if (y % 2 === 0) continue; // skip even numbers
  console.log("Odd number:", y);
}


// ========================================
// 7️ Example: Reverse a string using while loop
// ========================================
console.log('\n--- Reverse String ---');
let str = "hello";
let reversed = "";
let index = str.length - 1;

while (index >= 0) {
  reversed += str[index];
  index--;
}
console.log("Reversed string:", reversed); // "olleh"


// ========================================
// 8️ Example: Guessing until correct number (Simulation)
// ========================================
console.log('\n--- Guess Simulation ---');
let target = 4;
let guess = -1;
let attempts = 0;

while (guess !== target) {
  guess = Math.floor(Math.random() * 6); // 0–5
  attempts++;
  console.log(`Attempt ${attempts}: guess = ${guess}`);
}
console.log(`✅ Found target ${target} in ${attempts} attempts!`);


// ========================================
// 9️ Example: While Loop with Array
// ========================================
console.log('\n--- Loop through array manually ---');
let fruits = ["apple", "banana", "cherry"];
let index2 = 0;

while (index2 < fruits.length) {
  console.log(`Fruit ${index2 + 1}: ${fruits[index2]}`);
  index2++;
}



// ========================================
//  Example: Infinite loop demo (don’t actually run this!)
// ========================================
// while (true) {
//   console.log("I will never stop ");
// }
// Avoid! This runs forever unless you use 'break' inside.

