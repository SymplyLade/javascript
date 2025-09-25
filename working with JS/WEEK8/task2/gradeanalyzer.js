// Student Grades Analyzer - Console Version
// Store grades in an array
let grades = [85, 92, 78, 60, 45, 72, 88, 95, 53, 67];
// Function to calculate average grade
function getAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}
// Function to find highest grade
function getHighest(grades) {
    let highest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    return highest;
}
// Function to find lowest grade
function getLowest(grades) {
    let lowest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }
    return lowest;
}
// Function to calculate pass rate
function getPassRate(grades) {
    let passCount = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 50) {
            passCount++;
        }
    }
    return (passCount / grades.length) * 100;
}
// Display results
console.log("Student Grades Analyzer");
console.log("..........................");
console.log("Grades:", grades);
console.log("Average Grade:", getAverage(grades).toFixed(2));
console.log("Highest Grade:", getHighest(grades));
console.log("Lowest Grade:", getLowest(grades));
console.log("Pass Rate:", getPassRate(grades).toFixed(2) + "%");



// Test with different grades
console.log("\n--- Testing with different grades ---");
grades = [45, 30, 55, 60, 75, 40, 80];
console.log("Grades:", grades);
console.log("Average Grade:", getAverage(grades).toFixed(2));
console.log("Highest Grade:", getHighest(grades));
console.log("Lowest Grade:", getLowest(grades));
console.log("Pass Rate:", getPassRate(grades).toFixed(2) + "%");











