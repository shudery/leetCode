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
// 循环，队列
var levelOrder = function(root) {
  if (root === null) return [];
  // 存放每一层的节点
  let queue = [root];
  let result = [];
  while (queue.length) {
    let cur = [];
    // 存放每一层的节点值
    let values = [];
    queue.forEach(v => {
      if (v.val !== null) values.push(v.val);
      if (v.left) cur.push(v.left);
      if (v.right) cur.push(v.right);
    });
    result.push(values);
    queue = cur;
  }
  return result;
};

// 递归，左树一定比右树先存储，保证了顺序
var levelOrder2 = function(root) {
  let result = [];
  const find = (root, depth, res) => {
    if (!root) return;
    if (depth >= res.length) res.push([]);
    res[depth].push(root.val);
    find(root.left, depth + 1, res);
    find(root.right, depth + 1, res);
  };
  find(root, 0, result);
  return result;
};

module.exports = [levelOrder, levelOrder2];
