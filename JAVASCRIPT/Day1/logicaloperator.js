// logical operators
// && AND --higher than OR-- , it finds first falsy value
// || OR--it finds first truthy value


// 1️ Basic Short-Circuit Behavior
// -----------------------------

console.log(false && (2 / 0)); // false
// Explanation: 
// "&&" checks left operand first. Since false is falsy, 
// it stops there (short-circuits). Right side not executed.

console.log(true || (2 / 0)); // true
// Explanation: 
// "||" checks left operand first. Since true is truthy, 
// it short-circuits and skips right side. No division by zero error!


// -----------------------------
// 2️ Return of Actual Operand Values
// -----------------------------

console.log('' || 'default'); // 'default'
// OR (||) → returns first truthy value
// '' is falsy, so returns 'default'

console.log('hello' && 'world'); // 'world'
// AND (&&) → returns last truthy value if all are truthy
// 'hello' truthy → returns 'world'


console.log(0 || 42); // 42 → 0 is falsy, returns right operand
console.log(42 && 100); // 100 → both truthy, returns last operand
console.log(0 && 100); // 0 → first falsy, returns it immediately
console.log('JS' || 0); // 'JS' → first truthy, returns immediately


// -----------------------------
// 3️ Practical Example: Default Value with ||
// -----------------------------

function greet(name) {
  // if name is falsy (undefined, '', null, etc), fallback to 'Guest'
  const user = name || 'Guest';
  console.log('Hello, ' + user + '!');
}

greet('Anusha');  // Hello, Anusha!
greet('');         // Hello, Guest! ('' is falsy)
greet(undefined);  // Hello, Guest! (undefined is falsy)


// -----------------------------
// 4️ Practical Example: Conditional Execution with &&
// -----------------------------

function showMessage(isLoggedIn) {
  // only executes right side if left is truthy
  isLoggedIn && console.log('Welcome back!');
}

showMessage(true);   // "Welcome back!"
showMessage(false);  // (nothing printed)


// -----------------------------
// 5️ NOT Operator (!) and Double NOT (!!)
// -----------------------------

console.log('\n--- Logical NOT (!) ---');
console.log(!true);   // false
console.log(!0);      // true (0 is falsy)
console.log(!'text'); // false (non-empty string is truthy)
console.log(!'');     // true (empty string is falsy)

// Double NOT (!!) → converts any value to boolean
console.log(!!'JavaScript'); // true
console.log(!!0);            // false
console.log(!!null);         // false
console.log(!!undefined);    // false
console.log(!![]);           // true (empty array is truthy)


// -----------------------------
// 6️ Combining &&, || and !
// -----------------------------

console.log('\n--- Combining &&, ||, and ! ---');

let username = '';
let displayName = username || 'Guest'; // fallback to 'Guest' if username is empty
console.log(displayName); // Guest

let isAdmin = true;
let hasAccess = isAdmin && true; // both true → true
console.log(hasAccess); // true

let isBlocked = false;
let canLogin = !isBlocked && hasAccess; // !false → true && true → true
console.log(canLogin); // true


// -----------------------------
// 7️ Advanced Example (function returns with short-circuit)
// -----------------------------

function checkEligibility(age) {
  // If age is falsy or 0, OR will short-circuit and return default message
  return age && age >= 18 ? 'Eligible' : 'Not Eligible';
}

console.log(checkEligibility(20));  // Eligible
console.log(checkEligibility(0));   // Not Eligible
console.log(checkEligibility(''));  // Not Eligible


// -----------------------------
// 8️ Logical Operators in Real Code
// -----------------------------

function getUserRole(role) {
  // Use || to set default role
  let userRole = role || 'viewer';
  // Use && to conditionally log message
  role && console.log(`Logged in as ${role}`);
  return userRole;
}

console.log(getUserRole('admin'));   // admin
console.log(getUserRole(''));        // viewer