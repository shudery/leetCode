const { mapTree } = require('../../utils/map');
module.exports = [
  {
    input: [mapTree([3, 9, 20, null, null, 15, 7])],
    output: [[3], [9, 20], [15, 7]]
  }
];
