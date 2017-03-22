// Title  : add-digits
// Date   : 2017-03-20
// Author : Daguo
/*****************************************
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
*****************************************/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    var splitNum = function(n) {
        var strArr = ''.split.call(n, '');
        num = strArr.reduce((pre, cur) => {
            return (+pre) + (+cur);
        })
    };
    while (num > 9) {
        splitNum(num);
    };
    return num;
};

// without loop
var addDigits2 = function(num) {
    var res = num % 9;
    return (res != 0 || num == 0) ? res : 9;
}
module.exports = [addDigits,addDigits2];
