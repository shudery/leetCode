const { mapTree } = require('../../utils/map');

module.exports = [
  {
    input: [mapTree([3, 9, 20, null, null, 15, 7])],
    output: [[15, 7], [9, 20], [3]]
  },
  {
    input: [mapTree([1, 2, 3, 4, 5])],
    output: [[4, 5], [2, 3], [1]]
  }
];
