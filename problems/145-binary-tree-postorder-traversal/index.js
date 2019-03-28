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
  // 空树直接返回
  if (!root) return [];
  // 用一个栈来保存迭代的结点
  let stack = [];
  // 保存排序结果
  let result = [];
  // 从根节点开始迭代
  let cur = root;
  // 节点存在 或者 栈中还有未处理节点
  while (cur || stack.length) {
    if (cur) {
      // 记录该节点
      stack.push(cur);
      // 保存节点值
      result.push(cur.val);
      // 需先遍历右子树，再遍历左子树
      cur = cur.right;
    } else {
      // 弹出栈顶节点（父节点）
      cur = stack.pop();
      // 右子树遍历完毕，开始遍历左子树
      cur = cur.left;
    }
  }
  // 后序排列：左-右-父。当前数组为 父-右-左 的结点保存顺序，所以最后数组取反
  return result.reverse();
};

module.exports = [postorderTraversal, postorderTraversal2];
