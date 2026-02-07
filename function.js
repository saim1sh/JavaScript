//regular function

function hello() {
  console.log("Hello, World!");
  //return undefined; // if no return statement is provided, the function returns undefined by default
}

//fumction expression

const greet = function() {
  console.log("Hi there!");
};

greet(); // Hi there! 

//named function expression
const sayHello = function sayHello() {
  console.log("Hello from named function expression!");
};
sayHello(); // Hello from named function expression!


//arrow function

const add = (a, b) => {
  return a + b;
};
console.log(add(5, 3)); // 8

//if the function body has only one expression, you can omit the curly braces and the return keyword
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // 15

const square = x => x * x;
console.log(square(4)); // 16

//object return

const createPerson = (name, age) => ({ name, age });
const person = createPerson("Alice", 30);
console.log(person); // { name: 'Alice', age: 30 }

const cretePerson2 = (name, age) => {
   return { name, age };
}
const person2 = cretePerson2("Bob", 25);
console.log(person2); // { name: 'Bob', age: 25 }


//anonymous function
setTimeout(function() {
  console.log("This is an anonymous function!");
}, 1000); // This is an anonymous function! (after 1 second)


function hello(){
   return ()=>{
      console.log("Hello from nested arrow function!");
   }
}

hello()(); // Hello from nested arrow function!

function outer() {
  return function inner() {
    console.log("Hello from inner function!");
  }
}

outer()(); // Hello from inner function!

function name(){
   return () => {
      return (name) => {
         console.log(`Hello, ${name}!`);
      }
   }
}

name()()("Alice"); // Hello, Alice!


