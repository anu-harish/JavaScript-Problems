// comparison-operators.js
// ============================
// == vs === (Loose vs Strict Equality)
// !=(loose not equal) vs !==(Strict not equal)
// and type coercion pitfalls explained clearly

// ==(Loose equality)Converts types before comparison('5'==5)
// ===(Strict equality)No conversion; types must match

// ----------------------------------------------------
// 1️⃣ Basic Examples
// ----------------------------------------------------

console.log(0 == '0');   // true → '0' → 0, so 0 == 0
console.log(0 === '0');  // false → types differ (number vs string)

console.log(1 == true);  // true → true → 1, so 1 == 1
console.log(1 === true); // false → number vs boolean

console.log(false == 0);  // true → false → 0
console.log(false === 0); // false → type mismatch

console.log('5' == 5);   // true → '5' → 5
console.log('5' === 5);  // false → string vs number

console.log('\n--- Not Equal (!= vs !==) ---');
console.log(5 != '5');   // false → both convert to number 5
console.log(5 !== '5');  // true → different types (number vs string)


// ----------------------------------------------------
// 2️⃣ null and undefined corner cases
// ----------------------------------------------------

console.log('\n--- null & undefined ---');
console.log(null == undefined);  // true (special rule in JS)
console.log(null === undefined); // false (different types)

console.log(null == 0);  // false (no conversion between null and 0)
console.log(null >= 0);  // true  (null → 0 in relational comparison)
console.log(null > 0);   // false (0 > 0 is false)

console.log(undefined == 0); // false (undefined only equals null)
console.log(undefined === null); // false (different types)


// ----------------------------------------------------
// 3️⃣ Boolean Conversion and Coercion Traps
// ----------------------------------------------------

console.log('\n--- Boolean Coercion ---');
console.log(true == 1);  // true (true → 1)
console.log(false == 0); // true (false → 0)
console.log(true == '1'); // true ('1' → 1)
console.log(false == ''); // true ('' → 0)
console.log(false == '0'); // true ('0' → 0)
console.log(false === '0'); // false (types differ)
console.log(true == 'true'); // false ('true' → NaN, 1 != NaN)


// ----------------------------------------------------
// 4️⃣ Object and Array Coercion Traps
// ----------------------------------------------------

console.log('\n--- Object / Array Comparison ---');

// Empty array becomes "" → 0 in numeric comparison
console.log([] == 0);      // true  → [] → "" → 0
console.log([] == '');     // true  → both ""
console.log([0] == 0);     // true  → [0].toString() => "0" → 0
console.log([1] == true);  // true  → [1] → "1" → 1
//console.log([1] === true); // false → types differ

console.log([] == false);  // true → [] → "" → 0, false → 0
console.log(![] == false); // true → ![] is false, false == false
console.log([] == ![]);    // true → left [] → 0, right ![] → false → 0 → true 😵

// Objects are compared by reference, not content
console.log({} == {});     // false (different references)
console.log([1,2] == [1,2]); // false (different arrays)
// console.log({} === {});    // false

let arr = [];
let sameRef = arr;
console.log(arr == sameRef); // true (same reference)


// ----------------------------------------------------
// 5️⃣ Empty String & Zero Pitfalls
// ----------------------------------------------------

console.log('\n--- Empty String & Zero Pitfalls ---');
console.log('' == 0);    // true → both become 0
console.log('' === 0);   // false → string vs number
console.log('' == false); // true → '' → 0, false → 0
console.log(' ' == 0);   // true → ' ' → 0
console.log(' ' === 0);  // false
console.log('\t\n' == 0); // true → whitespace → 0


// ----------------------------------------------------
// 6️⃣ Real-world Interview Traps
// ----------------------------------------------------

console.log('\n--- Interview Pitfalls ---');

// 1️⃣
console.log([] == ![]);  // true (coercion chaos)

// Step-by-step:
// [] → truthy, ![] → false
// [] == false → "" == 0 → 0 == 0 → true ✅

// 2️⃣
console.log('0' == false); // true → '0' → 0, false → 0
console.log('0' === false); // false (different types)

// 3️⃣
console.log(null == 0);  // false
console.log(null >= 0);  // true → relational converts null → 0

// 4️⃣
console.log(undefined == null); // true
console.log(undefined == false); // false
console.log(undefined > 0); // false (NaN compare)

// 5️⃣
console.log('' == []);  // true → both ""
console.log('' == {});  // false → {} → "[object Object]"
console.log(0 == {});   // false → {} → NaN


// ----------------------------------------------------
// 7️⃣ Best Practice
// ----------------------------------------------------

console.log('\n--- Best Practice ---');
console.log('Use === and !== in interviews unless you intentionally want coercion.');

// ✅ Always use === and !== to avoid unexpected conversions.
// ✅ Only use == when you specifically want type conversion (rare).
// ✅ null and undefined are the only pair where == is safely predictable.

