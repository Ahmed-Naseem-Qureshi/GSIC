function create_sandwich(...items) {
     console.log("Items on the sandwich: " + items.join(', '));
    console.log("-----------------------------");
}

// Call the function with different numbers of arguments
create_sandwich("Beef", "Cheese", "Lettuce");
create_sandwich("Chicken", "Ketchup", "Tomato", "Mustard");
create_sandwich("Potato", "Ketchup");
