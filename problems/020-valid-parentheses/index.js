// Title  : valid-parentheses
// Date   : 2019-02-13
// Author : Daguo
/*****************************************
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
*****************************************/

// 思路：数据结构用栈，js array数据pop直接可以做栈的操作。

/**
 * @param {string} s
 * @return {boolean}
 */
var map = { '{': '}', '[': ']', '(': ')' };
var isValid = function(s) {
  if (s === '') return true;
  let flag = [];
  for (let v of s.split('')) {
    if (['{', '(', '['].indexOf(v) !== -1) {
      flag.push(v);
    } else if (['}', ')', ']'].indexOf(v) !== -1) {
      if (map[flag.pop()] !== v) return false;
    }
  }
  // 存在未匹配上的括号
  if (flag.length) return false;
  return true;
};

module.exports = [isValid];
