// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();

const alienFactors = {
    Glarp: 1.234,
    Vulcan: 2.225,
    Krypton: 0.567
}

const gravityFactors = {
    Mercury: 0.378,
    Venus: 0.907,
    Mars: 0.377,
    Jupiter: 2.364,
    Neptune: 1.125,
    Uranus: 0.889,
    Saturn: 0.916
};

function showUserFactors(factorType, factorUnit, factorValue, factorObject) {
    const userFactors = {};
    for (let planet in factorObject) {
        userFactors[planet] = parseFloat((factorValue * factorObject[planet]).toFixed(2));
    }
    let measurement;
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
        default:
            measurement = factorUnit;
            break;
    }
    for (let planet in userFactors) {
        console.log(`Your ${factorType} on ${planet} is ${userFactors[planet]}${measurement}`);
    }
}
function getUserFactors() {
    console.log("What would you like to compare to another planet? (ex: 'Jump height', 'weight', 'amount of pushups'");
    const factorType = prompt(">>");
    console.log("Enter what unit you want to measure as a number choice (' enter 1 for cm', 'enter 2 for kg', 'enter 3 for in', 'enter 4 for lbs')");
    const factorUnit = prompt(">>");
    console.log("Enter the earth value of your measurement: ");
    const factorValue = prompt(">>");
    console.log("Enter the group of planets you want to compare your ratio: ('1: solar system', '2: alien planets')");
    const factorChoice = prompt(">>");
    let factorPlanets;
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
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
}
global.getUserFactors = getUserFactors;