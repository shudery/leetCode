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

// own 滑块解法 O(n*log(n))
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

// O(n)
var minSubArrayLen2 = function(s, nums) {
  var left = 0;
  var right = 0;
  var tmpSum = 0;
  var minLength;

  // 循环停止的条件是左指针小于长度
  while (left < nums.length - 1) {
    if (tmpSum < s) {
      // 这里要注意边界的处理，当右指针移动到最后一个元素的时候结束
      if (right > nums.length - 1) {
        return minLength || 0;
      }
      // 这里tmpSum的计算也很巧妙，直接用累加的方式，节省计算量
      tmpSum = tmpSum + nums[right];
      right++;
    } else {
      var tmp = right - left;
      if (minLength) {
        if (tmp < minLength) {
          minLength = tmp;
        }
      } else {
        minLength = tmp;
      }
      tmpSum = tmpSum - nums[left];
      left++;
    }
  }
  if (!minLength) {
    return 0;
  }
  return minLength;
};

// 简洁版：
// int minSubArrayLen(int s, vector<int>& nums)
// {
//     int n = nums.size();
//     int ans = INT_MAX;
//     int left = 0;
//     int sum = 0;
//     for (int i = 0; i < n; i++) {
//         sum += nums[i];
//         while (sum >= s) {
//             ans = min(ans, i + 1 - left);
//             sum -= nums[left++];
//         }
//     }
//     return (ans != INT_MAX) ? ans : 0;
// }

module.exports = [minSubArrayLen2];
