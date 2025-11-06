// increment-decrement.js

console.log('\\n--- ++ / -- (Prefix vs Postfix) ---');

// ✅ POSTFIX INCREMENT (x++)
let i = 1;
console.log(i++); // 1 (returns old value)
console.log(i);   // 2 (after increment)


// ✅ PREFIX INCREMENT (++x)
let j = 1;
console.log(++j); // 2 (increments first, returns new value)
console.log(j);   // 2


console.log('\\n--- POSTFIX DECREMENT (x--) ---');
let a = 5;
console.log(a--); // 5 (returns old value)
console.log(a);   // 4 (after decrement)


console.log('\\n--- PREFIX DECREMENT (--x) ---');
let b = 5;
console.log(--b); // 4 (decrements first, returns new value)
console.log(b);   // 4


console.log('\\n--- Using in Expressions ---');
let x = 5;
let y = x++ + 2; // uses 5, then x becomes 6
console.log(y); // 7
console.log(x); // 6


let p = 5;
let q = ++p + 2; // increments first → 6 + 2
console.log(q); // 8
console.log(p); // 6


console.log('\\n--- Postfix vs Prefix inside same expression ---');
let m = 2;
let n = m++ + ++m;
// Step 1: m++ → returns 2 (m becomes 3)
// Step 2: ++m → increments to 4, returns 4
// So total = 2 + 4 = 6
console.log('m:', m); // 4
console.log('n:', n); // 6


console.log('\\n--- Decrement inside expression ---');
let t = 10;
let r = --t + t--;
// Step 1: --t => t=9 (returns 9)
// Step 2: t-- => returns 9, then t=8
// So r = 9 + 9 = 18
console.log('r:', r); // 18
console.log('t:', t); // 8


console.log('\\n--- In loops (very common in real code) ---');
// Postfix usage in for loop
for (let k = 0; k < 3; k++) {
  console.log('Postfix loop k:', k);
}

// Prefix behaves the same in this context (value not used)
for (let k = 0; k <3; ++k) {
  console.log('Prefix loop k:', k);
}


console.log('\\n--- Combined Example ---');
let num = 5;
console.log(num++ + num++); // 5 + 6 = 11 (num becomes 7)
console.log(num); // 7

let val = 5;
console.log(++val + ++val); // 6 + 7 = 13 (val becomes 7)
console.log(val); // 7


console.log('\\n--- Trick Interview Example ---');
let tricky = 10;
let result = tricky++ + ++tricky + tricky-- - --tricky;
// Step 1: tricky++ -> 10 (then tricky=11)
// Step 2: ++tricky -> 12 (tricky=12)
// Step 3: tricky-- -> 12 (then tricky=11)
// Step 4: --tricky -> 10 (tricky=10)
// So result = 10 + 12 + 12 - 10 = 24
console.log('tricky:', tricky); // 10
console.log('result:', result); // 24



let opr=12;
let op=opr++ + opr-- + ++opr + --opr - opr++;
console.log('opr:',opr);
console.log('op:',op);

