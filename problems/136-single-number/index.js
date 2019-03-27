/**136. Single Number   
Given an array of integers, every element appears twice except for one. Find that single one.

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * @param {number[]} nums
 * @return {number}
 */

//Time Limit Exceeded
function singleNumber(nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    //nums剩下一个时直接返回
    if (nums.length === 1) {
      return nums[0];
    }
    //切除Nums中第一个数
    let val = nums.splice(0, 1)[0];
    //记录相同数字的位置
    let index = nums.indexOf(val);
    if (index !== -1) {
      nums.splice(index, 1);
      continue;
    } else {
      //不存在相同数
      return val;
    }
  }
}

function singleNumber2(nums) {
  let len = nums.length;
  let obj = {};
  let sum = 0;
  for (let i = 0; i < len; i++) {
    let val = nums.splice(0, 1)[0];
    if (obj[val]) {
      sum -= val;
    } else {
      obj[val] = true;
      sum += val;
    }
  }
  return sum;
}

module.exports = [singleNumber, singleNumber2];
