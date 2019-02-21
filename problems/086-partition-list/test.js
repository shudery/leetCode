const { mapLinks } = require('../../utils/map');
module.exports = [
  {
    input: [mapLinks([1, 4, 3, 2, 5, 2]), 3],
    output: mapLinks([1, 2, 2, 4, 3, 5])
  }
];
