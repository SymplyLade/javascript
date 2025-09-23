// # Day 2: Functions and Decision Making

// ## Learning Objectives
// By the end of this lesson, you will:
// - Understand what functions are and why they're essential
// - Create and call your own functions
// - Use parameters and return values
// - Make decisions in your code with if/else statements
// - Combine functions with conditional logic
// - Build more complex, interactive programs

// ## Introduction to Functions

// ### What Are Functions?

// Functions are reusable blocks of code that perform specific tasks. Think of them as mini-programs within your program.

// ### Real-World Analogy:
// A function is like a recipe:
// - **Input:** Ingredients (parameters)
// - **Process:** Cooking steps (function body)
// - **Output:** Finished dish (return value)

// ### Why Use Functions?
// 1. **Avoid repetition** - Write once, use many times
// 2. **Organization** - Break complex problems into smaller pieces
// 3. **Testing** - Easier to test small pieces of functionality
// 4. **Collaboration** - Team members can work on different functions

// ### Function Structure:
// ```javascript
// function functionName(parameters) {
//     // code to execute
//     return result; // optional
// }

//  Your First Function
function sayHello() {
    console.log("Hello from my first function");
} 

//  Function call - Using the function
sayHello();

// You can call it multiple times
sayHello();
sayHello();
console.log("")

// Another simple function
function showCurrentTime() {
    let now = new Date ();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}
// Call the time function
showCurrentTime();
console.log("")
// key points:
// . function keyword starts the function declaration
// . function name followed by parentheses()
// . code goes inside curly braces{}
// . call the function by writing its name followed by ()


// Functions with parameters
// funtion with one parameter
function greetPerson(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript`);
}

// Call with different values
greetPerson("Alice");
greetPerson("Bob");
greetPerson("Charlie");
console.log("");

// Function with multiple parameters
function introduce(firstName, lastName, age) {
    console.log(`Hi! I'm ${firstName} ${lastName} and I'm ${age} years old.`)
}

// Call with multiple arguments
introduce("Jane", "Smith", 25);
introduce("John", "Doe", 30);
introduce("Sarah", "Johnson", 22)
console.log("");

// Function with default parameter
function greetWithDefault(name = "Friend") {
    console.log(`Hello, ${name}!`);
}
greetWithDefault("Maria");
greetWithDefault();
console.log("")
// // Parameters vs Arguments:
// .Parameters: Variables in the function definition (name,firstName)
// .Arguments: Actual values you pass when calling ("Alice", "Jane")

// ## Functions with Return Values

// ### Functions That Give Back Results

// So far, our functions have only displayed messages. But functions can also **return** values - giving back a result that you can use elsewhere in your program.

// ### Why Return Values?
// - **Calculations:** Function does math and gives back the result
// - **Processing:** Function transforms data and returns the new version
// - **Decision Making:** Function evaluates conditions and returns true/false
// - **Flexibility:** You can use the result in variables, other functions, or calculations

// ### Return Statement:
// - Use `return` keyword followed by the value to give back
// - Function stops executing when it hits `return`
// - If no `return` statement, function returns `undefined`

// Function that returns a calculated value
function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

// Store the returned value in a variable
let sum = addNumbers(5, 3);
console.log("Sum:", sum);

// Use the returned value directly
console.log("10 + 7 =", addNumbers(10, 7));

console.log(""); // Empty line

// Function that returns processed text
function createFullName(first, last) {
    return `${first} ${last}`.trim();
}

let fullName = createFullName("John", "Doe");
console.log("Full name:", fullName);

console.log(""); // Empty line

// Function that returns a boolean
function isAdult(age) {
    return age >= 18;
}

console.log("Is 16 adult?", isAdult(16));
console.log("Is 21 adult?", isAdult(21));

// Use return value in other code
let userAge = 20;
if (isAdult(userAge)) {
    console.log("User can vote!");
} else {
    console.log("User cannot vote yet.");
}
console.log("")
// Key Point:** When a function returns a value, you can use that value just like any other variable or data!

// ## More Function Examples
// Calculator functions
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

function calculateArea(length, width) {
    return length * width;
}

// Test the calculator functions
console.log("Multiply 6 × 4 =", multiply(6, 4));
console.log("Divide 15 ÷ 3 =", divide(15, 3));
console.log("Divide 15 ÷ 0 =", divide(15, 0));
console.log("Area of 5×3 room =", calculateArea(5, 3), "square units");

console.log("")

//Notice how we can use functions inside other operations and build more complex logic!

//  Introduction to Conditional Statements

//  Making Decisions in Code

// Real programs need to make decisions based on different conditions. Should we show a welcome message? Is the user old enough? Is the password correct?

// **Conditional statements** let your code choose different paths based on whether conditions are true or false.

//  Types of Conditional Statements:
// 1. **if statement** - Do something if condition is true
// 2. **if...else statement** - Do one thing if true, another if false
// 3. **if...else if...else** - Multiple conditions to check
// 4. **Ternary operator** - Short way to write simple if/else

// // Basic Structure:
// if (condition) {
//     //
// }  else {

// }

// Basic If statements
let age = 25;
let temperature = 75;
let isRaining = false;

// Simple if statement
if (age >= 18) {
    console.log("You are an adult!");
}

// If...else statement
if (temperature > 80) {
    console.log("It's hot today!");
} else {
    console.log("The weather is nice!");
}

// Another if...else
if (isRaining) {
    console.log("Don't forget your umbrella!");
} else {
    console.log("No umbrella needed today!");
}

console.log(""); // Empty line

// Using variables in conditions
let score = 85;
let passingGrade = 70;

if (score >= passingGrade) {
    console.log(`Congratulations! You passed with ${score}%`);
} else {
    console.log(`Sorry, you scored ${score}%. You need ${passingGrade}% to pass.`);
}

//Remember: Conditions must evaluate to true or false (boolean values).
