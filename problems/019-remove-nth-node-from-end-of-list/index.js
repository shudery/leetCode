// Title  : remove-nth-node-from-end-of-list
// Date   : 2019-02-13
// Author : Daguo
/*****************************************
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。
*****************************************/

// 思路： 用两个指针记录位置，间距为n，保持间距移动，第二个到达尾部时，第一个指针就是需要改变next指针的地方

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let p1 = head;
  let p2 = head;
  while (n--) {
    p2 = p2.next;
  }
  // 删除第一个节点的情况
  if (!p2) {
    return head.next;
  }
  while (1) {
    // 链表结尾
    if (!p2.next) {
      // 重新链接
      p1.next = p1.next.next;
      return head;
    } else {
      // 双指针继续扫描
      p1 = p1.next;
      p2 = p2.next;
    }
  }
};
module.exports = [null];
