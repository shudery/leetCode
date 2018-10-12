// Title  : minimum-size-subarray-sum
// Date   : 2018-10-12
// Author : Daguo
/*****************************************
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

示例: 

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
进阶:

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
*****************************************/

// 滑块解法
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var len = nums.length;
  // 滑块长度循环
  for (var i = 1; i <= len; i++) {
    var sum = nums.slice(0, i).reduce((a, b) => a + b);
    // 滑动判断
    for (var j = i; j <= len; j++) {
      if (sum >= s) {
        return i;
      }
      // 优化加法性能，
      sum = sum + nums[j] - nums[j - i];
    }
  }
  return 0;
};
module.exports = [minSubArrayLen];

// 暴力解法
// var minSubArrayLen = function(s, nums) {
//   var len = 1;
//   while (len <= nums.length) {
//     for (var i = 0; i < nums.length; i++) {
//       var sum = 0;
//       for (var j = i; j < i + len; j++) {
//         sum += nums[j];
//       }
//       if (sum >= s) return len;
//     }
//     len++;
//   }
//   return 0;
// };
