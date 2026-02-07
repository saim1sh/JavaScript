let x=5;
let y=x; // y is a copy of the value of x
y=10;
console.log(x); // 5
console.log(y); // 10

//here, x and y are independent variables. Changing the value of y does not affect the value of x, because they are stored in different memory locations. This is an example of pass by value, where the value of a variable is passed to a function or assigned to another variable, rather than a reference to the variable itself.

//objects and arrays are passed by reference, which means that when you assign an object or array to a variable, you are actually assigning a reference to the memory location where the object or array is stored. This means that if you change the value of the object or array through one variable, it will affect all variables that reference the same object or array.

let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 2;
console.log(obj1.a); // 2
console.log(obj2.a); // 2

let arr1 = [1, 2, 3];
let arr2 =[4, 5, 6];
arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4] 

