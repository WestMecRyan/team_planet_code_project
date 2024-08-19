const showUserFactors = require('./showUserFactors.js');
const getUserFactors = require('./getUserFactors.js');
const prompt = require('prompt-sync')();
function main() {
    const { factorType, factorUnit, factorValue, factorPlanets } = getUserFactors();
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);

    console.log("Measure again? (y or n)");
    let input = prompt(">>").trim().toLowerCase();
    if (input === 'y') {
        getUserFactors();
    }
}
global.main = main;