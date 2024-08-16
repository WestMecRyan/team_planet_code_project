const prompt = require('prompt-sync')();

const validWords = ["one", "two", "three"];
while (true) {
    console.log("enter 'one' or 'two' or 'three'");
    const input = prompt(">> ").trim().toLowerCase();
    let isMatch = false;
    for (let i = 0; i < validWords.length - 1; i++) {
        if (input === validWords[i]) {
            isMatch = true;
        }
    }
    if (match) {
        break;
    } else {
        console.error('silly goose that"s not what i said to enter');
    }
}

// require prompt-sync
// make an array of valid words
// make a while true loop
// give the user a prompt how you want them to enter the information
// accept their prompt input
// make a variable to hold match boolean
// make a for loop to iterate through valid words
// set the boolean to true if a match
// outside of for loop check if match and break
// or else alert the user and repeat loop