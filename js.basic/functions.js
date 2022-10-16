// there are two ways to declare a function in javascript
// 1. function declaration
// 2. function expression

// function declaration
// can be called before it is defined (hoisting)
walk();

function walk() {
    console.log('walk');
}

let run = function() {
    console.log('walk');
}

let move = run;
// move();
// run();


// ARGUMENTS

function sum(a, b) {
    return a + b;
}

// a and b are set to undefined by default
// if we don't pass any arguments or only passing one argument
// it will return NaN


// if we want to work with multiple arguments but we are uncertain
// about how many arguments we will pass
// we can use `arguments`

function sumArray() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

// THE REST OPERATOR

function sumArray2(...args) {
    // dot operator spreads an array
    console.log(args);
}

// sumArray2(1,2,3,4,5);
// out: [ 1, 2, 3, 4, 5 ]

function totalPrice(discount, ...prices) {
    const total = prices.reduce((a, b) => a+b);
    return total * (1 - discount);
}

// console.log(totalPrice(0.1, 10, 20, 15));
// out: 40.5


// GETTER AND SETTER

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// getters => access properties
// setters => change (mutate) them

// person.fullName = 'John Smith';

// console.log(person);
// out: { firstName: 'John', lastName: 'Smith', fullName: [Getter/Setter] }


// HANDLING ERRORS / try-catch
// defensive programming

const personDefensive = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (value !== 'string') {
            throw new Error('The value is not a string.');
            // when an error is thrown, the codes below won't be
            // executed
        }

        if (value.length != 2) {
            throw new Error('Enter the first and the last name.')
        }

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// try {
//     personDefensive.fullName = '';
// }
// catch (e) {
//     alert(e);
// }

// SCOPE
// scope specifies where variables or constants are accessible

function greet() {
    const message = 'hi';
}

// console.log(message);
// out: ReferenceError: message is not defined
// defining a global constant or variable is considered as a bad practice


// VAR vs LET

function start() {
    for (var i=0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

// start();
//out: 
// 0
// 1
// 2
// 3
// 4
// 5
// the problem with var is when we define a variable or constant
// it still accessible even outside of for loop


// method -> obj
// function -> global (window, global)

// exercise 1: sum

function sumArray3(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;

}

console.log(sumArray3(1,2,3));