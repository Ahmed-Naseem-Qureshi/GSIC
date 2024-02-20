let string1 = 'Hello';
let string2 = 'hello';
let number1 = 20;
let number2 = 30;
let array = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is string1 equal to string2 (case-sensitive)? I predict False.");
console.log(string1 === string2);

// Tests using the lower case function
console.log("Is string1 equal to string2 (case-insensitive)? I predict True.");
console.log(string1.toLowerCase() === string2.toLowerCase());

// Numerical tests
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);

console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 !== number2);

console.log("Is number1 greater than or equal to number2? I predict False.");
console.log(number1 >= number2);

console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2);

// Tests using "and" and "or" operators
console.log("Is number1 greater than 10 and number2 less than 40? I predict True.");
console.log(number1 > 10 && number2 < 40);

console.log("Is number1 greater than 10 or number2 less than 25? I predict True.");
console.log(number1 > 10 || number2 < 25);

// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));

// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
