// Import the timer module
const timer = require('timers');

// Set a timeout to print a message after 2 seconds
console.log("Setting a timeout for 2 seconds...");
const timeoutId = timer.setTimeout(() => {
  console.log("2 seconds have passed!");
}, 2000);

// Set an interval to print the current time every second
console.log("Setting an interval to print the time every second...");
const intervalId = timer.setInterval(() => {
  const now = new Date();
  console.log(`Current time: ${now.toLocaleTimeString()}`);
}, 1000);

// After 5 seconds, clear the interval
setTimeout(() => {
  console.log("Clearing the interval...");
  timer.clearInterval(intervalId);
}, 5000);

// After 7 seconds, clear the timeout
setTimeout(() => {
  console.log("Clearing the timeout...");
  timer.clearTimeout(timeoutId);
}, 7000);

// Print a message to indicate that the program is finished
console.log("Program finished.");