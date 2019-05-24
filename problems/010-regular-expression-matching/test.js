module.exports = [{
        input: ['aa', 'a'],
        output: false
    },
    {
        input: ['aa', 'a*'],
        output: true
    },
    {
        input: ['ab', '.*'],
        output: true
    },
    {
        input: ['aab', 'c*a*b'],
        output: true
    },
    {
        input: ['mississippi', 'mis*is*p*.'],
        output: false
    }
];