// Title  : maximum-subarray
// Date   : 2019-05-23
/*****************************************
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*****************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1、暴力循环
// 2、动态规划 dp[i]=max(dp[i-1]+a[i],a[i])
// 3、分治
var maxSubArray = function(nums) {
    if (!nums.length) return null;
    var max = nums[0];
    for (var i = 0; i < nums.length; i++) {
        var sum = 0;
        for (var j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum > max) max = sum;
        }
    }
    return max;
};
// 动态规划？
var maxSubArray2 = function(nums) {
    if (!nums.length) return null;
    var res = nums[0];
    var cur = 0;
    for (let i = 0; i < nums.length; i++) {
        if (cur < 0) cur = nums[i];
        else cur += nums[i];
        if (cur > res) res = cur;
    }

    return res;
};

module.exports = [maxSubArray2];