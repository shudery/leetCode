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

function maxDepth(root) {
    //排除[] --> null空树
    if (!root) {
        return 0
    }
    let depth = 0;
    //Math.max([]) --> -Infinity错误
    let arr = [0];

    function getDepth(root, depth) {
        //层级
        depth++;
        if (root.left) {
            getDepth(root.left, depth)
        }
        if (root.right) {
            getDepth(root.right, depth)
        }
        if (!root.left && !root.right) {
            //保存每个叶子所在层级
            arr.push(depth);
        }

    }
    getDepth(root, depth);
    return Math.max(...arr);
};


// 数组二叉树算法，不转换为对象
function getMaxDepth(root) {
    let depth = 0;
    let count = 0;
    while (root.length) {
        let val = Math.pow(2, count)
        count = 0;
        for (let j = 0; j < val; j++) {
            if (root[j] !== null) {
                count++;
            }
        }
        depth++;
        root.splice(0, val);
    };
    return depth;
};
module.exports = getMaxDepth;