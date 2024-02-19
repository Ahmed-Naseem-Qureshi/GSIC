// Favourite Places
var fav_Palaces = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"]
console.log("\nOrginal Order:");
console.log( fav_Palaces);

// Duplicating Array and modifying order
var ord_Array = [...fav_Palaces].sort();
console.log("\nDuplicated Array:");
console.log(ord_Array);

// Showing original Array (unchanged)
console.log("\nOriginal Array:");
console.log( fav_Palaces);

// Reversing duplicated array
console.log("\nReversed Duplicated Array:");
console.log(ord_Array.reverse());

// Showing original Array (unchanged)
console.log("\nOriginal Array:");
console.log( fav_Palaces);

// Reversing original Array
console.log("\nReversed original Array");
console.log(fav_Palaces.reverse())

// Reversing reversed (original) Array
console.log("\nReversed (original) Array");
console.log(fav_Palaces.reverse())

// Sorting original Array
console.log("\nSorted original Array");
console.log(fav_Palaces.sort());

// Reversing original Array
console.log("\nReversed original Array");
console.log(fav_Palaces.sort().reverse());