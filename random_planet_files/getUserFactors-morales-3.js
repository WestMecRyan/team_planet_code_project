// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./gravityFactors.js');
// Import the other factors from other modules
const alienFactors = require('./alienFactors.js');
// Define a function to show user factors based on input type and value
function showUserFactors(factorType, factorUnit, factorValue, factorObject) {
    // Initialize an object to hold the results
    const userFactors = {};
    // Iterate over each item in the gravityFactors object
    for (let planet in factorObject) {
        // assign a new key value pair to userFactors
        // Calculate the factor multiplied by the input value and round it to two decimals
        userFactors[planet] = parseFloat((factorValue * factorObject[planet]).toFixed(2));
    }
    // declare a variable to hold the measurement
    let meausurement;
    // Switch case to determine the measurement unit based on factor type
    switch (factorUnit) {
        case '1':
            measurement = 'cm';
            break;
        case '2':
            measurement = 'kg';
            break;
        case '3':
            measurement = 'in';
            break;
        case '4':
            measurement = 'lbs';
            break;
            // provide a default case in which the measurement is just set to the users input
        default:
            measurement = factorUnit;
            break;
    }
    // Iterate over the results and log each one
    for (let planet in userFactors) {
        console.log(`Your ${factorType} on ${planet} is ${userFactors[planet]}${measurement}`);
    }
}
// Define a function to get user inputs for factor type, value and gravity object
function getUserFactors() {
    // prompt the user to enter the thing they want to measure
    console.log("What would you like to compare to another planet? (ex: 'Jump height', 'weight', 'amount of pushups'");
    const factorType = prompt(">>");
    // Prompt the user to enter the type of measurementfactor they want to calculate
    console.log("Enter what unit you want to measure as a number choice (' enter 1 for cm', 'enter 2 for kg', 'enter 3 for in', 'enter 4 for lbs')");
    const factorUnit = prompt(">>");
    // Prompt the user to enter the numerical value of the factor
    console.log("Enter the earth value of your measurement: ");
    const factorValue = prompt(">>");
    // prompt the user to enter which gravity factor object that want to utilize for their comparison
    console.log("Enter the group of planets you want to compare your ratio: ('1: solar system', '2: alien planets')");
    const factorChoice = prompt(">>");
    // declare a variable to hold the final factor object choice
    let factorPlanets;
    // create a switch case to assign the factor planet object to the factor object variable
    switch (factorChoice) {
        case '1':
            factorPlanets = gravityFactors;
            break;
        case '2':
            factorPlanets = alienFactors;
            break;
        default:
            factorPlanets = gravityFactors;
    }
    // Call the showUserFactors function with the user type and value inputs and the gravity factors
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
}
// Expose getUserFactors globally
global.getUserFactors = getUserFactors;