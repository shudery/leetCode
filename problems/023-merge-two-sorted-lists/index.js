// Title  : merge-two-sorted-lists
// Date   : 2019-05-20
/*****************************************
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
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
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }
    let left = l1;
    let right = l2;
    let cur = {};
    let result = cur;
    while (left && right) {
        // 循环处理，对比指针当前指向节点
        if (left.val < right.val) {
            cur.val = left.val;
            left = left.next;
        } else {
            cur.val = right.val;
            right = right.next;
        }
        cur.next = {};
        cur = cur.next;
    }
    // 有一条链表指针到尾部，剩余节点直接接到末尾
    if (left) {
        cur.next = left.next;
        cur.val = left.val;
    }
    if (right) {
        // 不能直接赋值，不然会破坏cur的指向
        // cur = right;
        cur.next = right.next;
        cur.val = right.val;
    }
    return result;
};
module.exports = [mergeTwoLists];