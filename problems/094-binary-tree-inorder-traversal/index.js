// Title  : binary-tree-inorder-traversal
// Date   : 2019-02-26
// Author : Daguo
/*****************************************
给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
*****************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 迭代
var inorderTraversal = function(root) {
  if (!root) return [];
  let stack = [];
  let result = [];
  let cur = root;
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      result.push(cur.val);
      cur = cur.right;
    }
  }
  return result;
};
// 递归
var inorderTraversal2 = function(root) {
  var find = node =>
    node ? [...find(node.left), node.val, ...find(node.right)] : [];
  return find(root);
};

module.exports = [inorderTraversal, inorderTraversal2];
