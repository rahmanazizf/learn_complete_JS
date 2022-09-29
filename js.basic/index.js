let firstName = 'Rahman'; // string literal
let lastName = 'Firmansyah';
let height = 180; // number literal
let isApproved = true; // boolean literal
let selectedColor = null;

console.log(firstName, lastName);
// console.log(selectedColor);

/*
JavaScript falls into dinamically-typed programming languages category.
That means variables' type can be changed at run-time.
*/
console.log(typeof lastName);

/*
[Object data type]
belongs to reference type. think of an object as the same as an object in real-life.
an object has its own properties such as color, weight, name, etc. There are two ways to access
properties of an object, bracket notation and dot notation
*/
let user = {
    userName: 'Rahman Aziz',
    userHomeTown: 'Bandung'
};

// dot notation
console.log(user.userName);

// bracket notation
console.log(user['userHomeTown']);


// array literal

let selectedColors = ['red', 'blue']; // assign an array into a variable
selectedColors[2] = 'yellow';
console.log(selectedColors[2]); // accessing an element inside the array
/*
In JavaScript, an array can have one or more different type of elements.
Therefore, we can have, let say, number and string in the same array
*/
console.log(selectedColors[2].length); // displaying the number of characters of a string

/*
[Function]
a set of statements that performs particular tasks or calculations

parameter: variables that hold values inside a funciton
argument: the actual value of parameters

default value of a variable in javascript is undefined
*/
// function that performs a task
function greet(personName) {
    console.log('Hello ' + personName);
} // we don't need a semicolon to terminate a function like stating a variable

greet('random user');

// function that performs a calculaton
function square(number) {
    return number * number;
}

console.log(square(2));