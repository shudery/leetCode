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
 * -> 先按层级转为二维数组
 * [
 *  [1]
 *  ["2",null]
 *  [null,3,null,null]
 *  [null,null,4,5,null,null,null,null]
 * ]
 * -> 再转为树结构
 *      1
 *   "2"
 *      3
 *     4 5
 */
function mapTree(array) {
  // 一维数组按层级转为二维数组
  let arr = [array.shift()];
  const result = [arr.map(v => (v === null ? null : { val: v }))];
  while (array.length) {
    let nextArr = [];
    arr.forEach(v => {
      if (v !== null) nextArr = [...nextArr, ...array.splice(0, 2)];
      else nextArr = [...nextArr, null, null];
    });
    arr = nextArr;
    result.push(arr.map(v => (v === null ? null : { val: v })));
  }
  // 转换二维数组为树结构
  let d;
  const root = result[0][0];
  // 取当前层数组，与下一层级连接起来
  while ((d = result.shift())) {
    let i = 0;
    d.forEach(v => {
      // null结点没有子节点，但数组中仍存有占位符，i需要累加2
      if (v === null) i += 2;
      else {
        // 到达叶子节点，左右节点设置为null
        v.left = result[0] ? result[0][i++] : null;
        v.right = result[0] ? result[0][i++] : null;
      }
    });
  }
  return root;
}
module.exports = { mapLinks, mapTree };
