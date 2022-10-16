/*
Object-oriented Prorgamming
OOP is a programming paradigm where functions
is the kings

We can encapsulate properties and methods
that are related each other inside an object
*/

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

// circle.draw(); // we can call a method (a function) inside an 
// object by using dot notation


/*
factory function
this is very similar to an creating an instance of an object
in pyhton
*/

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// create an instance
const circle1 = createCircle(1);
// console.log(circle1);


// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const newCircle = new Circle(1);
// console.log(newCircle);

// Dynamic property of JavaScript

const dynamicCircle = {
    radius: 1
};

/*
In javascript we can freely add or remove properties
or functions in an object
but we can not reasign the same variable that has been asigned
*/

// adding a property and a method
dynamicCircle.color = 'yellow';
dynamicCircle.undraw = function() {
    console.log('undraw');
};

// deleting a propery
delete dynamicCircle.radius;

// console.log(dynamicCircle);

// in JavaScript, functions are object


// EXERCISES

const address = {
    street: 'Cihampelas',
    city: 'Bandung',
    zipCode: 40562,
    showAddress: function(address) {
        for (let key in address) {
            console.log(key, address[key]);
        }
    }
}

// show properties inside address
// address.showAddress(address);

// factory function
function createAddress() {
    return {
        street: 'a',
        city: 'b',
        zipCode: 'c'
    }
}

let newAddress = createAddress();
// console.log(newAddress);

// constructor method
// defined with Pascal notation
function CreateNewAddress() {
    this.street = 'a';
    this.city = 'b';
    this.zipCode = 'c';
}

let newAddress2 = new CreateNewAddress();
// console.log(newAddress2);

