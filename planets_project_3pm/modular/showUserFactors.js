const prompt = require('prompt-sync')();
function showUserFactors(factorType, factorUnit, factorValue, factorPlanets) {
    const userResults = {};
    for (let planet in factorPlanets) {
        factorType === "weight" ?
            userResults[planet] = parseFloat((factorValue * factorPlanets[planet]).toFixed(2))
            :
            userResults[planet] = parseFloat((factorValue / factorPlanets[planet]).toFixed(2))
    }
    for (let planet in userResults) {
        console.log(`Your ${factorType} on ${planet} is ${userResults[planet]} ${factorUnit}`);
    }
    console.log("Measure again? (y or n)");
    let input = prompt(">>").trim().toLowerCase();
    if (input === 'y') {
        getUserFactors();
    }
}
module.exports = showUserFactors;