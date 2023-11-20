// Get the first number
let num1 = parseInt(prompt("Enter the first number: "));

// Get the second number
let num2 = parseInt(prompt("Enter the second number: "));

// Get the third number
let num3 = parseInt(prompt("Enter the third number: "));

// Get the fourth number
let num4 = parseInt(prompt("Enter the fourth number: "));

// Get the fifth number
let num5 = parseInt(prompt("Enter the fifth number: "));

let smallestNumber = num1;

// Check if num2 is smaller than the current smallest number
if (num2 < smallestNumber) {
  smallestNumber = num2;
}

// Check if num3 is smaller than the current smallest number
if (num3 < smallestNumber) {
  smallestNumber = num3;
}

// Check if num4 is smaller than the current smallest number
if (num4 < smallestNumber) {
  smallestNumber = num4;
}

// Check if num5 is smaller than the current smallest number
if (num5 < smallestNumber) {
  smallestNumber = num5;
}

console.log("The smallest number is: " + smallestNumber);