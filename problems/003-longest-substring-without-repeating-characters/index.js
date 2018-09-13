// Title  : longest-substring-without-repeating-characters
// Date   : 2018-09-12
// Author : Daguo
/*****************************************
给定一个字符串，找出不含有重复字符的最长子串的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 无重复字符的最长子串是 "abc"，其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 无重复字符的最长子串是 "b"，其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 无重复字符的最长子串是 "wke"，其长度为 3。
     请注意，答案必须是一个子串，"pwke" 是一个子序列 而不是子串。
*****************************************/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var arr = s.split("");
  var len = 0;
  for (var i = 0; i < arr.length; i++) {
    var save = [];
    for (var j = i; j < arr.length - len; j++) {
      if (save.indexOf(arr[j]) === -1) {
        save.push(arr[j]);
      } else {
        break;
      }
    }
    var curLen = save.length;
    if (curLen > len) {
      len = curLen;
    }
  }
  return len;
};

module.exports = [lengthOfLongestSubstring];
