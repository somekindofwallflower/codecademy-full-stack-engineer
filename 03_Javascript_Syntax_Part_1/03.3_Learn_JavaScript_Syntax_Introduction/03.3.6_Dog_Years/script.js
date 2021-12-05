// Dog Years
// Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?
// Here’s how you convert your age from “human years” to “dog years”:
// - The first two years of a dog’s life count as 10.5 dog years each.
// - Each year following equates to 4 dog years.

// Store my age
const myAge = 27;
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
// Save on laterYears variable a value for later calculation
let laterYears = myAge - 2;
// Calculate the number of dog years accounted for by my later years
laterYears = laterYears * 4;

console.log(`Early years value is ${earlyYears} and later years value is ${laterYears}`);

// Store in myAgeInDogYears variable the result obtained by the sum of early and later years
const myAgeInDogYears = earlyYears + laterYears;

// Store my name in myName variable transformed in lowercase letters using the Js string method
const myName = "Wallflower".toLowerCase();
// Display in console the information for my dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
