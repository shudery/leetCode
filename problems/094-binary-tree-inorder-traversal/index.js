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
var inorderTraversal = function(root) {
  let arr = [];
  let left = root.left;
  while (left) {
    left = left.left;
  }
  return arr;
};
// var inorderTraversal = function(root) {
//   let arr = [];
//   var find = (node) => {
//     if (!node) return;
//     if (node.left) find(node.left);
//     arr.push(node.val);
//     if (node.right) find(node.right);
//   };
//   find(root);
//   return arr;
// };
var inorderTraversal = function(root) {
  var find = node =>
    node ? [...find(node.left), node.val, ...find(node.right)] : [];
  return find(root);
};

module.exports = [null];
