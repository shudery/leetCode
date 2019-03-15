// Title  : keyboar-row
// Date   : 2017-03-10
// Author : Daguo
/*****************************************
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*****************************************/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const secondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const thirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  words.forEach((v, index) => {
    var arr = v.split('');
    var n = arr[0].toLocaleLowerCase();
    var row = null;

    if (firstRow.indexOf(n) !== -1) row = firstRow;
    else if (secondRow.indexOf(n) !== -1) row = secondRow;
    else row = thirdRow;

    for (var i = 1; i < arr.length; i++)
      if (row.indexOf(arr[i].toLocaleLowerCase()) == -1)
        return words.splice(index, 1);
  });
  return words;
};

module.exports = [findWords];
