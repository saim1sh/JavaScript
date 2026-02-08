//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

const res = [...arr1];
console.log(res); // [1, 2, 3]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

//spread operator can also be used to create a shallow copy of an array or object
const name = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Doe",
    age: 25,
  },
];

//perfect way to copy an array of objects
const copyName = name.map((item) => ({ ...item }));
console.log(copyName); // [{ name: "John", age: 30 }, { name: "Doe", age: 25 }]

//in array of objects if we use spread operator to copy the array it will create a shallow copy of the array but the objects inside the array will still be referenced to the original objects
const copyName1 = [...name];
console.log(copyName1); // [{ name: "John", age: 30 }, { name: "Doe", age: 25 }]

const obj = {
  name: "John",
  age: 30,
  details: {
    city: "New York",
    country: "USA",
    married: {
      status: "single",
    },
  },
};

const copyObj = {
  ...obj,
  details: {
    ...obj.details,
    married: { ...obj.details.married, status: "married" },
  },
}; //right way to copy an object with nested objects and change the value of a nested property

console.log(copyObj); // { name: "John", age: 30, details: { city: "New York", country: "USA", married: { status: "married" } } }





//rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30)); // 60

//when we use rest operator in function parameters it will collect all the remaining arguments into an array. We can use this array to perform operations on the arguments passed to the function. In the above example, we are using the reduce method to sum up all the numbers passed to the sum function.

const fruits = ["apple", "banana", "orange", "apple", "grape"];
const [firstFruit, secondFruit, ...restFruits] = fruits;
console.log(firstFruit); // "apple"
console.log(secondFruit); // "banana"
console.log(restFruits); // ["orange", "apple", "grape"]


function sum(...numbers) {
  console.log(numbers);
   return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3); // [1, 2, 3]
console.log(sum(2,3,4,5,6,6)); // 26



