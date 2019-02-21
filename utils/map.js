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

module.exports = { mapLinks };
