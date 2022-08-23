// JavaScript Total Recall

// A. Q + A
// How do we assign a value to a variable?

//ANSWER:  declare the variable using let or const, use the assignment operator (=) to assign a value to that variable

// How do we change the value of a variable?

// ANSWER: reassign that variable with a new value using the assignment operator

// How do we assign an existing variable to a new variable?

// ANSWER: we use the assignment operator variable1 = variable2;

// Remind me, what are declare, assign, and define?

// Answer: declaring a variable gives details to the compiler about the properties of that variable
// assigning a variable is to associate a piece of information to the created variable name
// defining a variable states here the variable gets stored
//
// What is pseudocoding and why should you do it?

// ANSWER: pseudocoding is the first step you take when approaching a coding problem. It's where you type out how you would approach solving the problem in plain language, before you start typing actual code

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// ANSWER: as long as it takes to get a solid understanding of what problem you are trying to solve and what methods/approach you will need to solve this problem

//B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable

let firstVariable;

// Assign it the value of the string "Hello World"

firstVariable = "Hello World";

// Change the value of this variable to some number

firstVariable = 100;

// Store the value of firstVariablein a new variable called secondVariable

let secondVariable = firstVariable;

// Change the value of secondVariableto any string.

secondVariable = "String";

// What is the value of firstVariable?

//  Answer: 100

// Create a variable called yourNameand set it equal to your name as a string.
// Then, write an expression that takes the string "Hello, my name is "
//and the variable yourNameso that it returns a new string with them concatenated.

let yourName = "Mariessa";
let expression = "Hello, my name is ";
console.log(expression + yourName);

// C. Booleans

//Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
//Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a !== b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cat";
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}
