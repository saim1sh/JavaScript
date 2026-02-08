const user = {
  name: "John",
  age: 30,
  city: "New York",
};

//destructuring assignment allows us to unpack values from arrays or properties from objects into distinct variables.
const { name, age, city } = user;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York

//we can also assign new variable names while destructuring
const { name: userName, age: userAge, city: userCity } = user;

console.log(userName); // John
console.log(userAge); // 30

//nested destructuring allows us to unpack values from nested objects or arrays.
const user1 = {
  name: "Alice",
  age: 25,
  address: {
    //  city: "Los Angeles",
    country: "USA",
    details: {
      zip: "90001",
      state: "California",
    },
  },
};



const {address:{details:{state}}} = user1;

console.log(state); // California because state is present in user1 object



const user2 = {
  name: "Alice",
  age: 25,
//   address: {
//     city: "Los Angeles",
//   },
};
//in api response we may not get all the properties that we are destructuring so we can provide default values to avoid undefined error

const {
  address: { city1 } = {},
} = user2;

console.log(city1); // undefined because city1 is not present in user2 object


//optional chaining operator (?.) allows us to safely access nested properties of an object without having to check if each level of the object exists.

const city2 = user2.address?.city;
console.log(city2); // undefined because address is not present in user2 object but it will not throw an error because we are using optional chaining operator to access the city property of the address object. If we try to access city property without optional chaining operator it will throw an error because address is not present in user2 object.  

//best approach is ?. use in every level of the nested object to avoid any error if any level of the nested object is missing in the api response
const city3 = user2?.address?.city;
console.log(city3); 
