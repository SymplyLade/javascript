// // QUESTION ONE
// // IS STRONG PASSWORD
function isStrongPassword(password) {
 const hasNumber = /\d/;               // check for number
  const hasSpecialChar = /[^A-Za-z0-9]/; // check for special character
  if (password.length < 8) {
    return " Password must be at least 8 characters long.";
  }
  if (!hasNumber.test(password)) {
   return " Password must contain at least one number.";
  }
  if (!hasSpecialChar.test(password)) {
   return " Password must contain at least one special character.";
 }
 return " Strong password!";
}

// Ask the user for input
let userPassword = prompt("Enter your password:");
alert(isStrongPassword(userPassword));

//QUESTION 2
//FORMAT PERCENTAGE

function formatPercentage(value) {
  return value.toFixed(1) + "%";
}

console.log(formatPercentage(57.678)); // "45.7%"

function formatPercentage(value) {
  const n = Number(value);
  if (Number.isNaN(n)) return "Invalid number";
  return `${n.toFixed(1)}%`;
}
// Tests
console.log(formatPercentage(57.678));   
console.log(formatPercentage("57.6"));   
console.log(formatPercentage("abc"));


//QUESTION THREE
//CALCULATE COMPOUND INTEREST
function calculateCompoundInterest(principal, rate, years) {
  const amount = principal * Math.pow((1 + rate / 100), years);
  return amount.toFixed(2);
}
// TEST
console.log(calculateCompoundInterest(1000, 10, 2));

// QUESTION FOUR
// CAN GRADUATE
function canGraduate(credits, gpa) {
  return credits >= 120 && gpa >= 2.0;
}
// Test:
console.log(canGraduate(130, 2.5)); 
console.log(canGraduate(100, 3.0)); 

// QUESTION FIVE
// RESERVE WORDS
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
// Test:
console.log(reverseWords("I can do all things through christ"));

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .reverse()
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
// Test:
console.log(reverseWords("i can do all things through christ"));
