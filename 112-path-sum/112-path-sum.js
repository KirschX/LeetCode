/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    let result;
    
    function trav(node, sum) {
        if (!node) return;
 
        sum = sum + node.val;
        if(!node.left && !node.right && sum === targetSum) result = true;

        trav(node.left, sum)
        trav(node.right, sum)
    }
    
    trav(root, 0)
    
    return  result || false
};

