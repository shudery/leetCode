// Title  : find-all-duplicates-in-an-array
// Date   : 2017-03-17
// Author : Daguo
/*****************************************
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

*****************************************/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var arr = [];
    var ans = [];
    for(let i=0; i<nums.length; i++){
        if(arr.indexOf(nums[i]) === -1)
        	arr.push(nums[i]);
        else
        	ans.push(nums[i]);
    }
    return ans;
};

//同448 性能问题
//
var findDuplicates2 = function(arr) {
	// let arr = nums.sort();
    let obj = {};
    let ans = [];
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]])
            ans.push(arr[i]);
        else
            obj[arr[i]] = true;
    }
    return ans;
};

module.exports = [findDuplicates,findDuplicates2];
