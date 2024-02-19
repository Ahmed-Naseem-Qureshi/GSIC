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

list.concat("Ali"); // Add to the beginning
list.splice(Math.floor(list.length / 2), 0, "Saad"); // Add to the middle
list.push("Hamza"); // Add to the end

for (var k = 0; k < list.length; k++) {
    console.log("Hi " + list[k] + " I am inviting you guys for a dinner party at my home\n");
}

console.log("\nUnfortunately, the new dinner table won't arrive in time, and I can only invite two people for dinner.\n");

while (list.length > 2) {
    var removedGuests = list.pop()
    console.log("Sorry " + removedGuests + ", I can't invite you to dinner\n");
}

for (let m = 0; m < list.length; m++) {
    console.log("Dear " + list[m] + " you are still invited to the dinner\n");
}

list.pop();
list.pop();

console.log("\nFinal guest list:" + list);