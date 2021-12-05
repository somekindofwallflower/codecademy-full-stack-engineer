"use strict";
// Kelvin Weather
// Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
// Recently, Kelvin began publishing his weather forecasts on his website.
// However, there’s a problem: All of his forecasts describe the temperature in Kelvin.
// With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
// For example, 283 K converts to 10 °C which converts to 50 °F.

// Forecast today in kelvin
const kelvin = 293; // if kelvin = 0 fahrenheit = -460
// Forecast today in celsius
const celsius = kelvin -  273;
// Forecast today in fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Forecast in fahrenheit rounded down using the Javascript floor method
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Forecast in newton rounded down using the Javascript floor method
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);


