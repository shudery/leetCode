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
    let len = people.length;
    let objArr = [];
    let arr = [];
    let obj = {};
    for (let j = 0; j < len; j++) {
        for (let i = 0; i < len - arr.length; i++) {
            if (people[i][1] === j) {
                let count = 0;
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][0] >= people[i][0]) {
                        count++;
                    }
                    if (count >= people[i][1]) {
                        arr.splice(k, 0, people[i]);
                        break;
                    }
                }
                if (count < people[i][0]) {
                    people[i].push(true);
                }
            }
        }
    }

    return arr;

};

module.exports = reconstructQueue;
