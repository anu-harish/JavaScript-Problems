// typeof-operator.js
// =========================
// typeof operator → returns the type of a value as a string

console.log('\n--- typeof basic types ---');
console.log(typeof 123);          // 'number'  → numeric values
console.log(typeof 12.34);        // 'number'  → all numbers (int/float same)
console.log(typeof NaN);          // 'number'  → "Not-a-Number" is still a number type!

console.log(typeof 'hello');      // 'string'  → text
console.log(typeof `template`);   // 'string'  → template literals also string
console.log(typeof '');           // 'string'  → empty string still string

console.log(typeof true);         // 'boolean'
console.log(typeof false);        // 'boolean'

console.log(typeof undefined);    // 'undefined' → default uninitialized variable

//  Legacy quirk
console.log(typeof null);         // 'object' → historical bug from 1995!
// In reality, null is a "primitive null value", not an object.
// Interview tip: `typeof null` === 'object' → trick question!


// ------------------------------------------------------
// typeof with Reference (Non-Primitive) Types
// ------------------------------------------------------
console.log('\n--- typeof objects & arrays ---');

console.log(typeof {});           // 'object'
console.log(typeof []);           // 'object' → arrays are objects internally
console.log(typeof new Date());   // 'object'
console.log(typeof /regex/);      // 'object' → regular expressions are objects

console.log(typeof function(){}); // 'function' (special case!)
// Only functions return 'function' type
// Everything else (arrays, dates, null, regex) → 'object'


// ------------------------------------------------------
// typeof with Variables
// ------------------------------------------------------
console.log('\n--- typeof with variables ---');

let age = 25;
let name = 'Anusha';
let isReady = true;
let data;
let person = null;

console.log(typeof age);      // 'number'
console.log(typeof name);     // 'string'
console.log(typeof isReady);  // 'boolean'
console.log(typeof data);     // 'undefined'
console.log(typeof person);   // 'object' (legacy bug)


// ------------------------------------------------------
// typeof with Functions and Classes
// ------------------------------------------------------
console.log('\n--- typeof with functions/classes ---');

function greet() { return "Hi!"; }
class Student {}

console.log(typeof greet);    // 'function'
console.log(typeof Student);  // 'function' → classes are also functions internally!


// ------------------------------------------------------
// typeof with BigInt and Symbol (ES6+)
// ------------------------------------------------------
console.log('\n--- ES6+ new types ---');

console.log(typeof 123n);         // 'bigint' → very large integers
console.log(typeof Symbol('id')); // 'symbol' → unique identifiers


// ------------------------------------------------------
// typeof with Expressions and Operations
// ------------------------------------------------------
console.log('\n--- typeof expressions ---');

console.log(typeof (2 + 3));       // 'number'
console.log(typeof ('2' + 3));     // 'string' → string concatenation
console.log(typeof (2 + '3'));     // 'string' → type coercion
console.log(typeof (2 > 3));       // 'boolean'
console.log(typeof (2 === 3));     // 'boolean'

console.log(typeof ({} + []));     // 'string' → weird coercion
console.log(typeof ([] + {}));     // 'string'
console.log(typeof ({} + {}));     // 'string' (interview trick: object toString → "[object Object]")


// ------------------------------------------------------
// typeof with undefined and undeclared variables
// ------------------------------------------------------
console.log('\n--- typeof undefined vs undeclared ---');

let x;
console.log(typeof x);     // 'undefined' → declared but not assigned

// even for completely undeclared variable:
console.log(typeof y);     // 'undefined' → typeof doesn’t throw error for undeclared!


// ------------------------------------------------------
// typeof Summary Table
// ------------------------------------------------------
console.log('\n--- Summary ---');
const values = [123, 'hi', true, undefined, null, {}, [], function(){}, 123n, Symbol('id')];

for (let v of values) {
  console.log(v, '→', typeof v);
}
