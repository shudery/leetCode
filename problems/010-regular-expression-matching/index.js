// Title  : regular-expression-matching
// Date   : 2019-05-23
/*****************************************
给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符。
'*' 匹配零个或多个前面的元素。
匹配应该覆盖整个字符串 (s) ，而不是部分字符串。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

*****************************************/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 动态规划
var isMatch = function(s, p) {
    return new RegExp('^' + p + '$').test(s);
};
module.exports = [isMatch];