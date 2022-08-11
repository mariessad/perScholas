// Setup & Instructions:
// For the exercises in this lab, create a new JS file in VSCODE -- you can name it "JavaScript_Functions.js".

// Requirements:
// Define and code the functions below.

// Define the functions using the approach as specified (either as a function expression or declaration).

// Be sure to number each function with a comment above it.

// After each function, call it at least once and console.log the results.

// For example, here's the first function, our gift to you:

// // 1.
// function maxOfTwoNumbers(x, y) {
//   if (x >= y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// console.log(maxOfTwoNumbers(3, 9));

// // 2.
// ...
// Here are the functions:
//  1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log("1.)", maxOfTwoNumbers(10, 90));
// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = (a, b, c) => {
  if (a > c && a > b) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
};

console.log("2.)", maxOfThree(77, 600, 3));
// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  char.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log("3.)", isCharAVowel("b"));

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = (arr) => {
  //   for (let i = 1; i < arr.length; i++) {
  //     arr[i] += arr[i];
  //     console.log(i);
  //   }
  let newArr = arr.reduce((a, b) => a + b);
  console.log(newArr);
  return newArr;
};

console.log("4.)", sumArray([1, 10, 20]));

// 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

// 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
