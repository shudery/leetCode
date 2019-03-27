// Title  : binary-tree-postorder-traversal
// Date   : 2019-03-27
// Author : Daguo
/*****************************************
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
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
var postorderTraversal = function(root) {
  var find = node =>
    node ? [...find(node.left), ...find(node.right), node.val] : [];
  return find(root);
};

// 迭代
var postorderTraversal2 = function(root) {
  if (!root) return [];
  let stack = [];
  let result = [];
  let cur = root;
  while (cur || stack.length) {
    // if (cur) {
    //   stack.push(cur);
    //   // 前序
    //   // result.push(cur.val);
    //   cur = cur.left;
    // } else {
    //   cur = stack.pop();
    //   // 中序
    //   // result.push(cur.val);
    //   cur = cur.right;
    // }
    if (cur) {
      stack.push(cur);
      result.push(cur.val);
      // 需先遍历右子树
      cur = cur.right;
    } else {
      cur = stack.pop();
      cur = cur.left;
    }
  }
  // 相较前序和中序，后序使用 前-右-左 然后数组取反
  return result.reverse();
};

module.exports = [postorderTraversal, postorderTraversal2];
