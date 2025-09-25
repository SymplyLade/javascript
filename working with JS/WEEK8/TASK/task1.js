let score = 85
let averageMark = 50
let highestMark = 100

function getGrade() {
    if (score >= 90){
        console.log ("Grade: A - Excellent! ");
    } else if (score >= 80) {
        console.log("Grade: B - Good Work")
    } else if (score >= 70) {
        console.log ("Grade: C - Satisfactory");
    } else if (score >= 60) {
        console.log ("Grade: D - Needs Improvement,Go and see Mr.Badru")
    } else {
        console.log ("Grade: F - Go and see Mr.Badru and Mr.Chris")
    }
}
console.log("")

// Discount calculator Task 2

function calculatePrice(price, customerType, isFirstPurchase) {
        let discount = 0
    if (customerType === "student") {
        discount = 0.10;
} else if (customerType ==="senior") {
    discount = 0.15;
} else if (customerType ==="employee") {
    discount =0.20;
}

// Additional discount for first timer customers
if (isFirstPurchase) {
    discount += 0.05
}

let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercentage: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };

}

// Test discount function
let result = calculatePrice(100, "student", true);
console.log("Price calculator");
console.log(`Original:$${result.originalPrice}`)
console.log(`Discount: ${result.discountPercentage}%`);
console.log(`Final price:$${result.finalPrice}`);
console.log("")


//Task 3
//WeatherAdvisor

let temperature = 85;
let isRaining = true;

function weatherAdvisor() {
    if (temperature < 32 && isRaining) {
        console.log("Freezing rain! Stay inside!");
    } else if (temperature < 32) {
        console.log("Very cold, wear a heavy coat");
    } else if (temperature < 32 - 60) {
        console.log("Chilly, bring a jacket!")
    } else if (temperature < 60 - 80) {
        console.log("Nice weather!")
    } else if (temperature > 80) {
         console.log("It's hot, stay hydrated")
    } else {
         console.log("It's hot, stay hydrated")
    }
}
console.log("")

//Task 4
//ATMSimulation
function atm() {
    let balance = 1000;
    let action = prompt(
    "What do you want to do? (Type either withdraw or deposit)"
    );
    let amount =
    action.toLowerCase() === "withdraw"
    ? prompt("Enter the amount you want to withdraw") :
    prompt("Enter the amount you want to deposit");



    function AtmSimulation(balance, action, amount) {
     if (action.toLowerCase() === "withdraw") {
        if (Number (amount) > 500) {
            return "You have exceeded your transaction limit, Transaction Denied!"
        } else {
            if(Number(amount) < balance) {
                return `Withdrawal Successful!, Your new balance is ${balance - Number(amount)}`;    
            } else if (Number(amount) > balance) {
                return `Insufficient funds your balance is ${balance}`;
            }
        }
     } else if (action == "deposit") {
        balance += Number(amount);
        return `Deposit Successful,Your new balance is ${balance}`;
     } else {
        return"You entered an invalid input";
     }
    }
  alert(AtmSimulation(balance, action, amount));   
}



//Task5
//personalAssistant

function personalAssistant(time, weather, day) {
  let message = day === "workday" ? "Get focused for work!" :
                day === "weekend" ? "Chill out, it's the weekend!" :
                day === "holiday" ? "Happy holiday!" : "Invalid day type.";
  message += (weather === "rainy") ? " Don't forget your umbrella." :
             (weather === "sunny") ? " Grab some sunscreen if you're heading out." :
             (weather === "cloudy") ? " Might be a chill day." : " Weather condition not recognized.";
  if (time < 12 && time >= 0) {
    message += " Have a great morning!";
  } else if (time >= 12 && time < 18) {
    message += " Have a productive afternoon!";
  } else if (time >= 18 && time <= 23) {
    message += " Wind down for the evening.";
  } else {
    message += " Invalid time.";
  }
  console.log(message);
}

