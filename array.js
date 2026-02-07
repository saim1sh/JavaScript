//array method

const fruits = ["apple", "banana", "orange"];

//push method adds an element to the end of the array
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

//pop method removes the last element from the array and returns it
const lastFruit = fruits.pop();
console.log(lastFruit); // "grape"
console.log(fruits); // ["apple", "banana", "orange"]

//find method returns the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined.

const foundFruit = fruits.find((fruit) => fruit === "banana");
console.log(foundFruit); // "banana"

//filter method creates a new array with all elements that pass the test implemented by the provided function.

const filteredFruits = fruits.filter((fruit) => fruit.includes("a"));
console.log(filteredFruits); // ["banana", "orange"]

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((num) => num % 2 === 0)); // [2, 4]

