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