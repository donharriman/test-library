const speciesNames = require('./speciesNames');
const uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: speciesNames,
  random: uniqueRandomArray(speciesNames)
};