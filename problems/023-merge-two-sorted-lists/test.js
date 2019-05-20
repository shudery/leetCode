const { mapLinks } = require('../../utils/map');

module.exports = [{
        input: [mapLinks([1, 2, 4]), mapLinks([1, 3, 4])],
        output: mapLinks([1, 1, 2, 3, 4, 4])
    },
    {
        input: [mapLinks([1, 2, 4]), mapLinks([])],
        output: mapLinks([1, 2, 4])
    },
    { input: [mapLinks([]), mapLinks([1, 2, 4])], output: mapLinks([1, 2, 4]) },
    { input: [mapLinks([]), mapLinks([])], output: mapLinks([]) }
];