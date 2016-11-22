/**
 * 371. Sum of Two Integers   QuestionEditorial Solution  My Submissions
Total Accepted: 44269
Total Submissions: 85849
Difficulty: Easy
Contributors: Admin
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

//内存爆了
function getSum(a, b) {
    var result;
    let sign = [].indexOf();

    if (a >= 0 && b >= 0)
        result = (new Array(a).fill(a)).concat(new Array(b).fill(b)).length;
    if (a < 0 && b < 0)
        result = sign * (new Array(sign * a).fill(a)).concat(new Array(sign * b).fill(b)).length
    if (a >= 0 && b < 0) {
        let arr1 = new Array(a).fill(a);
        let arr2 = new Array(sign * b).fill(b);
        if (a > sign * b) {
            arr1.splice(0, arr2.length)
            result = arr1.length;
        } else {
            arr2.splice(0, arr1.length)
            result = sign * arr2.length
        }
    }
    if (a < 0 && b >= 0) {
        let arr1 = new Array(sign * a).fill(a);
        let arr2 = new Array(b).fill(b);
        if (sign * a > b) {
            arr1.splice(0, arr2.length)
            result = sign * arr1.length;
        } else {
            arr2.splice(0, arr1.length)
            result = arr2.length
        }
    }

    return result
};

//厉害了我的哥，利用位运算实现加法，速度飞快，from十年踪迹
// a   b a + b   进位
// 0   0   0   无
// 0   1   1   无
// 1   0   1   无
// 1   1   0   有

function add(a, b) {
    return (((a & b) << 1) + (a ^ b));
};

module.exports = [getSum, add];
