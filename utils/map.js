/**
 * 数组 —> 链表 数据结构转换
 * [1,"2",null] => {val:1;next:{val:"2":next:{val:null,next:null}}}
 * @param {any[]} arr
 */
function mapLinks(arr) {
  let result = {};
  arr.reduce((pre, cur, i) => {
    let obj = { val: arr[i], next: null };
    pre.next = obj;
    return obj;
  }, result);
  return result.next;
}

/**
 * 数组 -> 二叉树
 * [1,"2",null,null,3,4,5]
 *
 * ->
 * [
 *  [1]
 *  ["2",null]
 *  [null,3,null,null]
 *  [null,null,4,5,null,null,null,null]
 * ]
 *      1
 *    2
 *      3
 *     4 5
 */
function mapTree(array) {
  const result = [];
  let arr = array;
  let size = 1;
  while (arr.length) {
    let res = [];
    while (size--) {
      res.push(arr.shift());
    }
  }
}
module.exports = { mapLinks };
