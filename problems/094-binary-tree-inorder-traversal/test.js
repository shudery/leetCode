const { mapTree } = require('../../utils/map');
module.exports = [
  {
    input: [mapTree([1, null, 2, 3])],
    output: [1, 3, 2]
  }
];
