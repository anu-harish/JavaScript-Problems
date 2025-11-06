// relational operator
// >  (greater than)
// <  (less than)
// >= (greater than or equal to)
// <= (less than or equal to)

// These operators compare numeric, string, or boolean values
// and return a boolean result: true or false.


// --------------------
// Basic Numeric Comparisons
// --------------------
console.log(5 > 3);   // true  → 5 is greater than 3
console.log(5 < 3);   // false → 5 is not less than 3
console.log(5 >= 5);  // true  → equal, so true
console.log(3 <= 3);  // true  → equal, so true
console.log(7 <= 4);  // false


// --------------------
// String Comparisons (alphabetical order, based on Unicode values)
// --------------------
console.log('apple' > 'banana'); // false (because 'a' < 'b')
console.log('dog' < 'zebra');    // true
console.log('cat' < 'Cat');      // false (lowercase > uppercase in Unicode)
console.log('abc' < 'abcd');     // true (shorter string is smaller if prefix same)
console.log('10' < '2');         // true (compares character by character, not number!)

// 🧠 Strings are compared letter-by-letter using Unicode code points
// 'a' = 97, 'b' = 98, 'A' = 65


// --------------------
// Type Coercion in Comparisons
// --------------------
console.log('\\n--- Type Coercion Examples ---');

console.log('2' > 1); // true  ('2' → 2)
console.log('02' > 1); // true  ('02' → 2)
console.log('2' < '12'); // false (string comparison: '2' > '1')
console.log('2' < 12); // true ('2' → 2)
console.log(true > false); // true (1 > 0)
console.log(true < 2);     // true (1 < 2)
console.log(false < true); // true (0 < 1)
console.log(null < 1);     // true (null → 0)
console.log(null >= 0);    // true (null → 0)
console.log(undefined > 0); // false (undefined → NaN, comparison always false)
console.log(undefined < 0); // false


// --------------------
// Comparisons with Variables
// --------------------
let age = 20;
let minAge = 18;
console.log(age > minAge); // true (20 > 18)
console.log(age >= 21);    // false
console.log(age <= 25);    // true


// --------------------
// Boolean Logic in Conditional Statements
// --------------------
let marks = 75;
if (marks >= 35 && marks < 50) {
  console.log('Pass (Average)');
} else if (marks >= 50 && marks < 75) {
  console.log('Good');
} else if (marks >= 75) {
  console.log('Excellent'); // this runs
}


// --------------------
// Tricky Interview Scenarios
// --------------------

// 1️⃣ Lexicographic vs Numeric
console.log('25' > '100'); // true ('2' > '1')
console.log(Number('25') > Number('100')); // false (25 > 100 = false)

// 2️⃣ null vs 0
console.log(null > 0);  // false (null → 0)
console.log(null == 0); // false (== doesn't convert null to 0)
console.log(null >= 0); // true (0 >= 0)

// 3️⃣ undefined in comparisons
console.log(undefined == null); // true (special case)
console.log(undefined >= 0); // false (undefined → NaN)
console.log(undefined <= 0); // false

// 4️⃣ Boolean comparisons
console.log(true > false);  // true (1 > 0)
console.log(false < true);  // true (0 < 1)
console.log(true >= 1);     // true (1 >= 1)
console.log(false <= 0);    // true (0 <= 0)

// 5️⃣ String vs Number
console.log('5' > 3); // true ('5' → 5)
console.log('a' > 3); // false ('a' → NaN → false)
console.log('' < 1);  // true ('' → 0 < 1)
console.log(' ' < 1); // true (' ' → 0 < 1)



