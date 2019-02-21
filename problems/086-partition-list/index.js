// Title  : partition-list
// Date   : 2019-02-20
// Author : Daguo
/*****************************************
给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:

输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5
在
*****************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路：用两个节点分别开始两条链，一条放符合条件的，然后连起来
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let h1 = { next: null };
  let h2 = { next: null };
  let s1 = h1;
  let s2 = h2;
  while (head) {
    // 注意引用赋值的顺序
    if (head.val < x) {
      h1.next = head;
      head = head.next;
      h1 = h1.next;
      // 不置null会超出内存
      h1.next = null;
    } else {
      h2.next = head;
      head = head.next;
      h2 = h2.next;
      h2.next = null;
    }
  }
  h1.next = s2.next;
  return s1.next;
};
module.exports = [partition];
