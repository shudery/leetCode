// title  : 406-queue-reconstruction-by-height
// Author : Shudery
// Date   : 2017-01-11

/****************************************************************************
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 2^31.

Example
Input: x = 1, y = 4

Output: 2
 
Explanation:
	1   (0 0 0 1)
	4   (0 1 0 0)
	       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
  
 *****************************************************************************/

//两个数异或，计算结果中1的个数就是汉明距离
//join 解决末尾为0时多出的''空字符串 也可用filter处理
var hammingDistance = (x, y, t = (x ^ y).toString(2)) => [].filter.call(t, v => +v).length;

//better perform
var hammingDistance2 = (x, y, t = (x ^ y).toString(2)) => ''.split.call(t, '0').join('').length;

module.exports = [hammingDistance, hammingDistance2];
