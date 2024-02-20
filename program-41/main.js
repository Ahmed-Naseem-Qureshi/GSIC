function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please choose some items.");
    } else {
        console.log("Items on the sandwich: " + items.join(', '));
    }
    console.log("-----------------------------");
}

// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss", "Tomato", "Mustard");
orderSandwich(); // Empty sandwich
