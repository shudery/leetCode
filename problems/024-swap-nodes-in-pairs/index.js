// Title  : swap-nodes-in-pairs
// Date   : 2019-02-13
// Author : Daguo
/*****************************************
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
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
 * @return {ListNode}
 */
// 设置一个虚拟节点p0，操作p0~p3，步进为2
var swapPairs = function(head) {
  // [];
  if (!head) return null;
  // [1];
  if (!head.next) return head;
  // 用来保存原链表
  let resume;
  // 新增一个虚拟头结点
  let p0 = { next: head };
  let p1 = head;
  let p2 = head.next;
  let p3 = head.next.next;
  while (1) {
    p0.next = p2;
    p1.next = p3;
    p2.next = p1;
    // [0,1,2,3]
    if (p0.val === void 0) resume = p0.next;
    // 往后移动两位，不够两位了就返回虚拟头结点的next指针，即原链表
    if (p3 && p3.next) {
      p0 = p1;
      p1 = p3;
      p2 = p3.next;
      p3 = p3.next.next;
    } else {
      return resume;
    }
  }
};

module.exports = [];
