// bitwise operators

// Bitwise operators work on 32-bit signed integers
// They treat numbers as sequences of 32 bits (0s and 1s)

console.log('\n--- Bitwise Basics ---');

console.log(5 & 3);  // 1 → (0101 & 0011 = 0001)
console.log(5 | 3);  // 7 → (0101 | 0011 = 0111)
console.log(5 ^ 3);  // 6 → (0101 ^ 0011 = 0110)
console.log(~1);     // -2 → bitwise NOT flips bits (two’s complement)
console.log(1.9 | 0); // 1 → truncates decimal part

// Breakdown (binary):
// 5 = 0101
// 3 = 0011
// ----------------
// & (AND)  → 0001 = 1
// | (OR)   → 0111 = 7
// ^ (XOR)  → 0110 = 6


// ---------------------------------------------------
// 1️ Bitwise AND (&)
// ---------------------------------------------------
console.log('\n--- Bitwise AND (&) ---');
console.log(6 & 3); // 2
// 6 = 110
// 3 = 011
// ----------
// & = 010 → 2

console.log(9 & 12); // 8 → (1001 & 1100 = 1000)


// ---------------------------------------------------
// 2️ Bitwise OR (|)
// ---------------------------------------------------
console.log('\n--- Bitwise OR (|) ---');
console.log(6 | 3); // 7 → (110 | 011 = 111)
console.log(4 | 1); // 5 → (100 | 001 = 101)


// ---------------------------------------------------
// 3️ Bitwise XOR (^)
// ---------------------------------------------------
// XOR (exclusive OR) → returns 1 if bits are different
console.log('\n--- Bitwise XOR (^) ---');
console.log(6 ^ 3); // 5 → (110 ^ 011 = 101)
console.log(10 ^ 4); // 14 → (1010 ^ 0100 = 1110)


// ---------------------------------------------------
// 4️ Bitwise NOT (~)
// ---------------------------------------------------
console.log('\n--- Bitwise NOT (~) ---');
console.log(~0);   // -1
console.log(~1);   // -2
console.log(~5);   // -6
// Explanation:
// ~x = -(x + 1)
// So ~5 = -(5 + 1) = -6


// ---------------------------------------------------
// 5️ Left Shift (<<)
// ---------------------------------------------------
console.log('\n--- Left Shift (<<) ---');
console.log(5 << 1); // 10 → (0101 << 1 = 1010)
console.log(3 << 2); // 12 → (0011 << 2 = 1100)
console.log(-2 << 1); // -4 → shifts bits left (multiplies by 2 each shift)
// Rule: `a << n` = a * (2^n)


// ---------------------------------------------------
// 6️ Right Shift (>>) - sign-propagating
// ---------------------------------------------------
console.log('\n--- Right Shift (>>) ---');
console.log(8 >> 1);  // 4 → (1000 >> 1 = 0100)
console.log(9 >> 2);  // 2 → (1001 >> 2 = 0010)
console.log(-8 >> 1); // -4 → keeps sign bit (negative stays negative)


// ---------------------------------------------------
// 7️ Unsigned Right Shift (>>>) - zero-fill
// ---------------------------------------------------
console.log('\n--- Unsigned Right Shift (>>>) ---');
console.log(8 >>> 1);  // 4
console.log(-8 >>> 1); // 2147483644 → fills left with zeros
// (since negative number represented in two's complement form)


// ---------------------------------------------------
// 8️ Bitwise Tricks (used by developers)
// ---------------------------------------------------
console.log('\n--- Developer Tricks ---');

//  Truncate decimal values fast (floor for positives)
console.log(1.9 | 0);   // 1
console.log(3.99 | 0);  // 3
console.log(-3.99 | 0); // -3 (careful: not same as Math.floor for negatives)

// Check even or odd using bitwise AND
function isEven(num) {
  return (num & 1) === 0; // last bit 0 = even, 1 = odd
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false