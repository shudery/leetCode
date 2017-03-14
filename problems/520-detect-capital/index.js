// Title  : detect-capital
// Date   : 2017-03-14
// Author : Daguo
/*****************************************
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*****************************************/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    //将字符串转化为一个对应编码值的数组，codePointAt
    var strArr = word.split('').map(v => v.charCodeAt());
    var firstLetter = strArr.splice(0, 1);
    //首字母为大写
    return firstLetter >= 65 && firstLetter <= 90
        //除了首字母，都为大写或者都为小写均可以
        ? strArr.every(v => v >= 65 && v <= 90) || strArr.every(v => v >= 97 && v <= 122) 
        : strArr.every(v => v >= 97 && v <= 122);
};
module.exports = detectCapitalUse;
