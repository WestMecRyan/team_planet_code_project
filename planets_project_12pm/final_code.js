// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// import earthGravity Factors
const earthGravityFactors = require('./utils/earthGravityFactors.js');
// import alienGravityFactors
const alienGravityFactors = require('./utils/alienGravityFactors.js');

// Your factorType is finalValue ___measurement__ on planet in the __earth solar system___
function showUserFactors(factorType, factorPlanets, factorUnit, factorValue) {
    // make object to hold final values

    // make calculation that will be passed to the final object as final values

    // do any other final variable manipulation
    // in some for loop
    console.log(`your ${factorType} is ${finalValue} ${factorUnit} on ${planet} in ${factorPlanets}`)
    getUserInput();
}

function getUserInput() {
    let factorType = "pushups";
    let factorSystem;
    let param3;
    let param4;
    while (true) {
        let validWords = ["word1", "word2", "word3"];
        console.log("What do you want for param1?");
        param1 = prompt(">>");
        let isMatch = false;
        for (let i = 0; i < validWords.length; i++) {
            if (param1 === validWords[i]) {
                isMatch = true;
                break;
            }
        }
        if (isMatch) {
            break;
        } else {
            console.error("Tell the user what to do to correct their code");
        }
    }
    while (true) {
        if (factorType !== "pushups") {
            console.log("What measurement system 1 for metric 2 for imperial");
            factorSystem = prompt(">>" ).trim().toLowerCase();
        }
        if (!isNaN(factorSystem) && 4 > factorSystem > 0) {
            switch (factorSystem) {
                case "1":
                    factorSystem = "metric";
                    // something
                    break;
                case "2":
                    factorSystem = "imperial";
                    // something
                    break;
                default:
                    break;
                // something if number isn't accounted for
            }
            break;
        } else {
            console.error("Please enter correctly according to prompt");
        }

    }
    let factorUnit = "repetitions";
    if (factorSystem === "metric") {
        if (factorType === "weight") {
            factorUnit = "kg"
        } else if (factorType === "jump") {
            factorUnit = "cm"
        }
    } else if (factorSystem === "imperial") {

      }
    while (true) {
        console.log("What do you want for param3 ?");
        param3 = prompt(">>");
        break;
    }
    while (true) {
        console.log("What do you want for param4?");
        param4 = prompt(">>");
        break;
    }
    showUserFactors(factorType, factorSystem, factorUnit, param4);
}

global.getUserInput = getUserInput;

getUserInput();