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
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    let result = [];

    
    function traverse(node, d) {

        if(!node) return;
        
        result[d] = node.val
        
        traverse(node.left, d+1)
        traverse(node.right, d+1)

    }
    
    traverse(root, 0)
    return result
};