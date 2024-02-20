var current_users = ["admin", "Eric", "Alice", "Bob", "John"];


var new_users = ["John", "Alice", "Charlie", "Diana", "Eva"];

// Loop through the new_users list to check uniqueness
for (var i = 0; i < new_users.length; i++) {
   
    var lowercaseNewUser = new_users[i].toLowerCase();

    // Check if the lowercase version of the new username is in the lowercase version of current users
    if (current_users.map(user => user.toLowerCase()).includes(lowercaseNewUser)) {
        console.log("Sorry, the username '" + new_users[i] + "' is not available. Please enter a new username.");
    } else {
        console.log("Congratulations! The username '" + new_users[i] + "' is available.");
    }
}
