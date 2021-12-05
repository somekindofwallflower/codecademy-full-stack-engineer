"use strict";

// Sleep Debt Calculator
// Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
// The program will determine the actual and ideal hours of sleep for each night of the last week.
// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.


const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch(day) {
        case 'monday': return 7; break;
        case 'tuesday': return 8; break;
        case 'wednesday': return 7; break;
        case 'thursday': return 6; break;
        case 'friday': return 5; break;
        case 'saturday': return 7; break;
        case 'sunday': return 7; break;
        default: return 'Enter a valid week day'; break;
    }
}

const getActualSleepHours = () => {
    return (getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday'))
}

const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log(`You got the perfect amount of sleep, actual sleep hours ${actualSleepHours}, ideal sleep hours ${idealSleepHours}`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more sleep than needed , actual sleep hours ${actualSleepHours}, ideal sleep hours ${idealSleepHours}`);
    } else {
        console.log(`You should get some rest , actual sleep hours ${actualSleepHours}, ideal sleep hours ${idealSleepHours}`);
    }
}

calculateSleepDebt();
