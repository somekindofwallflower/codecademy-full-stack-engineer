// Magic Eight Ball
// You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.
// In this project we will build the Magic Eight Ball using control flow in JavaScript.
// The user will be able to input a question, then our program will output a random fortune.

let userName = "Wallflower";
userName ? console.log(`Hello, ${userName}`) : console.log("Hello");

let userQuestion = "Does he love me?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

if (randomNumber === 0) {
    eightBall = "It is certain";
} else if (randomNumber === 1) {
    eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
    eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
    eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
    eightBall = "Do not count on it";
} else if (randomNumber === 5) {
    eightBall = "My sources say no";
} else if (randomNumber === 6) {
    eightBall = "Outlook not so good";
} else if (randomNumber === 7) {
    eightBall = "Signs point to yes'";
}

console.log(eightBall)
