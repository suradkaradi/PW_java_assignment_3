/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/
/*
The For Loop
 Syntax:

 for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
 */
 // Example Of for loop :
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }


  /*
  For In Loop
  The JavaScript for in statement loops through the properties of an Object:
  
  
  Syntax:
  for (key in object) {
  // code block to be executed
}
*/

// example of for in Loop

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}


/*

For Of Loop

he JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings,
 Maps, NodeLists, and more:
 
 Syntax :
 for (variable of iterable) {
  // code block to be executed
}

*/

// Example
const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text1 += x;
}


/*
While Loop

The while loop loops through a block of code as long as a specified condition 
is true.


Syntax :

while (condition) {
  // code block to be executed
}

*/
// example

// program to display numbers from 1 to 5
// initialize the variable
let a = 1, n = 5;

// while loop from i = 1 to 5
while (a <= n) {
    console.log(a);
    a += 1;
}
/*

do...while Loop

The do...while statement creates a loop that executes a specified 
statement until the test condition evaluates to false. 
The condition is evaluated after executing the statement, 
resulting in the specified statement executing at least once.

Syntax:
 
do {
    // body of loop
} while(condition)
*/

// Example:

// program to display numbers
let i = 1;
const A = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= A);