// Title  : longest-palindromic-substring
// Date   : 2019-05-20
/*****************************************
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
*****************************************/

// 1、中心扩展法
// 2、取反字符串，求最长公共子串
// 3、动态规划
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s == null || s.length < 1) return '';
    var start = 0;
    var end = 0;
    for (var i = 0; i < s.length; i++) {
        var len1 = expandAroundCenter(s, i, i);
        var len2 = expandAroundCenter(s, i, i + 1);
        if (len1 > len2 && len1 > end - start) {
            start = i - (len1 - 1) / 2;
            end = i + (len1 - 1) / 2 + 1;
        }
        if (len1 < len2 && len2 > end - start) {
            start = i - len2 / 2 + 1;
            end = i + len2 / 2 + 1;
        }
    }
    return s.substring(start, end);
};
// 以某个中心扩散查找最长子串
function expandAroundCenter(s, left, right) {
    var L = left;
    var R = right;
    while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}
module.exports = [longestPalindrome];