// Smart Shopping Calculator
// 1. Product Calculator
function productCalculator(price, quantity, discount = 0) {
    if (price < 0 || quantity <= 0) {
        return "Invalid product values";
    }
    let total = price * quantity;
    total -= total * (discount / 100);
    return total;
}



// 2. Tax Calculator
function taxCalculator(amount, location) {
    if (amount < 0) return "Invalid amount";
    let taxRate;
    if (location === "NY") {
        taxRate = 0.08;  // 8%
    } else if (location === "CA") {
        taxRate = 0.075; // 7.5%
    } else {
        taxRate = 0.05;  // Default 5%
    }
    return amount * taxRate;
}
// 3. Shipping Calculator
function shippingCalculator(weight, distance) {
    if (weight <= 0 || distance <= 0) return "Invalid shipping details";
    let costPerKg = 2;
    let costPerKm = 0.1;
    return (weight * costPerKg) + (distance * costPerKm);
}
// 4. Membership Discounts
function membershipDiscount(total, membership) {
    let discountRate =
        membership === "Gold" ? 0.2 :
        membership === "Silver" ? 0.1 :
        membership === "Bronze" ? 0.05 :
        0;
    return total - (total * discountRate);
}
// 5. Final Receipt Generator
function generateReceipt(price, quantity, discount, location, weight, distance, membership) {
    let productTotal = productCalculator(price, quantity, discount);
    if (typeof productTotal === "string") return productTotal;
    let tax = taxCalculator(productTotal, location);
    let shipping = shippingCalculator(weight, distance);
    if (typeof shipping === "string") return shipping;
    let subTotal = productTotal + tax + shipping;
    let finalTotal = membershipDiscount(subTotal, membership);
    return `
    ---- Final Receipt ----
    Product Total: $${productTotal.toFixed(2)}
    Tax: $${tax.toFixed(2)}
    Shipping: $${shipping.toFixed(2)}
    Subtotal: $${subTotal.toFixed(2)}
    Membership (${membership}): Applied
    -----------------------
    Final Total: $${finalTotal.toFixed(2)}
    `;
}
// TEST:
console.log(generateReceipt(100, 2, 10, "NY", 5, 100, "Gold"));