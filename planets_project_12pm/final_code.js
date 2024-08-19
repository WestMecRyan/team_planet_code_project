// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// import earthGravity Factors
const earthGravityFactors = require('./utils/earthGravityFactors.js');
// import alienGravityFactors
const alienGravityFactors = require('./utils/alienGravityFactors.js');

// Your factorType is finalValue ___measurement__ on planet in the __earth solar system___
function showUserFactors(factorType, factorPlanets, factorUnit, factorValue) {
 // make object to hold final values
// in some for loop
    console.log(`your ${factorType} is ${finalValue} ${factorUnit} on ${planet} in ${factorPlanets}`)
    getUserInput();
 }

function getUserInput() {
    let param1;
    let param2;
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
        break;
    }
    while (true) {
        console.log("What do you want for param2?");
        param2 = prompt(">>");
        if (!isNaN(param2)) {
            switch (param2) {
                case "1":
                    // something
                    break;
                case "2":
                    // something
                    break;
                default:
                    // something if number isn't accounted for
            }
        }
        break;
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
    showUserFactors(param1, param2, param3, param4);
}

global.getUserInput = getUserInput;

getUserInput();