// # Day 3: Arrays and Loops

// ## Learning Objectives
// By the end of this lesson, you will:
// - Understand what arrays are and why they're essential for storing lists of data
// - Create, modify, and access array elements
// - Use array methods to manipulate data efficiently
// - Write loops to repeat code and process arrays
// - Combine arrays, loops, and functions to solve complex problems
// - Build programs that work with collections of data

// ## Introduction to Arrays

// ### What Are Arrays?

// Arrays are ordered collections of data. Think of them as lists that can hold multiple values in a single variable.

// **Real-World Analogies:**
// - Shopping list with multiple items
// - Playlist with multiple songs  
// - Class roster with multiple students
// - Menu with multiple dishes

// **Why Arrays Matter:**
// - Store related data together
// - Process multiple items efficiently
// - Organize information logically
// - Essential for real-world programming

// **Array Characteristics:**
// - **Ordered**: Items have specific positions (indexes)
// - **Indexed**: Each item has a number (starting from 0)
// - **Dynamic**: Can grow or shrink in size
// - **Mixed Types**: Can contain different data types (though usually don't)

// ### Array Index System:
// ```
// Array: ["Apple", "Banana", "Cherry"]
// Index:    0        1        2
// ```
// **Important**: Arrays start counting from 0, not 1!

// CREATING YOUR FIRST ARRAYS
// Creating arrays with square brackets[]
// let fruits = ["apple", "banana", "orange", "grape"];
// let numbers = [10, 25, 30, 45, 50];
// let booleans = [true, false, true, true];
// let mixedArray = ["John", 25, true, "student"];

// // Empty array
// let emptyArray = []

// // Display the arrays
// console.log("Fruits arrays:", fruits);
// console.log("Numbers array:", numbers);
// console.log("Mixed array:", mixedArray);
// console.log("Empty array:", emptyArray);

// console.log("");


// // Array Length property
// console.log("Number of fruits:", fruits.length);
// console.log("Number of numbers:", numbers.length);
// console.log("Empty array length:", emptyArray.length);

// console.log("");

// // Accessing individual elements with index [0, 1, 2, ...]
// console.log("First fruit:", fruits[0]);
// console.log("Second fruit:", fruits[1]);
// console.log("Last fruit:", fruits[fruits.length -1]);

// console.log("First number:", numbers[0]);
// console.log("Third number;", numbers[2]);

// // What happens with invalid indexes
// console.log("Index that doesn't exist:", fruits[10]);


// // KEY POINTS
// //- Square brackets [] create arrays
// // - .length tells you how many items are in the array
// //- Access items with arrayName[index]
// //- Invalid indexes return undefined
// //- Last items is always at array.length -1


// //## Modifying Arrays


// let colors = ["red", "green", "blue"];
// console.log("Original colors:", colors);

// // Changing existing elements
// colors[0] = "purple";
// colors[2] = "yellow";
// console.log("After changes:", colors);

// console.log(""); // Empty line

// // Adding elements to the end with push()
// let shoppingList = ["milk", "bread"];
// console.log("Original list:", shoppingList);

// shoppingList.push("eggs");
// shoppingList.push("cheese", "butter"); // Can add multiple items
// console.log("After adding items:", shoppingList);

// console.log(""); // Empty line

// // Removing the last element with pop()
// let removedItem = shoppingList.pop(); // pop() returns the removed item
// console.log("Removed item:", removedItem);
// console.log("List after removing:", shoppingList);

// console.log(""); // Empty line

// // Adding elements to the beginning with unshift()
// shoppingList.unshift("apples");
// console.log("After adding to front:", shoppingList);

// // Removing the first element with shift()
// let firstItem = shoppingList.shift();
// console.log("Removed first item:", firstItem);
// console.log("Final list:", shoppingList);

// console.log(""); // Empty line

// // Finding elements
// let students = ["Alice", "Bob", "Charlie", "Diana"];
// console.log("Students:", students);
// console.log("Is Bob in class?", students.includes("Bob"));
// console.log("Where is Charlie?", students.indexOf("Charlie"));
// console.log("Where is Frank?", students.indexOf("Frank")); // -1 means not found

// **Array Methods Summary:**
// - `push()` - Add to end
// - `pop()` - Remove from end  
// - `unshift()` - Add to beginning
// - `shift()` - Remove from beginning
// - `includes()` - Check if item exists
// - `indexOf()` - Find item's position

//## More Array Methods


// let numbers = [1, 2, 3, 4, 5];
// let names = ["John", "Jane", "Bob", "Alice"];

// console.log("Original numbers:", numbers);
// console.log("Original names:", names);

// console.log(""); // Empty line

// // slice() - Get a portion of the array (doesn't change original)
// let firstThree = numbers.slice(0, 3);  // Get items 0, 1, 2
// let lastTwo = numbers.slice(-2);       // Get last 2 items
// console.log("First three numbers:", firstThree);
// console.log("Last two numbers:", lastTwo);
// console.log("Original unchanged:", numbers);

// console.log(""); // Empty line

// // splice() - Remove/add items at specific position (changes original)
// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log("Original fruits:", fruits);

// // Remove 2 items starting at index 1
// let removed = fruits.splice(1, 2);
// console.log("Removed items:", removed);
// console.log("After removal:", fruits);

// // Add items at index 1
// fruits.splice(1, 0, "mango", "pineapple"); // Remove 0, add 2 items
// console.log("After adding:", fruits);

// console.log(""); // Empty line

// // join() - Convert array to string
// let words = ["Hello", "from", "JavaScript"];
// let sentence = words.join(" ");        // Join with spaces
// let csv = words.join(",");             // Join with commas
// console.log("Words array:", words);
// console.log("As sentence:", sentence);
// console.log("As CSV:", csv);

// console.log(""); // Empty line

// // split() - Convert string to array (string method, but creates arrays)
// let message = "apple,banana,orange";
// let fruitArray = message.split(",");
// console.log("String:", message);
// console.log("Split into array:", fruitArray);

// // reverse() - Reverse array order (changes original)
// let countdown = [1, 2, 3, 4, 5];
// console.log("Original countdown:", countdown);
// countdown.reverse();
// console.log("Reversed countdown:", countdown);

// **Important Distinction:**
// - **slice()** - Returns new array, original unchanged
// - **splice()** - Modifies original array
// - **join()** - Array method that returns a string
// - **split()** - String method that returns an array


// ## Introduction to Loops Markdown

// ### What Are Loops?

// Loops allow you to repeat code multiple times without writing the same code over and over. They're essential for processing arrays and automating repetitive tasks.

// **Real-World Analogies:**
// - Reading every page in a book (loop through pages)
// - Checking every student's homework (loop through students)
// - Playing every song in a playlist (loop through songs)
// - Visiting every house on a street (loop through addresses)

// **Why Loops Matter:**
// - **Efficiency**: Write once, run many times
// - **Scalability**: Handle any amount of data
// - **Flexibility**: Process different sized collections
// - **Automation**: Reduce manual, repetitive work

// **Common Loop Types:**
// 1. **for loop** - When you know how many times to repeat
// 2. **while loop** - When you repeat based on a condition
// 3. **for...of loop** - When you want to go through each array item
// 4. **forEach** - Array method for processing each item


// Your First For Loop
// Basic for loop structure:
// for (initialization; condition; increment) {
//     code to repeat
// }

// // Simple counting loop
// console.log("Counting from 1 to 5:");
// for (let i =1; i <= 5; i++) {
//     console.log("Count:", i);
// }
// console.log("");

// // Counting backwards
// console.log("Countdown from 5 to 1:");
// for (let i = 5; i >= 1; i--) {
//     console.log("Countdown:", i);
// }

// console.log("Blast off!");
// console.log("")

// // Using loops with calculations
// console.log("Multiplication table 3:");
// for (let i = 1; i <= 10; i++) {
//     let result = 3 * i;
//     console.log(`3 x ${i} = ${result}`);
// }
// console.log("");

// // Loop with different step sizes
// console.log("Even numbers from 2 to 10:");
// for (let i =2; i <= 10; i +=2) {
//     console.log("Even number:", i);
// }
// console.log("");

// // Loop through an array using index
// let colors = ["red", "green", "blue", "yellow"];
// console.log("Colors in the array:");
// for (let i = 0; i < colors.length; i++) {
//     console.log(`Color ${i + 1}: ${colors[i]}`);
// }

// For Loop Parts:
// - Initialization: let i = 1 - Set up counter variable
// - Condition: i <= 5 - Keep looping while this is true
// - Increment: i++ - Change counter each time
// - Body: Code inside {} - What to repeat

//## For...Of Loop and Array Processing


// for...of loop - easier way to go through array items
// let fruits = ["apple", "banana", "orange", "grape"];

// console.log("Using for...of loop:");
// for (let fruit of fruits) {
//     console.log("I like", fruit);
// }

// console.log(""); // Empty line

// // Compare with traditional for loop
// console.log("Using traditional for loop:");
// for (let i = 0; i < fruits.length; i++) {
//     console.log("I like", fruits[i]);
// }

// console.log(""); // Empty line

// // Processing numbers with for...of
// let scores = [85, 92, 78, 96, 88];
// let total = 0;

// console.log("Calculating average score:");
// for (let score of scores) {
//     console.log("Adding score:", score);
//     total += score;  // Same as: total = total + score
// }

// let average = total / scores.length;
// console.log(`Total: ${total}, Average: ${average.toFixed(1)}`);

// console.log(""); // Empty line

// // Using loops with conditions
// let temperatures = [68, 72, 85, 90, 75, 82, 88];
// let hotDays = 0;
// let coldDays = 0;

// console.log("Analyzing temperatures:");
// for (let temp of temperatures) {
//     if (temp >= 85) {
//         hotDays++;
//         console.log(`${temp}°F - Hot day!`);
//     } else if (temp < 70) {
//         coldDays++;
//         console.log(`${temp}°F - Cold day!`);
//     } else {
//         console.log(`${temp}°F - Nice day!`);
//     }
// }

// console.log(`Summary: ${hotDays} hot days, ${coldDays} cold days`);

// console.log(""); // Empty line

// // Building new arrays with loops
// let numbers = [1, 2, 3, 4, 5];
// let doubled = [];

// console.log("Doubling each number:");
// for (let num of numbers) {
//     let doubledValue = num * 2;
//     doubled.push(doubledValue);
//     console.log(`${num} × 2 = ${doubledValue}`);
// }

// console.log("Original:", numbers);
// console.log("Doubled:", doubled);

// **When to Use Each Loop:**
// - **for...of** - When you want each item, don't need index
// - **Traditional for** - When you need the index number
// - **Both work**, for...of is usually cleaner and easier to read

//## While Loops

// While loop - repeats as long as condition is true
// while (condition) {
//     code to repeat
// }

// console.log("Basic while loop - counting to 5:");
// let count = 1;
// while (count <= 5) {
//     console.log("Count is:", count);
//     count++; // IMPORTANT: Must change the condition variable!
// }

// console.log(""); // Empty line

// // While loop processing array until condition met
// let numbers = [2, 4, 6, 8, 3, 10, 12];
// let i = 0;
// let foundOdd = false;

// console.log("Looking for first odd number:");
// while (i < numbers.length && !foundOdd) {
//     console.log(`Checking ${numbers[i]}...`);
    
//     if (numbers[i] % 2 === 1) {  // Check if odd
//         console.log(`Found odd number: ${numbers[i]}`);
//         foundOdd = true;
//     } else {
//         console.log(`${numbers[i]} is even, continuing...`);
//     }
    
//     i++;
// }

// if (!foundOdd) {
//     console.log("No odd numbers found!");
// }

// console.log(""); // Empty line

// // do...while loop - runs at least once
// let number = 1;

// do {
//     console.log("Number is: " + number);
//     number++;
// } while (number <= 3);

// console.log("Loop finished!");


// **While Loop Key Points:**
// - **Condition checked first** - May never run if condition is false
// - **Must change condition variable** - Or you get infinite loop!
// - **do...while** - Runs at least once, checks condition at end
// - **Use for unknown number of iterations** - When you don't know how many times to loop


// Array Methods That Use Functions
//  Modern array methods that make processing easier
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original numbers:", numbers);
console.log("")

// forEach() - Do something with each element
console.log("Using forEach to print each number:");
numbers.forEach(function(number) {
    console.log("Number:", number);
});

// More concise with arrow function 
console.log("forEach with arrow function:");
numbers.forEach(number => console.log(`Value: ${number}`));
console.log("");

// Map() - Transform each element and create new array
console.log("Using map to double each number:");
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log("Doubled:", doubled);

// Shorter arrow function version
let tripled = numbers.map(number => number * 3);
console.log("Tripled:", tripled);
console.log("");


// filter() - Keep only elements that meet condition 
console.log("Using filter to get even numbers:");
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// Get odd numbers with arrow function
let oddNumbers = numbers.filter(number => number % 2 === 1);
console.log("Odd numbers:", oddNumbers);
console.log("");

// Find() - Get first element that meets condition 
let firstBigNumber = numbers.find(number => number > 5);
console.log("First number > 5:", firstBigNumber);

// ARRAY METHODS SUMMARY:
// - ForEach() - Do something with each item (no return)
//- map() - Transform each item, return new array
// - filter() - Keep items that pass test, return new array
// - find () - Return first item that passes test