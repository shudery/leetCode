/**
 * two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.
 * Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
 * @param  {number[]} nums   [description]
 * @param  {number} target [description]
 * @return {number[]}        [description]
 */

// console.log(twoSum1([2,7,11,15],9))
// function twoSum1(nums, target) {
//     let result = [];
//     nums.forEach((value, index) => {
//         let flag = target - value;
//         nums.forEach((val, i) => {
//             if (i !== index && val === flag) {
//                 result = [index, i].sort((a, b) => a - b);
//             }
//         })
//     })
//     return result;
// }

// function twoSum2(nums, target) {
//     var a = [];
//     for (var i = 0, len = nums.length; i < len; i++) {
//         var tmp = target - nums[i];
//         if (a[tmp] !== undefined)
//             return [a[tmp], i];
//         a[nums[i]] = i;
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var first = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      var last = nums[j];
      if (first + last === target) {
        return [i, j];
      }
    }
  }
};

// var twoSum = function(nums, target) {
//   var number=[];
//   var left = 0;
//   var right = nums.length - 1 ;
//   // 对撞的循环条件：左边指针小于右边指针
//   while(left < right ) {
//       if(nums[left] + nums[right] === target) {
//           return [left, right]
//       } else if(nums[left] + nums[right] > target ) {
//           right--;
//       } else {
//           left++;
//       }
//   }
// };

module.exports = [twoSum];
