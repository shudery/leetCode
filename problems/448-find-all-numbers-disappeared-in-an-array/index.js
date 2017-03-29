// Title  : find-all-numbers-disappeared-in-an-array
// Date   : 2017-03-15
// Author : Daguo
/*****************************************
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*****************************************/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var ans = [];
    for (let i = 1; i < nums.length + 1; i++) {
        if (nums.indexOf(i) === -1)
            ans.push(i);
    }
    return ans;
};
//性能有问题


var findDisappearedNumbers2 = function(nums) {
    var ans = [];
    var strNums = ',' + nums + ',';

    for (let i = 1; i < nums.length + 1; i++) {
        let reg = new RegExp(',' + i + ',');
        if (!reg.test(strNums))
            ans.push(i);
    }
    return ans;
};
module.exports = [findDisappearedNumbers, findDisappearedNumbers2];
