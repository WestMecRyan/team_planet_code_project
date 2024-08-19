const prompt = require('prompt-sync')();
// import earthGravity Factors
const earthGravityFactors = require('./utils/earthGravityFactors.js');
// import alienGravityFactors
const alienGravityFactors = require('./utils/alienGravityFactors.js');

function showUserFactors() {
    getUserFactors();
 }
function getUserFactors() {

}
global.getUserFactors = getUserFactors;
getUserFactors();