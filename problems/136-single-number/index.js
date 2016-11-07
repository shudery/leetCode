/**136. Single Number   
Given an array of integers, every element appears twice except for one. Find that single one.

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
            nums.splice(index, 1)
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


module.exports = [singleNumber,singleNumber2];
