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

//concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const moreFruits = ["kiwi", "melon"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["apple", "banana", "orange", "kiwi", "melon"]

//map method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbersSquared = numbers.map((num) => num * num);
console.log(numbersSquared); // [1, 4, 9, 16, 25]

const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits); // ["APPLE", "BANANA", "ORANGE"]

const fruits1 = ["apple", "banana", "orange", "apple", "grape"];
const result = fruits1.map((fruit) => fruit === "apple");
console.log(result); // [true, false, false, true, false]

const result1 = fruits1.map((fruit) => {
  if (fruit === "apple") {
    return "fruit is apple";
  } else {
    return null;
  }
});
console.log(result1); // ["fruit is apple", null, null, "fruit is apple", null]


//reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const sum = numbers.reduce((total, currentValue) => total + currentValue, 0); // The second argument (0) is the initial value for the total

console.log(sum); // 15

const numbers1 = [1, 2, 3, 4, 5];
const product = numbers1.reduce((total, currentValue) => total * currentValue, 1); // The second argument (1) is the initial value for the total

console.log(product); // 120


//forEach method executes a provided function once for each array element.

fruits.forEach((fruit) => console.log(fruit)); // Logs each fruit in the array

//forEach does not return a new array, it simply executes the provided function for each element in the array. If you want to create a new array based on the original array, you should use the map method instead.

//forEach is often used for side effects, such as logging or modifying external variables, while map is used for transforming data and creating new arrays.


//forof method is used to iterate over the elements of an array. It executes a provided function once for each array element.

for (const fruit of fruits) {
  console.log(fruit); // Logs each fruit in the array
}

const name = "John";
for (const char of name) {
  console.log(char); // Logs each character in the string
}

//forof is a more concise and readable way to iterate over arrays and other iterable objects compared to traditional for loops. It automatically handles the iteration process, making it easier to work with arrays and other collections in JavaScript.


//forin method is used to iterate over the enumerable properties of an object. It executes a provided function once for each property in the object.

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

for(key in person) {
  console.log(key); // Logs each property name in the person object
  console.log(person[key]); // Logs the value of each property in the person object
}





