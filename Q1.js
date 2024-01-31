// Conditional statements in JavaScript allow you to execute specific blocks of code based on conditions. 
// If the condition meets then a particular block of action will be executed otherwise it will execute
//  another block of action that satisfies that particular condition.

// There are several methods that can be used to perform Conditional Statements in JavaScript.


// if Statement
// if-else Statement
// else if Statement
// switch Statement
// Ternary Operator


// 1.  if Statement
// Syntax 
// if ( condition ) {
//     // If the condition is met, 
//     //code  will get executed.
// }


// Example of If statment
let num = 20;

if (num % 2 === 0) {
    console.log("Given number is even number.");
}

if (num % 2 !== 0) {
    console.log("Given number is odd number.");
};


// JavaScript if-else Statement
// The if-else statement will perform some action for a specific condition. 
// Here we are using the else statement in which the else statement is written after the if statement 
// and it has no condition in their code block.

// syntax:
// if (condition1) {
//     // Executes when condition1 is true
//     if (condition2) {
//         // Executes when condition2 is true
//     }
// }

// Example of If else condition

let age = 25; 

if (age >= 18) { 
	console.log("You are eligible of driving licence") 
} else { 
	console.log("You are not eligible for driving licence") 
};

// else if Statement
// The else if statement in JavaScript allows handling multiple possible conditions and outputs, 
// evaluating more than two options based on whether the conditions 
// are true or false.

// Syntax:
/*

if (1st condition) {
    // Code for 1st condition
} else if (2nd condition) {
    // ode for 2nd condition
} else if (3rd condition) {
    // Code for 3rd condition
} else {
    //  ode that will execute if all 
    // above conditions are false

}
*/

const num1 = 0; 

if (num1 > 0) { 
	console.log("Given number is positive."); 
} else if (num1 < 0) { 
	console.log("Given number is negative."); 
} else { 
	console.log("Given number is zero."); 
};

/*
Switch Statement
As the number of conditions increases, you can use multiple else-if statements in JavaScript.
 but when we dealing with many conditions, the switch statement may be a more preferred option.

 Syntac:

 switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    . . .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
};


Example:

*/
const marks = 85; 

let Branch; 

switch (true) { 
	case marks >= 90: 
		Branch = "Computer science engineering"; 
		break; 
	case marks >= 80: 
		Branch = "Mechanical engineering"; 
		break; 
	case marks >= 70: 
		Branch = "Chemical engineering"; 
		break; 
	case marks >= 60: 
		Branch = "Electronics and communication"; 
		break; 
	case marks >= 50: 
		Branch = "Civil engineering"; 
		break; 
	default: 
		Branch = "Bio technology"; 
		break; 
} 

console.log(`Student Branch name is : ${Branch}`);

/*
Ternary Operator

The conditional operator, also referred to as the ternary operator (?:), 
is a shortcut for expressing conditional statements in JavaScript.


syntax:
condition ? value if true : value if false

Example:

*/
let age1 = 21; 

const result = 
	(age1 >= 18) ? "You are eligible to vote."
		: "You are not eligible to vote."; 

console.log(result);
