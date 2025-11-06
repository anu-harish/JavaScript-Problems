// do-while-loop.js
// ============================================
// Syntax:
// do {
//    // code block (runs once before checking)
// } while (condition);

//  The key difference from 'while' loop:
// → 'do...while' executes the body at least once,
//    then checks the condition after each iteration.


// ============================================
// 1️ Basic Example: Runs once even if false
// ============================================
console.log("\n--- Basic do...while example ---");

let x = 5;
do {
  console.log("Value of x is:", x);
  x++;
} while (x < 5);
/*
Step 1: Enters 'do' block (no condition check yet)
Step 2: Prints x = 5
Step 3: Then checks condition (x < 5 → false)
Loop ends after 1 run ✅
*/


// ============================================
// 2️ Example: Run at least once until condition false
// ============================================
console.log("\n--- Counting up to 3 ---");

let count = 1;
do {
  console.log("Count:", count);
  count++;
} while (count <= 3);
/*
count = 1 → true → prints 1
count = 2 → true → prints 2
count = 3 → true → prints 3
count = 4 → false → stop
*/


// ============================================
// 3️ Example: User Input Simulation
// ============================================
console.log("\n--- Simulated Input ---");

let password;
let attempt = 0;

do {
  password = "1234"; // pretend user enters this
  attempt++;
  console.log(`Attempt ${attempt}: Entered ${password}`);
} while (password !== "1234");

console.log("✅ Correct password!");
/*
Even if password correct on first try,
the loop runs once before checking.
*/


// ============================================
// 4️ Example: Random number until 3 appears
// ============================================
console.log("\n--- Random until 3 ---");

let n;
do {
  n = Math.floor(Math.random() * 5); // generates 0–4
  console.log("Generated:", n);
} while (n !== 3);

console.log("✅ Got 3, stop!");
/*
Runs until we get number 3.
Even if first random = 3, runs once before checking.
*/


// ============================================
// 5️ Example: Countdown
// ============================================
console.log("\n--- Countdown Example ---");

let num = 5;
do {
  console.log("Countdown:", num);
  num--;
} while (num > 0);
/*
num=5 → prints 5
num=4 → prints 4
num=3 → prints 3
num=2 → prints 2
num=1 → prints 1
num=0 → stop
*/


// ============================================
// 6️ Example: Process Array with do...while
// ============================================
console.log("\n--- Loop through array ---");

let fruits = ["apple", "banana", "cherry"];
let index = 0;

do {
  console.log(`Fruit ${index + 1}:`, fruits[index]);
  index++;
} while (index < fruits.length);
/*
Executes until index == 3 (array length)
*/


// ============================================
// 7️ Example: Skip with continue (rare case)
// ============================================
console.log("\n--- Continue example ---");

let i = 0;
do {
  i++;
  if (i % 2 === 0) continue; // skip even numbers
  console.log("Odd number:", i);
} while (i < 10);
/*
Prints only odd numbers 1, 3, 5, 7, 9
*/


// ============================================
// 8️ Example: Break out of infinite do...while
// ============================================
console.log("\n--- Infinite loop with break ---");

let tries = 0;
do {
  tries++;
  console.log("Try:", tries);
  if (tries === 3) break; // exit manually
} while (true);

console.log("Loop stopped after 3 tries");
/*
'while(true)' would normally loop forever,
but break stops it safely.
*/


