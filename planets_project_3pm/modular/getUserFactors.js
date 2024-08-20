const prompt = require('prompt-sync')();
function getUserFactors() {
    let factorType;
    let factorValue;
    let factorPlanets;
    let factorSystem;
    while (true) {
        const validTypes = ["jump", "weight", "pushups"];
        let isMatch = false;
        console.log("What would you like to compare to other planets? (enter 'jump' OR 'weight' OR 'pushups')");
        factorType = prompt(">>").trim().toLowerCase();
        for (let i = 0; i < validTypes.length; i++) {
            // // console.log(factorType);
            // console.log(validTypes[i]);
            if (factorType === validTypes[i]) {
                isMatch = true;
                break;
            }
        }
        if (isMatch) {
            break;
        } else {
            console.error(`You entered ${factorType}. Please enter the prompt correctly`);
        }
    }
    while (true) {
        // console.log(factorType);
        if (factorType !== "pushups") {
            console.log("What measurement system do you want to use? (enter '1' for metric, enter '2' for imperial(American)");
            factorSystem = prompt(">>").trim().toLowerCase();
        } else {
            factorSystem = "3";
        }
        if (!isNaN(factorSystem) && factorSystem > 0) {

            switch (factorSystem) {
                case "1":
                    factorSystem = "metric";
                    break;
                case "2":
                    factorSystem = "imperial";
                    break;
                default:
                    factorSystem = "default";
            }
            break;
        } else {
            console.error(`You entered ${factorSystem}. Please enter your response based on the prompt`);
        }
    }


    let factorUnit = "repetitions";
    if (factorSystem === "metric") {
        if (factorType === "weight") {
            factorUnit = "kg";
        } else if (factorType === "jump") {
            factorUnit = "cm";
        }
    } else if (factorSystem === "imperial") {
        if (factorType === "weight") {
            factorUnit = "lbs";
        } else if (factorType === "jump") {
            factorUnit = "in";
        }
    }
    while (true) {
        console.log(`Enter the earth value of your ${factorType} in ${factorUnit}:`);
        factorValue = parseFloat(prompt(">>").trim().toLowerCase());
        // console.log(typeof (factorValue));
        if (isNaN(factorValue) || (factorValue > 1000 || factorValue < 0)) {
            console.error("Please enter a valid number");
        } else {
            factorValue.toFixed(2);
            break;
        }
    }
    while (true) {

        console.log("Which group of planets do you want to compare your value: (enter '1': Earth solar system', enter '2': alien solar system')");
        factorChoice = prompt(">>").toLowerCase().trim();
        if (factorChoice === '1' || factorChoice === '2') {

            switch (factorChoice) {
                case '1':
                    factorPlanets = earthGravityFactors;
                    break;
                case '2':
                    factorPlanets = alienGravityFactors;
                    break;
                default:
                    factorPlanets = earthGravityFactors;
            }
            break;
        } else {
            console.error("please enter a number choice for your planet system");
        }
    }
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
}
module.exports = getUserFactors;