
const numbers  = [3, 4];
numbers[0] = 1;
numbers.push(5); // append
numbers.unshift(0); // adding element in the first order

/*
in array we have several basic operations
such as adding element, inserting, removing,
etc.
*/

numbers.splice(2, 0, 5, 6); // inserting or removing element(s) in a certain position

console.log(numbers);

// finding elements
// really depends on whether we store in
// primitives or reference type variable


console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4)); // returning index of the last element if there are multiple same element

console.log(numbers.indexOf(4) !== -1); // to check if 4 exist in numbers


const courses = [
    {id: 1, nama: 'a'},
    {id: 2, nama: 'b'}
];

// find a course named a in an object
const course = courses.find(function(course) {
    return course.nama === 'b'
});

// console.log(course);
// out: { id: 2, nama: 'b' }

// ARROW FUNCTION
const courseArrow = courses.find(course => course.name === 'a');
console.log(course);

// removing array
// end
// const last = numbers.pop(); // returning the last element removed

// end
// const first = numbers.shift();
// console.log(numbers);

// middle
numbers.splice()

// EMPTYING ARRAY
let numbers2 = [1, 2, 3, 4];
let another = numbers2;
// solution 1
// numbers2 = [];

// solution 2
// numbers2.length = 0;


// solution 3
// numbers2.splice(0, numbers2.length);

// solution 4
// while (numbers2.length > 0) {
//     numbers2.pop() // removing the last element, not recomended
// }


// COMBINING AND SPLITTING ARRAY
const first = [1,2,3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// const slice = combined.slice(2, 4); // slice from element 2 up to but not including 4


// SPREAD OPERATOR
// cleaner way to combined and copy arrays
const combined = [...first, 'a', ...second, 'b'];

// console.log(slice);

// ITERATING ARRAY
// for (let number of combined) {
//     console.log(number);
// }

// another way
// combined.forEach((number, index) => console.log(number, index));

// we don't get the index with for.. of loop
// we can get the index with for ... in loop

// JOINING ARRAY
const joined = combined.join(', ');

//splitting array
const message = "This is my message";
const splittedMessage = message.split(' ');

// console.log(splittedMessage);


// SORTING ARRAY
const unorderedNumber = [5, 2, 6, 3, 1];
unorderedNumber.sort();


// reversing ordered array
unorderedNumber.reverse();

// console.log(unorderedNumber);
// out: [ 6, 5, 3, 2, 1 ]

// sorting object
const courses2 = [
    {id: 1, courseName: 'Node.js'},
    {id: 2, courseName: 'JavaScript'},
];

courses2.sort(function(firtObj, secObj) {
    // eliminating case sensitive problem
    const name1 = firtObj.courseName.toUpperCase();
    const name2 = secObj.courseName.toUpperCase();

    // comparing strings
    if (name1 < name2) return -1;
    if (name1 > name2) return 1;
    return 0;
});

// console.log(courses2);

// TESTING ELEMENTS IN ARRAY

const atLeastOnePositive = unorderedNumber.some(function (value) {
    return value >= 0;
}); // checking every element in an array an jump out if the first element
// that does not meet the criteria is found

// console.log(atLeastOnePositive);
// out: true

const naturalNumber = [-2, -5, 6, 9];

const filtered = naturalNumber.filter(function (value) {
    return value < 0;
}); // loop through array and return values that match criteria
// based on callback function

// console.log(filtered);


// SUMMING ARRAY

// solution 1
// let sum = 0;
// for (let number of naturalNumber) {
//     sum += number;
// }
// out: 8


// solution 2 using reduce

const sum = naturalNumber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // reduce method takes two argument
// callback function and initial value of currentValue
// when loop is over, it will return the accumulator
// if initial value is not called it will use the first element
// as accumulator

// console.log(sum);
// out: 8


// EXERCISES

// exericise #1
// const numOut = arrayFromRange(-10, -11);

// console.log(numOut);
// out: [
//   -10, -9, -8, -7,
//   -6, -5, -4
// ]

function arrayFromRange(start, stop) {
    let arrayOut = [];
    for (let num = start; num <= stop; num++) 
        arrayOut.push(num);

    return arrayOut;
}

// exercise 2: function include method-like

const anotherNumbers = [1, 2, 3, 4];

// console.log(includes(anotherNumbers, 0));
// out: false

function includes(array, searchElement) {
    let isIncluded = false;
    for (let element of array) {
        if (element === searchElement) isIncluded = true;
    }
    
    return isIncluded;
}

// exercise 3: function that create an array excluding certain element

// const output = except(anotherNumbers, [1, 4, 100]);

// console.log(output);
//out: [ 3, 4 ]

function except(array, excluded) {
    // iterate over array
    for (let element of excluded) {
        
        if (array.includes(element)) 
            array.splice(array.indexOf(element), 1);

    }

    return array;
}

// exercise 4: moving element inside an array
// const output = move(anotherNumbers, 0, 2);

// console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    
    if (position >= array.length || position < 0) {
        console.error('Invalid offset. ')
        return;
    }
    
    const output = [...array];
    const element = output.splice(index, 1)[0] // return the deleted item
    output.splice(position, 0, element); // index+offset = end position, 0 indicates adding element
    return output;
}

// exercise 5: count occurence of an element

const newNumbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(newNumbers, -1);

// console.log(count);
// out: 0

function countOccurrences(array, searchElement) {
    let counter = 0;
    for (let element of array) {
        if (element === searchElement) counter++;

    // alternative solution: using reduce method
    // return array.reduce((accumulator, currentValue) => {
    //     const occurence = (currentValue === searchElement) ? 1:0;
    //     return accumulator + occurence;
    // }, 0)
    }
    return counter;
}

// exercise 6: get maximum value in an array

const max = getMax([])

console.log(max);

function getMax(array) {
    // check if array empty
    // if (array.length == 0) return undefined;
    
    // let numberHolder = array[0];
    // for (let element in array) {
    //     if (numberHolder < element) 
    //         numberHolder = element;   
    // }
    
    // return numberHolder;

    return array.reduce((numberHolder, element) => {
        if (array.length == 0) {
            return undefined;
        }

        return (numberHolder < element) ? element : numberHolder;
    })
}