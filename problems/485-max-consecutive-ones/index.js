// Title  : max-consecutive-ones
// Date   : 2017-03-13
// Author : Daguo
/*****************************************
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*****************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  //匹配所有带1的片段
  var strArr = nums.join('').match(/(1)\1*/g);
  //提取长度最长的带1片段
  return strArr
    ? strArr.reduce((pre, cur) => (pre.length < cur.length ? cur : pre)).length
    : 0;
};

module.exports = [findMaxConsecutiveOnes];
