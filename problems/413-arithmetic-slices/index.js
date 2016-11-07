/**413. Arithmetic Slices
A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.


Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
 * @param {number[]} A
 * @return {number}
 */
function numberOfArithmeticSlices2(A) {
    let count = 0;
    let len = A.length
    for (let i = 0; i < len; i++) {
        // let arr = [];
        // arr.push(A[i])
        // arr.push(A[i + 1])
        let flag = A[i + 1] - A[i];
        let pre = A[i + 1];
        //确定序列前两位之后，循环找出序列最长长度
        for (let k = i + 2; k < len; k++) {
            if (flag === A[k] - pre) {
                // arr.push(A[k])
                // console.log('i:' + i + ',j:' + i + 1 + ',k:' + k + ':' + arr)

                // 序列每增加一位，多一种序列的可能
                count++;
                // pre保持为序列的最后一位
                pre = A[k];
            } else {
                //一旦不连续递增就退出
                break;
            }
        }
    }
    return count;
};

function numberOfArithmeticSlices1(A) {

    let begin = true;
    let flag,
        arr = [],
        count = 0,
        num = 0;
    A.reduce((pre, cur, index) => {
        if (begin) {
            begin = false;
            num = 0;
            //记录序列差值
            flag = cur - pre;
            return cur;
        }
        if (cur - pre == flag) {
            num++;
        } else {
        	//存储序列
            arr.push(num)
            //开启查找下一序列
            begin = true;
        }
        return cur;
    });
    //num不为0时，末尾序列为计入
    num && arr.push(num);
    arr.forEach((val) => {
    	//n个number的序列可能得子片段：1+2+3+...+(n-2)
        for (let i = 1; i <= val; i++) {
            count += i;
        };
    })
    return count;
}

module.exports = [numberOfArithmeticSlices1, numberOfArithmeticSlices2];
