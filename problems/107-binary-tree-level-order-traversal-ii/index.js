// Title  : binary-tree-level-order-traversal-ii
// Date   : 2019-03-15
// Author : Daguo
/*****************************************
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let result = [];
  const find = (root, depth, res) => {
    if (!root) return;
    if (depth >= res.length) res.unshift([]);
    // 不能直接用res[0]
    res[res.length - 1 - depth].push(root.val);

    find(root.left, depth + 1, res);
    find(root.right, depth + 1, res);
  };
  find(root, 0, result);
  return result;
};

module.exports = [levelOrderBottom];
