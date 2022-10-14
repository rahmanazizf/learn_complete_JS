// a statement is something that produces a value
/*
There are several operators in JavaScript
1. arithmetic
2. logical
3. comparison
4. assignment
5. bitwise
6. ternary operator
*/

// arithmetic operators
let x = 5;
let y = 10;


console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(y % x);



/*
output:
15
-5
50
0.5
0
*/

// increment operator

console.log("Put the increment sign before the variable");
console.log(++x);
console.log("Put the increment sign after the variable");
console.log(y++);
console.log(y);


/*
output:
Put the increment sign before the variable
6
Put the increment sign after the variable
10
11
*/

/*
++x means that we have 1 being added to the variable then it is printed out
whereas if we have x++ it means we have x printed out to the console then being added by 1
the same will also go for decrement sign (--)
*/

/* comparison operator */
/* relational operators */
console.log(x > y);
console.log(x >= y);
console.log(x <= y);

/*
output:
false
false
true
*/

/* equality and inequality operator */
/* strict operator (have the same type and value) */
console.log(1 === 1);
console.log('1' === 1);

/* it both will produce different output, true for the first line
and false for the second line since 1 in the right 
and left side have different type */

/* different from strict operator, loose operator will only match
the value regargless its type. it is designated with only two equality signs
"=="
*/

console.log(x !== y);

/*
output:
true
false
true
*/

/*
Ternary/conditional Operator
assign the value into the variable if only if the condition is met

If a customer has more than 100 points
they are a 'gold' member
otherwise, they are a 'silver' member
*/

let points = 110;
let customerType = points > 100 ? 'gold' : 'silver';
console.log(customerType);

/*
output:
gold
*/

/*
Logical Operator
*/

/* logical AND (&&): returns true if both operands are TRUE 
logical OR (||): returns true if one of conditions is met
logical NOT (!): returns the opposite boolean from the variable
*/

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);


/* swapping variable */
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;

console.log(a, b)