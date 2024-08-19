// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// import earthGravity Factors
const earthGravityFactors = require('./utils/earthGravityFactors.js');
// import alienGravityFactors
const alienGravityFactors = require('./utils/alienGravityFactors.js');

// Your factorType is finalValue ___measurement__ on planet in the __earth solar system___
function showUserFactors(factorType, factorPlanets, factorUnit, factorValue) {

// in some for loop
    console.log(`your ${factorType} is ${factorValue} ${factorUnit} on ${planet} in ${factorPlanets}`)
 }

function getUserInput() {
    let param1;
    while (true) {
        param1 = prompt(">>");
        break;
    }

    while (true) {
        break;
    }
    while (true) {
        break;
    }
    while (true) {
        break;
    }
    showUserFactors(param1);
}