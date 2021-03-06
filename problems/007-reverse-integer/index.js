// Title  : reverse-integer
// Date   : 2019-05-20
/*****************************************
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
请根据这个假设，如果反转后整数溢出那么就返回 0。
*****************************************/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = x => {
    var n = +x
        .toString()
        .split('')
        .reverse()
        // 处理头部0位
        .filter((v, i) => (i === 0 && v === '0' ? false : true))
        .join('')
        // 处理减号
        .replace(/(.*)-/, '-$1');
    // 处理溢出
    return Math.abs(n) > Math.pow(2, 31) ? 0 : n;
};

module.exports = [reverse];