// Race Day
// Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.
//
//     As a timeline, registration would look like this:registration-timeline
//
// Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
//
//     Race number:
//
//     Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:
//
//     Adult registrants run at 9:30 am or 11:00 am.
//     Early adults run at 9:30 am.
//     Late adults run at 11:00 am.
//     Youth registrants run at 12:30 pm (regardless of registration).
// But we did not plan for runners that are exactly 18! We’ll handle that by the end of the project.
//
//

let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = false;
let runnersAge = 15;


if (runnersAge > 18 && isRegisteredEarly) {
    raceNumber += 1000;
}

if (runnersAge > 18 && isRegisteredEarly) {
    console.log(`You will race at 9:30am ${raceNumber}`);
} else if (runnersAge > 18 && !isRegisteredEarly) {
    console.log(`You will race at 11:00am ${raceNumber}`);
} else if (runnersAge < 18) {
    console.log(`You will race at 12:30am ${raceNumber}`);
}
