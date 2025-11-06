/*Why Loops?
Loops help us run the same block of code multiple times — useful for repetitive tasks like:
- Displaying list items
- Iterating over arrays/objects
- Running calculations repeatedly
- Automating DOM or API operations/*

// for-loop-examples
// ==============================
// A for loop has 3 parts: initialization; condition; increment/decrement
Step order:
1. Initialization (run once)
2. Condition check
3. Execute block if true
4. Update (increments/decrements)
5. Repeat from step 2
/*
for (initialization; condition; update) {
   // code block to execute
}
*/

// ----------------------------------------------------------
//  Basic forward loop
// ----------------------------------------------------------
console.log("\n--- Forward loop ---");
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}



// ----------------------------------------------------------
//  Loop backward
// ----------------------------------------------------------
console.log("\n--- Backward loop ---");
for (let i = 5; i >= 1; i--) {
  console.log("Countdown:", i);
}

// 3) Loop with multiple control variables
// -----------------------------
console.log('\n--- 3) Multiple variables ---');
for (let i = 0, j = 10; i <= 5; i++, j -= 2) {
  console.log('i:', i, 'j:', j);
}


// ----------------------------------------------------------
//  Loop with step increment (skip numbers)
// ----------------------------------------------------------
console.log("\n--- Step increment (i += 2) ---");
for (let i = 0; i <= 10; i += 2) {
  console.log("Even number:", i);
}



// ----------------------------------------------------------
//  Loop with step decrement (skip numbers backward)
// ----------------------------------------------------------
console.log("\n--- Step decrement (i -= 2) ---");
for (let i = 10; i >= 0; i -= 2) {
  console.log("Even countdown:", i);
}



// ----------------------------------------------------------
//  Nested loops (loop inside loop)
// ----------------------------------------------------------
console.log("\n--- Nested loops ---");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}



// ----------------------------------------------------------
//  for loop with condition inside
// ----------------------------------------------------------
console.log("\n--- Loop with if condition ---");
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}


// ----------------------------------------------------------
//  for loop with break
// ----------------------------------------------------------
console.log("\n--- Using break ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at i =", i);
    break; // stops the loop
  }
  console.log("i =", i);
}



// ----------------------------------------------------------
//  for loop with continue
// ----------------------------------------------------------
console.log("\n--- Using continue ---");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping i =", i);
    continue; // skip this iteration only
  }
  console.log("i =", i);
}

// 4) Using break and continue
// -----------------------------
console.log('\n--- 4) break & continue ---');
for (let i = 0; i < 10; i++) {
  if (i === 6) break;       // exit loop completely when i === 6
  if (i % 2 === 0) continue; // skip even numbers
  console.log(i); // prints odd numbers < 6 => 1,3,5
}

// 5) Labeled loops (nested break/continue)
// -----------------------------
console.log('\n--- 5) labeled loops ---');
outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log('i', i, 'j', j);
    if (i === 2 && j === 2) {
      break outer; // breaks out of outer loop too
    }
  }
}

// 6) Nested loops (multiplication table)
// -----------------------------
console.log('\n--- 6) Nested loops (multiplication table) ---');
for (let r = 1; r <= 3; r++) {
  let row = [];
  for (let c = 1; c <= 3; c++) {
    row.push(r * c);
  }
  console.log(row.join(' ')); // 1 2 3    2 4 6    3 6 9
}

console.log('\n--- 7) Iterating array (for index) ---');
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// ----------------------------------------------------------
//  Real-time Example: print multiplication table
// ----------------------------------------------------------
console.log("\n--- Multiplication Table (5x1 to 5x10) ---");
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}


// ----------------------------------------------------------
//  Nested Example: multiplication table for 1–3
// ----------------------------------------------------------
console.log("\n--- Full Multiplication Tables (1–3) ---");
for (let i = 1; i <= 3; i++) {
  console.log(`\nTable of ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
