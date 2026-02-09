 //nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let a = null;
let b = "Hello";
let c = a ?? b; // c will be "Hello" because a is null

//nullish = null or undefined
let d = undefined;
let e = "World";
let f = d ?? e; // f will be "World" because d is undefined

let g = 0;
let h = "Zero";
let i = g ?? h; // i will be 0 because g is not null or undefined

