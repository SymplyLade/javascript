function addItem1(){

    // Shopping List Array Operations - Run in Console
// 1. Create an array with at least 5 items
let shoppingList = ["Rice", "Cake", "Cookies", "Bread", "Noodles"];
// 2. Function to add a new item to the end of the list
function addItem(item) {
    shoppingList.push(item);
    console.log(`Added "${item}" to the shopping list.`);
}
// 3. Function to remove the first item from the list
function removeFirstItem() {
    if (shoppingList.length > 0) {
        const removedItem = shoppingList.shift();
        console.log(`Removed "${removedItem}" from the beginning of the list.`);
    } else {
        console.log("The shopping list is already empty.");
    }
}
// 4. Function to display the total number of items
function displayItemCount() {
    console.log(`Total items in the shopping list: ${shoppingList.length}`);
}
// 5. Function to display the list with numbered items
function displayList() {
    console.log("Current Shopping List:");
    if (shoppingList.length === 0) {
        console.log("The list is empty.");
    } else {
        shoppingList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
// Challenge: Format list function
function formatList(list) {
    return list.map((item, index) => `${index + 1}. ${item}`).join('\n');
}
// Demo function that runs all operations
function runDemo() {
    console.log("=== SHOPPING LIST DEMO ===");
    console.log("Initial list:");
    displayList();
    console.log("");
    console.log("Adding 'Ice-cream' to the list:");
    addItem("Ice-cream");
    displayList();
    console.log("");
    console.log("Removing the first item:");
    removeFirstItem();
    displayList();
    console.log("");
    console.log("Displaying item count:");
    displayItemCount();
    console.log("");
    console.log("Formatting the list using formatList function:");
    console.log(formatList(shoppingList));
}
// RUN AUTOMATICALLY
runDemo();

}