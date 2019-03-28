// Title  : binary-tree-preorder-traversal
// Date   : 2019-03-27
// Author : Daguo
/*****************************************
给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
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
var preorderTraversal = function(root) {
  var find = node =>
    node ? [node.val, ...find(node.left), ...find(node.right)] : [];
  return find(root);
};

// 迭代
var preorderTraversal2 = function(root) {
  if (!root) return [];
  let stack = [];
  let result = [];
  let cur = root;
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      // 前序
      result.push(cur.val);
      cur = cur.left;
    } else {
      cur = stack.pop();
      // 中序
      // result.push(cur.val);
      cur = cur.right;
    }
  }
  return result;
};
module.exports = [preorderTraversal, preorderTraversal2];
