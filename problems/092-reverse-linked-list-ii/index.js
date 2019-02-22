// Title  : reverse-linked-list-ii
// Date   : 2019-02-21
// Author : Daguo
/*****************************************
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
*****************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let h = {};
  h.next = head;
  let cur = h;
  let pre = {};
  let front = {};
  let last = {};
  for (let i = 1; i <= m - 1; ++i) cur = cur.next;
  pre = cur;
  last = cur.next;
  for (let i = m; i <= n; ++i) {
    cur = pre.next;
    pre.next = cur.next;
    cur.next = front;
    front = cur;
  }
  cur = pre.next;
  pre.next = front;
  last.next = cur;
  return h.next;
};

module.exports = [reverseBetween];
