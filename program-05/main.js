var name = "\t Ahmed Nas\neem Qureshi   ";
console.log("Name with whitespaces: " + name);
var newName = name.trim().replace(/\n/g, "");
console.log("Name after stripping: " + newName);
