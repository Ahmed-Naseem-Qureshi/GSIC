var usernames = ["admin", "Fasih", "Salman", "Saad", "ALi"];

// Loop through the array and print greetings
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?\n");
    } else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again.\n");
    }
}
