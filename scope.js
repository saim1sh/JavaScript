//lexical scope
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
outer(); // 10

//block scope

if (true) {
  let b = 20;
  console.log(b); // 20
}

for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}


//var works in function scope, not block scope
//var changes the value of the variable in the entire function, while let and const only change it within the block they are defined in.

var lang = "JavaScript";
function learn(topic){
   var lang = "Python";
   console.log(`Learning ${topic} with ${lang}`);
}

learn("programming"); // Learning programming with Python
console.log(lang); // JavaScript

//block scope differ from function scope in that variables declared with let and const are only accessible within the block they are defined in, while variables declared with var are accessible throughout the entire function.

//let can't be redeclared in the same scope, while var can be redeclared. This means that if you try to declare a variable with let that has already been declared in the same scope, you will get a syntax error, while with var, it will simply overwrite the previous declaration.
var x = 5;
var x = 10;
console.log(x); // 10

let y = 5;
//let y = 10; // SyntaxError: Identifier 'y' has already been declared

//const also can't be redeclared in the same scope, and it also can't be reassigned. This means that if you try to declare a variable with const that has already been declared in the same scope, you will get a syntax error, and if you try to reassign a value to a const variable, you will also get a syntax error.
const z = 5;
//const z = 10; // SyntaxError: Identifier 'z' has already been declared
//z = 15; // SyntaxError: Assignment to constant variable.  


const a= {
  b: 1,
};

a.b = 2; // This is allowed, because we are not reassigning the variable a, but rather changing the value of the property b of the object that a references.