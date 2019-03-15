// Title  : binary-tree-zigzag-level-order-traversal/
// Date   : 2019-03-15
// Author : Daguo
/*****************************************
给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层次遍历如下：

[
  [3],
  [20,9],
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
 * 思路同102 加上层级判断
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
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
      if (v.left)
        result.length % 2 === 1 ? cur.push(v.left) : cur.unshift(v.left);
      if (v.right)
        result.length % 2 === 1 ? cur.push(v.right) : cur.unshift(v.right);
    });
    result.push(values);
    queue = cur;
  }
  return result;
};

// 递归，左树一定比右树先存储，保证了顺序
var zigzagLevelOrder2 = function(root) {
  let result = [];
  const find = (root, depth, res) => {
    if (!root) return;
    if (depth >= res.length) res.push([]);
    depth % 2 === 0 ? res[depth].push(root.val) : res[depth].unshift(root.val);
    find(root.left, depth + 1, res);
    find(root.right, depth + 1, res);
  };
  find(root, 0, result);
  return result;
};
module.exports = [zigzagLevelOrder, zigzagLevelOrder2];
