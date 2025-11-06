// nullish-operator.js
// ============================
// This operator solves a common confusion problem between || and null / undefined handling.
// The Nullish Coalescing Operator (??)
// introduced in ES2020
// Used to provide default values only when a variable is null or undefined.

console.log('\n--- Basic Behavior ---');

// Only null or undefined trigger the fallback
console.log(null ?? 'fallback');       // 'fallback' → left is null
console.log(undefined ?? 'fallback');  // 'fallback' → left is undefined
console.log(0 ?? 5);                   // 0 → not null/undefined, so keep left
console.log('' ?? 'default');          // '' → not null/undefined → keep left
console.log(false ?? true);            // false → not null/undefined → keep left

//  Unlike || (which checks falsy values like 0, '', false),
//    ?? only checks for nullish values (null or undefined).
let tricky=(false||null)??"default";
console.log("tricky:",tricky); //default--

console.log('\n--- Comparison with || (OR) ---');

console.log(0 || 100);  // 100 → 0 is falsy
console.log(0 ?? 100);  // 0 → 0 is not nullish
console.log('' || 'default'); // 'default' → '' is falsy
console.log('' ?? 'default'); // '' → not null/undefined
console.log(false || 'yes');  // 'yes' → false is falsy
console.log(false ?? 'yes');  // false → not null/undefined

//  Use ?? when you want to default *only* if the value is truly missing (null or undefined)
//  Don't use || if you need to allow falsy values like 0, '', or false.


console.log('\n--- Real-world Example: Default Values ---');

// Example 1: User input with fallback
let userInput = null;
let defaultName = userInput ?? 'Guest';
console.log(defaultName); // Guest

userInput = 'Anusha';
defaultName = userInput ?? 'Guest';
console.log(defaultName); // Anusha


// Example 2: Configuration object
const config = {
  theme: null,
  fontSize: 0,
  darkMode: false
};

console.log(config.theme ?? 'light');      // 'light' → theme is null
console.log(config.fontSize ?? 16);        // 0 → not null/undefined
console.log(config.darkMode ?? true);      // false → not null/undefined


console.log('\n--- Chaining ?? (first non-nullish wins) ---');
let a = null;
let b = undefined;
let c = 'Hello';
let d = 'World';

console.log(a ?? b ?? c ?? d); // 'Hello'
// Explanation: a (null) skipped, b (undefined) skipped, c (Hello) returned.


console.log('\n--- Mixing ?? with || or && (grammar restriction) ---');
// You CANNOT mix ?? with || or && without parentheses:
// Example: let x = 1 ?? 2 || 3; // SyntaxError 

//  Must use parentheses:
let x = (1 ?? 2) || 3;
console.log(x); // 1


console.log('\n--- Nullish with Function Return Values ---');
function getValue() {
  return null;
}
let result = getValue() ?? 'No Value';
console.log(result); // 'No Value'


console.log('\n--- Nested Example (with undefined variable) ---');
let data = {
  user: {
    name: null,
    age: 0
  }
};

console.log(data.user.name ?? 'Unknown'); // 'Unknown' → name is null
console.log(data.user.age ?? 18);         // 0 → not null/undefined


console.log('\n--- Nullish with Optional Chaining ---');
// Optional chaining ?. returns undefined if path doesn’t exist
let person = {};
console.log(person.address?.city ?? 'No City'); 
// address is undefined → ?. returns undefined → ?? gives 'No City'


console.log('\n--- Default Parameters Example ---');
function greet(name) {
  const userName = name ?? 'Guest';
  console.log('Hello, ' + userName);
}

greet('Anusha'); // Hello, Anusha
greet(null);     // Hello, Guest
greet(undefined); // Hello, Guest
greet('');        // Hello,  ('' kept as valid value)


console.log('\n--- Nullish with Numbers ---');
let speed = 0;
let defaultSpeed = speed ?? 50; // speed = 0 is valid, so keep 0
console.log(defaultSpeed); // 0

let undefinedSpeed;
defaultSpeed = undefinedSpeed ?? 50;
console.log(defaultSpeed); // 50


console.log('\n--- Advanced Example: Environment Configuration ---');
const ENV = {
  PORT: null,
  TIMEOUT: 0,
  ENABLE_LOGS: false
};

const port = ENV.PORT ?? 3000;          // fallback because null
const timeout = ENV.TIMEOUT ?? 5000;    // keep 0
const logsEnabled = ENV.ENABLE_LOGS ?? true; // keep false

console.log({ port, timeout, logsEnabled });
// { port: 3000, timeout: 0, logsEnabled: false }

