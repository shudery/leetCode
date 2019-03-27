const { mapTree } = require('../../utils/map');
module.exports = [
  {
    input: [mapTree([1, null, 2, 3])],
    output: [3, 2, 1]
  }
];
