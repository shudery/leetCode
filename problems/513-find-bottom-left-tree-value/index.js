// Title  : find-bottom-left-tree-value
// Date   : 2017-03-13
// Author : Daguo
/*****************************************
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  var ans = {
    val: root.val,
    depth: 0
  };

  var find = function(root, depth) {
    //叶子节点，深度必须比上一个存值大
    if (!root.right && !root.left && depth > ans.depth) {
      ans = {
        val: root.val,
        depth
      };
    } else {
      //按顺序递归，左子树若有值，ans的depth会增加而不记录右子树下一层的值
      root.left && find(root.left, depth + 1);
      root.right && find(root.right, depth + 1);
    }
  };

  find(root, 1);
  return ans.val;
};

module.exports = [null];
