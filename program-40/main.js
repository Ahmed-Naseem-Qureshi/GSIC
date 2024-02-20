var magicians = ["Ali", "Shamil", "Jadoo"];

function make_great(magiciansArray) {
    var greatMagicians = [];

    for (let i = 0; i < magiciansArray.length; i++) {
        greatMagicians.push("Great " + magiciansArray[i]);
    }

    return greatMagicians;
}

function show_magicians(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        console.log(magiciansArray[i]);
    }
}

// Call make_great() with a copy of the original array
var greatMagiciansArray = make_great([...magicians]);

// Call show_magicians() with each array to display the original and modified lists
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);
