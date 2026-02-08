//truthy values are values that evaluate to true in a boolean context. Falsy values are values that evaluate to false in a boolean context. In JavaScript, the following values are considered falsy:
// false
// 0
// "", '', `` (empty string)
// null
// undefined
// NaN

const result = NaN;
if (result) {
  console.log("This is a truthy value");
} else {
  console.log("This is a falsy value");
} // This will log "This is a falsy value" because NaN is a falsy value

//all other values are considered truthy, including:
// true
// any non-zero number (e.g., 1, -1, 3.14)
// any non-empty string (e.g., "hello", 'world', `!`)
// any object (e.g., {}, [], function() {})
// any symbol (e.g., Symbol('foo'))

//trnary operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

const age = 18;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote); // This will log "You can vote" because the condition age >= 18 is true

console.log(4 % 2 === 0 ? "Even" : "ODD"); // This will log "Even" because 4 % 2 === 0 is true

const name = "John";
console.log(name ? `Hello, ${name}!` : "Hello, stranger!"); // This will log "Hello, John!" because the condition name is truthy



