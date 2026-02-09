//fetch() is a method that allows you to make network requests and handle responses in JavaScript. It returns a Promise that resolves to the Response object representing the response to the request.

//Example of using fetch() to make a GET request to an API endpoint:


async function fetchData(){
   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   const data = await response.json();
   console.log(data);
}

fetchData();

//In this example, we define an asynchronous function fetchData() that uses the await keyword to wait for the fetch() call to complete. We then parse the response as JSON and log the data to the console.


function bugwork(){
   return fetchData();
}