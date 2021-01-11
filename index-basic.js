
// let is best practice not var

let trainer = 'Kyo';
console.log("TCL - trainer", trainer);

// primitives type, string, number, boolean, undefined, null

let name = 'Kyo'; // type string
let age = 35; // type number
let isApproved = true; // type boolean
let firstName = undefined; // type undefined
let lastName = null; // type object

// references type, object, array, function

// object
let person = {
    name: 'Kyo',
    age: 35
}
// dot notation 
person.name = 'David';

// bracket notation
let selectedProp = 'age';
person[selectedProp] = 30;

console.log("TCL - person", person);


// array
let colors = ['red', 'blue'];
colors[4] = 'green';
console.log("TCL - colors", colors);

// function can defined parameters
function greet(firstName, lastName) {
    console.log("TCL - greet - name", firstName, lastName);
}

// pass argument
greet('John', 'Smith');


// function can perform a task
// function can calculate a value, with return