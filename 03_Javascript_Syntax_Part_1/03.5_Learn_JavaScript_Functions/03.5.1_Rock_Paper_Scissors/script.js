"use strict";
// Rock, Paper, or Scissors
// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.
//
//     The possible outcomes are:
//
//     Rock destroys scissors.
//     Scissors cut paper.
//     Paper covers rock.
//     If there’s a tie, then the game ends in a draw.
//     Our code will break the game into four parts:
//
//     Get the user’s choice.
//     Get the computer’s choice.
//     Compare the two choices and determine a winner.
//     Start the program and display the results.

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'bomb') {
        return userInput;
    } else {
        return `Error! The value you entered is ${userInput} Enter a value between 'rock', 'paper', 'scissors'`;
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3).toString();
    if(randomNumber === '0') {
        return 'rock';
    } else if (randomNumber === '1') {
        return 'paper';
    } else if (randomNumber === '2'){
        return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game was a tie';
    }
    if(userChoice === 'bomb') {
        return 'User win';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Computer won";
        } else {
            return "User won";
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Computer won";
        } else {
            return "User won";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Computer won";
        } else {
            return "User won";
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice('bomb');
    console.log('User has choosen', userChoice);
    console.log('Computer has choosen', computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
