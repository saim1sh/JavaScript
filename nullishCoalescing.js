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

let language =  null;
console.log(language ?? "javascript"); // Output: "javascript" because language is null

//if lest side is null or undefined, return right side

//if left side is not null or undefined, return left side

//in || operator, if left side is falsy (0, "", false, null, undefined), it will return right side, but in ?? operator, it only checks for null or undefined.

let j = 0;
let k = "Zero";
let l = j || k; // l will be "Zero" because j is falsy (0)

//for && operator, if left side is truthy, it will return right side, but in ?? operator, it only checks for null or undefined.

//|| and && different from ?? in that they consider more values as falsy (0, "", false, null, undefined) while ?? only considers null and undefined as nullish.

//combined all of them together

let m = 0;
let n = "Zero";
let o = m || n; // o will be "Zero" because m is falsy (0)
let p = m && n; // p will be 0 because m is falsy (0)
let q = m ?? n; // q will be 0 because m is not null or undefined