// arithmetic operator

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(x++);
console.log(x);

// assignment operator
x = x + 5;
x += 5;

x = x * 3;
x *= 3;

// Comparison operator

x = 1;
//  relational
console.log("TCL - relational");
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// equality

// strict equality, (type + value)
console.log(x === 1);
console.log(x !== 1);
// lose equality, (value), try to convert right side type to left side
console.log(x == 1);

// ternary operator

let points = 110;
let type = points > 100 ? "gold" : "silver";

// logical operator

// AND (&&)
// OR (||)
// NOT (!)

// logical operator with non-booleans
// truthy or falsy

false || true
// => true

false || "Kyo"
// => "Kyo"

false || 1
// => 1

// falsy operator

// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy => truthy

false || 1 || 2
// => 1, due to first Truthy will be return

// use case , provide default value
// let's said currentColor, if userChosenColor is undefined, currentColor would be defaultColor
let userChosenColor = 'red';
let defaultColor = 'blue';
let currentColor = userChosenColor || defaultColor;
console.log("TCL - currentColor", currentColor);

// bitwise operators
// 1 = 00000001
// 2 = 00000010

// bitwise OR (|)
console.log(1 | 2);
// => 3
console.log(1 & 2);
// => 0

// use case. Read Write Execute
// RWE
// 100 stand for only Read
// 010 stand for only Write
// 001 stand for only Execute
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let hasReadPermission =
    (myPermission & readPermission) ? 'yes' : 'no';

console.log("TCL - hasReadPermission", hasReadPermission);

// operator Precedence
// first */ then +- parentheses() priority

let z = (2 + 3) * 4;
// => 20

let a = 'red';
let b = 'blue';

let temp = a;
a= b;
b=temp;

console.log(a);
console.log(b);