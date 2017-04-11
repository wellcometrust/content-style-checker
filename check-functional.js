const dashNoSpaces = require('./rules/functional/dash-no-spaces.js');
const numerals = require('./rules/functional/numerals.js');

const checkFunctional = file => node => {
  dashNoSpaces(node, file);
  numerals(node, file);
};

module.exports = checkFunctional;
