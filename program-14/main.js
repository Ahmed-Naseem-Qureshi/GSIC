var list = ["Fasih", "Salman", "Abrar"]

for (var i = 0; i < list.length; i++) {
    console.log("Hi " + list[i] + " I am inviting you guys for a dinner party at my home\n");
}

var rejected = "Abrar";
console.log("\nUnfortunately " + rejected + " can't make it to the dinner.\n");
var indexOfList = list.indexOf(rejected)

var newList = "Maaz";
if (indexOfList !== -1) {
    list[indexOfList] = newList;
}

for (var j = 0; j < list.length; j++) {
    console.log("Hi " + list[j] + " I am inviting you guys for a dinner party at my home\n");
}

console.log("\n Hey I just found a bigger table so I am gonig to ivite some more guests\n");

list.unshift("Ali"); // Add to the beginning
list.splice(Math.floor(list.length / 2), 0, "Saad"); // Add to the middle
list.push("Hamza"); // Add to the end

for (var k = 0; k < list.length; k++) {
    console.log("Hi " + list[k] + " I am inviting you guys for a dinner party at my home\n");
}
