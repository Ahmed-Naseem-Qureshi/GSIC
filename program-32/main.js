// List of animals with a common characteristic
var animals = ["dog", "cat", "rabbit"];

for (var i = 0; i < animals.length; i++) {
    if (animals[i] === "dog") {
        console.log("A dog would make a great pet.");
    } else if (animals[i] === "cat") {
        console.log("A cat is independent and low-maintenance.");
    } else if (animals[i] === "rabbit") {
        console.log("A rabbit is cute and can be litter-trained.");
    }
}

console.log("\nAny of these animals would make a great pet!");
