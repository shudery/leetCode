/**412. Fizz Buzz   QuestionEditorial Solution  My Submissions
Total Accepted: 13037
Total Submissions: 22621
Difficulty: Easy
Contributors: Admin
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and 
for the multiples of five output “Buzz”. For numbers which are multiples of both three and five
output “FizzBuzz”.
 
exmple:n = 15,
Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 * 
 * @param {number} n
 * @return {number[]}
 */
function main(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let val = '';
        if (i % 3 === 0) {
            val += 'Fizz';
        }
        if (i % 5 === 0) {
            val += 'Buzz'
        }
        if (!val) {
            val += i
        }
        arr.push(val);
    }
    return arr;
};


module.exports = main;
