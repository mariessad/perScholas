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

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older,
// or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = "sixteen";

if (age === "sixteen" && age !== "fifteen") {
  console.log("Here are the keys!");
} else if (age !== "sixteen" && age !== "seventeen" && age !== "eighteen") {
  console.log("Sorry, you're too young");
}

// II. Loops
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i < 11; i++) {
  console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400

for (let i = 10; i < 401; i++) {
  console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + "<-- is an even number");
  }
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// For numbers divisible by both three and five, be sure your code prints both messages

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`I found a ${i}. High five! I found a ${i}. Three is a crowd`);
  }
  if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  }
  if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`);
  }
}

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

for (let i = 1; i <= 10; i++) {
  let bank_account = 0;
  bank_account = bank_account + i;
  bank_account = bank_account * 2;
  console.log(bank_account);
}
// You got a bonus! Your pay is now doubled each week.
//Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

for (let i = 0; i <= 100; i++) {
  let bank_account_1 = 0;
  bank_account_1 += i;
  bank_account_1 = bank_account_1 * 2;
  console.log(bank_account_1);
}

// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?
// Answer: an element or item
// Do Arrays guarantee those things will be in order?
// Answer: Yes, Arrays are ordered collections
// What real-life thing could you model with an array?
// Answer: Checkerboard

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

const quoteArr = [
  "Life is a long lesson in humility",
  "Life is either a daring adventure or nothing at all.",
  "When you have a dream, you've got to grab it and never let go.",
];

//C. Accessing elements
//Given the following array
const randomThings = [1, 10, "Hello", true];

//How do you access the 1st element in the array?
//Change the value of "Hello"to "World"
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
randomThings[0];
randomThings[2] = "World";
console.log(randomThings);

// D. Change values
// Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
// console.log(ourClass);

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array:
const myArray = [5, 10, 500, 20];

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array?
// What does mutate mean? Did the .reverse()method return anything?

myArray.push("Aegon");
myArray.push("butt");
myArray.shift();
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse(myArray);
console.log(myArray);

//F. Biggie Smalls
//Create a variable that contains an integer.
let num = 1;

//Write an if ... elsestatement that:
//console.log()s "little number" if the number is entered is less than 100
//console.log()s big numberif the number is greater than or equal to 100.
if (num < 100) {
  console.log("little number");
}
if (num > 100) {
  console.log("big number");
}

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
if (num < 5) {
  console.log("little number");
} else if (num > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
// log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0];
// In the same way, access one item from Thom's pants array.
thomsCloset[1][0];
// Access one item from Thom's accessories array.
thomsCloset[2][1];
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  `Thom is looking fierce in ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][1]}`
);
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "footie pajamas";

// IV. Functions
// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument.
//  The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
  console.log(`${name} is cool`);
};

printCool("Jane");

// C. calculateCube
// Write a function calculateCubethat takes a single number
// and prints the volume of a cube made from that number.

const calculateCube = (num) => {
  console.log(num * num * num);
};

calculateCube(2);

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1)
//  and returns true if it is a vowel, false otherwise.
// The vowel could be upper or lower case.
// Test your function on every vowel and make sure it's working.
// In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

const isVowel = (char) => {
  char.toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
};

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings).
//  The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (str1, str2) => {
  let num1 = str1.length;
  let num2 = str2.length;
  let arr = [num1, num2];
  return arr;
};
