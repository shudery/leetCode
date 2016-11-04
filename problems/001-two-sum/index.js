/**
 * two num
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.
 * @param  {number[]} nums   [description]
 * @param  {number} target [description]
 * @return {number[]}        [description]
 */
function twoSum1(nums, target) {
    let result = [];
    nums.forEach((value, index) => {
        let flag = target - value;
        nums.forEach((val, i) => {
            if (i !== index && val === flag) {
                result = [index, i].sort((a, b) => a - b);
            }
        })
    })
    return result;
}
function twoSum2(nums, target) {
  var a = [];
  for (var i = 0, len = nums.length; i < len; i++) {
    var tmp = target - nums[i];
    if (a[tmp] !== undefined) return [a[tmp], i];
    a[nums[i]] = i;
  }
};

module.exports = [twoSum1,twoSum2];