/* Control Flow */

/*
Hour
If hour is between 6am and 12pm: Good morning!
Otherwise: Good afternoon!

*/

// let hour = 1;

// if (hour >= 6 && hour < 12) 
//     console.log("Good morning!");

// else if (hour >= 12 && hour < 18) 
//     console.log("Good afternoon!");

// else if (hour >= 18 && hour < 24) 
//     console.log("Good evening!");

// else 
//     console.log("Good night!");

/*
output:
Good night!
*/

// let role = 'danskjda';

// switch (role) {
//     case 'guest':
//         console.log('Guest user');
//         break;
    
//     case 'moderator':
//         console.log('Moderator user');
//         break;

//     default:
//         console.log('Unknown user');
//         break;
// }

/* 
output:
Unknown user
*/

// more elegant statement with if..else
// if (role === 'guest') console.log('Guest user');
// else if (role === 'moderator') console.log('Moderator user');
// else console.log('Unkown user');

/*
output:
Unkown user
*/

/*
Loops
Repeat actions for a specific number of time
*/
/*  (initialExp; conditionalExp; incrementalExp)*/
// for (let i = 5; i >= 1; i--){
//     // incrementalExp can also be replaced by decremental expression
//     // in case we want to loop over in reverse order
//     // but we also need to set initialExp to 5
//     // and condition exp to 1
//     if (i % 2 !== 0) console.log(i);
// }
/*
output:
5
3
1
*/

/*
While loop
*/

// let i = 0;
// while (i < 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

/*
output:
1
3
*/

/*
Do-While Loop
this loop always be executed at least once regardless
the condition evaluates to true or not
*/
// let i = 9;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

/*
output:
9
*/

/* 
for.. in loop
 */

// const person = {name: 'Mosh', age: 30};
// for (let key in person) {
//     console.log(key, person[key]);
// }

/*
output:
name Mosh
age 30
*/

// const colors = ['red', 'green', 'blue'];
// for (let idx in colors) {
//     console.log(colors[idx]);
// }

/*
out:
red
green
blue
*/

// const colors = ['red', 'green', 'blue'];
// for (let color of colors) {
//     console.log(color);
// }

/*
out:
red
green
blue
*/

 

/*
EXERCISES
*/
 
// function whichMax(x, y) {
//     // (if (x > y) return x;
//     // return y;)

//     return (x > y) ? x : y; // cleaner implementation

// }


// console.log(whichMax(-1, -5));

// function isLandscape(width, height) {
//     return (width > height);
// }

// console.log(isLandscape(2, 10));


/* fizzBuzz */
// const output = fizzBuzz('7');
// console.log(output);

// function fizzBuzz(input) {
//     let fbOutput = "";
//     if (typeof input !== 'number') return NaN;
//     if (input % 3 == 0) fbOutput += "Fizz";
//     if (input % 5 == 0) fbOutput += "Buzz";
//     return (fbOutput === "") ? input : fbOutput;
// }

/*
out;
NaN
*/

// checkSpeed(76);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    }
    let point = Math.floor((speed - speedLimit)/kmPerPoint);
    if (point < 12)
        console.log("Point", point);
    else
        console.log(point);
}

/* even or odd */

// showNumbers(10);

function showNumbers(limit) {
    for (let number = 0; number <= limit; number++) {
        const message = (number % 2 === 0) ? "EVEN" : "ODD";
        console.log(number, message);
    }
}

/* 
count truthy 
falsy statement: is not a false boolean but javascript
interprets it as a false statement

falsy value: null, "", undefined, NaN

*/

const array = [0, null, undefined, '', 2, 3]

// console.log(countTruthy(array));

function countTruthy(array) {
    let counter = 0;
    
    for (let element of array) {
        
        if (element) counter++;
    }
    return counter;
}

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

// showProperties(movie)

function showProperties(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, obj[prop]);
        }
    }
}

// console.log(sum(10));


function sum(limit) {
    let total = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) total += i;
    }

    return total;
}

/*
out: 33
*/


/*
specifying grade
*/
const marks = [50, 40, 30];

// console.log(calculateGrade(marks));

function calculateGrade(marks) {

    let average = calculateAverage(marks)
    // specify grade
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}

function calculateAverage(marks) {
    // calculate the average
    let total = 0;
    let count = 0;
    for (let mark of marks) {
        total += mark;
        count++;
    }
    
    return total/count;
}

/* each functions is only responsiple of one thing */


/*
prime number
*/

showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= 20; number++) {
        if (isPrime(number)) console.log(number)
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            false;
        }
    }
    return true;
}