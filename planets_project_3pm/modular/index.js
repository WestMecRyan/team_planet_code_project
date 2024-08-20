const prompt = require('prompt-sync')();
// import alienGravityFactors
const alienGravityFactors = require('./utils/alienGravityFactors.js');
const earthGravityFactors = require('./utils/earthGravityFactors.js');
// require showUserFactors
const showUserFactors = require('./showUserFactors.js');
// require getUserFactors
const getUserFactors = require('./getUserFactors.js');
global.getUserFactors = getUserFactors;
getUserFactors();