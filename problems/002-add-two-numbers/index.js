/**
 * two num
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.
 * @param  {number[]} nums   [description]
 * @param  {number} target [description]
 * @return {number[]}        [description]
 */
function twoNum(nums, target) {
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

module.exports = twoNum;