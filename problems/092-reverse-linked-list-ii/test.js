const { mapLinks } = require('../../utils/map');
module.exports = [
  {
    input: [mapLinks([1, 2, 3, 4, 5]), 2, 4],
    output: mapLinks([1, 4, 3, 2, 5])
  }
];
