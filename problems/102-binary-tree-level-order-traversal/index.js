// Title  : binary-tree-level-order-traversal
// Date   : 2019-03-14
// Author : Daguo
/*****************************************
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
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
var levelOrder = function(root) {
  if (!root) return [];
  // 存放每一层的节点
  let stack = [root];
  let result = [];
  while (stack.length) {
    let arr = [];
    // 存放每一层的节点值
    let res = [];
    stack.forEach(v => {
      if (v.val || v.val === 0) res.push(v.val);
      if (v.left) arr.push(v.left);
      if (v.right) arr.push(v.right);
    });
    result.push(res);
    stack = arr;
  }
  return result;
};

module.exports = [levelOrder];
