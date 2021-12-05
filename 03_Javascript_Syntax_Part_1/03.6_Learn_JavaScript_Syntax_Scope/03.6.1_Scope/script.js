"use strict";

// Blocks and Scope

{
    const city = "New York City";
    const logCitySkyline = () => {
        let skyscraper = "Empire State Building"
        return 'The stars over the ' + skyscraper + ' in ' + city;
    }
    console.log(logCitySkyline())
}


// Global scope

{
    let satellite = "The Moon";
    let galaxy = "The Milky Way";
    let stars = "North Star";

    const callMyNightSky = () => {
        return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
    }

    console.log(callMyNightSky());

// Block scope
    const logVisibleLightWaves = () => {
        const lightWaves = "Moonlight";
        console.log(lightWaves);
    }

    logVisibleLightWaves();
}
// console.log(lightWaves); //Reference error

// Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.
{
    const satellite = 'The Moon';
    const galaxy = 'The Milky Way';
    let stars = 'North Star';

    const callMyNightSky = () => {
        stars = 'Sirius';
        return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
    };

    console.log(callMyNightSky());
    console.log(stars);
}


// Practice good scoping

{
    const logVisibleLightWaves = () => {
        let lightWaves = 'Moonlight';
        let region = 'The Arctic';
        // Add if statement here:
        if (region === 'The Arctic') {
            let lightWaves = 'Northern Lights';
            console.log(lightWaves);
        }
        console.log(lightWaves);
    };

    logVisibleLightWaves();
}
