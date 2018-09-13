// Title  : add-two-numbers
// Date   : 2018-09-12
// Author : Daguo
/*****************************************
给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*****************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var arr = [];
  var i = 0;
  var flag = 0;
  while (l1.length || l2.length) {
    var a = l1.splice(l1.length - 1, 1)[0];
    var b = l2.splice(l2.length - 1, 1)[0];
    var value = a + b + flag;
    if (value / 10 >= 1) {
      arr[i] = value % 10;
      flag = 1;
    } else {
      arr[i] = value;
      flag = 0;
    }
    i++;
  }
  return arr;
};
// var addTwoNumbers = function(l1, l2) {
//   var flag = 0;
//   var arr = [];
//   while (l1 || l2) {
//     var v1 = l1 ? l1.val : 0;
//     var v2 = l2 ? l2.val : 0;
//     val = v1 + v2 + flag;
//     if (val / 10 >= 1) {
//       flag = 1;
//       arr.push(val % 10);
//     } else {
//       flag = 0;
//       arr.push(val);
//     }
//     l1 = l1 ? l1.next : null;
//     l2 = l2 ? l2.next : null;
//   }
//   if (flag) arr.push(flag);
//   return arr;
// };
module.exports = [addTwoNumbers];
