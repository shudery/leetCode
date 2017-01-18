/**406. Queue Reconstruction by Height   QuestionEditorial Solution  My Submissions
Total Accepted: 8141
Total Submissions: 15111
Difficulty: Medium
Contributors: Admin
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 * 
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    //从大到小排序，相等的比较第二个参数
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    let arr = [];
    people.forEach((item) => {
        arr.splice(item[1], 0, item);
    });

    return arr;
};

module.exports = reconstructQueue;
