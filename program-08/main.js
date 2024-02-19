// FIle program-02

// This function takes the string and change the characters in Titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

var str = "HeLlo WOrLd";
var lowerCase = str.toLowerCase();
var upperCase = str.toUpperCase();
var titleCase = toTitleCase(str);

console.log(lowerCase)
console.log(upperCase)
console.log(titleCase)

// File program-05

var name = "\t Ahmed Nas\neem Qureshi   ";
console.log("Name with whitespaces: " + name);
var newName = name.trim().replace(/\n/g, ""); //this line strips all the whitespace and replaces the special character \n with nothing.
console.log("Name after stripping: " + newName);