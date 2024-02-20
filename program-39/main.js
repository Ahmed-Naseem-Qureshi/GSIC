var magicians = ["Ali", "Shamil", "Jadoo"];

function make_great() {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
}

function show_magicians() {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Call make_great() to modify the array
make_great();

// Call show_magicians() to see the modified list
show_magicians();
