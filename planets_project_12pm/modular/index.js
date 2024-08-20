const prompt = require('prompt-sync')();
// import showUserFactors
const showUserFactors = require('./showUserFactors.js');
// import getUserFactors
const getUserFactors = require('./getUserFactors.js');
// import require friends
function main() {
    // logging each friend with a iteration for (let friend in friends) {}
    // get the parametrs from getUserFactors function
    const { factorType, factorUnit, factorValue, factorPlanets } = getUserFactors();
    // console.log(factorType);
    // console.log(factorUnit);
    // pass the parameters to the showUserFactors function
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
    // console.log("hello from main");

    console.log("Measure again? (y or n)");
    let input = prompt(">>").trim().toLowerCase();
    if (input === 'y') {
        main();
    }
}
global.main = main;
main();