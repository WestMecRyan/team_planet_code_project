// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./gravityFactors.js');
// Import the other factors from other modules
const alienFactors = require('./alienFactors.js');
// Define a function to show user factors based on input type and value
function showUserFactors(factorType, factorValue, factorObject) {
    // Initialize an object to hold the results
    const userFactors = {};
    // Declare a variable to hold the unit of measurement
    let measurement;
    // Iterate over each item in the gravityFactors object
    for (let planet in factorObject) {
        // assign a new key value pair to userFactors
        // Calculate the factor multiplied by the input value and round it to two decimals
        userFactors[planet] = parseFloat((factorValue * factorObject[planet]).toFixed(2));
    }

    // Switch case to determine the measurement unit based on factor type
    switch (factorType) {
        case 'jump':
            measurement = 'cm';
            break;
        case 'weight':
            measurement = 'kg';
            break;
        default:
            measurement = 'units';
            break;
    }
    // Iterate over the results and log each one
    for (let planet in userFactors) {
        console.log(`Your ${factorType} on ${planet} is ${userFactors[planet]}${measurement}`);
    }
}
// showUserFactors('weight', 100);
// Define a function to get user inputs for factor type, value and gravity object
function getUserFactors() {
    // Prompt the user to enter the type of factor they want to calculate
    console.log("Enter what you want to measure ('jump', 'weight')");
    const factorType = prompt(">>");
    // Prompt the user to enter the numerical value of the factor
    console.log("Enter the earth value of your measurement: ");
    const factorValue = prompt(">>");
    // prompt the user to enter which gravity factor object that want to utilize for their comparison
    console.log("Enter the group of planets you want to compare your ratio: ('solar', 'alien')");
    const factorInput = prompt(">>");
    let factorPlanets;
    if (factorInput === 'solar') {
        factorPlanets = gravityFactors;
    } else {
        factorPlanets = alienFactors;
    }
    // Call the showUserFactors function with the user type and value inputs and the gravity factors
    showUserFactors(factorType, factorValue, factorPlanets);
}
// Expose getUserFactors globally
global.getUserFactors = getUserFactors;