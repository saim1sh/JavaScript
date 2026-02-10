//fetch() is a method that allows you to make network requests and handle responses in JavaScript. It returns a Promise that resolves to the Response object representing the response to the request.

//Example of using fetch() to make a GET request to an API endpoint:

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}

fetchData();

//In this example, we define an asynchronous function fetchData() that uses the await keyword to wait for the fetch() call to complete. We then parse the response as JSON and log the data to the console.

function bigwork() {
  return fetchData(); // This will return a Promise that resolves to the data fetched from the API
}

///In this example, the bigwork() function calls fetchData(), which returns a Promise. You can use .then() to handle the resolved value of the Promise:

bigwork()
  .then((data) => {
    console.log("Data from bigwork:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//In this example, we call bigwork() and use .then() to log the data once the Promise is resolved. We also include a .catch() to handle any potential errors that may occur during the fetch operation.

//top-level await is a feature that allows you to use the await keyword outside of an async function, at the top level of a module. This means you can write asynchronous code without needing to wrap it in an async function.

//Example of using top-level await:

(async function () {
  const result = await bigwork();
})();

//()() is used to call the function immediately

//Immediately Invoked Function Expression this is a common pattern to use top-level await in a script. It allows us to execute asynchronous code at the top level without needing to define an async function separately.
//In this example, we can use await directly at the top level of the module to wait for the bigwork() function to resolve. This allows us to write cleaner and more straightforward asynchronous code without needing to define an async function just to use await.
