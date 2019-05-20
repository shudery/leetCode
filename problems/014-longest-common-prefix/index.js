// Title  : longest-common-prefix
// Date   : 2019-05-20
/*****************************************
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
*****************************************/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let res = [];
    strs = strs.map(v => v.split(''));
    for (let i = 0; i < strs[0].length; i++) {
        // 每次迭代取第一个元素的i位为参照
        let n = strs[0][i];
        let flag = true;
        for (let j = 0; j < strs.length; j++) {
            // 如果其他元素的i位不等于n，则结束查询
            if (strs[j][i] !== n) {
                flag = false;
            }
        }
        if (flag) {
            // 公共前缀
            res.push(n);
        } else {
            // 结束查询
            break;
        }
    }
    return res.join('');
};
module.exports = [longestCommonPrefix];